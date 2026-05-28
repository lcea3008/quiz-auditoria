// lectura9-data.js — Preguntas Lectura Semana 9: Gerencia Integral y Planeación Estratégica

const LECTURA9_INFO = {
    id: '9L',
    title: 'Lectura Semana 9 — Gerencia Integral y Planeación Estratégica',
    subtitle: 'Modelo ARPA, 10 escuelas de Mintzberg, pensamiento estratégico y competitividad organizacional',
    totalQ: 20
};

const LECTURA9_QUESTIONS = [
    // ---- V/F ----
    {
        type: 'vf',
        principle: 'Gerencia Integral',
        question: 'La gerencia integral es el sistema que planea, direcciona, ejecuta y controla las metas fundamentales en todos los niveles de la organización, promoviendo relación armónica entre estrategia, estructura y cultura.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta de gerencia integral del artículo, que además se basa en promover una relación armónica entre la estrategia, la estructura y la cultura organizacional.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Modelo ARPA',
        question: 'El modelo ARPA se estructura cruzando 3 Ciclos de Acción con 5 Niveles Jerárquicos, siendo sus ciclos: Análisis, Planificación y Control.',
        answer: true,
        feedback: 'VERDADERO. Los 3 ciclos son: Ciclo de Análisis (Perspectiva), Ciclo de Planificación (Posición) y Ciclo de Control (Desempeño). Los 5 niveles son: Corporativo, De negocios, Funcional, Operacional y Vinculados/Stakeholders.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Escuelas de Mintzberg',
        question: 'La Escuela de Diseño de Mintzberg es la que aporta la herramienta de la Cadena de Valor con sus 9 actividades estratégicas.',
        answer: false,
        feedback: 'FALSO. La Cadena de Valor es el aporte de la ESCUELA DE POSICIONAMIENTO (apoyada en Michael Porter). La Escuela de DISEÑO aporta la matriz DOFA, que el modelo ARPA exige que sea estrictamente participativa.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Escuelas de Mintzberg',
        question: 'La Escuela de Aprendizaje afirma que las estrategias surgen sobre la marcha (estrategias emergentes), basándose en el incrementalismo desarticulado de Lindblom.',
        answer: true,
        feedback: 'VERDADERO. La Escuela de Aprendizaje afirma exactamente eso: las estrategias emergen sobre la marcha. Se basa en Lindblom e incorpora tres subteorías: creación de conocimiento de Nonaka y Takeuchi, capacidades dinámicas de Prahalad y Hamel, y teoría del caos de Stacey/Nonaka.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Pensamiento Estratégico',
        question: 'La "intuición estratégica" según Gladwell y Duggan se basa principalmente en un sentimiento instintivo e inmediato del gerente.',
        answer: false,
        feedback: 'FALSO. Según Gladwell y Duggan, la intuición estratégica permite hacer conexiones nuevas en la mente para enfrentar situaciones desconocidas, pero está basada más en el PENSAMIENTO Y LA EXPERIENCIA que en un simple sentimiento.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Cadena de Valor — Porter',
        question: 'Según la Escuela de Posicionamiento, las actividades primarias de la Cadena de Valor incluyen: Logística de entrada, Operaciones, Logística de salida, Mercadeo y ventas, y Servicios.',
        answer: true,
        feedback: 'VERDADERO. Esas son exactamente las 5 actividades primarias de la Cadena de Valor de Porter. Las actividades de apoyo son: Infraestructura, Recursos humanos, Desarrollo tecnológico y Compras.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Competitividad',
        question: 'Según Drucker, la competitividad es únicamente una aptitud técnica para mantener la preferencia del cliente.',
        answer: false,
        feedback: 'FALSO. Según Drucker, la competitividad tiene dos dimensiones: es una ACTITUD (para visualizar oportunidades y amenazas) Y una APTITUD (para mantener la preferencia del cliente). No es solo aptitud técnica.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Escuelas de Mintzberg',
        question: 'La Escuela de la Configuración es la que integra los aportes de las 9 escuelas anteriores y concibe la estrategia como un proceso de transformación entre periodos de estabilidad y momentos de ruptura.',
        answer: true,
        feedback: 'VERDADERO. La Escuela de la Configuración es la décima escuela y la integradora: recoge los aportes de todas las anteriores y ve la estrategia como transformación que ocurre entre estabilidad y ruptura, dependiendo del estado de madurez de la empresa.',
        reference: null
    },

    // ---- DESARROLLO ----
    {
        type: 'dev',
        principle: 'Modelo ARPA',
        question: 'Explica el Modelo ARPA: qué significa el nombre, cómo se estructura y cuál es su objetivo principal.',
        answer: null,
        feedback: null,
        reference: 'ARPA son las iniciales de los apellidos de sus autores: Arbeláez, Román y Patiño. Su objetivo es alinear y beneficiar a los stakeholders mediante contratos sociales, brindando una visión holística de la gerencia. Se estructura en una matriz que cruza 3 Ciclos de Acción: Ciclo de Análisis (Perspectiva), Ciclo de Planificación (Posición) y Ciclo de Control (Desempeño), con 5 Niveles Jerárquicos: Corporativo, De negocios, Funcional, Operacional y Vinculados/Grupos de interés (Stakeholders).'
    },
    {
        type: 'dev',
        principle: 'Pensamiento Estratégico — 5 Habilidades',
        question: 'Explica las 5 habilidades fundamentales del pensamiento estratégico que debe poseer un gerente.',
        answer: null,
        feedback: null,
        reference: 'Las 5 habilidades son: (1) Enfoque Sistémico: abandonar la visión lineal y entender la organización como un sistema vivo, abierto y complejo, enfocado en crear valor para todos los stakeholders. (2) Capacidad de Análisis y Síntesis: el análisis desagrega las partes de un todo para conocerlas; la síntesis las ensambla globalmente para comprenderlas. (3) Creatividad: mantener mente abierta para aprovechar el entorno, generar innovaciones y romper paradigmas. (4) Intuición: capacidad de hacer conexiones nuevas en la mente basada en pensamiento y experiencia, no en simple sentimiento. (5) Capacidad para visualizar el futuro: cristalizar un sentido de dirección, comunicarlo con urgencia y articular los pasos concretos para alcanzarlo.'
    },
    {
        type: 'dev',
        principle: 'Escuelas de Mintzberg — Selección',
        question: 'Explica el aporte principal de las siguientes 4 escuelas de Mintzberg: Empresarial, Cultural, Posicionamiento y Diseño.',
        answer: null,
        feedback: null,
        reference: 'Escuela Empresarial: se centra en el talento e intuición del líder; aporta la creación de la visión como inspiración mental que guía a la organización. Escuela Cultural: plantea la estrategia como proceso colectivo social; aporta el concepto de "organización sana" (decisiones éticas para mejorar la sociedad) y el rol de mitos, símbolos y valores. Escuela de Posicionamiento: apoyada en Michael Porter; aporta la Cadena de Valor con 9 actividades (5 primarias: logística entrada, operaciones, logística salida, mercadeo y ventas, servicios; 4 de apoyo: infraestructura, RRHH, desarrollo tecnológico, compras). Escuela de Diseño: aporta la matriz DOFA, que el modelo ARPA exige que sea estrictamente participativa para evitar visión sesgada.'
    },
    {
        type: 'dev',
        principle: 'Escuelas de Mintzberg — Selección 2',
        question: 'Explica el aporte principal de las siguientes 4 escuelas de Mintzberg: Cognitiva, Planificación, Aprendizaje y Poder.',
        answer: null,
        feedback: null,
        reference: 'Escuela Cognitiva: estudia la mente del estratega (basada en Simon y Makridakis); aplica los tipos psicológicos de Carl Jung para entender cómo el líder toma decisiones con sesgos y ayudar a romper paradigmas. Escuela de Planificación: basada en Ansoff; aporta el orden y desglose de metas en jerarquía de objetivos, presupuestos y tareas, sustentando que "la estrategia precede a la estructura". Escuela de Aprendizaje: afirma que las estrategias surgen sobre la marcha (emergentes), basada en Lindblom; incorpora creación de conocimiento de Nonaka/Takeuchi, capacidades dinámicas de Prahalad/Hamel y teoría del caos de Stacey. Escuela de Poder: ve la estrategia como negociación; aporta análisis de micropoder (conflictos internos) y macropoder (dominio sobre entorno externo).'
    },
    {
        type: 'dev',
        principle: 'Modelo Kaplan y Norton',
        question: 'Explica las 4 dimensiones del modelo de Kaplan y Norton (Mapas Estratégicos) y qué incluye cada una.',
        answer: null,
        feedback: null,
        reference: 'Las 4 dimensiones son: (1) Financiera: incrementar ingresos/utilidades y disminuir costos. (2) Comercial: participación de mercado, oferta de valor y satisfacción del cliente. (3) Procesos: rediseñar productos, mejorar servicio y optimizar procesos internos. (4) Humana: competencias de servicio, habilidad para innovar y capacidad de aprender. Este modelo integra estas cuatro perspectivas para lograr una visión holística del desempeño organizacional.'
    },
    {
        type: 'dev',
        principle: 'Acrópolis de la Competitividad',
        question: 'Explica el modelo "La Acrópolis de la Competitividad" de Rivera. ¿Qué representa cada parte del templo?',
        answer: null,
        feedback: null,
        reference: 'Rivera visualiza la empresa como un templo griego con 3 partes: La Base: movilización de inteligencias, aprendizaje organizacional e innovación (el fundamento de todo). Los Pilares: tiempo de respuesta, costo, calidad y servicio (los elementos que sostienen la competitividad). La Cúspide (resultados): ventas, utilidades, rentabilidad, crecimiento, EVA (Valor Económico Agregado) y satisfacción del cliente. La metáfora del templo indica que sin una base sólida (aprendizaje e innovación) y pilares fuertes (calidad, costo, servicio), no se pueden alcanzar los resultados de la cúspide.'
    },
    {
        type: 'dev',
        principle: 'Conclusiones — Retos Gerenciales',
        question: 'Según las conclusiones del artículo, ¿cuáles son los 4 principales retos de la gerencia integral moderna?',
        answer: null,
        feedback: null,
        reference: 'Los 4 retos principales son: (1) El trabajador como capital principal: las empresas deben garantizar la calidad de vida laboral, el desarrollo y una gestión óptima del talento humano. (2) Aprendizaje y flexibilidad: las organizaciones requieren estructuras flexibles y deben enmarcar el aprendizaje continuo como su activo fundamental para generar innovación. (3) Competitividad (Drucker): es una actitud (visualizar oportunidades y amenazas) y una aptitud (mantener la preferencia del cliente). (4) Rol gerencial: la alta gerencia debe cambiar su conducta mental, liderar con actitud de servicio y promover diálogos para irradiar la transformación cultural a toda la organización mediante procesos pedagógicos.'
    },

    // ---- CASOS ----
    {
        type: 'caso',
        principle: 'Modelo ARPA — Aplicación',
        question: 'CASO: La empresa ALIMENTOS S.A. hace su análisis DOFA solo con los 3 directivos de la empresa, sin consultar a empleados ni grupos de interés externos. El resultado es un plan estratégico que no refleja los problemas reales del área operativa.\n\n¿Qué escuela de Mintzberg y qué principio del modelo ARPA se violó? ¿Qué debería hacer la empresa?',
        answer: null,
        feedback: null,
        reference: 'Se violó el principio de la Escuela de Diseño según el modelo ARPA: el artículo exige que la matriz DOFA sea estrictamente PARTICIPATIVA, involucrando a empleados y stakeholders para evitar una visión sesgada o limitada de la gerencia. También se ignora el aporte de la Escuela Cultural (estrategia como proceso colectivo social). Lo que debería hacer: aplicar el DOFA participativo con empleados de todos los niveles jerárquicos del modelo ARPA (corporativo, negocios, funcional, operacional) y grupos de interés externos (vinculados/stakeholders), garantizando una visión holística y no sesgada del entorno y la organización.'
    },
    {
        type: 'caso',
        principle: 'Pensamiento Estratégico',
        question: 'CASO: El gerente de TECNORED S.A. toma todas las decisiones estratégicas solo, sin analizar el entorno, sin consultar al equipo y basándose únicamente en su intuición inmediata. La empresa pierde cuota de mercado cada año.\n\n¿Qué habilidades del pensamiento estratégico le faltan? ¿Qué escuelas de Mintzberg le ayudarían a mejorar?',
        answer: null,
        feedback: null,
        reference: 'Habilidades que le faltan: (1) Enfoque Sistémico: no ve la organización como sistema complejo ni considera a los stakeholders. (2) Capacidad de Análisis y Síntesis: no analiza las partes del entorno para comprenderlas globalmente. (3) Capacidad para visualizar el futuro: no cristaliza un sentido de dirección comunicable. (4) Intuición correcta: confunde "intuición estratégica" (basada en pensamiento y experiencia según Gladwell/Duggan) con simple sentimiento. Escuelas que le ayudarían: Escuela Cognitiva (entender sus propios sesgos mediante tipos psicológicos de Jung), Escuela Ambiental (adaptarse a las fuerzas del entorno para no ser "seleccionado negativamente"), Escuela de Planificación (ordenar metas en jerarquía de objetivos) y Escuela de Diseño (aplicar DOFA participativa para ver el entorno con más perspectivas).'
    },

    // ---- COMPLETAR ----
    {
        type: 'completar',
        principle: 'Modelo ARPA',
        question: 'ARPA son las iniciales de los apellidos de sus autores: ___, Román y ___. Sus 3 ciclos son: Ciclo de ___ (Perspectiva), Ciclo de ___ (Posición) y Ciclo de ___ (Desempeño).',
        answer: ['Arbeláez', 'Patiño', 'Análisis', 'Planificación', 'Control'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Escuelas de Mintzberg',
        question: 'La Escuela de ___ aporta la Cadena de Valor de Porter. La Escuela de ___ aporta la matriz DOFA participativa. La Escuela de ___ integra las 9 escuelas anteriores. La Escuela de ___ afirma que las estrategias surgen sobre la marcha.',
        answer: ['Posicionamiento', 'Diseño', 'Configuración', 'Aprendizaje'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Cadena de Valor — Porter',
        question: 'Las 5 actividades PRIMARIAS de la Cadena de Valor son: Logística de ___, ___, Logística de ___, Mercadeo y ___, y Servicios. Las actividades de APOYO incluyen: Infraestructura, Recursos ___, Desarrollo ___ y Compras.',
        answer: ['entrada', 'Operaciones', 'salida', 'ventas', 'humanos', 'tecnológico'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Competitividad y Acrópolis',
        question: 'Según Drucker, la competitividad es una ___ (visualizar oportunidades) y una ___ (mantener la preferencia del cliente). En la Acrópolis de Rivera, los pilares son: tiempo de respuesta, ___, ___ y servicio.',
        answer: ['actitud', 'aptitud', 'costo', 'calidad'],
        feedback: null,
        reference: null
    }
];