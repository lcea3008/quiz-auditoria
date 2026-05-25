// semana5-data.js — Preguntas Sesión 5: Principios Deontológicos del Auditor

const SEMANA5_INFO = {
  id: '5',
  title: 'Principios Deontológicos del Auditor',
  subtitle: 'Normas profesionales y principios éticos aplicables a los auditores de sistemas',
  totalQ: 26
};

const SEMANA5_QUESTIONS = [
  {
    type: 'vf',
    principle: 'Beneficio del Auditado',
    question: 'El Principio de Beneficio del Auditado implica que el auditor debe priorizar los intereses del auditado por encima de las leyes y regulaciones vigentes cuando estas entren en conflicto.',
    answer: false,
    feedback: 'FALSO. El auditor vela por los mejores intereses del auditado, pero siempre dentro del marco ético y legal. No puede violar leyes o normas en nombre del "beneficio" del cliente. El principio exige proteger los activos e integridad de la organización auditada de forma ética y profesional.',
    reference: null
  },
  {
    type: 'dev',
    principle: 'Calidad',
    question: '¿Qué implica el Principio de Calidad para el auditor de sistemas? ¿Cómo se relaciona con su responsabilidad profesional hacia el auditado?',
    answer: null,
    feedback: null,
    reference: 'El Principio de Calidad implica que el auditor debe ejecutar su trabajo con alto nivel de excelencia técnica y metodológica, entregando resultados confiables, rigurosos y útiles para el auditado. Se relaciona directamente con la responsabilidad profesional porque el auditado confía en las recomendaciones del auditor para tomar decisiones críticas, y una auditoría de baja calidad puede generar daños graves en la organización.'
  },
  {
    type: 'vf',
    principle: 'Capacidad',
    question: 'Según el Principio de Capacidad, los auditados pueden tener dificultades para evaluar las recomendaciones del auditor debido al alto grado de especialización técnica que este posee.',
    answer: true,
    feedback: 'VERDADERO. El Principio de Capacidad reconoce que los auditados no siempre pueden verificar la calidad del trabajo del auditor por la especialización técnica. Por eso la competencia real del auditor es esencial y éticamente obligatoria: su autonomía en la toma de decisiones debe respaldarse con capacitación y calificación real.',
    reference: null
  },
  {
    type: 'caso',
    principle: 'Cautela',
    question: 'CASO: La auditora María, durante una revisión de sistemas de una empresa bancaria, afirma con total seguridad que la implementación de una nueva IA "eliminará todos los riesgos de fraude en los próximos 2 años".\n\n¿Qué principio está violando María? ¿Cuál debería ser su conducta correcta?',
    answer: null,
    feedback: null,
    reference: 'María viola el Principio de Cautela, que exige al auditor evitar hacer predicciones excesivamente seguras sobre futuros avances tecnológicos. Su conducta correcta sería basar sus recomendaciones en experiencia contrastada, mantenerse informada del desarrollo tecnológico sin aparentar tener información privilegiada, y actuar con humildad reconociendo las incertidumbres tecnológicas para proporcionar recomendaciones equilibradas y realistas.'
  },
  {
    type: 'vf',
    principle: 'Comportamiento Profesional',
    question: 'El Principio de Comportamiento Profesional permite al auditor exagerar sus capacidades técnicas frente al auditado si eso genera mayor confianza en sus servicios.',
    answer: false,
    feedback: 'FALSO. El Principio de Comportamiento Profesional exige precisamente lo contrario: evitar exageraciones y reconocer las propias limitaciones. El auditor debe respetar la política empresarial del auditado y analizar innovaciones detenidamente, sin alardes que distorsionen la realidad.',
    reference: null
  },
  {
    type: 'dev',
    principle: 'Confianza',
    question: 'Explica cómo el Principio de Confianza se construye en la relación auditor-auditado. ¿Qué acciones concretas debe tomar el auditor para no quebrarla?',
    answer: null,
    feedback: null,
    reference: 'La confianza se construye mediante una actuación transparente, sin alardes técnicos que compliquen la comprensión del auditado. El auditor debe confiar en las indicaciones del auditado salvo que haya datos que las contradigan, promover un diálogo claro y mantener el secreto profesional. Acciones concretas: comunicar hallazgos en lenguaje comprensible, no divulgar información sensible, cumplir plazos y compromisos, y actuar con consistencia ética durante y después del encargo.'
  },
  {
    type: 'caso',
    principle: 'Criterio Propio',
    question: 'CASO: El auditor Jorge presenta sus conclusiones a la junta directiva de una empresa. El director financiero rechaza enérgicamente los hallazgos y presiona a Jorge para que modifique el informe, argumentando que "otros auditores han aceptado esta práctica antes".\n\n¿Qué debe hacer Jorge según el Principio de Criterio Propio? Justifica tu respuesta.',
    answer: null,
    feedback: null,
    reference: 'Jorge debe mantener su criterio independiente ante la oposición del director financiero. El Principio de Criterio Propio establece que el auditor debe reflejar cualquier discrepancia en el informe y sostener su posición si está respaldada por metodologías válidas. El argumento de "otros auditores lo han aceptado" no justifica modificar hallazgos verídicos. Si el auditado persiste en rechazar las conclusiones sin justificación técnica, Jorge puede considerar incluso su continuidad en el encargo.'
  },
  {
    type: 'vf',
    principle: 'Discreción',
    question: 'El Principio de Discreción obliga al auditor a guardar reserva sobre la información sensible obtenida durante la auditoría únicamente mientras dura el encargo.',
    answer: false,
    feedback: 'FALSO. La discreción debe mantenerse durante Y después de la auditoría, sin fecha de vencimiento. Este principio protege la privacidad y los intereses empresariales de las personas involucradas en todo momento.',
    reference: null
  },
  {
    type: 'caso',
    principle: 'Independencia',
    question: 'CASO: La empresa DELTA S.A. contrata al auditor Luis y le comunica que debe usar obligatoriamente la metodología de auditoría propia de la empresa, ya que "es política interna". Luis considera que esa metodología perjudicaría la calidad del análisis.\n\n¿Qué principio está en juego? ¿Qué opciones tiene Luis?',
    answer: null,
    feedback: null,
    reference: 'Está en juego el Principio de Independencia, que exige al auditor ser imparcial y actuar objetivamente, sin depender de terceros ni adoptar métodos que puedan perjudicar al auditado o reducir su libertad de actuación profesional. Luis puede: (1) fundamentar técnicamente por qué esa metodología compromete la calidad; (2) negociar una metodología complementaria; (3) si DELTA insiste en una metodología que compromete objetivamente los resultados, Luis tiene el derecho y deber de rechazar el encargo antes que comprometer su independencia.'
  },
  {
    type: 'dev',
    principle: 'Integridad Moral',
    question: '¿Qué se entiende por Integridad Moral en el contexto del auditor de sistemas? Da un ejemplo de una situación donde este principio se vea amenazado y cómo debería actuar el auditor.',
    answer: null,
    feedback: null,
    reference: 'La Integridad Moral implica que el auditor actúa con honestidad, coherencia entre sus valores y sus acciones, y resistencia a presiones externas que busquen comprometer sus conclusiones o conducta. Ejemplo: un gerente ofrece un incentivo económico al auditor a cambio de omitir vulnerabilidades críticas en el informe. El auditor con integridad moral debe rechazar el ofrecimiento, documentar el intento de influencia y mantener sus hallazgos tal como fueron verificados, priorizando la verdad sobre el beneficio personal.'
  },
  {
    type: 'vf',
    principle: 'Legalidad',
    question: 'Según el Principio de Legalidad, el auditor puede desactivar temporalmente medidas de seguridad del sistema auditado si el auditado lo solicita expresamente para facilitar el trabajo de auditoría.',
    answer: false,
    feedback: 'FALSO. El Principio de Legalidad prohíbe al auditor desactivar medidas de seguridad o intentar acceder a información restringida, incluso si el auditado lo solicita. El auditor debe evitar el uso indebido de sus conocimientos y oponerse a cualquier intento de infracción legal, ya sea del auditado o de terceros.',
    reference: null
  },
  {
    type: 'caso',
    principle: 'Secreto Profesional',
    question: 'CASO: El auditor Carlos terminó una auditoría en la empresa SOFTPERU S.A. hace 6 meses. Ahora un competidor directo de SOFTPERU le ofrece un contrato de consultoría y le pide que comparta los hallazgos y debilidades que encontró.\n\n¿Qué principios están en juego? ¿Qué debe hacer Carlos?',
    answer: null,
    feedback: null,
    reference: 'Están en juego el Principio de Secreto Profesional (que prohíbe divulgar información obtenida durante la auditoría incluso después de concluido el encargo) y el Principio de Discreción. Carlos debe rechazar terminantemente la solicitud, ya que compartir esa información violaría su obligación de confidencialidad con SOFTPERU, causaría daño directo al auditado anterior y podría generar responsabilidad legal. El hecho de que el encargo haya terminado no extingue la obligación del secreto profesional.'
  },
  {
    type: 'dev',
    principle: 'Responsabilidad',
    question: 'El Principio de Responsabilidad es especialmente relevante en auditorías de alta complejidad. Explica por qué y cómo este principio actúa como freno contra interferencias externas no deseadas.',
    answer: null,
    feedback: null,
    reference: 'En auditorías de alta complejidad, los errores del auditor pueden generar daños significativos a la organización, por lo que asumir la responsabilidad de acciones, palabras y consejos es crítico. Este principio actúa como freno a interferencias externas porque un auditor que sabe que responde por sus conclusiones tiene incentivo para resistir presiones que alteren sus hallazgos: si modifica el informe por presión y luego ocurre un daño, la responsabilidad recae sobre él. La conciencia de esa responsabilidad refuerza su independencia y rigor profesional.'
  },
  {
    type: 'vf',
    principle: 'Fortalecimiento y Respeto a la Profesión',
    question: 'Denunciar comportamientos indebidos de otros auditores es contrario al Principio de Fortalecimiento y Respeto a la Profesión porque afecta negativamente la imagen del gremio.',
    answer: false,
    feedback: 'FALSO. Denunciar comportamientos indebidos es ESENCIAL para elevar el prestigio de la profesión según este principio. Ocultar malas prácticas daña a largo plazo la credibilidad del gremio; denunciarlas demuestra que la profesión se autorregula con seriedad y fortalece la confianza del mercado en los auditores.',
    reference: null
  },
  {
    type: 'caso',
    principle: 'Veracidad',
    question: 'CASO: El auditor Pedro, en su informe final, mezcla sin distinción sus opiniones personales sobre la gestión del equipo de TI con los hechos objetivos verificados durante la auditoría. El auditado no puede distinguir qué es hallazgo real y qué es apreciación subjetiva.\n\n¿Qué principio viola Pedro? ¿Qué debe corregir?',
    answer: null,
    feedback: null,
    reference: 'Pedro viola el Principio de Veracidad, que exige mantener comunicaciones objetivas diferenciando claramente entre hechos verificados y opiniones. La veracidad no requiere perfecta exactitud pero sí diligencia profesional para garantizar comunicación precisa. Pedro debe reestructurar su informe separando explícitamente los hallazgos objetivos (respaldados por evidencia) de sus apreciaciones profesionales, evitando expresiones injuriosas o afirmaciones no fundamentadas sobre el equipo de TI.'
  },
  {
    type: 'vf',
    principle: 'No Injerencia',
    question: 'El Principio de No Injerencia prohíbe al auditor utilizar la información obtenida en la auditoría para competir deslealmente con profesionales de otras áreas, especialmente si no está capacitado en esas disciplinas.',
    answer: true,
    feedback: 'VERDADERO. El Principio de No Injerencia establece que el auditor no debe meterse en trabajos de otros profesionales ni usar la información de auditoría para hacerles competencia desleal, especialmente en campos donde no tiene plena capacitación.',
    reference: null
  },
  {
    type: 'dev',
    principle: 'Libre Competencia',
    question: '¿Qué prácticas concretas debería evitar un auditor para cumplir con el Principio de Libre Competencia? ¿Cómo impacta este principio en la calidad de los servicios de auditoría informática?',
    answer: null,
    feedback: null,
    reference: 'El auditor debe evitar: acuerdos con otros auditores para fijar precios o repartir clientes (colusión), prácticas abusivas como dumping de precios para eliminar competidores, y comportamientos desleales en la comercialización de sus servicios. Impacto en calidad: un entorno de libre competencia sana incentiva a los auditores a mejorar continuamente su competencia técnica y metodológica para diferenciarse, lo cual eleva la calidad general de la oferta y beneficia a los auditados con mejores servicios a precios justos.'
  },
  {
    type: 'caso',
    principle: 'No Discriminación',
    question: 'CASO: El auditor Rodrigo es asignado a auditar una empresa cuyo gerente general pertenece a una ideología política diferente a la suya. Durante la auditoría, Rodrigo aplica criterios más estrictos que los habituales y documenta observaciones menores que normalmente ignoraría.\n\n¿Qué principio está violando Rodrigo? ¿Qué consecuencias podría tener su conducta?',
    answer: null,
    feedback: null,
    reference: 'Rodrigo viola el Principio de No Discriminación, que exige llevar a cabo la labor sin prejuicios de ningún tipo y con igualdad de trato en todas las interacciones profesionales, sin importar características personales, sociales, políticas o económicas. Consecuencias: el informe podría impugnarse por falta de imparcialidad, Rodrigo podría enfrentar sanciones disciplinarias del gremio, responsabilidad legal por daños causados a la empresa auditada, y pérdida de credibilidad profesional.'
  },
  {
    type: 'dev',
    principle: 'Normas Profesionales — Responsabilidad',
    question: 'Dentro de las Normas Profesionales del Auditor, ¿cómo se relaciona el valor de Responsabilidad con el Principio Deontológico de Responsabilidad? ¿Son lo mismo o tienen matices distintos?',
    answer: null,
    feedback: null,
    reference: 'Aunque comparten la misma base ética, tienen matices distintos. El Principio Deontológico de Responsabilidad se refiere a asumir las consecuencias de acciones, palabras y consejos profesionales concretos durante el encargo, con énfasis en la rendición de cuentas frente a errores técnicos. La Norma Profesional de Responsabilidad tiene un alcance más amplio: es un valor que orienta toda la conducta del auditor, incluyendo su compromiso con la profesión, con los usuarios del informe (no solo el auditado) y con la sociedad en general.'
  },
  {
    type: 'vf',
    principle: 'Normas Profesionales — Confidencialidad',
    question: 'La Confidencialidad como norma profesional del auditor es idéntica al Principio de Secreto Profesional y ambos tienen exactamente el mismo alcance y aplicación.',
    answer: false,
    feedback: 'FALSO. Aunque están relacionados, el Secreto Profesional es un principio deontológico específico con implicancias éticas y legales (se extiende a colaboradores y tiene consecuencias por violación). La Confidencialidad como norma profesional es un valor más amplio que orienta el comportamiento cotidiano del auditor en toda su práctica profesional.',
    reference: null
  },
  {
    type: 'caso',
    principle: 'Normas Profesionales — Objetividad',
    question: 'CASO: La auditora Ana lleva 3 años trabajando con la misma empresa y ha entablado una amistad cercana con varios directivos. En su última auditoría, omite mencionar deficiencias menores porque "ya las conocen y están trabajando en ello".\n\n¿Qué norma(s) profesional(es) está comprometiendo Ana? ¿Qué riesgos genera esta situación?',
    answer: null,
    feedback: null,
    reference: 'Ana compromete principalmente la Objetividad y la Independencia como normas profesionales, además del Principio de Veracidad. La amistad con los directivos ha generado una dependencia que reduce su libertad de actuación. Riesgos: el informe incompleto puede generar que deficiencias "menores" escalen a problemas graves sin documentación, la empresa pierde trazabilidad de sus controles, Ana podría enfrentar responsabilidad si esas deficiencias causan un incidente posterior, y su credibilidad como auditora independiente queda comprometida.'
  },
  {
    type: 'dev',
    principle: 'Normas Profesionales — Integridad y Honestidad',
    question: 'Explica qué significa la Integridad como norma profesional del auditor y cómo se diferencia de la Honestidad. ¿Pueden existir situaciones en que un auditor sea honesto pero no íntegro?',
    answer: null,
    feedback: null,
    reference: 'La Honestidad implica decir la verdad y no engañar. La Integridad es más amplia: implica coherencia entre los valores declarados y las acciones reales, incluso cuando nadie observa o cuando hay costo personal. Ejemplo de honesto pero no íntegro: un auditor reporta todos sus hallazgos con veracidad, pero acepta encargos de empresas donde tiene conflicto de interés sin declararlo, o cobra honorarios desproporcionados aprovechando la ignorancia del cliente. Dice la verdad en el informe (honesto) pero su conducta general no es coherente con los valores de la profesión (no íntegro).'
  },
  {
    type: 'vf',
    principle: 'Normas Profesionales — Institucionalidad',
    question: 'La Institucionalidad como norma profesional implica que el auditor debe respetar y fortalecer los marcos normativos, organismos reguladores y estructuras profesionales que rigen la auditoría informática.',
    answer: true,
    feedback: 'VERDADERO. La Institucionalidad se refiere al respeto y fortalecimiento de las instituciones, normas y marcos que regulan la profesión. El auditor forma parte de un sistema profesional que debe sostener, no solo actuar individualmente.',
    reference: null
  },
  {
    type: 'caso',
    principle: 'Dilema Ético',
    question: 'CASO INTEGRADOR: La auditora Paola, mientras revisa los sistemas de un ministerio, descubre una vulnerabilidad crítica de seguridad nacional. Varios funcionarios de alto rango ya conocían el fallo pero lo ignoraron por presiones políticas. Paola teme que reportarlo públicamente dañe la imagen del ministerio.\n\nIdentifica todos los principios deontológicos en juego, el dilema ético que enfrenta Paola y cuál sería la acción éticamente correcta.',
    answer: null,
    feedback: null,
    reference: 'Principios en juego: Responsabilidad (debe asumir las consecuencias de reportar), Legalidad (no puede encubrir una vulnerabilidad que afecta la seguridad nacional), Criterio Propio (debe mantener su posición ante presiones políticas), Veracidad (su informe debe reflejar la realidad), Beneficio del Auditado (el verdadero beneficio es corregir la vulnerabilidad). El dilema: su obligación de reportar vs. el temor a consecuencias institucionales y políticas. Acción correcta: reportar la vulnerabilidad a través de los canales institucionales apropiados (no divulgación pública irresponsable), documentar que los funcionarios ya la conocían, y si hay presión para ocultar el hallazgo, considerar escalar a la autoridad competente o instancias de control.'
  },
  {
    type: 'dev',
    principle: 'Juicio Moral',
    question: 'Según el material de la Sesión 5, ¿qué es el Juicio Moral y cómo lo aplica un auditor de sistemas cuando enfrenta una situación ambigua durante una auditoría? Da un ejemplo práctico.',
    answer: null,
    feedback: null,
    reference: 'El Juicio Moral implica evaluar una situación desde una perspectiva ética para decidir si es correcta o incorrecta según los principios y valores personales o culturales. El auditor lo aplica cuando la situación no tiene una respuesta obvia en los reglamentos: analiza las consecuencias de cada opción, identifica qué principios deontológicos están involucrados y decide la acción más coherente con su ética profesional. Ejemplo: el auditor descubre que un empleado cometió un error no intencional que no aparece en el alcance formal de la auditoría. El juicio moral le ayuda a decidir si mencionarlo en el informe como observación o si derivarlo internamente, considerando equidad, responsabilidad y beneficio del auditado.'
  },
  {
    type: 'vf',
    principle: 'Principios Éticos Generales',
    question: 'Los principios éticos son reglas absolutas e invariables que el auditor debe aplicar de manera idéntica en todas las situaciones, sin importar el contexto cultural, legal o empresarial del auditado.',
    answer: false,
    feedback: 'FALSO. Los principios éticos son reglas generales que orientan el comportamiento moral, pero su aplicación requiere juicio moral contextualizado. El auditor debe evaluar cada situación considerando el contexto específico (legal, cultural, empresarial), siempre dentro del marco deontológico. No existe una aplicación mecánica única para todos los casos.',
    reference: null
  }
];
