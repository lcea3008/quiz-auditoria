// quiz-engine.js — motor principal del quiz

const API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-sonnet-4-20250514';

// Estado global
let state = {
  questions: [],
  current: 0,
  answers: [],
  evaluated: [],
  loading: false,
  weekId: ''
};

// Inicializar quiz con array de preguntas
function initQuiz(questions, weekId) {
  state.questions = questions;
  state.current = 0;
  state.answers = new Array(questions.length).fill(null);
  state.evaluated = new Array(questions.length).fill(null);
  state.loading = false;
  state.weekId = weekId;
  renderQuestion();
  updateDotNav();
}

// Calcular similitud simple entre dos strings (Jaccard sobre palabras)
function similarity(a, b) {
  if (!a || !b) return 0;
  const normalize = s => s.toLowerCase().replace(/[^a-záéíóúñü\s]/g, '').split(/\s+/).filter(w => w.length > 3);
  const setA = new Set(normalize(a));
  const setB = new Set(normalize(b));
  if (!setA.size || !setB.size) return 0;
  const inter = [...setA].filter(w => setB.has(w)).length;
  const union = new Set([...setA, ...setB]).size;
  return Math.round((inter / union) * 100);
}

// Evaluar respuesta
async function evalAnswer() {
  if (state.loading) return;
  const q = state.questions[state.current];
  const userAns = state.answers[state.current];

  // V/F: corrección directa
  if (q.type === 'vf') {
    if (userAns === null) { showAlert('Selecciona Verdadero o Falso.'); return; }
    const correct = userAns === q.answer;
    state.evaluated[state.current] = {
      score: correct ? 10 : 0,
      similarity: correct ? 100 : 0,
      feedback: q.feedback  // <-- siempre muestra el feedback, correcto o no
    };
    renderQuestion();
    updateDotNav();
    return;
  }

  // Desarrollo / Caso: evaluar con IA
  const text = (userAns || '').trim();
  if (!text) { showAlert('Escribe tu respuesta antes de evaluar.'); return; }

  state.loading = true;
  renderQuestion();

  // Similitud con respuesta de referencia (si existe)
  let simScore = q.reference ? similarity(text, q.reference) : null;

  const systemPrompt = `Eres evaluador del curso "Deontología del Auditor Informático" de la UTP, Sesión ${state.weekId}. Evalúa la respuesta del estudiante de forma estricta pero constructiva. Responde SOLO con JSON sin markdown, exactamente así: {"score": número 0-10, "similarity": número 0-100 que indica qué tan completa y cercana está la respuesta al concepto correcto, "feedback": "2-3 oraciones en español: qué acertó, qué faltó mencionar, qué concepto clave debió incluir"}`;

  const userMsg = `Principio/Tema: ${q.principle || q.topic || ''}\nPregunta: ${q.question}\n${q.reference ? 'Respuesta de referencia: ' + q.reference + '\n' : ''}Respuesta del estudiante: ${text}`;

  try {
    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '__ANTHROPIC_KEY__',
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-ipc': 'true'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMsg }]
      })
    });
    const data = await resp.json();
    const raw = data.content.map(b => b.text || '').join('');
    const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim());
    state.evaluated[state.current] = {
      score: parsed.score,
      similarity: simScore !== null ? Math.round((simScore + parsed.similarity) / 2) : parsed.similarity,
      feedback: parsed.feedback
    };
  } catch (e) {
    state.evaluated[state.current] = { score: 0, similarity: 0, feedback: 'Error al evaluar. Intenta nuevamente.' };
  }

  state.loading = false;
  renderQuestion();
  updateDotNav();
}

