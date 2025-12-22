// src/data/projects.js
export const projects = [
  {
    id: "tsc-portal",
    slug: "tribunal-superior-cuentas",
    title: {
      es: "Portal Web del Tribunal Superior de Cuentas",
      en: "Superior Court of Audits Web Portal",
    },
    intro: {
      es: "Modernización integral del sitio web institucional del TSC mediante WordPress, incluyendo migración de contenido masiva, diseño personalizado y documentación completa para un portal transparente de acceso público.",
      en: "Comprehensive modernization of the TSC institutional website using WordPress, including massive content migration, custom design, and complete documentation for a transparent public access portal.",
    },
    category: "gobierno",
    tags: ["WordPress", "IIS", "SEO"],
    year: 2023,
    client: {
      es: "Tribunal Superior de Cuentas (TSC)",
      en: "Superior Court of Audits (TSC)",
    },
    role: {
      es: "Analista/Desarrolladora",
      en: "Analyst/Developer",
    },
    technologies: [
      "WordPress",
      "IIS",
      "Document Library Pro",
      "UpDraftPlus",
      "CSS personalizado",
      "JavaScript",
      "Brevo (SMTP)",
    ],
    links: {
      site: "https://www.tsc.gob.hn/",
      reference:
        "https://proceso.hn/tsc-oficializa-lanzamiento-de-nuevo-sitio-web/",
    },
    description: {
      es: [
        "El proyecto consistió en el desarrollo y despliegue de un nuevo portal web para el Tribunal Superior de Cuentas de Honduras, financiado por USAID. El sitio anterior presentaba limitaciones técnicas y de diseño que dificultaban la publicación de documentos y el acceso de los ciudadanos a información pública.",
        "El nuevo portal se construyó desde cero utilizando WordPress como sistema de gestión de contenido, implementando una arquitectura robusta capaz de soportar acceso concurrente de múltiples usuarios a nivel nacional. Se realizó la migración de miles de archivos desde el sitio anterior, asegurando la integridad y disponibilidad de toda la información histórica.",
        "El proyecto se ejecutó bajo metodología Scrum, con sprints regulares y demostraciones al cliente. Mi participación abarcó múltiples áreas: análisis de requerimientos de servidor e infraestructura, personalización completa de la plantilla gubernamental seleccionada mediante CSS y JavaScript, configuración del entorno de despliegue en IIS, implementación del sistema de respaldos con UpDraftPlus, y creación de documentación técnica y de usuario.",
      ],
      en: [
        "The project involved the development and deployment of a new web portal for the Superior Court of Audits of Honduras, funded by USAID. The previous site had technical and design limitations that hindered document publication and citizen access to public information.",
        "The new portal was built from scratch using WordPress as a content management system, implementing a robust architecture capable of supporting concurrent access from multiple users nationwide. Thousands of files were migrated from the previous site, ensuring the integrity and availability of all historical information.",
        "The project was executed under Scrum methodology, with regular sprints and client demonstrations. My participation covered multiple areas: server and infrastructure requirements analysis, complete customization of the selected government template through CSS and JavaScript, deployment environment configuration in IIS, backup system implementation with UpDraftPlus, and creation of technical and user documentation.",
      ],
    },
    challenges: {
      es: [
        "Migrar miles de documentos del sitio anterior sin pérdida de información ni interrupciones del servicio público",
        "Diseñar una arquitectura que soportara alto tráfico concurrente de usuarios distribuidos nacionalmente",
        "Personalizar la plantilla gubernamental para cumplir con requisitos específicos de usabilidad y diseño institucional que no venían incluidos por defecto",
        "Implementar funcionalidades de ordenamiento y filtrado de documentos que facilitaran la transparencia y el acceso ciudadano a información pública",
        "Establecer procesos de respaldo y recuperación ante desastres para un sitio de naturaleza crítica gubernamental",
        "Coordinar con equipos de infraestructura para garantizar la correcta configuración del servidor y permisos del sistema",
        "Capacitar al personal no técnico del TSC para la administración autónoma del sitio tras la entrega",
      ],
      en: [
        "Migrate thousands of documents from the previous site without information loss or public service interruptions",
        "Design an architecture to support high concurrent traffic from nationally distributed users",
        "Customize the government template to meet specific usability and institutional design requirements not included by default",
        "Implement document sorting and filtering functionalities to facilitate transparency and citizen access to public information",
        "Establish backup and disaster recovery processes for a critical government site",
        "Coordinate with infrastructure teams to ensure proper server configuration and system permissions",
        "Train non-technical TSC staff for autonomous site administration after delivery",
      ],
    },
    solutions: {
      es: [
        "Análisis detallado de los recursos de servidor necesarios para garantizar rendimiento óptimo bajo carga, trabajando en colaboración con el ingeniero de infraestructura y el uso de un script de Python desarrollado por uno de mis compañeros para una extracción más rápida y eficaz de todos los documentos del sitio anterior",
        "Implementación del plugin Document Library Pro para gestión avanzada de documentos con capacidades de búsqueda, filtrado y ordenamiento",
        "Desarrollo de scripts JavaScript personalizados para resolver limitaciones de la plantilla y agregar comportamientos interactivos solicitados por el cliente",
        "Modificación extensiva de estilos CSS para lograr una identidad visual completamente alineada con la imagen gubernamental del TSC",
        "Configuración de UpDraftPlus para respaldos automáticos y migración segura entre ambientes de desarrollo, pruebas y producción",
        "Despliegue en IIS con configuración optimizada de permisos y estructura de directorios para WordPress",
        "Integración de Brevo para gestión profesional de correos SMTP y automatizaciones de notificaciones",
        "Creación de manuales técnicos y de usuario exhaustivos, tan detallados que eliminaron la necesidad de soporte post-implementación",
        "Conducción de sesiones de capacitación virtual con el personal del TSC, asegurando transferencia completa de conocimiento",
      ],
      en: [
        "Detailed analysis of server resources required to ensure optimal performance under load, working in collaboration with the infrastructure engineer and using a Python script developed by one of my colleagues for faster and more efficient extraction of all documents from the previous site",
        "Implementation of Document Library Pro plugin for advanced document management with search, filtering, and sorting capabilities",
        "Development of custom JavaScript scripts to resolve template limitations and add interactive behaviors requested by the client",
        "Extensive CSS style modifications to achieve a visual identity completely aligned with TSC's governmental image",
        "UpDraftPlus configuration for automatic backups and secure migration between development, testing, and production environments",
        "Deployment on IIS with optimized configuration of permissions and directory structure for WordPress",
        "Brevo integration for professional SMTP email management and notification automation",
        "Creation of exhaustive technical and user manuals, so detailed they eliminated the need for post-implementation support",
        "Conducting virtual training sessions with TSC staff, ensuring complete knowledge transfer",
      ],
    },
    resultsCards: [
      {
        value: { es: "Miles", en: "Thousands" },
        label: {
          es: "Documentos migrados exitosamente",
          en: "Successfully migrated documents",
        },
      },
      {
        value: "100%",
        label: { es: "Satisfacción del cliente", en: "Client satisfaction" },
      },
      {
        value: "0",
        label: {
          es: "Solicitudes de soporte post-entrega",
          en: "Post-delivery support requests",
        },
      },
      {
        value: { es: "Nacional", en: "Nationwide" },
        label: {
          es: "Alcance del sistema implementado",
          en: "Implemented system scope",
        },
      },
    ],
    results: {
      es: [
        "El cliente expresó completa satisfacción con el trabajo entregado, destacando tanto la calidad técnica como la comunicación asertiva mantenida durante todo el proyecto. La documentación detallada y las capacitaciones impartidas resultaron tan efectivas que nunca se recibió una sola solicitud de reunión para aclaraciones o resolución de problemas posteriores a la implementación.",
        "El portal modernizado mejoró significativamente la experiencia de los usuarios al acceder a documentos públicos, cumpliendo con los objetivos de transparencia gubernamental. El sitio continúa operando de manera estable, soportando el acceso de múltiples usuarios concurrentes a nivel nacional.",
      ],
      en: [
        "The client expressed complete satisfaction with the delivered work, highlighting both technical quality and assertive communication maintained throughout the project. The detailed documentation and training provided were so effective that not a single meeting request was received for clarifications or problem resolution after implementation.",
        "The modernized portal significantly improved user experience when accessing public documents, meeting governmental transparency objectives. The site continues to operate stably, supporting concurrent access from multiple users nationwide.",
      ],
    },
    prevProject: "/project/go-consultores",
    nextProject: "/project/copa-y-queso",
  },
  {
    id: "sipmer-seduc",
    slug: "sipmer-seduc",
    title: {
      es: "SIPMER - Sistema de Planificación SEDUC",
      en: "SIPMER - SEDUC Planning System",
    },
    intro: {
      es: "Sistema de Planificación, Monitoreo y Evaluación orientado a Resultados para la Secretaría de Educación. Arquitectura de microfrontends con React.js.",
      en: "Results-Based Planning, Monitoring and Evaluation System for the Ministry of Education. Microfrontend architecture with React.js.",
    },
    category: "gobierno",
    tags: ["React.js", "Microfrontends", "Gobierno"],
    year: 2024,
    client: {
      es: "Secretaría de Educación (SEDUC)",
      en: "Ministry of Education (SEDUC)",
    },
    role: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    technologies: [
      "React.js",
      "Microfrontends",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "AWS EC2",
    ],
    links: {
      reference:
        "https://www.facebook.com/transparenciaddefranciscomorazan/posts/1026652822835165/",
    },
    description: {
      es: [
        "Desarrollo de sistema complejo de planificación estratégica orientada a resultados para la Secretaría de Educación de Honduras.",
        "Implementación de arquitectura de microfrontends para permitir desarrollo modular y escalable por equipos distribuidos.",
        "Integración con sistemas legacy mediante APIs REST personalizadas.",
      ],
      en: [
        "Development of complex results-based strategic planning system for the Ministry of Education of Honduras.",
        "Implementation of microfrontend architecture to enable modular and scalable development by distributed teams.",
        "Integration with legacy systems through custom REST APIs.",
      ],
    },
    challenges: {
      es: [
        "Arquitectura distribuida con múltiples equipos trabajando en paralelo",
        "Integración con sistemas legacy de la secretaría",
        "Requisitos complejos de reportería y visualización de datos",
        "Alta disponibilidad para usuarios a nivel nacional",
      ],
      en: [
        "Distributed architecture with multiple teams working in parallel",
        "Integration with ministry legacy systems",
        "Complex reporting and data visualization requirements",
        "High availability for nationwide users",
      ],
    },
    solutions: {
      es: [
        "Arquitectura de microfrontends con Module Federation",
        "Design system compartido entre todos los módulos",
        "APIs RESTful con documentación OpenAPI",
        "Deployment en AWS EC2 con balanceo de carga",
      ],
      en: [
        "Microfrontend architecture with Module Federation",
        "Shared design system across all modules",
        "RESTful APIs with OpenAPI documentation",
        "Deployment on AWS EC2 with load balancing",
      ],
    },
    resultsCards: [
      {
        value: "5",
        label: { es: "Módulos independientes", en: "Independent modules" },
      },
      {
        value: "3",
        label: { es: "Equipos colaborando", en: "Collaborating teams" },
      },
      {
        value: { es: "Nacional", en: "Nationwide" },
        label: { es: "Cobertura", en: "Coverage" },
      },
    ],
    results: {
      es: [
        "Sistema operando exitosamente con alta disponibilidad.",
        "Reducción significativa en tiempo de generación de reportes estratégicos.",
      ],
      en: [
        "System operating successfully with high availability.",
        "Significant reduction in strategic report generation time.",
      ],
    },
    prevProject: "/project/copa-y-queso",
    nextProject: "/project/tribunal-superior-cuentas",
  },
  {
    id: "copa-y-queso",
    slug: "copa-y-queso",
    title: {
      es: "Copa y Queso - Marketplace",
      en: "Copa y Queso - Marketplace",
    },
    intro: {
      es: "Marketplace multivendedor con sistema de sommelier de IA. Desarrollo completo desde diseño de identidad visual hasta implementación técnica.",
      en: "Multivendor marketplace with AI sommelier system. Complete development from visual identity design to technical implementation.",
    },
    category: "ecommerce",
    tags: ["WooCommerce", "API REST", "IA"],
    year: 2023,
    client: {
      es: "Copa y Queso",
      en: "Copa y Queso",
    },
    role: {
      es: "Full Stack Developer & Designer",
      en: "Full Stack Developer & Designer",
    },
    technologies: [
      "WooCommerce",
      "WordPress",
      "PHP",
      "REST API",
      "OpenAI API",
      "MySQL",
      "Stripe",
      "Figma",
    ],
    links: {
      site: "https://copayqueso.com/",
    },
    description: {
      es: [
        "Desarrollo completo de marketplace especializado en vinos y quesos artesanales con funcionalidad multivendedor.",
        "Implementación de sommelier virtual mediante integración con OpenAI para recomendaciones personalizadas.",
        "Diseño de identidad visual completa incluyendo logo, paleta de colores y guías de estilo.",
      ],
      en: [
        "Complete development of specialized marketplace for wines and artisan cheeses with multivendor functionality.",
        "Implementation of virtual sommelier through OpenAI integration for personalized recommendations.",
        "Complete visual identity design including logo, color palette and style guides.",
      ],
    },
    challenges: {
      es: [
        "Sistema multivendedor con comisiones variables",
        "Integración de IA para recomendaciones de maridaje",
        "Gestión compleja de inventario distribuido",
        "Pasarela de pagos con splitting automático",
      ],
      en: [
        "Multivendor system with variable commissions",
        "AI integration for pairing recommendations",
        "Complex distributed inventory management",
        "Payment gateway with automatic splitting",
      ],
    },
    solutions: {
      es: [
        "WooCommerce Multivendor con customizaciones profundas",
        "API REST personalizada para sommelier de IA",
        "Sistema de gestión de inventario en tiempo real",
        "Integración Stripe Connect para pagos distribuidos",
      ],
      en: [
        "WooCommerce Multivendor with deep customizations",
        "Custom REST API for AI sommelier",
        "Real-time inventory management system",
        "Stripe Connect integration for distributed payments",
      ],
    },
    resultsCards: [
      {
        value: "50+",
        label: { es: "Vendedores activos", en: "Active vendors" },
      },
      {
        value: "95%",
        label: {
          es: "Precisión recomendaciones IA",
          en: "AI recommendation accuracy",
        },
      },
      {
        value: "3s",
        label: { es: "Tiempo carga promedio", en: "Average load time" },
      },
    ],
    results: {
      es: [
        "Plataforma operativa con múltiples vendedores activos generando transacciones diarias.",
        "Sommelier de IA ampliamente utilizado por los clientes con excelente retroalimentación.",
      ],
      en: [
        "Operational platform with multiple active vendors generating daily transactions.",
        "AI sommelier widely used by customers with excellent feedback.",
      ],
    },
    prevProject: "/project/sipmer-seduc",
    nextProject: "/project/go-consultores",
  },
  {
    id: "go-consultores",
    slug: "go-consultores",
    title: {
      es: "Go Consultores - Sitio Corporativo",
      en: "Go Consultores - Corporate Site",
    },
    intro: {
      es: "Desarrollo full-stack del sitio corporativo. Diseño, contenido, optimización SEO y gestión completa de hosting.",
      en: "Full-stack development of corporate website. Design, content, SEO optimization and complete hosting management.",
    },
    category: "corporativo",
    tags: ["WordPress", "SEO", "Branding"],
    year: 2023,
    client: {
      es: "Go Consultores",
      en: "Go Consultores",
    },
    role: {
      es: "Full Stack Developer & Content Creator",
      en: "Full Stack Developer & Content Creator",
    },
    technologies: [
      "WordPress",
      "Elementor",
      "Yoast SEO",
      "Google Analytics",
      "cPanel",
      "Figma",
    ],
    links: {
      site: "https://www.goconsultores.com/",
    },
    description: {
      es: [
        "Desarrollo completo del sitio web corporativo para firma consultora.",
        "Creación de contenido estratégico alineado con objetivos de negocio.",
        "Optimización SEO técnica y de contenido para posicionamiento orgánico.",
      ],
      en: [
        "Complete development of corporate website for consulting firm.",
        "Strategic content creation aligned with business objectives.",
        "Technical and content SEO optimization for organic positioning.",
      ],
    },
    challenges: {
      es: [
        "Posicionamiento en mercado competitivo",
        "Comunicar valor diferencial de servicios",
        "Optimización para conversión de leads",
        "Gestión completa sin equipo técnico interno",
      ],
      en: [
        "Positioning in competitive market",
        "Communicate differential value of services",
        "Lead conversion optimization",
        "Complete management without internal technical team",
      ],
    },
    solutions: {
      es: [
        "Estrategia de contenido SEO-focused",
        "Diseño UX orientado a conversión",
        "Implementación de analytics y tracking",
        "Gestión proactiva de hosting y mantenimiento",
      ],
      en: [
        "SEO-focused content strategy",
        "Conversion-oriented UX design",
        "Analytics and tracking implementation",
        "Proactive hosting and maintenance management",
      ],
    },
    resultsCards: [
      {
        value: "300%",
        label: {
          es: "Aumento tráfico orgánico",
          en: "Organic traffic increase",
        },
      },
      {
        value: "45%",
        label: { es: "Tasa de conversión", en: "Conversion rate" },
      },
      {
        value: "99.9%",
        label: { es: "Uptime", en: "Uptime" },
      },
    ],
    results: {
      es: [
        "Incremento significativo en leads calificados generados por el sitio.",
        "Posicionamiento en primeras páginas de Google para keywords objetivo.",
      ],
      en: [
        "Significant increase in qualified leads generated by the site.",
        "Positioning on first Google pages for target keywords.",
      ],
    },
    prevProject: "/project/tribunal-superior-cuentas",
    nextProject: "/project/sipmer-seduc",
  },
];
