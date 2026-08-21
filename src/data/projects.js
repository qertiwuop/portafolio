const projects = [
{
  id: 1,
  slug: "egg-monitor",

  title:
    "Dispositivo de monitoreo electrogastrográfico ambulatorio de larga duración",

  category:
    "Biomedical Instrumentation · Embedded Systems · Signal Processing",

  description:
    "Plataforma portátil de cuatro canales para el registro inalámbrico y análisis de actividad mioeléctrica gástrica durante periodos prolongados.",

  image: "/images/EGG/egg-monitor.png",

  overview:
    "Proyecto de investigación enfocado en el desarrollo integral de un sistema de electrogastrografía ambulatoria, desde la adquisición de biopotenciales y el diseño electrónico hasta la transmisión inalámbrica, visualización, almacenamiento y procesamiento digital de las señales.",

  problem:
    "La adquisición de señales electrogastrográficas presenta retos asociados con su baja amplitud y frecuencia, la susceptibilidad a interferencias y artefactos, y la necesidad de realizar registros prolongados. Además, existen pocas plataformas especializadas que combinen adquisición multicanal, portabilidad y monitoreo inalámbrico.",

  solution:
    "Se desarrolló un dispositivo modular capaz de adquirir cuatro señales EGG de manera simultánea y transmitirlas inalámbricamente a una computadora, donde una aplicación permite supervisar la adquisición y almacenar los datos para su posterior análisis.",

  technologies: [
    "ESP32",
    "ADS1115",
    "INA122",
    "Python",
    "PyQt5",
    "MATLAB",
    "EasyEDA",
    "SolidWorks",
    "Bluetooth",
    "I²C",
    "Signal Processing",
  ],

  meta: {
    role:
      "Diseño electrónico, integración embebida, software y procesamiento de señales",
    status:
      "Prototipo funcional y validado experimentalmente",
    type:
      "Proyecto de investigación · Tesis de maestría",
    implementation:
      "CIDETEC · Instituto Politécnico Nacional",
  },

  specs: [
    {
      value: "4",
      label: "Canales EGG",
    },
    {
      value: "16-bit",
      label: "Resolución ADC",
    },
    {
      value: "8 Hz",
      label: "Frecuencia de muestreo",
    },
    {
      value: "12 h",
      label: "Autonomía validada",
    },
    {
      value: "Bluetooth",
      label: "Transmisión inalámbrica",
    },
  ],

  features: [
    "Adquisición simultánea de cuatro señales electrogastrográficas",
    "Visualización en tiempo real de los canales adquiridos",
    "Registro de datos crudos con referencia temporal para análisis posterior",
    "Monitoreo continuo del estado de las baterías",
    "Operación prolongada orientada a monitoreo ambulatorio",
    "Procesamiento temporal, espectral y multicanal de las señales adquiridas",
  ],

  architecture: [
    {
      title: "Sensado",
      technology: "Electrodos Ag/AgCl",
      description:
        "Registro no invasivo de la actividad bioeléctrica mediante electrodos superficiales colocados sobre la región abdominal.",
    },

    {
      title: "Front-end analógico",
      technology: "INA122 + DRL",
      description:
        "Acondicionamiento de las señales de baja amplitud antes de su digitalización.",
    },

    {
      title: "Digitalización",
      technology: "ADS1115",
      description:
        "Conversión de los cuatro canales analógicos mediante un ADC de 16 bits.",
    },

    {
      title: "Sistema embebido",
      technology: "ESP32",
      description:
        "Lectura de las muestras digitalizadas y gestión de la adquisición mediante comunicación I²C.",
    },

    {
      title: "Comunicación",
      technology: "Bluetooth",
      description:
        "Transmisión inalámbrica de las señales y variables del sistema hacia la computadora.",
    },

    {
      title: "Software",
      technology: "Python · PyQt5",
      description:
        "Visualización en tiempo real, supervisión del sistema y almacenamiento de los registros adquiridos.",
    },
  ],

  hardware: [
    {
      title: "Diseño de la cadena analógica",
      image: "/images/EGG/schematic.png",
      description:
        "Diseño de los circuitos responsables de la preamplificación, reducción de interferencia en modo común, filtrado, amplificación y acondicionamiento de cada canal EGG.",
    },

    {
      title: "PCB modular",
      image: "/images/EGG/pcb.png",
      description:
        "Implementación de cada canal de adquisición en una tarjeta independiente diseñada en EasyEDA, permitiendo replicar y sustituir módulos individualmente.",
    },

    {
      title: "Mainboard e integración electrónica",
      image: "/images/EGG/assembly.jpg",
      description:
        "Integración de los cuatro módulos EGG con el ADC, el ESP32, el sistema de alimentación y las conexiones externas sobre una tarjeta principal.",
    },

    {
      title: "Integración mecánica",
      image: "/images/EGG/enclosure.png",
      description:
        "Modelado del ensamble electrónico en SolidWorks y desarrollo de una carcasa personalizada para alojar y proteger el prototipo completo.",
    },
  ],

  software: {
    title: "Adquisición y monitoreo en tiempo real",

    image: "/images/EGG/gui.png",

    description:
      "Se desarrolló una interfaz gráfica en Python para recibir, visualizar y almacenar continuamente la información transmitida por el dispositivo durante las sesiones de adquisición.",

    capabilities: [
      "Visualización simultánea de los cuatro canales EGG",
      "Selección y control de la comunicación serial",
      "Ventana de visualización continua de las señales",
      "Monitoreo de los voltajes de alimentación",
      "Registro temporal de cada muestra adquirida",
      "Almacenamiento de los datos crudos en formato CSV",
    ],
  },

  signalProcessing: [
    {
      title: "Preprocesamiento",

      image: "/images/EGG/raw-filtered.png",

      description:
        "Las señales adquiridas se conservaron en formato crudo y posteriormente se procesaron mediante filtrado digital de fase cero para preservar las componentes fisiológicas de interés.",
    },

    {
      title: "Análisis espectral",

      image: "/images/EGG/spectrum.png",

      description:
        "Se utilizó análisis en frecuencia para identificar el ritmo gástrico y otras componentes fisiológicas presentes en las señales adquiridas.",

      details: [
        "0.033–0.066 Hz · Ritmo gástrico",
        "0.2–0.4 Hz · Actividad respiratoria",
        "1–2 Hz · Actividad cardiaca",
      ],
    },

    {
      title: "Análisis multicanal",

      description:
        "Los cuatro canales fueron analizados mediante PCA e ICA para estudiar componentes comunes e independientes y evaluar su contenido espectral.",
    },

    {
      title: "Monitoreo prolongado",

      image: "/images/EGG/spectrogram.png",

      description:
        "Los registros de cuatro horas fueron analizados en el dominio tiempo-frecuencia para estudiar la evolución de la actividad gástrica durante ayuno, ingesta y periodo postprandial.",
    },
  ],

  validation: {
    intro:
      "El sistema fue evaluado a nivel electrónico, embebido, inalámbrico y fisiológico para verificar su estabilidad durante adquisición continua y la capacidad de registrar componentes espectrales asociadas con la actividad gástrica.",

    metrics: [
      {
        value: "7.99985 Hz",
        label: "Frecuencia de muestreo medida",
      },
      {
        value: "0.00187%",
        label: "Error respecto a 8 Hz",
      },
      {
        value: "12 h",
        label: "Operación continua validada",
      },
      {
        value: "100%",
        label: "PDR hasta 5 m",
      },
    ],

    tests: [
      {
        title: "Respuesta analógica",
        description:
          "La respuesta experimental de las etapas de filtrado fue comparada con el comportamiento teórico para comprobar la conservación del rango de frecuencias de interés.",
      },
      {
        title: "Estabilidad de adquisición",
        description:
          "La frecuencia real de muestreo se estimó utilizando los timestamps almacenados durante registros continuos.",
      },
      {
        title: "Autonomía",
        description:
          "El prototipo permaneció operativo durante una prueba de 12 horas sin caídas abruptas de voltaje, reinicios ni interrupciones de comunicación.",
      },
      {
        title: "Comunicación inalámbrica",
        description:
          "La transmisión Bluetooth fue evaluada bajo diferentes distancias y obstáculos mediante Packet Delivery Ratio.",
      },
    ],
  },

  signalResults: {
    description:
      "El análisis espectral de los registros adquiridos permitió identificar componentes fisiológicas consistentes con el ritmo gástrico y otras señales presentes en la región abdominal.",

    metrics: [
      {
        value: "0.0472 ± 0.0080 Hz",
        label: "Frecuencia gástrica dominante",
      },
      {
        value: "0.2500 ± 0.0466 Hz",
        label: "Componente respiratoria",
      },
      {
        value: "1.1908 ± 0.1178 Hz",
        label: "Componente cardiaca",
      },
    ],
  },

  datasets: [
    {
      title:
        "Ten-Minute Four-Channel Electrogastrography Dataset from 15 Adult Volunteers",

      platform: "Figshare",

      participants: "15",
      duration: "10 min",
      channels: "4",
      size: "13.8 MB",

      description:
        "Conjunto de registros EGG multicanal de corta duración utilizado para la caracterización inicial de las señales y la validación del sistema de adquisición.",

      doi: "10.6084/m9.figshare.30727742",

      url:
        "https://doi.org/10.6084/m9.figshare.30727742",
    },

    {
      title:
        "Four-Hour Four-Channel Electrogastrography Dataset from Six Healthy Adult Participants",

      platform: "Figshare",

      participants: "6",
      duration: "4 h",
      channels: "4",
      size: "171 MB",

      description:
        "Registros EGG prolongados adquiridos bajo condiciones de ayuno, ingesta y periodo postprandial para evaluar el sistema durante monitoreo de larga duración.",

      doi: "10.6084/m9.figshare.32541027",

      url:
        "https://doi.org/10.6084/m9.figshare.32541027",
    },
  ],

  publications: [
    {
      year: "2025",

      type: "International Conference",

      title:
        "Development of a Wireless Electrogastrography Measurement System",

      venue:
        "11th International Conference on Control, Decision and Information Technologies · CoDIT 2025",

      status: "Presented",

      doi:
        "10.1109/CoDIT66093.2025.11321547",

      url:
        "https://doi.org/10.1109/CoDIT66093.2025.11321547",
    },

    {
      year: "2026",

      type: "Journal Article",

      title:
        "Sistema inalámbrico de monitoreo electrogastrográfico: diseño y validación",

      venue:
        "Pädi Boletín Científico de Ciencias Básicas e Ingenierías del ICBI",

      status: "Published",

      doi:
        "10.29057/icbi.v14iEspecial.15492",

      url:
        "https://doi.org/10.29057/icbi.v14iEspecial.15492",
    },

    {
      year: "2026",

      type: "International Conference",

      title:
        "EGG-SENSE: A Wireless Multichannel Electrogastrography Monitoring System",

      venue:
        "14th International Conference on Control, Mechatronics and Automation · ICCMA 2026",

      status: "Accepted",

      doi: null,

      url: null,
    },
  ],

},

  {
    id: 2,
    slug: "orderis",
    title: "ORDERiS",

    category: "React · FastAPI · SQLite",

    description:
      "Sistema de punto de venta para restaurantes desarrollado e implementado en un entorno operativo real, con gestión de órdenes, cuentas, pagos, usuarios y análisis de ventas.",

    image: "/images/orderis/ORDERIS4.png",

    overview:
      "ORDERiS es un sistema de punto de venta desarrollado para cubrir la operación diaria de un restaurante. Actualmente se encuentra implementado en Calimocho Restaurante, en Ixtapaluca, Estado de México, donde se utiliza para gestionar órdenes, mesas, pagos y reportes de ventas.",

    problem:
      "La operación de un restaurante requiere coordinar la toma de órdenes, cuentas abiertas, pagos, descuentos y seguimiento de ventas entre distintos usuarios.",

    solution:
      "ORDERiS integra diferentes interfaces según el rol del usuario. Los meseros pueden administrar mesas y órdenes, mientras que el personal de caja gestiona pagos, descuentos y reportes de ventas.",

    technologies: [
      "React",
      "FastAPI",
      "Python",
      "SQLite",
    ],

    features: [
      "Gestión de mesas y cuentas abiertas",
      "Toma de órdenes por categoría de producto",
      "Administración de pagos y cálculo de cambio",
      "Aplicación de descuentos",
      "Control por roles de usuario",
      "Reportes diarios de ventas",
      "Análisis de ventas por mesero",
      "Identificación de productos más vendidos",
    ],

    architecture: [
      {
        title: "Frontend",
        description: "Interfaz desarrollada con React para las vistas de mesero y caja.",
        technology: "React",
      },
      {
        title: "API",
        description: "Backend encargado de la lógica de negocio y comunicación con la base de datos.",
        technology: "FastAPI",
      },
      {
        title: "Backend",
        description: "Procesamiento de operaciones, cuentas, pagos, productos y reportes.",
        technology: "Python",
      },
      {
        title: "Database",
        description: "Almacenamiento local de usuarios, productos, cuentas, ventas y pagos.",
        technology: "SQLite",
      },
    ],

    gallery: [
      {
        image: "/images/orderis/ORDERIS4.png",
        title: "Toma de órdenes",
        description:
          "Interfaz para meseros con gestión de mesas, categorías, productos y órdenes activas.",
      },
      {
        image: "/images/orderis/ORDERIS3.png",
        title: "Gestión de pagos",
        description:
          "Vista de caja para registrar pagos, calcular cambio, aplicar descuentos y consultar cuentas abiertas.",
      },
      {
        image: "/images/orderis/ORDERIS1.png",
        title: "Reporte diario",
        description:
          "Resumen de ventas, cuentas cerradas, ticket promedio y distribución por método de pago.",
      },
      {
        image: "/images/orderis/ORDERIS2.png",
        title: "Análisis de ventas",
        description:
          "Visualización del desempeño de ventas por mesero y de los productos con mayor volumen de venta.",
      },
    ],

    meta: {
      role: "Diseño y desarrollo full-stack",
      status: "En operación",
      type: "Proyecto personal con implementación real",
      implementation: "Calimocho Restaurante · Ixtapaluca, Estado de México",
    },
  },
]

export default projects