// Renderizar pregunta actual
function renderQuestion() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  if (state.current >= state.questions.length) {
    renderScore();
    return;
  }

  const q = state.questions[state.current];
  const ev = state.evaluated[state.current];
  const total = state.questions.length;

  // Progress
  const pct = (state.current / total * 100).toFixed(1);
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-cur').textContent = state.current + 1;
  document.getElementById('prog-tot').textContent = total;
  document.getElementById('prog-prin').textContent = q.principle || q.topic || '';

  // Tipo badge
  const tagClass = q.type === 'vf' ? 'tag-vf' : q.type === 'caso' ? 'tag-caso' : 'tag-dev';
  const tagText = q.type === 'vf' ? 'V / F' : q.type === 'caso' ? 'Caso práctico' : 'Desarrollo';

  // Input
  let inputHtml = '';
  if (q.type === 'vf') {
    const sv = state.answers[state.current] === true ? 'sel-v' : '';
    const sf = state.answers[state.current] === false ? 'sel-f' : '';
    inputHtml = `
      <div class="vf-group">
        <button class="vf-btn ${sv}" onclick="selectVF(true)">✓ Verdadero</button>
        <button class="vf-btn ${sf}" onclick="selectVF(false)">✗ Falso</button>
      </div>`;
  } else {
    inputHtml = `<textarea class="ans-textarea" id="ta-main"
      placeholder="Escribe tu respuesta aquí..."
      oninput="state.answers[state.current]=this.value">${state.answers[state.current] || ''}</textarea>`;
  }

  // Eval result
  let evalHtml = '';
  if (ev) {
    const cls = ev.score >= 8 ? 'eval-ok' : ev.score >= 5 ? 'eval-warn' : 'eval-err';
    const icon = ev.score >= 8 ? '✓' : ev.score >= 5 ? '△' : '✗';
    const simText = ev.similarity !== null && ev.similarity !== undefined
      ? `<span class="eval-pct">${ev.similarity}% de similitud</span>` : '';
    evalHtml = `
      <div class="eval-box ${cls}">
        <div class="eval-header">
          <span class="eval-score-badge">${icon} ${ev.score}/10</span>
          ${simText}
        </div>
        <div class="eval-text">${ev.feedback}</div>
      </div>`;
  }

  // Botones nav
  const evalLabel = state.loading
    ? `<span class="spinner"></span> Evaluando...`
    : 'Evaluar respuesta';
  const showNext = ev !== null;

  container.innerHTML = `
    <div class="q-card">
      <div class="q-meta">
        <span class="q-num">P${state.current + 1} / ${total}</span>
        <span class="tag ${tagClass}">${tagText}</span>
        <span class="tag tag-prin">${q.principle || q.topic || ''}</span>
      </div>
      <div class="q-text">${q.question}</div>
      ${inputHtml}
      ${evalHtml}
    </div>
    <div class="nav-row">
      ${state.current > 0 ? `<button class="btn" onclick="navigate(-1)">← Anterior</button>` : ''}
      <button class="btn btn-primary" onclick="evalAnswer()" ${state.loading ? 'disabled' : ''}>${evalLabel}</button>
      ${showNext ? `<button class="btn btn-next" onclick="navigate(1)">${state.current < total - 1 ? 'Siguiente →' : 'Ver resultados →'}</button>` : ''}
    </div>`;
}

function selectVF(val) {
  state.answers[state.current] = val;
  renderQuestion();
}

function navigate(dir) {
  state.current += dir;
  if (state.current >= state.questions.length) { renderScore(); return; }
  if (state.current < 0) state.current = 0;
  renderQuestion();
  updateDotNav();
}

function updateDotNav() {
  const nav = document.getElementById('dot-nav');
  if (!nav) return;
  nav.innerHTML = state.questions.map((q, i) => {
    const ev = state.evaluated[i];
    let cls = 'dot';
    if (i === state.current) cls += ' dot-cur';
    else if (ev) {
      if (ev.score >= 8) cls += ' dot-done';
      else if (ev.score >= 5) cls += ' dot-partial';
      else cls += ' dot-wrong';
    }
    return `<div class="${cls}" title="P${i + 1}: ${q.principle || q.topic || ''}" onclick="jumpTo(${i})"></div>`;
  }).join('');
}

