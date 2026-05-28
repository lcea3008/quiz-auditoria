// semana7-data.js — Preguntas Sesión 7: Controles y Riesgos en la Auditoría de Sistemas

const SEMANA7_INFO = {
    id: '7',
    title: 'Controles y Riesgos en la Auditoría de Sistemas',
    subtitle: 'Seguridad física, lógica, controles de TI, amenazas y protección de sistemas',
    totalQ: 22
};

const SEMANA7_QUESTIONS = [
    {
        type: 'vf',
        principle: 'Controles de TI',
        question: 'Los controles de TI permiten prevenir amenazas, proteger información crítica y garantizar la confidencialidad, integridad y disponibilidad (CIA) de los sistemas.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta: los controles de TI son políticas, procedimientos y prácticas auditables que aseguran la CIA de los sistemas y datos, previniendo amenazas y garantizando eficiencia operativa.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Controles de TI',
        question: '¿Qué son los controles de TI? Explica los dos grandes tipos que existen y da un ejemplo de cada uno.',
        answer: null,
        feedback: null,
        reference: 'Los controles de TI son políticas, procedimientos y prácticas auditables aplicadas por una organización para asegurar la confidencialidad, integridad y disponibilidad (CIA) de los sistemas y datos. Existen dos grandes tipos: (1) Controles Generales de TI: medidas a nivel organizativo que no dependen de una aplicación específica, abarcan todos los sistemas. Ejemplo: políticas de seguridad de SI, gestión de cambios, control de acceso físico y lógico. (2) Controles de Aplicativos: políticas y procedimientos diseñados para que una aplicación específica cumpla sus objetivos, garantizando precisión, integridad y disponibilidad de datos. Ejemplo: validación de datos, segregación de funciones, respaldo de datos.'
    },
    {
        type: 'vf',
        principle: 'Controles Generales de TI',
        question: 'Los controles generales de TI dependen de una aplicación específica y solo aplican a un sistema en particular dentro de la organización.',
        answer: false,
        feedback: 'FALSO. Los controles generales de TI NO dependen de una aplicación específica, sino que abarcan TODOS los sistemas de información a nivel organizativo. Los que aplican a una aplicación específica son los controles de aplicativos.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Controles Generales de TI',
        question: 'Explica qué son los controles generales de TI y menciona sus 3 ejemplos clave del material.',
        answer: null,
        feedback: null,
        reference: 'Los controles generales de TI son medidas, políticas y prácticas aplicadas a nivel organizativo que no dependen de una aplicación específica sino que abarcan todos los sistemas de información. Su objetivo es garantizar la seguridad, integridad y eficiencia operativa de TI. Los 3 ejemplos clave son: (1) Políticas de Seguridad de SI: definen reglas y lineamientos para proteger los activos de información. (2) Control de Acceso (Físico y Lógico): gestiona y restringe el acceso a sistemas y datos. (3) Gestión de Cambios: asegura que las modificaciones se realicen de forma controlada, planificada y documentada.'
    },
    {
        type: 'dev',
        principle: 'Controles de Aplicativos',
        question: '¿Qué son los controles de aplicativos? Menciona sus 4 ejemplos clave y explica brevemente cada uno.',
        answer: null,
        feedback: null,
        reference: 'Los controles de aplicativos son políticas, procedimientos y actividades diseñadas para asegurar que una aplicación específica cumpla sus objetivos. Operan a nivel de procesos de negocio, pueden ser manuales o automatizados. Sus 4 ejemplos clave son: (1) Validación de Datos: reglas para asegurar datos precisos y coherentes. (2) Segregación de Funciones: separación de roles y responsabilidades para evitar fraude o conflictos de interés. (3) Respaldo de Datos: copias de seguridad para garantizar disponibilidad en caso de fallas. (4) Control de Cambios: gestión de modificaciones en la aplicación con pruebas y aprobaciones.'
    },
    {
        type: 'vf',
        principle: 'Controles Preventivos, Detectivos y Correctivos',
        question: 'Un firewall y un antivirus son ejemplos de controles preventivos porque evitan que ocurra un problema de seguridad.',
        answer: true,
        feedback: 'VERDADERO. Los controles preventivos evitan que ocurra un problema. El firewall y el antivirus son ejemplos clásicos de controles preventivos junto con contraseñas seguras y control de acceso.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Controles Preventivos, Detectivos y Correctivos',
        question: 'Explica los 3 tipos de controles de TI según su función (preventivos, detectivos y correctivos). Da 2 ejemplos de cada uno.',
        answer: null,
        feedback: null,
        reference: 'Los 3 tipos son: (1) Controles Preventivos: evitan que ocurra un problema. Ejemplos: antivirus, firewalls, contraseñas seguras, control de acceso. (2) Controles Detectivos: detectan problemas o ataques cuando ocurren. Ejemplos: monitoreo de red, alertas de seguridad, auditorías, logs del sistema. (3) Controles Correctivos: solucionan problemas después de un incidente. Ejemplos: backups, restauración de sistemas, actualizaciones de seguridad, planes de recuperación.'
    },
    {
        type: 'vf',
        principle: 'Seguridad Física',
        question: 'La seguridad física protege los activos intangibles como software y datos mediante contraseñas y cifrado.',
        answer: false,
        feedback: 'FALSO. La seguridad física protege los activos TANGIBLES: hardware, equipos, instalaciones y mobiliario. Los activos intangibles (software, datos, contraseñas) son protegidos por la seguridad LÓGICA.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Seguridad Física',
        question: '¿Qué es la seguridad física en el área de sistemas? Menciona al menos 4 ejemplos de controles físicos del material.',
        answer: null,
        feedback: null,
        reference: 'La seguridad física protege los activos tangibles (hardware, equipos, instalaciones, mobiliario) y al personal del área de sistemas. Su objetivo es prevenir riesgos físicos, daños, robos y asegurar el uso adecuado de los recursos informáticos. Ejemplos de controles: cámaras de vigilancia, cerraduras y tarjetas de acceso, guardias de seguridad, UPS y estabilizadores, control de temperatura, detectores de incendio, inventario de hardware y resguardo formal de equipos con asignación documentada.'
    },
    {
        type: 'vf',
        principle: 'Seguridad Lógica',
        question: 'La seguridad lógica se enfoca en proteger los activos intangibles como software, datos y contraseñas, aplicando autenticación, control de accesos y protección contra malware.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta de seguridad lógica: protege activos intangibles mediante controles digitales como autenticación, control de accesos, políticas de seguridad y protección contra malware.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Seguridad Lógica',
        question: '¿Qué es la seguridad lógica y cuál es su objetivo? Menciona al menos 5 ejemplos de controles lógicos.',
        answer: null,
        feedback: null,
        reference: 'La seguridad lógica protege la información y los sistemas mediante software y controles digitales. Su objetivo es evitar accesos no autorizados, robo de información o daños al sistema. Ejemplos de controles lógicos: contraseñas, autenticación de usuarios, antivirus, firewalls, cifrado de datos, permisos de acceso, establecimiento de niveles de acceso por roles (usuario, administrador), control de acceso a sistemas y bases de datos, y monitoreo de usuarios mediante logs y auditorías.'
    },
    {
        type: 'caso',
        principle: 'Seguridad Física vs Lógica',
        question: 'CASO: La empresa DATASEC S.A. sufrió dos incidentes: (1) Un empleado no autorizado ingresó al centro de datos y desconectó un servidor. (2) Un hacker obtuvo acceso remoto a la base de datos usando credenciales robadas.\n\n¿Qué tipo de seguridad falló en cada caso? ¿Qué controles específicos del material debería implementar para evitar cada incidente?',
        answer: null,
        feedback: null,
        reference: 'Incidente 1: Falló la seguridad física. Controles a implementar: control de accesos físicos con credenciales/gafetes, cámaras de vigilancia, guardias de seguridad, registro de ingreso/salida del personal al área de cómputo, y autorización previa para acceso. Incidente 2: Falló la seguridad lógica. Controles a implementar: autenticación de dos factores, políticas de contraseñas estrictas (longitud, complejidad, cambios periódicos), control de acceso basado en roles, monitoreo de acceso de usuarios mediante logs y auditorías, y segmentación de red para limitar el alcance del acceso.'
    },
    {
        type: 'vf',
        principle: 'Control de Acceso No Autorizado',
        question: 'El ataque de fuerza bruta consiste en manipular psicológicamente a un usuario para obtener sus credenciales de acceso.',
        answer: false,
        feedback: 'FALSO. La manipulación psicológica para obtener información es la Ingeniería Social. La fuerza bruta es el intento repetitivo de adivinar contraseñas probando múltiples combinaciones hasta encontrar la correcta.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Control de Acceso No Autorizado',
        question: 'Explica las 4 técnicas comunes de acceso no autorizado que menciona el material y describe brevemente cada una.',
        answer: null,
        feedback: null,
        reference: 'Las 4 técnicas comunes son: (1) Fuerza Bruta: intento repetitivo de adivinar contraseñas probando múltiples combinaciones hasta encontrar la correcta. (2) Phishing: engañar a los usuarios para que revelen credenciales a través de correos electrónicos o sitios web falsos que parecen legítimos. (3) Ingeniería Social: manipulación psicológica de usuarios para obtener información confidencial o acceso no autorizado. (4) Spoofing: falsificación de la identidad (suplantación) de un usuario o sistema para acceder a recursos protegidos.'
    },
    {
        type: 'vf',
        principle: 'Tipos de Malware',
        question: 'Un ransomware cifra los archivos o sistemas y exige un rescate para restaurar el acceso, pudiendo causar pérdidas importantes.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta de ransomware: malware que cifra archivos o sistemas y exige un rescate para restaurar el acceso.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Tipos de Malware',
        question: 'Explica la diferencia entre virus, gusano, troyano y spyware. ¿Cómo se propaga cada uno?',
        answer: null,
        feedback: null,
        reference: 'Los 4 tipos son: (1) Virus: fragmentos de código que se adjuntan a archivos legítimos y se replican cuando el archivo infectado se ejecuta. Necesita un archivo huésped. (2) Gusano: similar al virus pero se propaga sin necesidad de archivos host, se replica y distribuye automáticamente a través de la red. (3) Troyano: programa que parece legítimo pero realiza acciones maliciosas en segundo plano (robar información, dar acceso no autorizado o dañar el sistema). No se replica solo. (4) Spyware: software que recopila información personal del usuario sin su consentimiento, puede registrar pulsaciones, rastrear navegación o acceder a cámara y micrófono.'
    },
    {
        type: 'vf',
        principle: 'Tipos de Malware',
        question: 'Un keylogger es un tipo de malware que oculta otro malware dentro del sistema para evitar ser detectado por antivirus.',
        answer: false,
        feedback: 'FALSO. El que oculta malware dentro del sistema es el Rootkit. El Keylogger es un registrador de pulsaciones de teclas que captura las entradas del usuario, incluyendo contraseñas e información confidencial.',
        reference: null
    },
    {
        type: 'caso',
        principle: 'Tipos de Malware',
        question: 'CASO: El área de sistemas de BANKPERU S.A. reporta los siguientes incidentes: (1) Un empleado recibió un correo de "su banco" pidiendo verificar su contraseña. (2) Los archivos del servidor fueron cifrados y apareció un mensaje pidiendo pago en bitcoin. (3) Se detectó que alguien estaba registrando todo lo que escribían los usuarios.\n\nIdentifica qué tipo de ataque o malware corresponde a cada incidente y explica por qué.',
        answer: null,
        feedback: null,
        reference: 'Incidente 1: Phishing. Un correo falso que simula ser legítimo (del banco) para engañar al usuario y que revele sus credenciales. Incidente 2: Ransomware. Malware que cifra archivos o sistemas y exige un rescate (en este caso en bitcoin) para restaurar el acceso, causando pérdidas importantes. Incidente 3: Keylogger. Software que registra las pulsaciones de teclas del usuario capturando contraseñas e información confidencial sin que el usuario lo sepa.'
    },
    {
        type: 'dev',
        principle: 'Prevención de Virus',
        question: '¿De qué formas puede infectarse un sistema con virus? ¿Qué precauciones se deben tomar para prevenirlos?',
        answer: null,
        feedback: null,
        reference: 'Formas de infección: usando USB ajenos infectados, abriendo archivos adjuntos de correos electrónicos, conectándose a páginas de internet no seguras. Precauciones: tener un buen programa antivirus monitoreando el sistema, actualizar periódicamente el antivirus, no abrir correos de procedencia desconocida, no permitir conexión a páginas desconocidas en internet.'
    },
    {
        type: 'vf',
        principle: 'Backup y Contingencia',
        question: 'Los archivos y programas solo se alteran por ataques de hackers, por lo que el backup solo es necesario ante amenazas externas.',
        answer: false,
        feedback: 'FALSO. Los archivos se pueden alterar por múltiples causas: errores de programación, errores del sistema operativo, fallas de hardware, errores de procedimientos, acontecimientos naturales, fallas eléctricas y acciones humanas intencionales. El backup es necesario ante todas estas causas, no solo ante ataques externos.',
        reference: null
    },
    {
        type: 'dev',
        principle: 'Backup y Contingencia',
        question: 'Explica por qué es necesario hacer backups. Menciona al menos 5 razones por las que se pueden alterar los archivos o programas.',
        answer: null,
        feedback: null,
        reference: 'Los backups son necesarios porque los archivos y programas pueden alterarse por: errores de programación, errores del sistema operativo, fallas del hardware, errores de procedimientos de trabajo, acontecimientos naturales (terremotos, inundaciones), fallas en la alimentación eléctrica, y acciones humanas intencionales (ataques, sabotaje). Los planes de contingencia incluyen acciones antes, durante y después de incidentes con simulacros, respaldos y bitácoras para asegurar la continuidad del negocio.'
    },
    {
        type: 'caso',
        principle: 'Controles Internos de Sistemas',
        question: 'CASO: La empresa SOFTCORP S.A. no tiene inventario de hardware, los empleados comparten contraseñas, no existe segregación de funciones y no hay planes de contingencia.\n\n¿Qué controles específicos del material recomendarías implementar para cada problema? Justifica tu respuesta.',
        answer: null,
        feedback: null,
        reference: 'Para cada problema: (1) Sin inventario de hardware → implementar Inventario de Hardware y Mobiliario con registro detallado de activos (características, ubicación, responsable, costos) y Resguardo formal de equipos con asignación documentada. (2) Contraseñas compartidas → implementar Políticas de Contraseña (complejidad, cambios periódicos, no reutilización) y Control de Acceso Basado en Roles con niveles de privilegio según función. (3) Sin segregación de funciones → implementar Control de Aplicativos con Segregación de Funciones para separar roles y evitar fraude. (4) Sin planes de contingencia → elaborar Planes de Contingencia y Simulacros con bitácoras de seguimiento para garantizar la continuidad del negocio.'
    },
    {
        type: 'dev',
        principle: 'Seguridad en Redes y Telecomunicaciones',
        question: 'Explica la diferencia entre seguridad en redes y seguridad en telecomunicaciones según el material. ¿Qué protege cada una?',
        answer: null,
        feedback: null,
        reference: 'Seguridad en Telecomunicaciones: protege la transmisión de datos a través de protocolos seguros, control de accesos y monitoreo, evitando interceptaciones o accesos no autorizados durante la comunicación. Seguridad en Redes: asegura la infraestructura de red mediante control de accesos, gestión de usuarios, protección de datos y respaldos, previniendo ataques o vulnerabilidades en la red en sí. La diferencia clave: telecomunicaciones se enfoca en el canal de transmisión, redes se enfoca en la infraestructura y gestión de usuarios de la red.'
    },
    {
        type: 'completar',
        principle: 'Controles de TI',
        question: 'Los controles de TI aseguran la ___, ___ y ___ (CIA) de los sistemas y datos de TI.',
        answer: ['confidencialidad|Confidencialidad', 'integridad|Integridad', 'disponibilidad|Disponibilidad'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Controles de TI',
        question: 'Existen dos grandes tipos de controles de TI: los controles ___, que aplican a nivel organizativo a todos los sistemas, y los controles de ___, que aseguran que una aplicación específica cumpla sus objetivos.',
        answer: ['Generales|generales', 'Aplicativos|aplicativos'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Controles Preventivos, Detectivos y Correctivos',
        question: 'Los controles ___ evitan que ocurra un problema, los controles ___ identifican problemas cuando ocurren, y los controles ___ solucionan problemas después de un incidente.',
        answer: ['preventivos|Preventivos', 'detectivos|Detectivos', 'correctivos|Correctivos'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Seguridad Física',
        question: 'La seguridad ___ protege los activos tangibles como hardware e instalaciones, mientras que la seguridad ___ protege los activos intangibles como software y datos.',
        answer: ['física|Física', 'lógica|Lógica'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Controles de Aplicativos',
        question: 'Los 4 ejemplos clave de controles de aplicativos son: ___ de datos, ___ de funciones, ___ de datos y control de ___.',
        answer: ['Validación|validación', 'Segregación|segregación', 'Respaldo|respaldo', 'Cambios|cambios'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Tipos de Malware',
        question: 'El ___ cifra archivos y pide rescate, el ___ se replica por redes sin archivo huésped, y el ___ parece legítimo pero realiza acciones maliciosas en segundo plano.',
        answer: ['ransomware|Ransomware', 'gusano|Gusano', 'troyano|Troyano'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Control de Acceso No Autorizado',
        question: 'El ataque de ___ adivina contraseñas por repetición, el ___ engaña con correos falsos, y el ___ suplanta la identidad de un usuario o sistema.',
        answer: ['Fuerza Bruta|fuerza bruta', 'Phishing|phishing', 'Spoofing|spoofing'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Prevención de Virus',
        question: 'Un sistema puede infectarse con virus al usar ___ ajenos infectados, abrir archivos ___ de correos desconocidos o conectarse a páginas ___.',
        answer: ['USB|usb', 'adjuntos', 'no seguras|inseguras'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Seguridad Lógica',
        question: 'El control de acceso basado en ___ asigna permisos según la función del usuario. La ___ de red divide la infraestructura en zonas para prevenir la propagación de amenazas.',
        answer: ['roles|Roles', 'segmentación|Segmentación'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Backup y Contingencia',
        question: 'Los archivos pueden alterarse por errores de ___, fallas del ___, acontecimientos ___ o acciones humanas ___.',
        answer: ['programación', 'hardware', 'naturales', 'intencionales'],
        feedback: null,
        reference: null
    }
];