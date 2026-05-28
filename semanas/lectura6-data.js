// lectura6-data.js — Preguntas Lectura Semana 6: GTI y Auditoría Continua

const LECTURA6_INFO = {
    id: '6L',
    title: 'Lectura Semana 6 — GTI y Auditoría Continua',
    subtitle: 'Gobierno de TI, COBIT, marcos de trabajo y auditoría continua como nuevo paradigma',
    totalQ: 20
};

const LECTURA6_QUESTIONS = [
    // ---- V/F ----
    {
        type: 'vf',
        principle: 'Gobierno de TI (GTI)',
        question: 'El Gobierno de TI es responsabilidad del área de sistemas y del jefe de TI de la organización.',
        answer: false,
        feedback: 'FALSO. El Gobierno de TI recae en los EJECUTIVOS y el CONSEJO DE DIRECTORES, no en el área de sistemas. Es una responsabilidad de la alta dirección.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Marcos de Trabajo — COBIT',
        question: 'COBIT actúa como "marco sombrilla" que define el QUÉ es necesario hacer, mientras que ITIL, ISO 27001 y PMBOK definen el CÓMO hacerlo.',
        answer: true,
        feedback: 'VERDADERO. Esa es la distinción exacta: COBIT tiene una visión Top Down (define el qué) y los otros marcos aportan Bottom Up (definen el cómo).',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Marcos de Trabajo — Cobertura',
        question: 'ITIL V3 cubre de forma primaria el 51% de COBIT, siendo el marco con mayor cobertura.',
        answer: false,
        feedback: 'FALSO. ITIL V3 cubre de forma primaria el 39% de COBIT, no el 51%. El 51% corresponde a la cobertura que debe ser implementada directamente por los Objetivos de Control de COBIT (OCC).',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Auditoría Continua',
        question: 'La diferencia clave entre "auditoría continua" y "monitoreo continuo" es que la auditoría continua es responsabilidad del auditor, mientras que el monitoreo continuo es responsabilidad de la administración o dueños del proceso.',
        answer: true,
        feedback: 'VERDADERO. Esa es la diferencia CRUCIAL del material: auditoría continua = responsabilidad del AUDITOR. Monitoreo continuo (CM/CCM) = responsabilidad de la ADMINISTRACIÓN o dueños del proceso.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Auditoría Continua',
        question: 'Según Thomas Kuhn, la auditoría continua ya puede considerarse un paradigma completamente masificado en las organizaciones.',
        answer: false,
        feedback: 'FALSO. Estrictamente bajo el concepto de Thomas Kuhn, la auditoría continua aún NO puede considerarse un paradigma masificado, ya que su incorporación en la cotidianidad de las empresas todavía no es masiva, a pesar de existir consenso científico y directrices formales.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Auditoría Continua vs Tradicional',
        question: 'La auditoría continua evalúa el 100% de las transacciones, mientras que la auditoría tradicional se basa en muestras representativas.',
        answer: true,
        feedback: 'VERDADERO. Ese es uno de los cambios de paradigma más importantes: la auditoría continua abandona el muestreo tradicional para evaluar y monitorear el 100% de las transacciones (la población entera).',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Modelo de Madurez',
        question: 'El Modelo de Madurez de COBIT va en una escala de 1 a 5, donde 1 es "No existente" y 5 es "Optimizado".',
        answer: false,
        feedback: 'FALSO. La escala va de 0.0 (No existente) a 5.0 (Optimizado), no de 1 a 5. El nivel 0 es importante porque representa la inexistencia total del proceso.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Regla de Oro — Integración',
        question: 'El único punto donde ITIL V3 e ISO 27001 coinciden y aportan de forma simultánea es en la Gestión de la Continuidad del Negocio.',
        answer: true,
        feedback: 'VERDADERO. Esa es la "Regla de Oro" de la integración: los aportes primarios de ITIL e ISO son mutuamente excluyentes, EXCEPTO en la Gestión de la Continuidad del Negocio (Dominio 14 de ISO), donde ambos coinciden.',
        reference: null
    },

    // ---- DESARROLLO ----
    {
        type: 'dev',
        principle: 'Gobierno de TI (GTI)',
        question: 'Define el Gobierno de TI y explica sus 5 áreas de enfoque (pilares). ¿Por qué recae en los ejecutivos y no en el área de TI?',
        answer: null,
        feedback: null,
        reference: 'El GTI es el liderazgo, estructuras y procesos organizacionales que garantizan que la TI sostenga y extienda las estrategias y objetivos de la empresa. Sus 5 pilares son: (1) Alineación Estratégica, (2) Entrega de Valor, (3) Administración de Recursos, (4) Administración de Riesgos, y (5) Medición de Desempeño. Recae en ejecutivos y consejo de directores porque TI debe estar alineada con los objetivos de negocio, y esa decisión es estratégica y no operativa. El área de TI ejecuta, pero la gobernanza la dirige la alta dirección.'
    },
    {
        type: 'dev',
        principle: 'Marcos de Trabajo — Cobertura',
        question: 'Explica cómo se integran COBIT, ITIL V3 e ISO 27001 en la metodología GTI. Menciona los porcentajes de cobertura de cada marco.',
        answer: null,
        feedback: null,
        reference: 'La metodología propone un uso integrado: COBIT es el marco sombrilla que define el qué (visión Top Down). ITIL V3 e ISO 27001/2 definen el cómo (aportes Bottom Up). En cobertura primaria: ITIL V3 cubre el 39% de COBIT, ISO 27001/2 cubre el 17% de COBIT, y el 51% restante debe cubrirse directamente con los Objetivos de Control de COBIT. Con aportes secundarios (débiles), ITIL puede llegar al 74% e ISO al 61%. La Regla de Oro: los aportes primarios de ITIL e ISO son mutuamente excluyentes, excepto en la Gestión de la Continuidad del Negocio.'
    },
    {
        type: 'dev',
        principle: 'Auditoría Continua — Definiciones',
        question: '¿Cómo define la auditoría continua cada una de estas organizaciones: AICPA/CICA, IIA e ISACA?',
        answer: null,
        feedback: null,
        reference: 'AICPA y CICA (1999): es una metodología para emitir informes de auditoría simultáneamente, o muy poco tiempo después de que ocurren los hechos relevantes. IIA: consiste en cualquier método utilizado por los auditores para llevar a cabo actividades relacionadas con la auditoría de forma más continua, abarcando desde la evaluación del control hasta la evaluación de riesgos. ISACA: es un método que utiliza TAACs para que los profesionales reúnan evidencia selectiva a través del computador y monitoreen riesgos y controles con mayor frecuencia.'
    },
    {
        type: 'dev',
        principle: 'Auditoría Continua vs Tradicional',
        question: 'Compara la auditoría tradicional con la auditoría continua en 4 dimensiones: frecuencia, enfoque, procedimientos y alcance.',
        answer: null,
        feedback: null,
        reference: 'Las 4 dimensiones de comparación son: (1) Frecuencia: tradicional es periódica; continua es permanente o mucho más frecuente. (2) Enfoque: tradicional es reactivo (después de los hechos); continua es proactiva (en tiempo real). (3) Procedimientos: tradicional es manual; continua es fuertemente automatizada. (4) Alcance/Pruebas: tradicional usa muestreo representativo; continua evalúa el 100% de las transacciones. Adicionalmente, el foco de la auditoría interna se desplaza del control interno hacia los riesgos de negocio.'
    },
    {
        type: 'dev',
        principle: 'Términos de Auditoría Continua',
        question: 'Explica la diferencia entre CM, CCM, CA, CDA y CRMA. ¿Cómo se integran estos conceptos según el autor?',
        answer: null,
        feedback: null,
        reference: 'CM (Continuous Monitoring) y CCM (Continuous Controls Monitoring): monitoreo continuo y monitoreo continuo del control, responsabilidad de la administración o dueños del proceso. CA (Continuous Assurance): aseguramiento continuo, término más amplio que abarca monitoreo y auditoría. CDA (Data Continuous Auditing): aseguramiento continuo de datos. CRMA (Continuous Risk Monitoring and Assessment): monitoreo y evaluación continua del riesgo. Integración según el autor: todo inicia con el CRMA (evaluar riesgos), que requiere datos de calidad garantizados por el CDA, permitiendo establecer el CCM (monitoreo de controles). La auditoría continua es el engranaje que asegura que estos tres componentes fluyan correctamente.'
    },
    {
        type: 'dev',
        principle: 'Análisis GAP y Modelo de Madurez',
        question: '¿Qué es el Análisis GAP en el contexto del GTI y cómo se usa el Modelo de Madurez de COBIT?',
        answer: null,
        feedback: null,
        reference: 'El Análisis GAP evalúa el estado actual de la organización vs. los 34 procesos de COBIT bajo dos perspectivas: Cubrimiento (qué tan bien se cubre cada proceso) y Nivel de Madurez (qué tan maduro está el proceso). El Modelo de Madurez de COBIT va en escala de 0.0 (No existente) a 5.0 (Optimizado), evaluado con cifras decimales. La clave es que el puntaje de madurez se fundamenta estrictamente en el Inventario de Documentos GTI: sin documentos que respalden los procesos, no hay puntaje. Sirve para priorizar qué procesos implementar primero.'
    },
    {
        type: 'dev',
        principle: 'Transformaciones de la Auditoría Continua',
        question: 'Menciona y explica al menos 4 transformaciones tangibles que genera la auditoría continua en las organizaciones.',
        answer: null,
        feedback: null,
        reference: 'Las transformaciones tangibles son: (1) Convierte la auditoría en una función preventiva antes que correctiva. (2) Disminuye el esfuerzo operativo del auditor gracias a la automatización de pruebas. (3) Transforma el rol del auditor, quien deja tareas repetitivas para desarrollar competencias analíticas superiores. (4) Promueve una "auditoría por excepción" que genera alertas automáticas cuando los parámetros se salen de los criterios definidos. (5) Genera un "efecto panóptico" que incrementa el autocontrol de la administración, inhibiendo malas prácticas al saberse monitoreados constantemente.'
    },

    // ---- CASOS ----
    {
        type: 'caso',
        principle: 'GTI — Aplicación',
        question: 'CASO: La empresa TECHCORP S.A. implementó COBIT pero dejó toda la responsabilidad al jefe de TI. Además, usa ITIL e ISO 27001 para cubrir el 56% de los procesos COBIT sin aplicar ningún OCC directamente.\n\n¿Qué errores comete TECHCORP según la metodología GTI? Justifica con los datos del material.',
        answer: null,
        feedback: null,
        reference: 'TECHCORP comete 2 errores: (1) Error de responsabilidad: el GTI recae en los ejecutivos y el consejo de directores, no en el jefe de TI. Al delegar todo al jefe de TI, se pierde la alineación estratégica con los objetivos del negocio. (2) Error de cobertura: ITIL (39%) + ISO (17%) = 56% en cobertura primaria, pero los aportes primarios de ambos son mutuamente excluyentes (Regla de Oro), excepto en Gestión de la Continuidad. Además, el 51% debe cubrirse directamente con OCC de COBIT. TECHCORP no puede llegar al 56% sumando ambos marcos primarios sin violar la regla de exclusividad.'
    },
    {
        type: 'caso',
        principle: 'Auditoría Continua',
        question: 'CASO: El auditor Mario detecta un fraude 6 meses después de ocurrido, basándose en una muestra del 10% de transacciones revisadas manualmente una vez al año.\n\n¿Qué limitaciones de la auditoría tradicional ilustra este caso? ¿Cómo la auditoría continua hubiera cambiado el resultado?',
        answer: null,
        feedback: null,
        reference: 'Limitaciones ilustradas: (1) La auditoría tradicional es periódica (una vez al año) y reactiva (detecta el fraude 6 meses después, no en tiempo real). (2) Usa muestreo del 10%, lo que significa que el 90% de las transacciones no se revisaron, permitiendo que el fraude pasara desapercibido. (3) Es manual y retrospectiva, inadecuada para el entorno tecnológico actual. Con auditoría continua: se evaluaría el 100% de las transacciones, detectando anomalías en tiempo real o muy poco tiempo después. El "efecto panóptico" habría inhibido al defraudador al saber que estaba siendo monitoreado constantemente. Las alertas automáticas ("auditoría por excepción") habrían notificado la irregularidad de inmediato.'
    },

    // ---- COMPLETAR ----
    {
        type: 'completar',
        principle: 'GTI — 5 Pilares',
        question: 'Los 5 pilares del Gobierno de TI son: ___ Estratégica, Entrega de ___, Administración de ___, Administración de ___ y ___ de Desempeño.',
        answer: ['Alineación', 'Valor', 'Recursos', 'Riesgos', 'Medición'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Marcos de Trabajo',
        question: 'ITIL V3 cubre de forma primaria el ___% de COBIT. ISO 27001 cubre el ___%. El ___% debe cubrirse directamente con los Objetivos de Control de COBIT.',
        answer: ['39', '17', '51'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Auditoría Continua',
        question: 'La auditoría continua es responsabilidad del ___. El monitoreo continuo (CCM) es responsabilidad de la ___. El padre de la auditoría continua es ___.',
        answer: ['auditor', 'administración|dueños del proceso', 'Miklos Vasarhelyi'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Modelo de Madurez',
        question: 'El Modelo de Madurez de COBIT va de ___ (No existente) a ___ (Optimizado). El puntaje de madurez se fundamenta en el ___ de Documentos GTI.',
        answer: ['0.0|0', '5.0|5', 'Inventario'],
        feedback: null,
        reference: null
    }
];