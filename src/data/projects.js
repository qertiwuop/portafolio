const projects = [
  {
    id: 1,
    slug: "egg-monitor",
    title: "Dispositivo de Monitoreo Ambulatorio de Electrogastrografía de 4 Canales",

    category: "Biosignals · Signal Processing · Sensors",

    description:
      "Dispositivo portátil desarrollado para la adquisición y monitoreo ambulatorio de señales electrogastrográficas.",

    image: "/images/egg-monitor.jpg",

    overview:
      "Sistema portátil de cuatro canales diseñado para adquirir señales electrogastrográficas durante periodos prolongados y transmitir la información para su posterior análisis.",

    problem:
      "Los sistemas convencionales de electrogastrografía suelen limitar la movilidad del usuario y dificultan el monitoreo prolongado fuera de entornos clínicos.",

    solution:
      "Se desarrolló una arquitectura portátil basada en módulos de adquisición multicanal, conversión analógica-digital y comunicación inalámbrica.",

    technologies: [
      "ESP32",
      "ADS1115",
      "Python",
      "MATLAB",
      "Signal Processing",
    ],
  },

  {
    id: 2,
    slug: "orderis",
    title: "ORDERiS",

    category: "React · FastAPI · SQLite",

    description:
      "Sistema de punto de venta para restaurantes con gestión de cuentas, productos, pagos, impresión y reportes.",

    image: "/images/orderis/ORDERIS4.png",

    overview:
      "Sistema de punto de venta desarrollado para gestionar la operación diaria de un restaurante, desde la toma de órdenes hasta el cobro y análisis de ventas.",

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
  },

  {
    id: 3,
    slug: "sistema-multisensorial",
    title: "Sistema multisensorial",

    category: "ESP32 · IMU · EMG · Embedded Systems",

    description:
      "Sistema distribuido para adquisición de señales inerciales y electromiográficas mediante nodos embebidos.",

    image: "/images/sensors.jpg",

    overview:
      "Sistema de sensado distribuido diseñado para registrar variables biomecánicas utilizando sensores inerciales y señales electromiográficas.",

    problem:
      "La estimación del movimiento humano requiere combinar distintas fuentes de información para obtener mediciones más robustas.",

    solution:
      "Se integraron nodos embebidos con sensores inerciales y adquisición de EMG para obtener información sincronizada durante el movimiento.",

    technologies: [
      "ESP32",
      "IMU",
      "EMG",
      "C++",
      "Embedded Systems",
    ],
  },
]

export default projects