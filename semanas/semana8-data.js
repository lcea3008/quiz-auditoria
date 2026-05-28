// semana8-data.js — Preguntas Sesión 8: Seguridad Física, Ambiental y Data Center

const SEMANA8_INFO = {
    id: '8',
    title: 'Seguridad Física, Ambiental y Data Center',
    subtitle: 'Controles físicos, amenazas, protección perimetral, incendios y layout del centro de cómputo',
    totalQ: 24
};

const SEMANA8_QUESTIONS = [
    // ---- V/F ----
    {
        type: 'vf',
        principle: 'Amenazas de Seguridad Física',
        question: 'Los terremotos, inundaciones y tormentas eléctricas son consideradas amenazas internas según la clasificación del material.',
        answer: false,
        feedback: 'FALSO. Los terremotos, inundaciones, tormentas eléctricas y huracanes son amenazas EXTERNAS. Las amenazas internas incluyen inundaciones internas, fuegos internos, fallas ambientales y fallas eléctricas dentro de la instalación.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Amenazas de Seguridad Física',
        question: 'El robo, espionaje y vandalismo son clasificados como amenazas humanas en el contexto de seguridad física.',
        answer: true,
        feedback: 'VERDADERO. Las amenazas humanas incluyen robo, espionaje, vandalismo y fallas involuntarias del personal.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Protección Perimetral',
        question: 'Las cercas perimetrales son suficientes por sí solas para detener a un intruso determinado que quiera ingresar a una instalación.',
        answer: false,
        feedback: 'FALSO. Según el material, las cercas sirven para frenar a un intruso casual y complementar otros controles de acceso, pero NO detienen a un intruso determinado. Deben combinarse con otros controles.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Sistema Contra Incendio',
        question: 'Un incendio Clase C involucra equipos eléctricos energizados como aparatos eléctricos, interruptores y tableros eléctricos.',
        answer: true,
        feedback: 'VERDADERO. La Clase C involucra exactamente esos equipos: aparatos eléctricos, interruptores, paneles y tableros eléctricos energizados.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Sistema Contra Incendio',
        question: 'La prevención de incendios consiste únicamente en contar con extintores y rociadores automáticos en las instalaciones.',
        answer: false,
        feedback: 'FALSO. La prevención consiste en el entrenamiento del personal para enfrentar contingencias de fuego, suministrar el equipamiento correcto y asegurar que se responda en orden según los procedimientos establecidos. No es solo equipamiento.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Energía Eléctrica',
        question: 'Un UPS (Uninterruptible Power Supply) es una fuente de electricidad de backup que garantiza la continuidad del suministro eléctrico ante cortes.',
        answer: true,
        feedback: 'VERDADERO. El UPS es parte de la electricidad de backup junto con fuentes de alimentación alternas y generadores de energía eléctrica.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Controles de Personal',
        question: 'Las revisiones pre-contratación incluyen verificación de antecedentes penales, policiales, laborales y educativos.',
        answer: true,
        feedback: 'VERDADERO. Los controles de personal en pre-contratación incluyen revisión de antecedentes penales, policiales, laborales, educativos y de otras empresas, además de investigación financiera si es necesario.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Data Center',
        question: 'Los ataques DoS y DDoS pueden causar fallas en el acceso o disponibilidad de la información en un Data Center.',
        answer: true,
        feedback: 'VERDADERO. Según el material, las fallas de acceso y disponibilidad en Data Centers ocurren comúnmente por errores de configuración, mal funcionamiento de equipos, o ataques DoS, DDoS y tipos de malware.',
        reference: null
    },

    // ---- DESARROLLO ----
    {
        type: 'dev',
        principle: 'Amenazas de Seguridad Física',
        question: 'Explica los 3 tipos de amenazas de seguridad física según el material y da 2 ejemplos de cada una.',
        answer: null,
        feedback: null,
        reference: 'Los 3 tipos son: (1) Amenazas Externas: provienen del exterior, como fuego, terremotos, inundaciones, tormentas eléctricas, hielo, huracanes y maremotos. (2) Amenazas Internas: ocurren dentro de la instalación, como inundaciones internas, fuegos internos, fallas ambientales y fallas eléctricas. (3) Amenazas Humanas: generadas por personas, como robo, espionaje, vandalismo y fallas involuntarias del personal.'
    },
    {
        type: 'dev',
        principle: 'Protección Perimetral',
        question: '¿Qué es la protección perimetral y por qué se considera "la primera línea de defensa"? Menciona al menos 4 elementos que la componen.',
        answer: null,
        feedback: null,
        reference: 'La protección perimetral es el conjunto de medidas que protegen la red y los sistemas de accesos no autorizados desde el exterior. Se considera la primera línea de defensa porque es el primer obstáculo que debe superar cualquier intruso antes de acceder a los activos. Sus elementos incluyen: cercas (frenan intrusos casuales y complementan otros controles), iluminación en entradas, estacionamiento y áreas críticas, sistemas de detección perimetral (proximidad, fotométrico, acústico), CCTV (circuito cerrado de televisión), puestos de control de acceso, patrullas de seguridad, y sistemas de alarma.'
    },
    {
        type: 'dev',
        principle: 'Sistema Contra Incendio',
        question: 'Explica las 4 clases de fuego según el material. ¿Qué importancia tiene conocerlas para un auditor de sistemas?',
        answer: null,
        feedback: null,
        reference: 'Las 4 clases de fuego son: Clase A: materiales combustibles sólidos como madera, papel, tela y plásticos. Clase B: materiales combustibles líquidos inflamables como gasolina, kerosene, pintura y aceites. Clase C: equipos eléctricos energizados como aparatos eléctricos, interruptores, paneles y tableros eléctricos. Clase D: metales combustibles como magnesio, titanio, potasio y sodio. Para el auditor es importante porque le permite verificar que los extintores y sistemas de supresión correctos estén disponibles para cada tipo de fuego, ya que usar el agente incorrecto puede agravar el incendio.'
    },
    {
        type: 'dev',
        principle: 'Sistema Contra Incendio',
        question: 'Explica los 3 métodos del sistema contra incendio: prevención, detección y supresión.',
        answer: null,
        feedback: null,
        reference: 'Los 3 métodos son: (1) Prevención: entrenamiento del personal para enfrentar contingencias de fuego, suministrar el equipamiento correcto y asegurar que se responda en orden según los procedimientos establecidos. (2) Detección: identificar el fuego antes de que cause daños mayores, ya que destruye hardware, datos y expone vidas humanas. Ejemplos de detectores: botón de alarma, detectores de humo, detectores de temperatura. (3) Supresión: toda acción y equipamiento orientado a apagar o suprimir el fuego en un incendio una vez detectado.'
    },
    {
        type: 'dev',
        principle: 'Layout del Centro de Cómputo',
        question: '¿Qué es el Layout del centro de cómputo y qué aspectos considera? Menciona al menos 5 elementos.',
        answer: null,
        feedback: null,
        reference: 'El Layout del centro de cómputo es la distribución y organización física de equipos, oficinas o áreas dentro de la instalación para mejorar el orden, la seguridad y la eficiencia. Considera: acceso al equipamiento, almacenamiento, áreas ocupadas por equipos y personas, fuentes y tuberías de agua, cableado estructurado de datos y energía, diagramas unifilares de energía, y tableros eléctricos con leyenda de energía.'
    },
    {
        type: 'dev',
        principle: 'Controles de Personal',
        question: 'Explica los controles de personal que debe aplicar una organización. Menciona al menos 5 medidas del material.',
        answer: null,
        feedback: null,
        reference: 'Los controles de personal incluyen: revisiones pre-contratación (antecedentes penales, policiales, laborales, educativos), investigación financiera si es necesario, evaluación con escenarios de preguntas, seguimiento continuo a empleados, separación de deberes y responsabilidades, rotación de trabajo, revisiones post-contratación, bloqueo de contraseñas y baja de servicios de empleados que cesan funciones, y acuerdos de confidencialidad con empleados y outsourcing.'
    },
    {
        type: 'dev',
        principle: 'Energía Eléctrica',
        question: '¿Qué controles de energía eléctrica debe tener un centro de cómputo? Menciona los controles principales y la electricidad de backup.',
        answer: null,
        feedback: null,
        reference: 'Los controles de energía eléctrica incluyen: circuitos dedicados, acceso controlado a paneles de distribución y conmutadores, controles de apagado de emergencia, monitoreo y grabación de voltaje, protección contra picos de tensión, y mantenimiento de pozos a tierra. Para electricidad de backup: fuentes de alimentación alternas, UPS (Uninterruptible Power Supply), generadores de energía eléctrica con consideraciones de combustible y mantenimiento, e iluminación de emergencia.'
    },
    {
        type: 'dev',
        principle: 'Controles Administrativos',
        question: 'Explica los procedimientos de respuesta a emergencias que debe tener una organización según el material.',
        answer: null,
        feedback: null,
        reference: 'Los procedimientos de respuesta a emergencias incluyen: procedimientos de evacuación del personal, shutdown (apagado) controlado de sistemas, entrenamiento y capacitación del personal, procedimientos documentados fácilmente accesibles para diferentes tipos de emergencias, y pruebas periódicas de los equipos. El objetivo es garantizar que ante cualquier contingencia el personal sepa exactamente cómo actuar de forma organizada.'
    },
    {
        type: 'dev',
        principle: 'Data Center — Problemáticas',
        question: 'Describe las 4 principales problemáticas y riesgos de un Data Center según el material.',
        answer: null,
        feedback: null,
        reference: 'Las 4 principales problemáticas son: (1) Siempre en la mira de cibercriminales: los Data Centers son infraestructuras críticas de alto valor, lo que los convierte en objetivo principal de ataques. (2) Vulnerabilidades, malware y cambios no autorizados: como todo sistema informático tienen vulnerabilidades explotables y son propensos a malware si no tienen medidas de seguridad adecuadas. (3) Fallas en el acceso o disponibilidad de la información: causadas por errores de configuración, mal funcionamiento de equipos o ataques DoS/DDoS. (4) Deterioro, mal funcionamiento y defectos de equipos: especialmente en Data Centers On-Premise por uso, factores climáticos y falta de mantenimiento adecuado.'
    },

    // ---- CASOS ----
    {
        type: 'caso',
        principle: 'Amenazas de Seguridad Física',
        question: 'CASO: El centro de datos de FINTECH S.A. está ubicado en una zona sísmica, tiene ventanas sin protección, no cuenta con detectores de humo y el personal no conoce los procedimientos de evacuación.\n\n¿Qué amenazas enfrenta y qué controles específicos del material recomendarías implementar?',
        answer: null,
        feedback: null,
        reference: 'Amenazas: externos (terremotos por zona sísmica), internos (fuego por falta de detectores) y humanas (fallas involuntarias por falta de capacitación). Controles recomendados: (1) Para zona sísmica: reforzar estructura física, considerar ubicación y proximidad a riesgos naturales en los requerimientos adicionales. (2) Para ventanas sin protección: instalar protección en ventanas como parte de la administración de facilidades. (3) Para falta de detectores: instalar detectores de humo, temperatura y sistema contra incendio con prevención, detección y supresión. (4) Para personal sin capacitación: implementar procedimientos de evacuación documentados, entrenamiento y capacitación, y pruebas periódicas de equipos.'
    },
    {
        type: 'caso',
        principle: 'Controles de Acceso Físico',
        question: 'CASO: Una empresa descubre que personas no autorizadas han ingresado al centro de cómputo en horarios nocturnos. Al revisar los logs, no hay registro de accesos y las cámaras no funcionaban.\n\n¿Qué controles del material debería haber tenido implementados? ¿Qué auditaría para verificar el acceso físico?',
        answer: null,
        feedback: null,
        reference: 'Controles que debería tener: tarjetas de acceso codificadas digitalmente o con banda magnética, dispositivos biométricos, CCTV funcional con monitoreo, puestos de control de acceso, iluminación en entradas y áreas críticas, y detección de intrusos perimetral. Para auditar el acceso físico se debe verificar: fecha y hora de acceso, User ID usado para acceder, accesos denegados en horarios no autorizados, y modificaciones de acceso y privilegios. También revisar bitácoras o registros manuales e identificación visible del personal.'
    },
    {
        type: 'caso',
        principle: 'Sistema Contra Incendio',
        question: 'CASO: En el servidor principal de DATASYSTEMS S.A. se originó un incendio por un cortocircuito en los tableros eléctricos. El personal intentó apagarlo con agua, lo que empeoró la situación.\n\n¿Qué clase de fuego fue? ¿Qué errores cometió el personal y qué deberían haber hecho según el material?',
        answer: null,
        feedback: null,
        reference: 'Fue un incendio Clase C (equipos eléctricos energizados: tableros eléctricos). Errores del personal: usar agua en un incendio eléctrico es incorrecto y peligroso porque conduce la electricidad y puede empeorar el incendio y causar electrocución. Lo correcto según el material: (1) Prevención: el personal debería estar entrenado para identificar el tipo de fuego y usar el agente correcto. (2) Detección: los detectores de humo y temperatura deberían haber alertado antes. (3) Supresión: usar el extintor adecuado para Clase C (dióxido de carbono o agente limpio, no agua). Además deberían seguir los procedimientos de evacuación documentados y el shutdown controlado de sistemas.'
    },

    // ---- COMPLETAR ----
    {
        type: 'completar',
        principle: 'Sistema Contra Incendio',
        question: 'Las 3 etapas del sistema contra incendio son: ___, que consiste en entrenar al personal; ___, que identifica el fuego mediante detectores; y ___, que apaga el fuego.',
        answer: ['Prevención|prevención', 'Detección|detección', 'Supresión|supresión'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Clases de Fuego',
        question: 'El fuego Clase ___ involucra materiales sólidos como madera, el Clase ___ involucra líquidos inflamables, el Clase ___ involucra equipos eléctricos y el Clase ___ involucra metales combustibles.',
        answer: ['A', 'B', 'C', 'D'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Energía Eléctrica',
        question: 'El ___ es un sistema de alimentación ininterrumpida que garantiza el suministro eléctrico ante cortes. Las cercas perimetrales sirven para frenar a un intruso ___ pero no detienen a un intruso ___.',
        answer: ['UPS', 'casual', 'determinado'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Amenazas de Seguridad Física',
        question: 'Las amenazas de seguridad física se clasifican en 3 tipos: ___, que incluye terremotos y huracanes; ___, que incluye fallas eléctricas internas; y ___, que incluye robo y vandalismo.',
        answer: ['Externas|externas', 'Internas|internas', 'Humanas|humanas'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Controles de Personal',
        question: 'Los controles de personal incluyen revisiones ___ con verificación de antecedentes, ___ de deberes para evitar fraudes, ___ de trabajo para reducir riesgos, y acuerdos de ___ con empleados.',
        answer: ['pre-contratación|precontratación', 'Segregación|separación', 'Rotación|rotación', 'confidencialidad'],
        feedback: null,
        reference: null
    }
];