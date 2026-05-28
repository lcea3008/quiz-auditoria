// lectura8-data.js — Preguntas Lectura Semana 8: Auditoría de Seguridad y Seguridad Física

const LECTURA8_INFO = {
    id: '8L',
    title: 'Lectura Semana 8 — Auditoría de Seguridad y Seguridad Física',
    subtitle: 'Auditoría en entidades públicas/privadas, biometría, control de acceso y seguridad en instalaciones críticas',
    totalQ: 20
};

const LECTURA8_QUESTIONS = [
    // ---- V/F ----
    {
        type: 'vf',
        principle: 'Auditoría de Seguridad — Resultados',
        question: 'Según el estudio en Loja, las entidades privadas tienen un mayor porcentaje de riesgos altos en seguridades físicas que las entidades públicas.',
        answer: false,
        feedback: 'FALSO. Las entidades PÚBLICAS tienen 50.29% de riesgos altos en seguridades físicas, mientras que las PRIVADAS tienen 39.45%. Las privadas tienen mejor postura física frente a vulnerabilidades que las públicas.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Auditoría de Seguridad — Resultados',
        question: 'En seguridades lógicas, las entidades privadas presentan mayor porcentaje de riesgos altos (55.05%) que las entidades públicas (50.43%).',
        answer: true,
        feedback: 'VERDADERO. A nivel lógico las privadas tienen 55.05% de riesgos altos vs 50.43% de las públicas, requiriendo acciones urgentes para evitar daños irreparables.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Biometría',
        question: 'En biometría, el Falso Rechazo (FRR) ocurre cuando el sistema admite a un impostor, mientras que la Falsa Aceptación (FAR) ocurre cuando no reconoce a un usuario legítimo.',
        answer: false,
        feedback: 'FALSO. Es al revés: FRR (Falso Rechazo) = no reconocer a un usuario LEGÍTIMO (causa frustración). FAR (Falsa Aceptación) = admitir a un IMPOSTOR. Al ajustar la sensibilidad para reducir uno, el otro aumenta automáticamente.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Biometría',
        question: 'La biometría generalmente se usa sola como único método de autenticación para maximizar la seguridad.',
        answer: false,
        feedback: 'FALSO. La biometría generalmente NO se usa sola. Se usa para verificar una identidad previamente indicada por una tarjeta o PIN, acelerando la lectura y reduciendo errores. La combinación de métodos es lo recomendado.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Control de Acceso — Dispositivos',
        question: 'La tarjeta Wiegand es imposible de duplicar o reprogramar, resiste interferencias electromagnéticas y permite lectoras a la intemperie.',
        answer: true,
        feedback: 'VERDADERO. Esas son exactamente las características de la tarjeta Wiegand: contiene cables internos magnetizados, es imposible de duplicar o reprogramar y resiste interferencias RFI/EMF.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Control de Acceso — Dispositivos',
        question: 'La tarjeta con código de barras es la más segura del mercado porque es económica y ampliamente utilizada.',
        answer: false,
        feedback: 'FALSO. La tarjeta con código de barras es sumamente ECONÓMICA pero la MENOS segura: se puede engañar con una simple fotocopiadora. Sirve más para monitoreo que para seguridad real.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Factor Humano',
        question: 'Según el artículo, las personas son directamente responsables del 60% del tiempo de inactividad en los centros de datos.',
        answer: true,
        feedback: 'VERDADERO. Esa es la estadística clave del artículo: el 60% del tiempo de inactividad en centros de datos se debe a personas, principalmente por accidentes, errores de procedimiento, caídas de objetos o derrames.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Cámara Esclusa (Mantrap)',
        question: 'Las cámaras esclusas (Mantrap) solucionan los problemas de "encubrimiento voluntario" (sostenerle la puerta a alguien) e "involuntario" (que alguien se escabulla por detrás).',
        answer: true,
        feedback: 'VERDADERO. Esa es exactamente la función del Mantrap: habitáculos con dos puertas con espacio para una sola persona que solucionan ambos tipos de encubrimiento.',
        reference: null
    },

    // ---- DESARROLLO ----
    {
        type: 'dev',
        principle: 'Metodología de Auditoría — 3 Fases',
        question: 'Explica las 3 fases de la metodología de auditoría utilizada en el estudio de Loja.',
        answer: null,
        feedback: null,
        reference: 'Las 3 fases son: Fase I (Revisión): estudio minucioso de normas, buenas prácticas y casos de éxito, tomando como referencia trabajos previos como la auditoría a EMAPA Ambato (2007) e Italimentos Cía. Ltda. (2011-2012). Fase II (Ejecución): diagnóstico general de entidades, planificación, establecimiento de criterios de riesgo, elaboración de formularios y ejecución de la evaluación, culminando con socialización de resultados a los funcionarios. Fase III (Informe final): elaboración del informe con recomendaciones detalladas para mitigar los riesgos detectados.'
    },
    {
        type: 'dev',
        principle: 'Normas y Estándares',
        question: 'Explica los estándares TIA/EIA utilizados en la auditoría. ¿Para qué sirve cada uno?',
        answer: null,
        feedback: null,
        reference: 'Los estándares TIA/EIA son: TIA/EIA-568-C: estándar de cableado estructurado aplicable a todo tipo de edificios, dividido en C.0 (planificación genérica), C.1 (edificios comerciales), C.2 (pares trenzados) y C.3 (fibra óptica). ANSI TIA/EIA-569: especificaciones de diseño de instalaciones físicas, basado en 3 conceptos (edificios dinámicos, sistemas de telecomunicaciones dinámicos y telecomunicaciones más allá de voz y datos), identifica 6 componentes físicos. ANSI TIA/EIA-606-A: esquema de administración uniforme con etiquetas, códigos y colores para identificar cables y localizar fallas. ANSI/TIA/EIA-942: guía exclusiva para Data Centers basada en el Uptime Institute, garantizando seguridad operacional, continuidad y disponibilidad.'
    },
    {
        type: 'dev',
        principle: 'Control de Acceso — 3 Categorías',
        question: 'Explica las 3 categorías de métodos de identificación según el nivel de confiabilidad. ¿Cuál es más segura y por qué?',
        answer: null,
        feedback: null,
        reference: 'Las 3 categorías son en orden de menor a mayor confiabilidad: (1) Lo que la persona TIENE (mínima confiabilidad): objetos físicos como llaves, tarjetas o tokens. Es el nivel menos seguro porque el objeto puede ser compartido, robado o extraviado. (2) Lo que la persona CONOCE (mayor confiabilidad): contraseñas, códigos PIN o combinaciones. No pueden robarse físicamente, pero sí compartirse, adivinarse o anotarse en un papel. (3) La identidad de la persona - BIOMETRÍA (máxima confiabilidad): características físicas únicas e irrepetibles como huella digital, iris, retina, voz, geometría de la mano o facial y dinámica de firma. Es la más segura porque no puede compartirse ni robarse físicamente.'
    },
    {
        type: 'dev',
        principle: 'Control de Acceso — Dispositivos',
        question: 'Compara al menos 4 tipos de tarjetas de control de acceso según su nivel de seguridad y características.',
        answer: null,
        feedback: null,
        reference: 'Comparación de tarjetas: (1) Banda magnética: económica y popular, pero muy fácil de duplicar. (2) Ferrita de bario: película con puntos magnéticos, más segura que la banda magnética por el mismo costo. (3) Wiegand: cables internos magnetizados, imposible de duplicar o reprogramar, resiste interferencias RFI/EMF, permite lectoras a la intemperie. (4) Código de barras: sumamente económica pero se puede copiar con fotocopiadora, sirve más para monitoreo que seguridad. (5) Tarjeta de sombra infrarroja: código de barras oculto entre capas de PVC. (6) Proximidad RFID: acceso sin contacto a unos 10 cm. (7) Smart Card: la opción preferida actual, microchip de silicio, puede almacenar plantilla biométrica, disponible como tarjeta, llavero o iButton.'
    },
    {
        type: 'dev',
        principle: 'Escala de Riesgo',
        question: '¿Cómo se mide el riesgo en la auditoría del estudio de Loja? Explica las escalas de probabilidad, impacto y riesgo final.',
        answer: null,
        feedback: null,
        reference: 'La evaluación midió tres dimensiones: integridad, disponibilidad y confidencialidad. Escala de Probabilidad: 1 (Bajo/No probable), 2 (Medio/Bastante probable) y 3 (Alto/Inminente). Escala de Impacto: desde 1 (Insignificante) hasta 5 (Extremo, que puede ocasionar la desaparición del negocio). Escala de Riesgo Final: Riesgo Extremo (valores >= 11), Riesgo Moderado (valores entre 6 y 10) y Riesgo Bajo (valores <= 5). Las amenazas se clasificaron en accidentales y deliberadas, y los activos en: Tecnología, Instalaciones, Aplicaciones, Equipo Informático, Soporte de Información, Datos/Información y Personas.'
    },
    {
        type: 'dev',
        principle: 'Seguridad Física — Perímetros',
        question: 'Explica el concepto de seguridad por "perímetros concéntricos" o capas. ¿Qué áreas se protegen en cada nivel?',
        answer: null,
        feedback: null,
        reference: 'La seguridad debe diseñarse en perímetros concéntricos donde las áreas más internas se benefician de sus propios controles más los de las áreas externas. Los niveles son: Perímetros generales (exteriores): establecimiento, edificio, área de computadoras, salas de cómputo. Seguridad por rack (nivel más interno): cerraduras administrables en los racks para que solo técnicos específicos accedan a equipos puntuales (ej. servidores vs. telecomunicaciones). Seguridad de infraestructura: proteger equipos críticos ajenos a la red como sistemas HVAC, baterías de generadores o rociadores contra incendios. La filosofía es que cuanto más al interior, mayor debe ser el nivel de seguridad acumulado.'
    },
    {
        type: 'dev',
        principle: 'Factor Humano',
        question: '¿Por qué el factor humano es simultáneamente el "eslabón más débil" y el "respaldo más firme" en la seguridad física?',
        answer: null,
        feedback: null,
        reference: 'Eslabón más débil: las personas son responsables del 60% del tiempo de inactividad en centros de datos por accidentes, errores de procedimiento, caídas de objetos o derrames. Además, la propensión humana a la confianza y a flexibilizar reglas permite ataques de ingeniería social (engaños para saltar controles). Los delitos internos representan un enorme riesgo. Respaldo más firme: personal alerta y capacitado que sigue rigurosamente los protocolos es la última y mejor defensa cuando la tecnología falla. La seguridad física responde a dos preguntas básicas: "¿Quién eres?" (identidad) y "¿Por qué estás aquí?" (autorización).'
    },

    // ---- CASOS ----
    {
        type: 'caso',
        principle: 'Biometría — Aplicación',
        question: 'CASO: El Data Center de CORPSEC S.A. usa solo huella digital como control de acceso. El sistema tiene sensibilidad alta para evitar impostores (FAR bajo), pero el personal se queja de que frecuentemente no los reconoce.\n\n¿Qué problema describe este caso? ¿Qué solución recomendarías según el artículo?',
        answer: null,
        feedback: null,
        reference: 'El problema es el trade-off de la biometría: al bajar el FAR (Falsa Aceptación) para evitar impostores, automáticamente sube el FRR (Falso Rechazo), es decir, el sistema no reconoce a usuarios legítimos, causando frustración. Solución según el artículo: (1) Ajustar el umbral de sensibilidad para encontrar un equilibrio entre FAR y FRR aceptables. (2) No usar la biometría SOLA: combinarla con tarjeta o PIN (ej. tarjeta Smart Card + huella digital), de modo que la biometría verifique la identidad previamente indicada por la tarjeta, acelerando la lectura y reduciendo errores. (3) Aplicar el principio de costo vs. riesgo para determinar el nivel adecuado de seguridad para cada área según los perímetros concéntricos.'
    },
    {
        type: 'caso',
        principle: 'Auditoría — Conclusiones',
        question: 'CASO: Una institución pública de Loja tiene sus políticas de seguridad basadas en criterios propios del jefe de TI, sin referencia a normas internacionales. El auditor encontró 52% de riesgos altos en seguridades físicas.\n\n¿Qué conclusiones del estudio aplican a este caso? ¿Qué normas debería implementar?',
        answer: null,
        feedback: null,
        reference: 'Conclusiones del estudio que aplican: (1) Las instituciones auditadas no tienen enraizada la conciencia sobre la seguridad de la información. (2) Los manuales y políticas no basados en normativas internacionalmente aceptadas impiden garantizar la correcta protección de activos. (3) Es imposible alcanzar el 100% de seguridad, pero la aplicación estricta de normas internacionales reduce significativamente los riesgos. Normas a implementar: ISO/IEC 27002 (39 objetivos de control y 133 controles en 11 dominios para seguridad de la información) y ANSI/TIA/EIA-942 (guía exclusiva para Data Centers, garantizando seguridad operacional, continuidad y disponibilidad). También aplicar la metodología MAGERIT para análisis y gestión de riesgos.'
    },

    // ---- COMPLETAR ----
    {
        type: 'completar',
        principle: 'Resultados Auditoría — Públicas',
        question: 'En entidades públicas: seguridades físicas tienen ___% de riesgos altos. Seguridades lógicas tienen ___% de riesgos altos. Esto significa que el Data Center está en peligro constante de ___.',
        answer: ['50.29', '50.43', 'suspensión'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Control de Acceso — Categorías',
        question: 'Las 3 categorías de identificación son: lo que la persona ___ (mínima confiabilidad), lo que la persona ___ (mayor confiabilidad) y la ___ de la persona (máxima confiabilidad).',
        answer: ['tiene', 'conoce', 'identidad|biometría'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Biometría',
        question: 'En biometría, el ___ (FRR) ocurre cuando el sistema no reconoce a un usuario legítimo. La ___ (FAR) ocurre cuando el sistema admite a un impostor. Al bajar uno, el otro ___ automáticamente.',
        answer: ['Falso Rechazo', 'Falsa Aceptación', 'aumenta|sube'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Factor Humano y Normas',
        question: 'Las personas son responsables del ___% del tiempo de inactividad en centros de datos. La norma ___ tiene 39 objetivos de control y 133 controles. La metodología española para análisis de riesgos es ___.',
        answer: ['60', 'ISO/IEC 27002', 'MAGERIT'],
        feedback: null,
        reference: null
    }
];