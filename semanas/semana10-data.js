// semana10-data.js — Preguntas Sesión 10: Gestión de Riesgos de TI y Metodología de Auditoría

const SEMANA10_INFO = {
    id: '10',
    title: 'Gestión de Riesgos de TI',
    subtitle: 'Análisis de riesgos, amenazas, vulnerabilidades, impactos y metodología de auditoría de sistemas',
    totalQ: 24
};

const SEMANA10_QUESTIONS = [
    // ---- V/F ----
    {
        type: 'vf',
        principle: 'Conceptos de Riesgo',
        question: 'La incidencia es la posibilidad de que ocurra una amenaza, mientras que el riesgo es la materialización de esa amenaza.',
        answer: false,
        feedback: 'FALSO. Es al revés: el RIESGO es la posibilidad de que ocurra una situación que afecte el normal desarrollo de las funciones. La INCIDENCIA es la materialización del riesgo (cuando ya ocurrió).',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Conceptos de Riesgo',
        question: 'Un riesgo existe cuando las amenazas son aplicadas a activos de información vulnerables.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta del material: un riesgo existe cuando las amenazas se aplican a activos de información vulnerables. Las amenazas junto con las vulnerabilidades hacen que el riesgo pueda convertirse en realidad.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Vulnerabilidades',
        question: 'Una vulnerabilidad es cualquier debilidad en un sistema informático que permite que las amenazas se materialicen, causando daños y pérdidas.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta de vulnerabilidad del material. Se presentan como debilidades o carencias como falta de conocimiento del usuario, tecnología inadecuada, fallas en transmisión o inexistencia de antivirus.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Vulnerabilidades',
        question: 'El nivel de vulnerabilidad solo puede clasificarse como alto o bajo, sin niveles intermedios.',
        answer: false,
        feedback: 'FALSO. El nivel de vulnerabilidad se clasifica en una escala de tres niveles: baja, media y alta.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Impactos',
        question: 'Un impacto de nivel ALTO incluye la pérdida o inhabilitación de recursos críticos, interrupción de procesos de negocio y daños a la imagen y reputación de la organización.',
        answer: true,
        feedback: 'VERDADERO. Esas son exactamente las características del impacto ALTO según el material, junto con el robo o revelación de información estratégica.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Medidas de Seguridad',
        question: 'Las medidas de seguridad pasivas se utilizan para anular o reducir el riesgo de una amenaza antes de que ocurra un incidente.',
        answer: false,
        feedback: 'FALSO. Las medidas de seguridad ACTIVAS son las que anulan o reducen el riesgo (prevención y detección). Las medidas PASIVAS reducen el IMPACTO cuando ya ocurrió el incidente, también conocidas como medidas de corrección.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Administración de Riesgos',
        question: 'Transferir el riesgo a un tercero mediante un seguro o outsourcing es una de las acciones válidas en la administración de riesgos.',
        answer: true,
        feedback: 'VERDADERO. La transferencia del riesgo a terceros es una de las 4 acciones de administración de riesgos, junto con controlar, eliminar y aceptar el riesgo. Se realiza mediante pólizas de seguros o subcontratación de proveedores especializados.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Normas ISO',
        question: 'La norma ISO/IEC 27001:2005 está relacionada con los Sistemas de Gestión de Seguridad de la Información.',
        answer: true,
        feedback: 'VERDADERO. ISO/IEC 27001:2005 es la norma de Sistemas de Gestión de Seguridad de la Información — Requisitos, una de las principales normas de seguridad de la información mencionadas en el material.',
        reference: null
    },

    // ---- DESARROLLO ----
    {
        type: 'dev',
        principle: 'Conceptos de Riesgo',
        question: 'Explica la relación entre amenaza, vulnerabilidad, riesgo e incidencia. ¿Cómo se relacionan estos 4 conceptos?',
        answer: null,
        feedback: null,
        reference: 'La relación es la siguiente: una AMENAZA es cualquier evento potencial que puede dañar un activo (accidentes, errores, actuaciones malintencionadas). Una VULNERABILIDAD es la debilidad del sistema que permite que la amenaza se materialice. El RIESGO existe cuando una amenaza se aplica a un activo vulnerable: es la posibilidad de que ocurra una situación que afecte el normal desarrollo de las funciones. La INCIDENCIA es la materialización del riesgo, es decir, cuando el daño ya ocurrió. Resumiendo: Amenaza + Vulnerabilidad = Riesgo → si ocurre = Incidencia.'
    },
    {
        type: 'dev',
        principle: 'Análisis de Riesgo',
        question: 'Explica los 5 pasos del análisis de riesgos según el material.',
        answer: null,
        feedback: null,
        reference: 'Los 5 pasos del análisis de riesgos son: (1) Determinar los activos relevantes para la organización, su interrelación y valor (qué perjuicio supondría su degradación). (2) Determinar a qué amenazas están expuestos esos activos. (3) Determinar qué salvaguardas hay dispuestas y cuán eficaces son frente al riesgo. (4) Estimar el impacto: el daño sobre el activo derivado de la materialización de la amenaza. (5) Estimar el riesgo: el impacto ponderado con la tasa de ocurrencia (expectación de materialización) de la amenaza.'
    },
    {
        type: 'dev',
        principle: 'Tipos de Amenazas',
        question: 'Explica los 3 tipos de amenazas según el grado de intencionalidad. Da 2 ejemplos de cada una.',
        answer: null,
        feedback: null,
        reference: 'Los 3 tipos son: (1) Accidentes: eventos no intencionales como averías del hardware, fallos de software, incendio e inundación. (2) Errores: equivocaciones no intencionales como errores de utilización, de explotación, de ejecución de determinados procedimientos. (3) Actuaciones malintencionadas: ataques intencionales como fraudes, robos, sabotajes e intentos de intrusión. La escala de probabilidad de ocurrencia puede ser: Muy Baja, Baja, Media, Alta y Muy Alta.'
    },
    {
        type: 'dev',
        principle: 'Recursos del Sistema',
        question: '¿Cuáles son los principales recursos del sistema que se analizan en la gestión de riesgos? Menciona y explica al menos 4.',
        answer: null,
        feedback: null,
        reference: 'Los principales recursos son: (1) Recursos de Hardware: servidores, estaciones de trabajo, ordenadores, portátiles, impresoras, escáneres y periféricos. (2) Recursos de Software: sistemas operativos, herramientas ofimáticas, software de gestión, herramientas de programación y aplicaciones a medida. (3) Elementos de Comunicaciones: hubs, switches, routers, cableado, puntos de acceso a red y líneas de comunicación exterior. (4) Información: datos almacenados, procesados y distribuidos (activo intangible). (5) Locales y oficinas donde se ubican los recursos físicos. (6) Personas que utilizan el sistema. (7) Imagen y reputación de la organización.'
    },
    {
        type: 'dev',
        principle: 'Administración de Riesgos',
        question: 'Explica las 4 acciones posibles en la administración de riesgos luego del análisis riesgo-impacto.',
        answer: null,
        feedback: null,
        reference: 'Las 4 acciones de administración de riesgos son: (1) Controlar el riesgo: fortalecer los controles existentes o agregar nuevos controles para reducir el riesgo. (2) Eliminar el riesgo: suprimir la actividad o proceso que genera el riesgo. (3) Compartir/Transferir el riesgo: mediante acuerdos contractuales traspasar el riesgo a un tercero, como seguros especializados o outsourcing de informática. (4) Aceptar el riesgo: determinar el nivel de exposición aceptable y asumir las consecuencias sin implementar controles adicionales.'
    },
    {
        type: 'dev',
        principle: 'Medidas de Seguridad',
        question: 'Explica la diferencia entre medidas de seguridad activas y pasivas, y entre defensas físicas y lógicas. Da ejemplos de cada una.',
        answer: null,
        feedback: null,
        reference: 'Medidas activas: anulan o reducen el riesgo antes del incidente. Se dividen en medidas de prevención (evitan que ocurra) y medidas de detección (identifican la amenaza). Ejemplos: firewalls, antivirus, monitoreo. Medidas pasivas: reducen el impacto cuando ya ocurrió el incidente, también llamadas medidas de corrección. Ejemplos: backups, planes de recuperación. Defensas físicas: controlan el acceso físico a recursos y condiciones ambientales (temperatura, humedad, suministro eléctrico). Defensas lógicas: protegen mediante herramientas informáticas como autenticación de usuarios, control de acceso a archivos y encriptación de datos.'
    },
    {
        type: 'dev',
        principle: 'Normas ISO',
        question: 'Menciona al menos 4 normas ISO relacionadas con gestión de riesgos y seguridad de la información del material. ¿Qué abarca cada una?',
        answer: null,
        feedback: null,
        reference: 'Las normas ISO del material son: ISO 31000:2009: Gestión del Riesgo — Principios y Directrices. ISO/IEC 31010:2009: Gestión del riesgo — Técnicas de apreciación del riesgo. ISO/IEC 27001:2005: Sistemas de Gestión de Seguridad de la Información — Requisitos. ISO/IEC 27002:2005: Código de buenas prácticas de gestión de la seguridad de la información. ISO/IEC 27005:2011: Gestión de riesgos de seguridad de la información. ISO 22301:2012: Sistemas de gestión de la continuidad de negocio. ISO/IEC 20000-1:2011 y 20000-2:2012: Gestión de servicios de TI.'
    },
    {
        type: 'dev',
        principle: 'Impactos',
        question: 'Explica los 3 niveles de impacto (Alto, Moderado y Bajo) con sus características según el material.',
        answer: null,
        feedback: null,
        reference: 'Los 3 niveles de impacto son: ALTO: pérdida o inhabilitación de recursos críticos, interrupción de procesos de negocio, daños a la imagen y reputación de la organización, robo o revelación de información estratégica. MODERADO: pérdida de recursos críticos con elementos de respaldo disponibles, caída notable del rendimiento de procesos de negocio, robo o revelación de información confidencial no estratégica. BAJO: pérdida o inhabilitación de recursos secundarios, disminución del rendimiento de procesos de negocio, robo o revelación de información interna no publicada.'
    },

    // ---- CASOS ----
    {
        type: 'caso',
        principle: 'Análisis de Riesgo',
        question: 'CASO PRÁCTICO (del material): Activo: Servidor de ficheros. Amenaza: Fallo de hardware con probabilidad BAJA. Vulnerabilidad: ALTA (no hay servidor alternativo ni discos RAID). Impacto: Indisponibilidad de 24 horas.\n\nDetermina el nivel de riesgo y justifica qué acciones de administración de riesgos recomendarías.',
        answer: null,
        feedback: null,
        reference: 'Nivel de riesgo: ALTO, porque aunque la probabilidad de la amenaza es baja, la vulnerabilidad es alta (sin redundancia) y el impacto es alto (24 horas de indisponibilidad). Probabilidad baja + Vulnerabilidad alta + Impacto alto = Riesgo alto. Acciones recomendadas: (1) Controlar el riesgo: implementar discos RAID para redundancia, adquirir servidor alternativo de respaldo. (2) Medidas de seguridad activas: monitoreo preventivo del hardware. (3) Medidas de seguridad pasivas: backups regulares y plan de recuperación ante desastres. (4) Evaluar si transferir parcialmente el riesgo mediante seguro o contrato de mantenimiento con proveedor.'
    },
    {
        type: 'caso',
        principle: 'Administración de Riesgos',
        question: 'CASO: La empresa FINDATA S.A. identificó 3 riesgos: (1) Probabilidad alta de ataque de phishing al personal. (2) Probabilidad muy baja de terremoto pero impacto crítico. (3) Un sistema legacy con vulnerabilidades conocidas que es demasiado costoso actualizar.\n\n¿Qué acción de administración de riesgos (controlar, eliminar, transferir, aceptar) recomendarías para cada uno? Justifica.',
        answer: null,
        feedback: null,
        reference: 'Riesgo 1 (phishing, probabilidad alta): CONTROLAR — implementar capacitación al personal, filtros de correo, autenticación multifactor y simulacros de phishing para reducir la probabilidad e impacto. Riesgo 2 (terremoto, baja probabilidad, impacto crítico): TRANSFERIR — contratar póliza de seguros especializada y/o establecer un plan de continuidad de negocio. La baja probabilidad no justifica el costo de eliminarlo pero el impacto crítico obliga a protegerse. Riesgo 3 (sistema legacy costoso de actualizar): ACEPTAR — determinar el nivel de exposición aceptable, documentar la decisión y compensar con controles adicionales (monitoreo intensivo, acceso restringido) mientras se planifica la migración.'
    },
    {
        type: 'caso',
        principle: 'Vulnerabilidades e Impactos',
        question: 'CASO: MEDICALTECH S.A. tiene su base de datos de pacientes sin cifrado, sin backups automatizados y con contraseñas que nunca se cambian. Un atacante accede y roba toda la información.\n\nIdentifica las vulnerabilidades, la amenaza, el nivel de impacto y las salvaguardas que deberían implementarse.',
        answer: null,
        feedback: null,
        reference: 'Vulnerabilidades: base de datos sin cifrado (nivel alto), sin backups automatizados (nivel alto), contraseñas sin cambios periódicos (nivel medio/alto). Amenaza: actuación malintencionada — robo de información (intrusión externa). Nivel de impacto: ALTO — robo de información estratégica (datos de pacientes), posibles daños a imagen y reputación, posible interrupción de procesos. Salvaguardas a implementar: (1) Cifrado de datos en la base de datos. (2) Política de contraseñas con cambios periódicos y complejidad. (3) Backups automáticos periódicos. (4) Control de acceso con niveles de privilegio. (5) Monitoreo y auditoría constante de accesos. (6) Autenticación de dos factores.'
    },

    // ---- COMPLETAR ----
    {
        type: 'completar',
        principle: 'Conceptos de Riesgo',
        question: 'El ___ es la posibilidad de que una amenaza se materialice sobre una vulnerabilidad. La ___ es la materialización del riesgo. Las amenazas junto con las ___ hacen que el riesgo pueda convertirse en realidad.',
        answer: ['riesgo|Riesgo', 'incidencia|Incidencia', 'vulnerabilidades'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Medidas de Seguridad',
        question: 'Las medidas de seguridad ___ anulan o reducen el riesgo antes del incidente (prevención y detección). Las medidas de seguridad ___ reducen el impacto cuando ya ocurrió el incidente y también se llaman medidas de ___.',
        answer: ['activas', 'pasivas', 'corrección'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Administración de Riesgos',
        question: 'Las 4 acciones en la administración de riesgos son: ___ el riesgo fortaleciendo controles, ___ el riesgo suprimiendo la actividad, ___ el riesgo a un tercero mediante seguros, y ___ el riesgo determinando el nivel de exposición.',
        answer: ['Controlar|controlar', 'Eliminar|eliminar', 'Transferir|transferir|Compartir|compartir', 'Aceptar|aceptar'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Impactos',
        question: 'El impacto ___ incluye pérdida de recursos críticos e interrupción de procesos de negocio. El impacto ___ incluye caída notable del rendimiento. El impacto ___ incluye pérdida de recursos secundarios.',
        answer: ['Alto|alto', 'Moderado|moderado', 'Bajo|bajo'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Normas ISO',
        question: 'La norma ___ establece los requisitos para los Sistemas de Gestión de Seguridad de la Información. La norma ___ define los principios y directrices de Gestión del Riesgo. La norma ___ aborda la gestión de riesgos de seguridad de la información.',
        answer: ['ISO/IEC 27001|27001', 'ISO 31000|31000', 'ISO/IEC 27005|27005'],
        feedback: null,
        reference: null
    }
];