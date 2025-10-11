const services = [
  {
    slug: 'analisis-de-datos',
    title: 'Análisis de Datos',
    shortDescription: 'Insights precisos para decisiones estratégicas y crecimiento sostenido',
    icon: '/assets/img/service/icon/s-icon-1.svg',
    heroImage: '/assets/img/service/analisis.jpg',
    overview:
      'Transformamos grandes volúmenes de datos en información clara y accionable mediante analítica avanzada, dashboards interactivos y modelos predictivos que impulsan la toma de decisiones basada en evidencia.',
    benefits: [
      'Dashboards personalizados con métricas clave en tiempo real',
      'Integración unificada de múltiples fuentes de datos (ERP, CRM, APIs)',
      'Modelos predictivos y de machine learning para anticipar tendencias',
      'Automatización de reportes y alertas inteligentes',
      'Análisis visual con storytelling de datos para equipos directivos',
      'Seguridad y gobierno de datos conforme a estándares internacionales',
    ],
  },
  {
    slug: 'desarrollo-web',
    title: 'Desarrollo de Páginas y Sitios Web',
    shortDescription: 'Sitios web modernos, seguros y optimizados para resultados',
    icon: '/assets/img/service/icon/s-icon-4.svg',
    heroImage: '/assets/img/service/web.jpg',
    overview:
      'Diseñamos y desarrollamos sitios web profesionales con enfoque en velocidad, seguridad y posicionamiento SEO. Cada proyecto se adapta a la identidad de tu marca y las necesidades específicas de tu negocio.',
    benefits: [
      'Diseños UI/UX adaptativos centrados en conversión y experiencia',
      'Optimización avanzada para SEO técnico y Core Web Vitals',
      'Integración con CMS personalizados o headless (WordPress, Strapi, Sanity)',
      'Infraestructura escalable con hosting cloud y CDN global',
      'Cumplimiento con estándares de accesibilidad (WCAG 2.1)',
      'Monitoreo de rendimiento y mantenimiento proactivo 24/7',
    ],
  },
  {
    slug: 'automatizacion',
    title: 'Automatización de Procesos',
    shortDescription: 'Eficiencia operativa a través de flujos inteligentes',
    icon: '/assets/img/service/icon/s-icon-2.svg',
    heroImage: '/assets/img/service/automatizacion.jpg',
    overview:
      'Diseñamos e implementamos soluciones de automatización que reducen costos, eliminan errores y aceleran los flujos de trabajo mediante RPA, integraciones y herramientas low-code de última generación.',
    benefits: [
      'Implementación de bots RPA y scripts automatizados',
      'Integraciones inteligentes entre tus aplicaciones clave (CRM, ERP, Slack, etc.)',
      'Diseño de flujos low-code con Power Automate o Make (Integromat)',
      'Reducción de costos operativos y tiempos de ejecución',
      'Monitoreo y reportes de eficiencia en tiempo real',
      'Cumplimiento normativo y trazabilidad completa de procesos',
    ],
  },
  {
    slug: 'apps-moviles',
    title: 'Desarrollo de Aplicaciones Móviles',
    shortDescription: 'Aplicaciones nativas y multiplataforma con alto rendimiento',
    icon: '/assets/img/service/icon/s-icon-4.svg',
    heroImage: '/assets/img/service/movil.jpg',
    overview:
      'Desarrollamos aplicaciones móviles seguras, escalables y con interfaces fluidas. Usamos tecnologías modernas como React Native o Flutter para ofrecer experiencias consistentes en iOS y Android.',
    benefits: [
      'Apps nativas e híbridas optimizadas para rendimiento y usabilidad',
      'Integración con APIs y sistemas empresariales existentes',
      'Diseño centrado en UX y navegación intuitiva',
      'Despliegue continuo y soporte post-lanzamiento garantizado',
      'Implementación de notificaciones push, pagos y geolocalización',
      'Cumplimiento con políticas de App Store y Google Play',
    ],
  },
  {
    slug: 'seo',
    title: 'Posicionamiento SEO Avanzado',
    shortDescription: 'Mejora tu visibilidad y atrae tráfico orgánico de alto valor',
    icon: '/assets/img/service/icon/s-icon-1.svg',
    heroImage: '/assets/img/service/seo.jpg',
    overview:
      'Impulsamos tu marca hacia los primeros resultados de búsqueda con estrategias SEO integrales que combinan optimización técnica, análisis de palabras clave y contenido estratégico.',
    benefits: [
      'Auditorías técnicas completas (velocidad, indexación, metadatos)',
      'Estrategias de contenido basadas en intención de búsqueda',
      'Optimización on-page y off-page con backlinks de autoridad',
      'Análisis de competencia y oportunidades de posicionamiento',
      'Implementación de SEO local y Google My Business',
      'Reportes mensuales con métricas y recomendaciones de mejora',
    ],
  },
  {
    slug: 'software-a-medida',
    title: 'Desarrollo de Software a la Medida',
    shortDescription: 'Soluciones tecnológicas adaptadas a tus objetivos empresariales',
    icon: '/assets/img/service/icon/s-icon-3.svg',
    heroImage: '/assets/img/service/medida.jpg',
    overview:
      'Diseñamos, desarrollamos e implementamos software personalizado que se adapta a tus procesos críticos, mejora la eficiencia y escala junto con el crecimiento de tu empresa.',
    benefits: [
      'Arquitecturas modulares, seguras y escalables en la nube',
      'Integración fluida con sistemas heredados y APIs externas',
      'Diseño orientado a microservicios y DevOps',
      'Pruebas automatizadas y despliegue CI/CD continuo',
      'Soporte técnico y evolución funcional garantizada',
      'Cumplimiento de estándares ISO y GDPR en manejo de datos',
    ],
  },
  {
    slug: 'diseno-ui-ux',
    title: 'Diseño de Experiencia e Interfaz de Usuario (UI/UX)',
    shortDescription: 'Experiencias digitales memorables centradas en el usuario',
    icon: '/assets/img/service/icon/s-icon-3.svg',
    heroImage: '/assets/img/service/medida.jpg',
    overview:
      'Creamos interfaces intuitivas y experiencias centradas en el usuario basadas en investigación, pruebas de usabilidad y design systems escalables.',
    benefits: [
      'Investigación de usuarios y análisis de comportamiento (UX Research)',
      'Mapeo de experiencia (User Journey & Customer Flow)',
      'Design systems consistentes con guías visuales reutilizables',
      'Prototipos interactivos de alta fidelidad con Figma o XD',
      'Pruebas A/B y validación con usuarios reales',
      'Diseños orientados a accesibilidad y usabilidad universal',
    ],
  },
];


export default services;

export const getServiceBySlug = (slug) =>
  services.find((item) => item.slug === slug);


