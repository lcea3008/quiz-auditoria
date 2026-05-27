// quiz-engine.js — motor principal del quiz


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

  // Desarrollo / Caso: evaluación local por palabras clave
  const text = (userAns || '').trim();
  if (!text) { showAlert('Escribe tu respuesta antes de evaluar.'); return; }

  const sim = q.reference ? similarity(text, q.reference) : 0;
  const score = sim >= 60 ? 10 : sim >= 40 ? 8 : sim >= 25 ? 6 : sim >= 15 ? 4 : 2;

  const feedback = sim >= 60
    ? `✓ Excelente. Tu respuesta cubre los conceptos clave del principio "${q.principle || q.topic}".`
    : sim >= 40
      ? `Parcialmente correcto. Revisa mejor el principio "${q.principle || q.topic}". Respuesta esperada: ${q.reference}`
      : sim >= 25
        ? `Incompleto. Faltan conceptos clave sobre "${q.principle || q.topic}". Respuesta esperada: ${q.reference}`
        : `Muy incompleto. Respuesta esperada: ${q.reference}`;

  state.evaluated[state.current] = { score, similarity: sim, feedback };
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

  /// Eval result
  let evalHtml = '';
  if (ev) {
    const cls = ev.score >= 8 ? 'eval-ok' : ev.score >= 5 ? 'eval-warn' : 'eval-err';
    const icon = ev.score >= 8 ? '✓' : ev.score >= 5 ? '△' : '✗';
    const simText = ev.similarity !== null && ev.similarity !== undefined
      ? `<span class="eval-pct">${ev.similarity}% de similitud</span>` : '';
    // Respuesta modelo (mejora 3)
    const refHtml = q.reference ? `
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:0.72rem;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px">📖 Respuesta modelo</div>
        <div style="font-size:0.85rem;color:var(--text2);line-height:1.65">${q.reference}</div>
      </div>` : '';
    evalHtml = `
      <div class="eval-box ${cls}">
        <div class="eval-header">
          <span class="eval-score-badge">${icon} ${ev.score}/10</span>
          ${simText}
        </div>
        <div class="eval-text">${ev.feedback}</div>
        ${refHtml}
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
        <button class="btn" onclick="restartQuiz()">↺ Reiniciar completo</button>
        <button class="btn btn-primary" onclick="repasarFallidas()">🔁 Repasar preguntas fallidas</button>
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

// REPASAR PREGUNTAS FALLIDAS (mejora 5)
function repasarFallidas() {
  const fallidas = state.questions
    .map((q, i) => ({ q, i, ev: state.evaluated[i] }))
    .filter(({ ev }) => ev && ev.score < 6);

  if (!fallidas.length) {
    showAlert('¡No hay preguntas fallidas! Obtuviste 6 o más en todas.');
    return;
  }

  // Mostrar resumen de errores antes de repasar
  const container = document.getElementById('quiz-container');
  document.getElementById('dot-nav').innerHTML = '';
  document.getElementById('prog-fill').style.width = '0%';

  let resumenHtml = fallidas.map(({ q, i, ev }) => {
    const ref = q.reference || q.feedback || 'Sin respuesta de referencia disponible.';
    return `
      <div class="q-card" style="margin-bottom:1rem">
        <div class="q-meta">
          <span class="q-num">P${i + 1}</span>
          <span class="tag tag-prin">${q.principle || q.topic || ''}</span>
          <span style="font-size:0.75rem;color:var(--err);margin-left:auto">${ev.score}/10</span>
        </div>
        <div class="q-text" style="font-size:0.9rem">${q.question}</div>
        <div style="margin-top:8px;padding:10px 14px;background:rgba(78,205,196,0.06);border:1px solid rgba(78,205,196,0.2);border-radius:var(--radius-sm)">
          <div style="font-size:0.7rem;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px">📖 Respuesta correcta</div>
          <div style="font-size:0.85rem;color:var(--text2);line-height:1.65">${ref}</div>
        </div>
        ${ev.feedback ? `<div style="margin-top:6px;font-size:0.8rem;color:var(--warn)">💬 ${ev.feedback}</div>` : ''}
      </div>`;
  }).join('');

  container.innerHTML = `
    <div style="margin-bottom:1.5rem">
      <div style="font-family:'Syne',sans-serif;font-size:1.3rem;font-weight:800;margin-bottom:.3rem">
        Resumen de preguntas fallidas
      </div>
      <div style="font-size:0.85rem;color:var(--text2);margin-bottom:1.5rem">
        ${fallidas.length} pregunta${fallidas.length > 1 ? 's' : ''} con puntaje menor a 6 — léelas bien antes de volver a practicar.
      </div>
      ${resumenHtml}
    </div>
    <div class="nav-row" style="justify-content:center">
      <button class="btn btn-primary" onclick="iniciarRepaso()">🔁 Practicar estas ${fallidas.length} preguntas</button>
      <button class="btn" onclick="restartQuiz()">↺ Reiniciar quiz completo</button>
      <a href="../index.html" class="btn btn-next">← Inicio</a>
    </div>`;

  // Guardar preguntas fallidas para practicarlas
  state._fallidas = fallidas.map(({ q }) => q);
}

function iniciarRepaso() {
  initQuiz(state._fallidas, state.weekId);
}

// FLASHCARDS (mejora 2)
function mostrarFlashcards() {
  const container = document.getElementById('quiz-container');
  document.getElementById('dot-nav').innerHTML = '';

  let fcIndex = state.questions
    .filter((q, i) => i <= state.current && q.reference)
    .length - 1;
  if (fcIndex < 0) fcIndex = 0;
  const cards = state.questions
    .filter(q => q.reference)
    .map(q => ({ front: q.question, back: q.reference, principle: q.principle || q.topic || '' }));

  if (!cards.length) { showAlert('No hay flashcards disponibles.'); return; }

  function renderFC() {
    const c = cards[fcIndex];
    container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem">
        <span style="font-size:0.8rem;color:var(--text3)">Flashcard ${fcIndex + 1} de ${cards.length}</span>
        <button onclick="cerrarFlashcards()" style="background:none;border:1px solid var(--border2);color:var(--text3);border-radius:50%;width:28px;height:28px;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;" title="Cerrar flashcards">✕</button>
      </div>
      <div class="q-card" id="fc-card" style="cursor:pointer;text-align:center;min-height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem" onclick="flipCard()">
        <span class="tag tag-prin">${c.principle}</span>
        <div id="fc-front" style="font-size:1rem;line-height:1.6;color:var(--text)">${c.front}</div>
        <div id="fc-back" style="display:none;font-size:0.88rem;line-height:1.65;color:var(--accent2);border-top:1px solid rgba(255,255,255,0.08);padding-top:1rem;width:100%">${c.back}</div>
        <div id="fc-hint" style="font-size:0.75rem;color:var(--text3)">👆 Toca para ver la respuesta</div>
      </div>
      <div class="nav-row" style="margin-top:1rem">
        ${fcIndex > 0 ? `<button class="btn" onclick="fcNav(-1)">← Anterior</button>` : ''}
        <button class="btn btn-primary" onclick="fcNav(1)">${fcIndex < cards.length - 1 ? 'Siguiente →' : 'Ir al quiz →'}</button>
      </div>`;

    window._fcCards = cards;
    window._fcIndex = fcIndex;
  }

  window.flipCard = function () {
    const back = document.getElementById('fc-back');
    const hint = document.getElementById('fc-hint');
    if (back.style.display === 'none') {
      back.style.display = 'block';
      hint.textContent = '👆 Toca para ocultar';
    } else {
      back.style.display = 'none';
      hint.textContent = '👆 Toca para ver la respuesta';
    }
  };

  window.fcNav = function (dir) {
    fcIndex += dir;
    if (fcIndex >= cards.length) {
      renderQuestion();
      updateDotNav();
      return;
    }
    if (fcIndex < 0) fcIndex = 0;
    renderFC();
  };

  renderFC();
  window.cerrarFlashcards = function () {
    renderQuestion();
    updateDotNav();
  };

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
