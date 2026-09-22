export const site = {
  name: 'Patricia Díaz Events',
  planner: 'Patricia',
  url: 'https://patriciadiazevents.com',
  tagline: 'Bodas con Alma para Parejas Bonitas',
  description:
    'Wedding planner en Andalucía especializada en bodas íntimas, auténticas y llenas de personalidad. Sevilla y toda Andalucía.',
  email: 'hola@patriciadiazevents.com',
  whatsapp: '34600000000',
  whatsappMessage: 'Hola Patricia, me gustaría hablar contigo sobre mi boda.',
  instagram: 'patriciadiazevents',
  instagramUrl: 'https://www.instagram.com/patriciadiazevents',
  location: 'Sevilla, Andalucía',
  availability: 'Agenda abierta 2026 y 2027',
  address: {
    city: 'Sevilla',
    region: 'Andalucía',
    country: 'ES',
  },
}

export const navLinks = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Bodas', href: '/bodas' },
  { label: 'Patricia', href: '/sobre-mi' },
]

export const services = [
  {
    id: 'boda-completa',
    title: 'Boda Completa',
    tag: 'Planificación integral',
    lead: 'Desde la primera idea hasta el último baile.',
    description:
      'Nos encargamos de todo: venue, proveedores, coordinación y cada detalle, para que el día de vuestra boda lo viváis sin preocuparos de nada.',
    includes: [
      'Búsqueda y negociación con proveedores',
      'Diseño del concepto y estilo',
      'Gestión del presupuesto',
      'Coordinación completa el día de la boda',
      'Acompañamiento hasta el último detalle',
    ],
  },
  {
    id: 'coordinacion',
    title: 'Coordinación del Gran Día',
    tag: 'Day of coordination',
    lead: 'Ya lo tenéis todo. Yo me encargo de que funcione.',
    description:
      'Para parejas que han organizado su boda y necesitan a alguien de confianza al frente el día de la celebración. Me aseguro de que cada proveedor, cada momento, esté donde debe estar.',
    includes: [
      'Reunión previa de traspaso',
      'Revisión de contratos y timings',
      'Coordinación completa el día',
      'Gestión de incidencias',
      'Llamada de seguimiento postcelebración',
    ],
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento y Guía',
    tag: 'Para parejas autónomas',
    lead: 'Vuestra brújula profesional.',
    description:
      'Sesiones de trabajo para parejas que quieren llevar ellas mismas su boda pero necesitan orientación experta: recomendaciones de proveedores, revisión de contratos y un plan claro.',
    includes: [
      'Sesiones de asesoramiento personalizadas',
      'Recomendaciones de proveedores contrastados',
      'Revisión de presupuesto y contratos',
      'Lista de tareas y calendario personalizado',
    ],
  },
]

export const steps = [
  {
    step: '01',
    title: 'Nos conocemos',
    description:
      'Una primera conversación sin compromiso para escuchar vuestra historia y ver si conectamos. Trabajo con pocas parejas al año para poder dedicarme de verdad a cada una.',
  },
  {
    step: '02',
    title: 'Diseñamos juntos',
    description:
      'Construimos el concepto de vuestra boda: estilo, atmósfera, proveedores, presupuesto y un calendario realista que nos guía durante todo el proceso.',
  },
  {
    step: '03',
    title: 'Lo organizamos todo',
    description:
      'Gestiono cada detalle, negocio con los proveedores en vuestro nombre y os mantengo informados en cada paso. Vosotros disfrutáis del proceso, yo me encargo del trabajo.',
  },
  {
    step: '04',
    title: 'Vivís vuestro día',
    description:
      'El día de la boda, me encargo de que todo fluya con naturalidad. Vosotros a disfrutar de cada momento. Para eso hemos trabajado durante meses.',
  },
]

export const testimonials = [
  {
    quote:
      'Patricia entendió desde el primer momento lo que queríamos: algo íntimo, con alma, sin artificios. La boda superó todo lo que habíamos imaginado.',
    author: 'Ana y Niko',
    location: 'Sevilla',
    date: 'Junio 2025',
    service: 'Boda Completa',
  },
  {
    quote:
      'Nos dio tranquilidad absoluta durante un año de preparativos. Su capacidad para resolver cualquier cosa con una sonrisa es algo que no tiene precio.',
    author: 'Vero y Borja',
    location: 'Córdoba',
    date: 'Abril 2025',
    service: 'Boda Completa',
  },
  {
    quote:
      'Trabajar con Patricia fue un regalo. Sabe escuchar, proponer y ejecutar con una elegancia que se nota en cada detalle de la celebración.',
    author: 'Ángela y Javier',
    location: 'Sevilla',
    date: 'Octubre 2024',
    service: 'Coordinación del Gran Día',
  },
]

export const portfolioPhotos = [
  { src: '/photos/portfolio-1.jpg', alt: 'Boda íntima en patio andaluz, Sevilla' },
  { src: '/photos/portfolio-2.jpg', alt: 'Pareja en cortijo andaluz con decoración floral' },
  { src: '/photos/portfolio-3.jpg', alt: 'Salida de novios en iglesia de Sevilla' },
]