function jumpTo(i) {
  state.current = i;
  renderQuestion();
  updateDotNav();
}

// SCORE PAGE
function renderScore() {
  const container = document.getElementById('quiz-container');
  const total = state.evaluated.reduce((a, e) => a + (e ? e.score : 0), 0);
  const max = state.questions.length * 10;
  const pct = Math.round(total / max * 100);
  const avgSim = (() => {
    const vals = state.evaluated.filter(e => e && e.similarity != null).map(e => e.similarity);
    return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
  })();

  const msg = pct >= 80 ? '¡Excelente dominio del tema!' : pct >= 60 ? 'Buen avance, sigue repasando.' : 'Necesitas repasar la sesión.';
  const msgColor = pct >= 80 ? 'var(--ok)' : pct >= 60 ? 'var(--warn)' : 'var(--err)';

  // SVG ring
  const r = 56, circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const ringColor = pct >= 80 ? '#4ecdc4' : pct >= 60 ? '#f7c76f' : '#ff6b6b';

  let rows = state.questions.map((q, i) => {
    const ev = state.evaluated[i];
    const s = ev ? ev.score : '-';
    const sim = ev && ev.similarity != null ? ev.similarity + '%' : '—';
    const cls = !ev ? '' : ev.score >= 8 ? 's-ok' : ev.score >= 5 ? 's-warn' : 's-err';
    return `<tr>
      <td>P${i + 1}</td>
      <td>${q.principle || q.topic || ''}</td>
      <td>${q.type === 'vf' ? 'V/F' : q.type === 'caso' ? 'Caso' : 'Desarrollo'}</td>
      <td>${sim}</td>
      <td class="${cls}">${s}/10</td>
    </tr>`;
  }).join('');

  // Update progress bar to 100%
  document.getElementById('prog-fill').style.width = '100%';
  document.getElementById('dot-nav').innerHTML = '';

  container.innerHTML = `
    <div class="score-page">
      <div class="score-ring-wrap">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--surface2)" stroke-width="10"/>
          <circle cx="70" cy="70" r="${r}" fill="none" stroke="${ringColor}" stroke-width="10"
            stroke-dasharray="${dash} ${circ}" stroke-linecap="round"/>
        </svg>
        <div class="score-center">
          <div class="score-big">${pct}%</div>
          <div class="score-max">${total}/${max} pts</div>
        </div>
      </div>
      <div class="score-msg" style="color:${msgColor}">${msg}</div>
      ${avgSim !== null ? `<div class="score-sub2">Similitud promedio con respuestas correctas: <strong>${avgSim}%</strong></div>` : '<div class="score-sub2"> </div>'}

      <div class="score-table-wrap">
        <table class="score-table">
          <thead><tr>
            <th>#</th><th>Principio / Tema</th><th>Tipo</th><th>Similitud</th><th>Puntaje</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>

      <div class="nav-row" style="justify-content:center">
        <button class="btn" onclick="restartQuiz()">↺ Reiniciar quiz</button>
        <a href="../index.html" class="btn btn-next">← Volver al inicio</a>
      </div>
    </div>`;
}

function restartQuiz() {
  state.current = 0;
  state.answers = new Array(state.questions.length).fill(null);
  state.evaluated = new Array(state.questions.length).fill(null);
  state.loading = false;
  renderQuestion();
  updateDotNav();
}

function showAlert(msg) {
  // simple non-blocking alert visual
  let el = document.getElementById('quiz-alert');
  if (!el) {
    el = document.createElement('div');
    el.id = 'quiz-alert';
    el.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:var(--surface2);border:1px solid var(--border2);color:var(--warn);padding:10px 20px;border-radius:var(--radius-sm);font-size:.85rem;z-index:999;';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 2500);
}
