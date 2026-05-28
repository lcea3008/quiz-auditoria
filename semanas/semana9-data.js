// semana9-data.js — Preguntas Sesión 9: Control Interno y Seguridad en Sistemas

const SEMANA9_INFO = {
    id: '9',
    title: 'Control Interno y Seguridad en Sistemas',
    subtitle: 'Control interno, seguridad lógica, bases de datos, telecomunicaciones y seguridad del personal',
    totalQ: 24
};

const SEMANA9_QUESTIONS = [
    // ---- V/F ----
    {
        type: 'vf',
        principle: 'Control Interno',
        question: 'Según Holmes R. Arthur, el Control Interno es responsabilidad exclusiva del área de TI y está orientado únicamente a proteger los sistemas informáticos.',
        answer: false,
        feedback: 'FALSO. Según Holmes R. Arthur, el Control Interno es responsabilidad de la ADMINISTRACIÓN (no solo TI) y está orientado a proteger activos, prevenir gastos indebidos y evitar compromisos sin autorización en toda la organización.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Control Interno',
        question: 'Uno de los objetivos del Control Interno es fomentar registros contables precisos, oportunos y veraces, garantizando la exactitud de la información financiera.',
        answer: true,
        feedback: 'VERDADERO. Ese es uno de los objetivos primordiales del CI: garantizar registros contables precisos, oportunos y veraces, además de la exactitud de la información financiera de la empresa.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Tipos de Control Interno',
        question: 'Los controles detectivos tienen como objetivo principal evitar que ocurran problemas antes de que sucedan.',
        answer: false,
        feedback: 'FALSO. Los controles detectivos identifican errores o irregularidades que YA ocurrieron o están ocurriendo. Los que evitan que ocurran problemas son los controles PREVENTIVOS.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Tipos de Control Interno',
        question: 'Los controles correctivos buscan corregir problemas detectados, reducir sus consecuencias y evitar su repetición.',
        answer: true,
        feedback: 'VERDADERO. Esa es la definición exacta de controles correctivos: acciones para corregir problemas detectados, reducir consecuencias y evitar que se repitan.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Seguridad Lógica',
        question: 'El cifrado de datos es un control de seguridad lógica que protege la información mediante técnicas de encriptación.',
        answer: true,
        feedback: 'VERDADERO. El cifrado de datos es uno de los controles de seguridad lógica y de base de datos que protege la información mediante encriptación.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Seguridad de Base de Datos',
        question: 'Los respaldos periódicos solo son necesarios cuando se detecta una falla en el sistema, no como práctica preventiva regular.',
        answer: false,
        feedback: 'FALSO. Los respaldos periódicos deben realizarse de forma regular como medida preventiva para garantizar la recuperación de datos ante cualquier pérdida o falla, no solo cuando ya ocurrió el problema.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Control Interno de TI',
        question: 'La gestión de activos, que consiste en un inventario actualizado de los activos de TI, es un ejemplo de control interno del área de TI.',
        answer: true,
        feedback: 'VERDADERO. La gestión de activos (inventario actualizado de activos de TI) es uno de los ejemplos de controles internos del área de TI mencionados en el material.',
        reference: null
    },
    {
        type: 'vf',
        principle: 'Seguridad del Personal',
        question: 'Los planes de capacitación del personal son considerados controles para la seguridad del personal de informática.',
        answer: true,
        feedback: 'VERDADERO. Los planes y programas de capacitación son parte de los controles para la seguridad del personal, promoviendo el uso correcto y seguro de los sistemas por parte del personal y usuarios.',
        reference: null
    },

    // ---- DESARROLLO ----
    {
        type: 'dev',
        principle: 'Control Interno',
        question: 'Explica qué es el Control Interno según las 3 definiciones del material (Holmes, Hall y Echenique). ¿Qué tienen en común?',
        answer: null,
        feedback: null,
        reference: 'Holmes R. Arthur: el CI es responsabilidad de la administración, orientado a proteger activos, prevenir gastos indebidos y evitar compromisos sin autorización. L. Hall: el CI es la organización sistemática de tareas y procedimientos para prevenir fraudes y errores mediante controles efectivos. José Antonio Echenique: el CI incluye organización y procedimientos para proteger la empresa, verificar datos financieros, mejorar eficiencia y asegurar el cumplimiento de políticas. En común: los tres coinciden en que el CI busca proteger los activos de la organización, prevenir fraudes y errores, y garantizar el correcto funcionamiento de los procesos.'
    },
    {
        type: 'dev',
        principle: 'Objetivos del Control Interno',
        question: 'Menciona y explica los 4 objetivos principales del Control Interno según el material.',
        answer: null,
        feedback: null,
        reference: 'Los 4 objetivos del CI son: (1) Establecer la seguridad y protección de los activos de la empresa, evitando pérdidas, robos o daños. (2) Fomentar registros contables precisos, oportunos y veraces, garantizando la exactitud de la información financiera. (3) Establecer y garantizar el cumplimiento de normas, políticas y procedimientos que rigen las actividades de la empresa. (4) Implementar métodos y procedimientos adecuados para el desarrollo efectivo de las actividades y funciones de la empresa.'
    },
    {
        type: 'dev',
        principle: 'Controles Internos de TI',
        question: '¿Qué son los controles internos del área de TI? Menciona al menos 5 ejemplos del material y explica brevemente cada uno.',
        answer: null,
        feedback: null,
        reference: 'Los controles internos de TI son políticas y procedimientos para asegurar el uso óptimo de recursos de TI, proteger la información y cumplir los objetivos organizacionales, garantizando la CIA de los datos. Ejemplos: (1) Políticas y procedimientos: reglas para proteger activos de información. (2) Seguridad física: protección contra robos, daños y accesos no autorizados. (3) Control de acceso: gestión de quién accede a sistemas y datos. (4) Gestión de cambios: control de modificaciones planificadas y documentadas. (5) Gestión de activos: inventario actualizado de activos de TI. (6) Cumplimiento normativo: asegurar cumplimiento de leyes, normas y estándares.'
    },
    {
        type: 'dev',
        principle: 'Seguridad Lógica',
        question: 'Explica los controles para la seguridad lógica de los sistemas. Menciona al menos 4 controles específicos del material.',
        answer: null,
        feedback: null,
        reference: 'Los controles de seguridad lógica protegen activos intangibles (software, sistemas operativos, accesos y datos) garantizando la CIA de la información. Los controles son: (1) Control para el acceso al sistema, programas e información: medidas de seguridad y restricción mediante permisos y contraseñas. (2) Establecimiento de niveles de acceso: definir niveles y privilegios según la importancia de la información. (3) Palabras clave de acceso: contraseñas administradas por el sistema y usuarios para reforzar seguridad. (4) Controles para seguimiento de secuencia y rutinas lógicas: supervisar el procesamiento y funcionamiento lógico del sistema detectando errores o irregularidades.'
    },
    {
        type: 'dev',
        principle: 'Seguridad de Base de Datos',
        question: 'Explica los controles para la seguridad de base de datos. ¿Por qué son importantes las bases de datos como activo de la empresa?',
        answer: null,
        feedback: null,
        reference: 'Las bases de datos son activos importantes y valiosos de la empresa que deben protegerse para evitar alteraciones, pérdidas de información y uso fraudulento. Los controles sugeridos son: restricciones y control de acceso (solo usuarios autorizados), respaldos periódicos (backups para recuperar información), recuperación de datos (procedimientos para restaurar información perdida), gestión de usuarios (roles y privilegios), políticas de seguridad (normas para manejo de datos), cifrado de información (encriptación), y auditoría constante (supervisión del uso de las bases de datos).'
    },
    {
        type: 'dev',
        principle: 'Seguridad del Personal',
        question: 'Explica los controles para la seguridad del personal de informática. Menciona los 3 tipos principales del material.',
        answer: null,
        feedback: null,
        reference: 'Los controles para la seguridad del personal de informática son necesarios porque el personal participa en el desarrollo, administración y funcionamiento de los sistemas. Los 3 tipos principales son: (1) Controles administrativos de personal: normas y controles para la gestión del personal incluyendo horarios, asistencias, obligaciones, derechos, sueldos y disciplina. (2) Seguros y fianzas para el personal de sistemas: medidas para proteger la salud, seguridad y responsabilidad del personal, además de proteger los activos. (3) Planes y programas de capacitación: programas de entrenamiento para el personal y usuarios, promoviendo el uso correcto y seguro de los sistemas.'
    },
    {
        type: 'dev',
        principle: 'Seguridad en Telecomunicaciones',
        question: '¿Qué controles se deben implementar para la seguridad en telecomunicaciones y en sistemas de redes multiusuario?',
        answer: null,
        feedback: null,
        reference: 'Para seguridad en telecomunicaciones: establecer protocolos de comunicación seguros, contraseñas para acceso, medios seguros de transmisión y medidas de verificación de información como dígitos verificados y protocolos de acceso a frecuencias. Para seguridad en redes y sistemas multiusuario: restricción de acceso, contraseñas, monitoreo de actividades, y auditorías y planes de contingencia. Estos controles son esenciales debido a la creciente adopción de redes desde LANs hasta WANs en las organizaciones, y evolucionan con la tecnología.'
    },
    {
        type: 'dev',
        principle: 'Monitoreo y Contingencia',
        question: 'Explica en qué consiste el monitoreo de acceso de usuarios y la elaboración de planes de contingencia según el material.',
        answer: null,
        feedback: null,
        reference: 'Monitoreo de acceso de usuarios: supervisión constante del uso de sistemas mediante auditorías, registros (logs) y reportes de actividad. Permite detectar comportamientos sospechosos, prevenir incidentes y tomar acciones correctivas ante uso indebido. Incluye reporte de auditoría. Planes de contingencia: planes estructurados para actuar antes, durante y después de una contingencia. Considera simulacros periódicos, registros (bitácoras) de incidentes y estrategias de recuperación, con el objetivo de minimizar impactos y asegurar la continuidad del negocio.'
    },

    // ---- CASOS ----
    {
        type: 'caso',
        principle: 'Control Interno',
        question: 'CASO: La empresa LOGISTICA S.A. detectó que un empleado del área contable modificó registros financieros sin autorización durante varios meses sin que nadie lo notara. La empresa no tenía controles de acceso por roles ni auditorías regulares.\n\n¿Qué objetivos del CI se incumplieron? ¿Qué controles específicos del material deberían haberse implementado?',
        answer: null,
        feedback: null,
        reference: 'Objetivos del CI incumplidos: protección de activos (se permitió modificación no autorizada), garantía de registros contables precisos y veraces (se alteraron registros), y cumplimiento de normas y políticas. Controles que deberían implementarse: (1) Control de acceso basado en roles y niveles de privilegio para que solo personal autorizado modifique registros financieros. (2) Segregación de funciones para que quien registra no pueda también aprobar. (3) Monitoreo de acceso de usuarios mediante logs y auditorías regulares para detectar modificaciones sospechosas. (4) Auditoría constante de bases de datos. (5) Planes de contingencia con bitácoras de seguimiento de cambios.'
    },
    {
        type: 'caso',
        principle: 'Seguridad de Base de Datos',
        question: 'CASO: TECHSTORE S.A. perdió toda su base de datos de clientes por un fallo en el servidor. No tenían respaldos recientes, el último backup tenía 8 meses y no existían procedimientos de recuperación documentados.\n\n¿Qué controles de seguridad de base de datos fallaron? ¿Qué deberían implementar según el material?',
        answer: null,
        feedback: null,
        reference: 'Controles que fallaron: respaldos periódicos (el backup de 8 meses no es periódico), procedimientos de recuperación de datos (no existían), y planes de contingencia (sin estrategia ante la falla). Lo que deberían implementar: (1) Respaldos periódicos regulares en distintos medios de almacenamiento. (2) Procedimientos documentados para recuperación de datos ante pérdidas o fallas. (3) Planes de contingencia con simulacros periódicos y bitácoras de incidentes. (4) Monitoreo constante del funcionamiento de los sistemas. (5) Políticas de seguridad formales para el manejo y protección de datos.'
    },
    {
        type: 'caso',
        principle: 'Seguridad del Personal',
        question: 'CASO: Un empleado de TI que fue despedido de SISTEMAS S.A. mantuvo acceso activo al sistema durante 3 semanas después de su salida y eliminó archivos críticos. La empresa no tenía procedimientos para dar de baja accesos.\n\n¿Qué controles del material deberían haberse aplicado para evitar esto?',
        answer: null,
        feedback: null,
        reference: 'Controles que deberían aplicarse: (1) Bloqueo inmediato de contraseñas y baja de servicios y privilegios de empleados que cesan en sus funciones (mencionado en controles de personal). (2) Control de acceso basado en roles con revisión continua de permisos. (3) Monitoreo de actividades de usuarios mediante logs para detectar accesos de ex-empleados. (4) Procedimientos de revisión post-contratación que incluyan proceso formal de offboarding. (5) Acuerdos de confidencialidad que establezcan responsabilidades después del cese. (6) Controles administrativos de personal con procedimientos claros al terminar una relación laboral.'
    },

    // ---- COMPLETAR ----
    {
        type: 'completar',
        principle: 'Tipos de Control Interno',
        question: 'Los controles ___ evitan que ocurran problemas, los controles ___ identifican errores que ya ocurrieron, y los controles ___ corrigen los problemas y evitan su repetición.',
        answer: ['preventivos|Preventivos', 'detectivos|Detectivos', 'correctivos|Correctivos'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Control Interno',
        question: 'El Control Interno tiene como objetivos principales: proteger los ___ de la empresa, garantizar registros ___ precisos, asegurar el ___ de normas y políticas, e implementar ___ adecuados para las actividades.',
        answer: ['activos', 'contables', 'cumplimiento', 'métodos|procedimientos'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Seguridad de Base de Datos',
        question: 'Los controles de seguridad de base de datos incluyen: restricciones de ___, ___ periódicos, ___ de datos, gestión de usuarios, ___ de información y auditoría constante.',
        answer: ['acceso', 'respaldos|backups', 'recuperación', 'cifrado'],
        feedback: null,
        reference: null
    },
    {
        type: 'completar',
        principle: 'Seguridad en Operación',
        question: 'Los aspectos clave para la seguridad en la operación son: protección de la ___, ___ constante, gestión de ___, capacitación del personal, ___ de procesos y administración de incidentes.',
        answer: ['infraestructura', 'monitoreo|Monitoreo', 'cambios', 'documentación|Documentación'],
        feedback: null,
        reference: null
    }
];