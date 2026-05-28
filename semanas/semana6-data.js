// semana6-data.js — Preguntas Sesión 6: Certificaciones ISACA (COBIT, CISA, CISM)

const SEMANA6_INFO = {
    id: '6',
    title: 'Certificaciones ISACA (COBIT, CISA, CISM)',
    subtitle: 'Certificación internacional del profesional y marcos de gobierno de TI',
    totalQ: 20
};

const SEMANA6_QUESTIONS = [
    {
        type: 'vf',
        principle: 'Certificación Internacional',
        question: 'Una certificación internacional es una validación oficial emitida por una entidad de renombre global que verifica el cumplimiento de estándares y normas internacionales.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta de certificación internacional del material: validación oficial de una entidad global que asegura calidad, seguridad y conformidad.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Certificación Internacional',
        question: 'La ISO 27001 es una certificación de gestión de calidad, mientras que la ISO 9001 es una certificación de seguridad de la información.',
        answer: false,
        feedback: 'FALSO. Es al revés: ISO 9001 es para gestión de calidad e ISO 27001 es para seguridad de la información. No confundas las dos.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'ISACA — Historia',
        question: 'En 1969, el grupo de auditores que daría origen a ISACA se formalizó como "Asociación de Auditores de EDP (Procesamiento Electrónico de Datos)".',
        answer: true,
        feedback: 'VERDADERO. En 1969 el grupo se formalizó como Asociación de Auditores de EDP. El nombre ISACA fue adoptado en 2017.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'ISACA — Historia',
        question: 'ISACA adoptó su nombre actual en 1981, el mismo año en que se introdujo la certificación CISA.',
        answer: false,
        feedback: 'FALSO. La certificación CISA sí fue introducida en 1981, pero el nombre ISACA fue adoptado en 2017, no en 1981.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'ISACA — Definición y Objetivos',
        question: '¿Qué es ISACA y cuáles son sus principales objetivos? Menciona al menos 4 objetivos.',
        answer: null,
        feedback: null,
        reference: 'ISACA (Information Systems Audit and Control Association) es una Asociación de Auditoría y Control de Sistemas de Información que impulsa la calidad y el desempeño en TI, seguridad de la información, auditoría de sistemas y gestión de riesgos, ofreciendo recursos y certificaciones para profesionales y organizaciones. Sus objetivos son: desarrollar y mantener marcos de trabajo y guías, ofrecer certificaciones reconocidas, facilitar el intercambio de conocimientos, y promover la excelencia profesional.'
    },
    {
        type: 'vf',
        principle: 'Certificación CISA',
        question: 'El examen de la certificación CISA dura 4 horas, consta de 150 preguntas y el dominio con mayor peso es Protección de los Activos de Información con 27%.',
        answer: true,
        feedback: 'VERDADERO. Según el resumen, el examen CISA tiene 4 horas y 150 preguntas, y el dominio de mayor peso es Protección de los Activos de Información con 27%.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Certificación CISA',
        question: 'Explica qué es la certificación CISA y describe los 5 dominios de su examen con sus porcentajes.',
        answer: null,
        feedback: null,
        reference: 'CISA (Certified Information Systems Auditor) es una certificación reconocida de ISACA introducida en 1981, que valida experiencia en evaluación, control, calidad y gestión de sistemas de información. Los 5 dominios del examen son: Procesos de Auditoría de Sistemas (21%), Gobierno de Gestión de TI (17%), Adquisición Desarrollo e Implementación de SI (12%), Operación de SI y Resiliencia de Negocio (23%), y Protección de los Activos de Información (27%). Dura 4 horas con 150 preguntas.'
    },
    {
        type: 'caso',
        principle: 'Pasos para CISA',
        question: 'CASO: Juan aprobó el examen CISA. Su colega le dice que ya es oficialmente certificado CISA y puede usar el título.\n\n¿Es correcta la afirmación? Explica qué pasos adicionales debe cumplir Juan.',
        answer: null,
        feedback: null,
        reference: 'La afirmación es incorrecta. Aprobar el examen es solo el primer paso. Juan debe además: enviar la aplicación formal a la certificación CISA, adherirse al Código de Ética Profesional de ISACA, adherirse al Programa de Educación Continua Profesional (CPE), y cumplir con los Estándares en Auditoría de SI adoptados por ISACA. Son 5 pasos en total para obtener y mantener la certificación.'
    },
    {
        type: 'vf',
        principle: 'Certificación CISM',
        question: 'La certificación CISM está orientada a profesionales que gestionan la seguridad de la información, cubriendo planificación, establecimiento y administración de programas de seguridad.',
        answer: true,
        feedback: 'VERDADERO. CISM (Certified Information Security Manager) está exactamente dirigida a esos profesionales, con enfoque en alta dirección y visión estratégica en seguridad de la información.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Certificación CISM',
        question: 'Describe los 4 dominios del examen CISM con sus porcentajes. ¿En qué se diferencia el enfoque de CISM respecto a CISA?',
        answer: null,
        feedback: null,
        reference: 'El examen CISM (4 horas, 150 preguntas) cubre: Gobierno de la Seguridad de la Información (17%), Gestión de Riesgos de la Seguridad de la Información (20%), Programa de Seguridad de la Información (33%), y Tecnología y Seguridad de la Información (30%). La diferencia clave: CISM se enfoca en gestión y dirección estratégica de la seguridad desde alta dirección, mientras que CISA se centra en auditoría, control y aseguramiento de sistemas de información.'
    },
    {
        type: 'vf',
        principle: 'Certificación CRISC',
        question: 'CRISC está dirigida a profesionales en gestión de riesgos de TI y su dominio con mayor peso en el examen es "Informes y Respuestas al Riesgo" con 32%.',
        answer: true,
        feedback: 'VERDADERO. CRISC (Risk and Information Systems Control) está dirigida a gestión de riesgos de TI y el dominio de mayor peso en su examen es Informes y Respuestas al Riesgo con 32%.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Certificación CRISC',
        question: 'Explica qué es CRISC y describe los 4 dominios de su examen con sus porcentajes.',
        answer: null,
        feedback: null,
        reference: 'CRISC (Risk and Information Systems Control) es una certificación ISACA dirigida a profesionales en gestión de riesgos de TI, abarcando planificación, implementación, seguimiento y mantenimiento de controles de seguridad. Su examen (4 horas, 150 preguntas) cubre: Gobierno de TI (26%), Evaluación de Riesgo de TI (20%), Informes y Respuestas al Riesgo (32%), y Tecnología y Seguridad de la Información (22%).'
    },
    {
        type: 'vf',
        principle: 'COBIT',
        question: 'COBIT es un marco de gobierno y gestión de TI desarrollado por ISACA que proporciona mejores prácticas para un gobierno efectivo y la gestión eficiente de activos de información.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta de COBIT según el material: marco de gobierno y gestión de TI de ISACA con mejores prácticas y estándares.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'COBIT — Gobierno vs Gestión',
        question: '¿Cuál es la diferencia entre Gobierno y Gestión según COBIT? ¿Quién es responsable de cada uno en una empresa típica?',
        answer: null,
        feedback: null,
        reference: 'El Gobierno asegura la evaluación de necesidades de las partes interesadas para definir objetivos empresariales, establece la dirección mediante priorización y toma de decisiones, y supervisa rendimiento y cumplimiento. Recae en la Junta Directiva o Consejo de Dirección bajo su Presidente. La Gestión implica planificación, desarrollo, ejecución y supervisión de actividades conforme a la dirección del gobierno para cumplir los objetivos. Recae en el equipo ejecutivo liderado por el CEO. Son disciplinas con actividades, estructuras organizativas y propósitos distintos.'
    },
    {
        type: 'caso',
        principle: 'COBIT — Beneficios',
        question: 'CASO: La empresa TECNOSUR tiene proyectos de TI desalineados con el negocio, no mide el desempeño de sus procesos de TI y gestiona riesgos de forma reactiva.\n\n¿Cómo ayudaría implementar COBIT? Menciona al menos 3 beneficios concretos.',
        answer: null,
        feedback: null,
        reference: 'COBIT ayudaría con: (1) Alinear TI con el Negocio: garantiza que las iniciativas de TI se alineen con los objetivos estratégicos y creen valor comercial. (2) Medir el Desempeño: proporciona KPIs y métricas para evaluar y mejorar continuamente los procesos de TI. (3) Gestionar Riesgos: incluye enfoques para identificar, evaluar y gestionar riesgos de TI de forma proactiva. También puede ayudar a Lograr Control Efectivo y Optimizar Recursos de TI.'
    },
    {
        type: 'dev',
        principle: 'COBIT — Examen',
        question: 'Describe los dominios del examen de Fundamentos COBIT 2019, su duración y número de preguntas. ¿En qué se diferencia del examen CISA en estructura?',
        answer: null,
        feedback: null,
        reference: 'El examen COBIT 2019 Foundation dura 2 horas con 75 preguntas (vs 4 horas y 150 de CISA). Cubre 8 dominios: Introducción al marco (12%), Principios (13%), Componentes y sistema de gobierno (30%), Objetivos de gestión y gobierno (23%), Gestión del desempeño (4%), Diseñar un sistema de gobierno a la medida (7%), Caso de negocio (3%), e Implementación (8%). Es más corto y concentrado que CISA, con foco en principios y diseño de gobierno.'
    },
    {
        type: 'vf',
        principle: 'Principales Certificaciones ISACA',
        question: 'La certificación CGEIT de ISACA está orientada a ciberseguridad avanzada y gestión de amenazas.',
        answer: false,
        feedback: 'FALSO. CGEIT valida experiencia en gobernanza estratégica empresarial a nivel ejecutivo. La certificación de ciberseguridad avanzada es CSX-P.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Principales Certificaciones ISACA',
        question: 'Menciona y describe brevemente al menos 5 de las principales certificaciones ISACA además de CISA, CISM y CRISC.',
        answer: null,
        feedback: null,
        reference: 'Las principales certificaciones ISACA son: CGEIT (valida experiencia en gobernanza estratégica empresarial a nivel ejecutivo), CSX-P (certificación en ciberseguridad avanzada, gestión de riesgos y amenazas), CDPSE (evalúa habilidades en privacidad e implementación de privacy by design), ITCA (credenciales basadas en rendimiento que fortalecen habilidades profesionales), y CET (enfocada en tecnologías emergentes y su manejo).'
    },
    {
        type: 'caso',
        principle: '¿Por qué Certificarme?',
        question: 'CASO: Ana, recién egresada de Ingeniería de Sistemas, duda si vale la pena certificarse con ISACA porque "en Perú pocas empresas las conocen".\n\n¿Qué argumentos le darías basándote en el material de la sesión?',
        answer: null,
        feedback: null,
        reference: 'Argumentos para Ana basados en el material: (1) Las certificaciones ISACA son reconocidas y aceptadas a nivel global, combinando conocimientos, experiencia y formación académica que aumentan la credibilidad profesional. (2) Son requeridas o reconocidas por muchas organizaciones y agencias gubernamentales en todo el mundo, no solo localmente. (3) Se consideran entre las certificaciones de TI más influyentes y bien remuneradas, impulsando ingresos, facilitando la contratación y mejorando la reputación profesional. La globalización hace que estas credenciales sean cada vez más valoradas también en el mercado peruano.'
    },
    {
        type: 'dev',
        principle: 'Comparación CISA vs CISM vs CRISC',
        question: 'Compara las tres principales certificaciones ISACA: CISA, CISM y CRISC. ¿A qué perfil está dirigida cada una y cuál es su enfoque principal?',
        answer: null,
        feedback: null,
        reference: 'CISA (Certified Information Systems Auditor): dirigida a auditores, valida experiencia en auditoría, seguridad y control de TI, impulsa carrera y salario. CISM (Certified Information Security Manager): orientada a alta dirección, visión estratégica en seguridad de la información, para gestores y directivos. CRISC (Risk and Information Systems Control): enfocada en gestión y control de riesgos de TI, para profesionales en implementación de controles de seguridad. Resumen: CISA=auditar sistemas, CISM=gestionar seguridad estratégicamente, CRISC=gestionar riesgos de TI.'
    },
    {
        type: 'completar',
        principle: 'ISACA — Historia',
        question: 'ISACA tiene sus orígenes en ___, cuando auditores de sistemas identificaron la necesidad de unificar el enfoque metodológico. En ___ se formalizó como Asociación de Auditores de EDP.',
        answer: ['1967', '1969'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'ISACA — Historia',
        question: 'La certificación ___ fue introducida por ISACA en ___, convirtiéndose en una de las más reconocidas en el campo de la auditoría de sistemas.',
        answer: ['CISA', '1981'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Certificación CISA',
        question: 'El examen CISA consta de ___ preguntas, dura ___ horas y su dominio de mayor peso es ___ con un 27%.',
        answer: ['150', '4', 'Protección de los Activos de Información|Protección de Activos'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Certificación CISM',
        question: 'El examen CISM cubre 4 dominios: Gobierno de la Seguridad de la Información (__%),  Gestión de Riesgos (__%), Programa de Seguridad de la Información (__%) y Tecnología y Seguridad (__%).',
        answer: ['17', '20', '33', '30'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Certificación CRISC',
        question: 'CRISC significa ___ y está dirigida a profesionales con experiencia en ___ de riesgos de TI.',
        answer: ['Risk and Information Systems Control', 'gestión'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'COBIT',
        question: 'COBIT es un marco de ___ y ___ de TI desarrollado por ISACA que proporciona mejores prácticas para gestionar activos de información.',
        answer: ['gobierno', 'gestión'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'COBIT — Gobierno vs Gestión',
        question: 'En COBIT, el ___ recae en la Junta Directiva bajo su Presidente, mientras que la ___ es responsabilidad del equipo ejecutivo liderado por el ___.',
        answer: ['gobierno|Gobierno', 'gestión|Gestión', 'CEO'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'COBIT — Examen',
        question: 'El examen de Fundamentos COBIT 2019 dura ___ horas y consta de ___ preguntas, siendo más corto que el examen CISA.',
        answer: ['2', '75'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: '¿Por qué Certificarme?',
        question: 'Las certificaciones ISACA se consideran entre las más ___ y bien ___ en TI, impulsando ingresos y mejorando la reputación profesional.',
        answer: ['influyentes', 'remuneradas'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Principales Certificaciones ISACA',
        question: 'La certificación ___ valida experiencia en gobernanza estratégica empresarial a nivel ejecutivo, mientras que ___ certifica habilidades en ciberseguridad avanzada.',
        answer: ['CGEIT', 'CSX-P'],
        feedback: null,
        reference: null
    }
];