// lectura7-data.js — Preguntas Lectura Semana 7: Integridad de Datos y Privacidad

const LECTURA7_INFO = {
    id: '7L',
    title: 'Lectura Semana 7 — Integridad de Datos y Privacidad',
    subtitle: 'Integridad de la información, gobierno de datos, privacidad y controles de protección',
    totalQ: 20
};

const LECTURA7_QUESTIONS = [
    // ---- V/F ----
    {
        type: 'vf',
        principle: 'Integridad de Datos',
        question: 'Según el artículo, la integridad de los datos es el aspecto más atendido y protegido dentro de la seguridad de la información.',
        answer: false,
        feedback: 'FALSO. El artículo señala exactamente lo contrario: la integridad de los datos es el aspecto más RELEGADO (ignorado) de la seguridad de la información. La atención se concentra principalmente en disponibilidad y prevención de malware.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Integridad de Datos',
        question: 'El ataque del gusano Stuxnet (2010) es un ejemplo de "ataque semántico" porque alteró procesos industriales físicos sin que los operadores vieran anomalías en sus pantallas.',
        answer: true,
        feedback: 'VERDADERO. Stuxnet es el ejemplo paradigmático del artículo: demostró lo letal que puede ser un ataque semántico dirigido a la integridad, alterando el funcionamiento de procesos industriales físicos de forma invisible para los operadores.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Responsabilidades de Integridad',
        question: 'Según el artículo, el área de TI es la principal responsable del gobierno de datos, la clasificación de la información y la definición de las reglas de negocio.',
        answer: false,
        feedback: 'FALSO. El artículo señala que TI NO es responsable del gobierno de datos, clasificación ni de definir reglas de negocio. Esa confusión de roles es la CAUSA PRINCIPAL de que la integridad quede relegada. La responsabilidad del gobierno de datos recae en el NEGOCIO (propietarios de los datos).',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Responsabilidades de Integridad',
        question: 'Los principios de "necesidad de conocer" (NtK) y "mínimos privilegios" (LP) deben ser aplicados por las áreas de negocio como propietarios de los datos.',
        answer: true,
        feedback: 'VERDADERO. El artículo indica que las áreas de negocio deben aplicar estrictamente los principios de NtK (Need to Know) y LP (Least Privilege), controlando y auditando regularmente quién accede a qué información.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Privacidad — Violaciones',
        question: 'Según las métricas del 2016, el tipo de dato más afectado en violaciones de privacidad fue la información de tarjetas de crédito con un 48%.',
        answer: false,
        feedback: 'FALSO. El 48% correspondió a Información de Identificación Personal (PII), no a tarjetas de crédito. Las tarjetas de crédito representaron el 27% y la Información de Salud Física (PHI) el 11%.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Privacidad — Controles',
        question: 'Los controles técnicos de privacidad incluyen la autenticación multifactor, el cifrado en tránsito y en reposo, y la aplicación de parches de seguridad.',
        answer: true,
        feedback: 'VERDADERO. Esos son exactamente los controles técnicos de privacidad mencionados en el artículo, junto con el uso de software de minería para detección y herramientas de análisis forense.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Gobierno de Datos',
        question: 'La regla GIGO ("si entra basura, sale basura") implica que si una organización no implementa métricas de integridad de datos, no podrá saber si su seguridad informática mejora o empeora.',
        answer: true,
        feedback: 'VERDADERO. El artículo usa la regla GIGO para concluir que sin métricas de integridad de datos es imposible evaluar si la seguridad mejora o empeora, y que relegar el gobierno de datos expone a graves riesgos financieros, operacionales, reputacionales y legales.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Privacidad — Oficial',
        question: 'La misión del Oficial de Privacidad (OP) es: identificar los datos, entender su uso comercial, protegerlos, detectar cuándo están en peligro y saber qué hacer al respecto.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta de la misión fundamental del Oficial de Privacidad (OP) según el artículo.',
        reference: null
    },

    // ---- DESARROLLO ----
    {
        type: 'dev',
        principle: 'Integridad de Datos — Visiones',
        question: 'Explica cómo entiende la integridad de los datos cada uno de estos roles: Seguridad de TI, Administrador de BD, Propietario del Negocio y Proveedor.',
        answer: null,
        feedback: null,
        reference: 'Seguridad de TI: la imposibilidad de que alguien modifique la información sin autorización y sin ser descubierto. Administrador de BD: garantizar que los datos introducidos sean precisos, válidos y coherentes. Arquitecto de Datos: mantener entidades primarias únicas y no nulas en los sistemas. Propietario del Negocio: un parámetro de calidad que demuestra que los datos cumplen con reglas de negocio adecuadas. Proveedor: la exactitud y coherencia de los datos almacenados evidenciada entre actualizaciones. La diversidad de visiones es la causa principal de la falta de protección de la integridad.'
    },
    {
        type: 'dev',
        principle: 'Integridad de Datos — Causas',
        question: 'Menciona y explica al menos 5 causas o disparadores de pérdida de integridad de datos según el artículo.',
        answer: null,
        feedback: null,
        reference: 'Las causas de pérdida de integridad son: (1) Hojas de cálculo creadas por usuarios finales que carecen de gestión de ciclo de vida y validación de datos. (2) Modificaciones sin control de permisos, privilegios de acceso y uso de contraseñas compartidas. (3) Errores de usuarios finales que impactan datos en entornos de producción. (4) Fallas en la configuración de software, control de cambios deficiente y aplicaciones con códigos ocultos (backdoors). (5) Aplicación incompleta de parches de seguridad y uso de dispositivos no autorizados en la red. (6) Falta de adecuada Segregación de Funciones (SoD).'
    },
    {
        type: 'dev',
        principle: 'Integridad de Datos — Métodos de Ataque',
        question: '¿Cuáles son los 3 principales métodos de ataque a la integridad de datos? Explica cada uno con el ejemplo del material.',
        answer: null,
        feedback: null,
        reference: 'Los 3 métodos son: (1) Fraude informático: el método más antiguo y costoso. Ejemplo del material: un empleado de Societe Generale produjo pérdidas de 4,900 millones de euros mediante el abuso de los sistemas. (2) Software malicioso: bombas lógicas, troyanos o códigos ocultos que introducen modificaciones (como alterar una fórmula) o encriptan datos pidiendo rescate (ransomware). (3) Alteración de infraestructuras críticas: ataques a sistemas industriales SCADA que muchas veces no están bajo supervisión del departamento de TI. Ejemplo: el gusano Stuxnet que alteró procesos industriales físicos.'
    },
    {
        type: 'dev',
        principle: 'Privacidad — 7 Categorías',
        question: 'Explica las 7 categorías de privacidad según ISACA. Da un ejemplo concreto de cada una.',
        answer: null,
        feedback: null,
        reference: 'Las 7 categorías son: (1) Datos e imagen (Información): reglas sobre recolección de información financiera, médica o gubernamental. (2) Personas/corporales: protección contra invasiones físicas como pruebas de drogas o genéticas. (3) Localización y espacio (territorial): límites a videovigilancia, drones y revisiones de identificación. (4) Comportamiento y acción: proteger preferencias personales y limitar vigilancia invasiva como cámaras policiales. (5) Comunicaciones: seguridad en correos, llamadas, correo postal o micrófonos ocultos. (6) Pensamientos y sentimientos: garantizar que no se obligue a revelar contraseñas de redes sociales o creencias políticas/religiosas. (7) Asociación: derecho a relacionarse sin ser monitoreado por afiliaciones o pruebas de ADN.'
    },
    {
        type: 'dev',
        principle: 'Privacidad — 4 Controles',
        question: 'Explica los 4 tipos de controles de privacidad del artículo. ¿En qué orden deben implementarse?',
        answer: null,
        feedback: null,
        reference: 'El orden es: identificar, salvaguardar, detectar y gestionar la respuesta. Los 4 tipos son: (1) Controles de gestión: inventario legal y de sistemas, designación del Oficial de Privacidad, avisos de privacidad, minimización de datos y evaluaciones de riesgo (PIA). (2) Controles de operaciones de computadora: infraestructura, identificación de sistemas afectados, prevención de derrames de datos, informes de actividad, apoyo forense y eliminación segura de PII. (3) Controles de operaciones comerciales: procesos de negocio, obtención de consentimientos, monitoreo de fraude, notificación a víctimas y corrección de datos erróneos. (4) Controles técnicos: autenticación multifactor, cifrado en tránsito y reposo, aplicación de parches, software de minería y herramientas forenses.'
    },
    {
        type: 'dev',
        principle: 'Gobierno de Datos',
        question: '¿Qué es el gobierno de datos y cuál es la responsabilidad del negocio vs. el área de TI en su gestión?',
        answer: null,
        feedback: null,
        reference: 'El gobierno de datos abarca la accesibilidad, disponibilidad, calidad, coherencia, seguridad y verificabilidad de la información. Responsabilidad del NEGOCIO (propietarios de datos): deben tomar la propiedad de los datos y asumir responsabilidad de su integridad, evaluar el costo económico y reputacional de la pérdida de integridad, aplicar principios de NtK y LP, y registrar quién posee acceso privilegiado. Responsabilidad de TI: su rol es el control operativo de las tecnologías y ofrecer servicios como copias de respaldo y planes de recuperación (acordados mediante SLA). TI NO es responsable del gobierno de datos, clasificación ni definición de reglas de negocio.'
    },
    {
        type: 'dev',
        principle: 'Privacidad — Oficial de Privacidad',
        question: 'Explica las principales preocupaciones y responsabilidades del Oficial de Privacidad (OP) según el artículo.',
        answer: null,
        feedback: null,
        reference: 'El Oficial de Privacidad (OP) debe evaluar constantemente: (1) Leyes y regulaciones: prevenir sanciones, multas y vergüenza pública cumpliendo normativas de cada país. (2) Tipo de datos: identificar si son PII, registros médicos, datos financieros y su formato (audio, texto, papel). (3) Cantidad y ubicación: saber cuántos sistemas almacenan datos, cuánto tiempo retenerlos y dónde residen (nube, instalaciones, redes sociales, sistemas retirados). (4) Fuente y disponibilidad: si los datos se obtuvieron legalmente y quién tiene acceso. (5) Medidas de protección y políticas: cifrado, contraseñas, controles físicos y procedimientos para documentos impresos. Su misión: identificar datos, entender su uso, protegerlos, detectar peligros y saber qué hacer.'
    },

    // ---- CASOS ----
    {
        type: 'caso',
        principle: 'Integridad de Datos',
        question: 'CASO (del material): Un empleado de Societe Generale produjo pérdidas de 4,900 millones de euros mediante el abuso de los sistemas de la empresa.\n\n¿Qué tipo de ataque a la integridad representa? ¿Qué controles del artículo deberían haberse implementado para prevenirlo?',
        answer: null,
        feedback: null,
        reference: 'Tipo de ataque: Fraude informático, el método más antiguo y costoso según el artículo. Controles que deberían haberse implementado: (1) Segregación de Funciones (SoD): separar roles para que nadie tenga control total sobre una operación. (2) Control de permisos y privilegios de acceso: evitar accesos indebidos a sistemas críticos. (3) Monitoreo y métricas de integridad: registrar frecuencia con que se accede a datos de producción y número de cambios no autorizados. (4) Principios de NtK y LP: limitar el acceso solo a lo necesario para cada función. (5) Inventario de usuarios con privilegios históricos acumulados y cuentas con acceso inusual. (6) Auditoría constante para detectar anomalías en tiempo real.'
    },
    {
        type: 'caso',
        principle: 'Privacidad',
        question: 'CASO: Una empresa de salud sufrió una violación de privacidad que expuso datos médicos de 50,000 pacientes. La causa fue un proveedor externo con acceso sin restricciones y sin cifrado de datos.\n\n¿Qué categorías de privacidad fueron afectadas? ¿Qué controles del artículo deberían haberse aplicado?',
        answer: null,
        feedback: null,
        reference: 'Categorías afectadas: (1) Datos e imagen/Información: exposición de información médica confidencial. (2) Personas/corporales: datos de salud física (PHI) comprometidos. Controles que deberían aplicarse: Controles técnicos: cifrado en tránsito y en reposo de los datos médicos, autenticación multifactor para el proveedor. Controles de gestión: Evaluación de Impacto sobre la Privacidad (PIA) antes de dar acceso al proveedor, minimización de datos (solo acceso a lo necesario). Controles de operaciones comerciales: contrato formal con el proveedor definiendo responsabilidades y SLA. Controles de operaciones de computadora: eliminación segura de PII, monitoreo del acceso del proveedor. Además, implementar un Plan de Respuesta a Incidentes de Privacidad (PIRP) con notificación a las víctimas.'
    },

    // ---- COMPLETAR ----
    {
        type: 'completar',
        principle: 'Privacidad — Estadísticas',
        question: 'En las métricas del 2016, el ___% de las violaciones correspondieron a Información de Identificación Personal (___), el ___% a tarjetas de crédito y el ___% a Información de Salud Física (PHI).',
        answer: ['48', 'PII', '27', '11'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Integridad de Datos',
        question: 'El ataque del gusano ___ (2010) demostró lo letal que puede ser un "ataque ___" dirigido a la integridad. La regla ___ ("si entra basura, sale basura") aplica cuando no hay métricas de integridad.',
        answer: ['Stuxnet', 'semántico', 'GIGO'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Responsabilidades',
        question: 'El ___ debe tomar la propiedad de los datos y su integridad. El área de ___ es responsable del control operativo y servicios como copias de respaldo. La confusión de estos roles es la causa principal de que la ___ quede relegada.',
        answer: ['negocio|Negocio', 'TI', 'integridad'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Privacidad — Controles',
        question: 'Los 4 tipos de controles de privacidad son: controles de ___, controles de operaciones de ___, controles de operaciones ___ y controles ___. Deben implementarse en este orden: identificar, ___, detectar y gestionar.',
        answer: ['gestión', 'computadora', 'comerciales', 'técnicos', 'salvaguardar'],
        feedback: null,
        reference: null
    }
];