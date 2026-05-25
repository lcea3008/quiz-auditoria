# Quiz — Deontología del Auditor Informático

Quiz interactivo para el curso **Deontología del Auditor Informático** de la UTP.  
Evaluación con IA (Claude API) + porcentaje de similitud por respuesta.

## Estructura del proyecto

```
quiz-auditoria/
├── index.html                  ← Página principal (selector de semanas)
├── css/
│   └── styles.css              ← Estilos globales
├── js/
│   └── quiz-engine.js          ← Motor del quiz + llamadas a la API
└── semanas/
    ├── semana5.html            ← Página del quiz Semana 5
    ├── semana5-data.js         ← Preguntas y respuestas de referencia Semana 5
    └── (semanaX.html/js ...)   ← Agregar más semanas aquí
```

## Cómo subir a GitHub Pages

1. Crea un repositorio en GitHub (ej. `quiz-auditoria`)
2. Sube todos los archivos tal como están
3. Ve a **Settings → Pages → Source: main branch / root**
4. Tu quiz estará en: `https://TU_USUARIO.github.io/quiz-auditoria/`

## Cómo agregar una nueva semana

1. Crea `semanas/semanaX-data.js` con el mismo formato que `semana5-data.js`
2. Crea `semanas/semanaX.html` copiando `semana5.html` y cambiando el `<script src>` y títulos
3. Agrega la card en `index.html` y quita la clase `locked`

## Formato de preguntas

```js
{
  type: 'vf' | 'dev' | 'caso',
  principle: 'Nombre del principio',
  question: 'Texto de la pregunta',
  answer: true | false | null,      // Solo para V/F
  feedback: 'Retroalimentación',    // Solo para V/F
  reference: 'Respuesta de referencia para calcular similitud' // Para dev/caso
}
```

## Tecnologías

- HTML + CSS + JS vanilla (sin frameworks)
- Google Fonts (Syne + DM Sans)
- Claude API (`claude-sonnet-4-20250514`) para evaluación de respuestas abiertas
