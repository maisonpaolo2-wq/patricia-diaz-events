export const site = {
  name: 'Patricia Diaz Events',
  planner: 'Patricia',
  url: 'https://patriciadiazevents.com',
  tagline: 'Bodas con Alma para Parejas Bonitas',
  description:
    'Wedding planner en Andalucia especializada en bodas intimas, autenticas y llenas de personalidad. Sevilla y toda Andalucia.',
  email: 'hola@patriciadiazevents.com',
  whatsapp: '34600000000',
  whatsappMessage: 'Hola Patricia, me gustaria hablar contigo sobre mi boda.',
  instagram: 'patriciadiazevents',
  instagramUrl: 'https://www.instagram.com/patriciadiazevents',
  location: 'Sevilla, Andalucia',
  availability: 'Agenda abierta 2026 y 2027',
  address: {
    city: 'Sevilla',
    region: 'Andalucia',
    country: 'ES',
  },
}

export const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Como trabajamos', href: '#proceso' },
  { label: 'Bodas', href: '#portfolio' },
  { label: 'Patricia', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export const services = [
  {
    id: 'boda-completa',
    title: 'Boda Completa',
    tag: 'Planificacion integral',
    lead: 'Desde la primera idea hasta el ultimo baile.',
    description:
      'Nos encargamos de todo: venue, proveedores, coordinacion y cada detalle, para que el dia de vuestra boda lo viváis sin preocuparos de nada.',
    includes: [
      'Busqueda y negociacion con proveedores',
      'Diseno del concepto y estilo',
      'Gestion del presupuesto',
      'Coordinacion completa el dia de la boda',
      'Acompanamiento hasta el ultimo detalle',
    ],
  },
  {
    id: 'coordinacion',
    title: 'Coordinacion del Gran Dia',
    tag: 'Day of coordination',
    lead: 'Ya lo teneis todo. Yo me encargo de que funcione.',
    description:
      'Para parejas que han organizado su boda y necesitan a alguien de confianza al frente el dia de la celebracion. Me aseguro de que cada proveedor, cada momento, este donde debe estar.',
    includes: [
      'Reunion previa de traspaso',
      'Revision de contratos y timings',
      'Coordinacion completa el dia',
      'Gestion de incidencias',
      'Llamada de seguimiento postcelebracion',
    ],
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento y Guia',
    tag: 'Para parejas autonomas',
    lead: 'Vuestra brujula profesional.',
    description:
      'Sesiones de trabajo para parejas que quieren llevar ellas mismas su boda pero necesitan orientacion experta: recomendaciones de proveedores, revision de contratos y un plan claro.',
    includes: [
      'Sesiones de asesoramiento personalizadas',
      'Recomendaciones de proveedores contrastados',
      'Revision de presupuesto y contratos',
      'Lista de tareas y calendario personalizado',
    ],
  },
]

export const process = [
  {
    step: '01',
    title: 'Nos conocemos',
    description:
      'Una primera conversacion sin compromiso para escuchar vuestra historia y ver si conectamos. Trabajo con pocas parejas al ano para poder dedicarme de verdad a cada una.',
  },
  {
    step: '02',
    title: 'Disenamos juntos',
    description:
      'Construimos el concepto de vuestra boda: estilo, atmosfera, proveedores, presupuesto y un calendario realista que nos guia durante todo el proceso.',
  },
  {
    step: '03',
    title: 'Lo organizamos todo',
    description:
      'Gestiono cada detalle, negocio con los proveedores en vuestro nombre y os mantengo informados en cada paso. Vosotros disfrutais del proceso, yo me encargo del trabajo.',
  },
  {
    step: '04',
    title: 'Vivis vuestro dia',
    description:
      'El dia de la boda, me encargo de que todo fluya con naturalidad. Vosotros a disfrutar de cada momento. Para eso hemos trabajado durante meses.',
  },
]

export const testimonials = [
  {
    quote:
      'Patricia entendio desde el primer momento lo que queriamos: algo intimo, con alma, sin artificios. La boda supero todo lo que habiamos imaginado.',
    author: 'Ana y Niko',
    location: 'Sevilla',
    date: 'Junio 2025',
    service: 'Boda Completa',
  },
  {
    quote:
      'Nos dio tranquilidad absoluta durante un ano de preparativos. Su capacidad para resolver cualquier cosa con una sonrisa es algo que no tiene precio.',
    author: 'Vero y Borja',
    location: 'Cordoba',
    date: 'Abril 2025',
    service: 'Boda Completa',
  },
  {
    quote:
      'Trabajar con Patricia fue un regalo. Sabe escuchar, proponer y ejecutar con una elegancia que se nota en cada detalle de la celebracion.',
    author: 'Angela y Javier',
    location: 'Sevilla',
    date: 'Octubre 2024',
    service: 'Coordinacion del Gran Dia',
  },
]

export const portfolioPhotos = [
  { src: '/photos/portfolio-1.jpg', alt: 'Boda intima en patio andaluz, Sevilla' },
  { src: '/photos/portfolio-2.jpg', alt: 'Pareja en cortijo andaluz con decoracion floral' },
  { src: '/photos/portfolio-3.jpg', alt: 'Salida de novios en iglesia de Sevilla' },
  { src: '/photos/about.jpg', alt: 'Celebracion en finca sevillana' },
]
