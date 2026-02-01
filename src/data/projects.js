// src/data/projects.js
export const projects = [
  {
    id: "tsc-portal",
    slug: "tribunal-superior-cuentas",
    featured: true,
    title: {
      es: "Portal Web del Tribunal Superior de Cuentas",
      en: "Superior Court of Audits Web Portal",
    },
    intro: {
      es: "Modernización integral del sitio web institucional del TSC mediante WordPress, incluyendo migración de contenido masiva, diseño personalizado y documentación completa para un portal transparente de acceso público.",
      en: "Comprehensive modernization of the TSC institutional website using WordPress, including massive content migration, custom design, and complete documentation for a transparent public access portal.",
    },
    category: "gobierno",
    tags: ["WordPress", "IIS", "SEO", "Elementor"],
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
      "CSS",
      "JavaScript",
      "Elementor",
    ],
    images: {
      main: "/portfolio/images/projects/tsc/main.png",
      /*
      gallery: [
        "/portfolio/images/projects/tsc/screenshot-1.jpg",
        "/images/projects/tsc/screenshot-2.jpg",
        "/images/projects/tsc/screenshot-3.jpg"
      ]*/
    },
    media: {
      iframe: "https://www.tsc.gob.hn/",
      videos: [],
    },
    relatedCode: {
      repositories: [],
    },
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
    prevProject: "/project/api-node",
    nextProject: "/project/sipmer-seduc",
  },
  {
    id: "sipmer-seduc",
    slug: "sipmer-seduc",
    featured: true,
    title: {
      es: "SIPMER - Sistema de Planificación SEDUC",
      en: "SIPMER - SEDUC Planning System",
    },
    intro: {
      es: "Sistema de Planificación, Monitoreo y Evaluación orientado a Resultados para la Secretaría de Educación. Arquitectura de microfrontends con React.js.",
      en: "Results-Based Planning, Monitoring and Evaluation System for the Ministry of Education. Microfrontend architecture with React.js.",
    },
    category: "gobierno",
    tags: ["React.js", "Microfrontends", "Gobierno", "SPA"],
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
      "SPA",
      "Webpack",
    ],
    images: {
      main: "/portfolio/images/projects/sipmer/main.png",
      /*
      gallery: [
        "/portfolio/images/projects/tsc/screenshot-1.jpg",
        "/images/projects/tsc/screenshot-2.jpg",
        "/images/projects/tsc/screenshot-3.jpg"
      ]*/
    },
    media: {
      iframe: "https://sipmer.se.gob.hn/login",
      videos: [],
    },
    relatedCode: {
      repositories: [],
    },
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
        "Deployment en AWS EC2 con balanceo de carga",
      ],
      en: [
        "Microfrontend architecture with SPA",
        "Shared design system across all modules",
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
    prevProject: "/project/tribunal-superior-cuentas",
    nextProject: "/project/copa-y-queso",
  },
  {
    id: "copa-y-queso",
    slug: "copa-y-queso",
    featured: false,
    title: {
      es: "Copa y Queso - Marketplace y Club de Vinos",
      en: "Copa y Queso - Marketplace and Wine Club",
    },
    intro: {
      es: "Marketplace multivendedor con sistema de sommelier de IA y club de vinos por suscripción. Desarrollo full-stack incluyendo arquitectura custom de membresías, automatización de entregas mensuales y migración compleja entre ambientes.",
      en: "Multivendor marketplace with AI sommelier system and subscription-based wine club. Full-stack development including custom membership architecture, monthly delivery automation, and complex environment migration.",
    },
    category: "ecommerce",
    tags: ["WooCommerce", "API REST", "IA", "Subscripciones", "PHP Custom"],
    year: 2025,
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
      "PayPal",
      "Elementor",
      "Custom Plugins",
      "Code Snippets",
      "RankMath SEO",
      "WooCommerce Subscriptions",
      "WooCommerce Memberships",
      "FileZilla",
      "GoDaddy Managed WordPress",
      "HTML/CSS Custom",
      "Shortcodes PHP",
    ],
    images: {
      main: "/portfolio/images/projects/copayqueso/main.png",
      /*
      gallery: [
        "/portfolio/images/projects/tsc/screenshot-1.jpg",
        "/images/projects/tsc/screenshot-2.jpg",
        "/images/projects/tsc/screenshot-3.jpg"
      ]*/
    },
    media: {
      iframe: null,
      videos: [],
    },
    relatedCode: {
      repositories: [],
    },
    links: {
      site: "https://copayqueso.com/",
    },
    description: {
      es: [
        "Desarrollo completo de marketplace especializado en vinos y quesos artesanales con funcionalidad multivendedor y sistema de club de vinos por suscripción.",
        "Implementación de sommelier virtual mediante integración con OpenAI para recomendaciones personalizadas de maridaje.",
        "Arquitectura custom para club de vinos construida desde cero: sistema completo de gestión de membresías, página dedicada del usuario con 7 secciones funcionales (gestión de membresía, historial de entregas, cálculo de ahorros, colección personal de vinos, ofertas exclusivas, blog privado y políticas), todo desarrollado mediante shortcodes PHP personalizados y HTML/CSS.",
        "Desarrollo de plugin administrativo para creación y automatización de entregas mensuales del club: permite seleccionar vinos del inventario y generar pedidos automáticos con costo $0 para miembros activos mediante un solo clic.",
        "Migración técnica compleja desde instancia EC2 con IIS hacia GoDaddy Managed WordPress, resolviendo conflictos de seguridad con UpDraftPlus mediante transferencia manual de plugins vía FileZilla.",
      ],
      en: [
        "Complete development of specialized marketplace for wines and artisan cheeses with multivendor functionality and subscription-based wine club system.",
        "Implementation of virtual sommelier through OpenAI integration for personalized pairing recommendations.",
        "Custom wine club architecture built from scratch: complete membership management system, dedicated user page with 7 functional sections (membership management, delivery history, savings calculator, personal wine collection, exclusive offers, private blog, and policies), all developed through custom PHP shortcodes and HTML/CSS.",
        "Development of administrative plugin for creation and automation of monthly club deliveries: allows selecting wines from inventory and generating automatic orders at $0 cost for active members with a single click.",
        "Complex technical migration from EC2 instance with IIS to GoDaddy Managed WordPress, resolving security conflicts with UpDraftPlus through manual plugin transfer via FileZilla.",
      ],
    },
    challenges: {
      es: [
        "Sistema multivendedor con comisiones variables",
        "Integración de IA para recomendaciones de maridaje",
        "Gestión compleja de inventario distribuido",
        "Pasarela de pagos con splitting automático",
        "Arquitectura completa de club de vinos inexistente en plugins disponibles: necesidad de construir desde cero sistema de gestión de membresías, entregas automatizadas, tracking de colecciones personales y cálculo de ahorros acumulados",
        "Automatización de generación de pedidos mensuales con costo $0 para miembros activos, integrando lógica de suscripciones con inventario disponible",
        "Migración fallida por bloqueo de seguridad de GoDaddy al detectar UpDraftPlus como amenaza, impidiendo importación completa de plugins",
        "Compatibilidad entre ambiente EC2/IIS original y WordPress administrado de GoDaddy con restricciones de seguridad",
        "Construcción de interfaz de usuario compleja para área de miembro con múltiples secciones funcionales sin usar plugins third-party",
      ],
      en: [
        "Multivendor system with variable commissions",
        "AI integration for pairing recommendations",
        "Complex distributed inventory management",
        "Payment gateway with automatic splitting",
        "Complete wine club architecture non-existent in available plugins: need to build from scratch membership management system, automated deliveries, personal collection tracking, and accumulated savings calculation",
        "Automation of monthly order generation at $0 cost for active members, integrating subscription logic with available inventory",
        "Failed migration due to GoDaddy security block detecting UpDraftPlus as threat, preventing complete plugin import",
        "Compatibility between original EC2/IIS environment and GoDaddy Managed WordPress with security restrictions",
        "Construction of complex user interface for member area with multiple functional sections without using third-party plugins",
      ],
    },
    solutions: {
      es: [
        "WooCommerce Multivendor con customizaciones profundas para comisiones y gestión de vendedores",
        "API REST personalizada para sommelier de IA usando OpenAI API",
        "Sistema de gestión de inventario en tiempo real",
        "Integración PayPal para pagos distribuidos entre vendedores",
        "Desarrollo de 5 shortcodes PHP personalizados para secciones funcionales del club: (1) gestión de membresía con estado de suscripción, (2) historial completo de entregas recibidas, (3) calculadora de ahorros acumulados por membresía, (4) colección personal de vinos comprados/recibidos, (5) ofertas exclusivas para miembros",
        "Construcción de página dedicada de club de vinos usando HTML/CSS custom integrado con shortcodes PHP",
        "Plugin administrativo custom para creación de entregas mensuales: interfaz para seleccionar vinos del inventario, botón de generación automática de pedidos $0 para usuarios con suscripción activa mediante validación de estado de membresía",
        "Aprovechamiento de WooCommerce Subscriptions y WooCommerce Memberships premium incluidos en plan GoDaddy Managed WordPress eCommerce",
        "Resolución de bloqueo de migración mediante FileZilla: transferencia manual de plugins y archivos del sitio directamente a servidor GoDaddy vía FTP, bypassing detección de seguridad de UpDraftPlus",
        "Aplicación de conocimiento técnico full-stack para diagnosticar causa raíz del fallo de migración y ejecutar transferencia manual exitosa de ambiente EC2/IIS a GoDaddy Managed WordPress",
      ],
      en: [
        "WooCommerce Multivendor with deep customizations for commissions and vendor management",
        "Custom REST API for AI sommelier using OpenAI API",
        "Real-time inventory management system",
        "PayPal integration for distributed payments between vendors",
        "Development of 5 custom PHP shortcodes for club functional sections: (1) membership management with subscription status, (2) complete history of received deliveries, (3) accumulated membership savings calculator, (4) personal collection of purchased/received wines, (5) exclusive member offers",
        "Construction of dedicated wine club page using custom HTML/CSS integrated with PHP shortcodes",
        "Custom administrative plugin for monthly delivery creation: interface to select wines from inventory, automatic generation button for $0 orders for users with active subscription through membership status validation",
        "Leverage of premium WooCommerce Subscriptions and WooCommerce Memberships included in GoDaddy Managed WordPress eCommerce plan",
        "Resolution of migration block through FileZilla: manual transfer of plugins and site files directly to GoDaddy server via FTP, bypassing UpDraftPlus security detection",
        "Application of full-stack technical knowledge to diagnose root cause of migration failure and execute successful manual transfer from EC2/IIS environment to GoDaddy Managed WordPress",
      ],
    },
    resultsCards: [
      {
        value: "50+",
        label: { es: "Vendedores activos", en: "Active vendors" },
      },
      {
        value: "7",
        label: {
          es: "Secciones funcionales del club",
          en: "Club functional sections",
        },
      },
      {
        value: "100%",
        label: {
          es: "Automatización entregas mensuales",
          en: "Monthly delivery automation",
        },
      },
      {
        value: "95%",
        label: {
          es: "Precisión recomendaciones IA",
          en: "AI recommendation accuracy",
        },
      },
    ],
    results: {
      es: [
        "Plataforma operativa con múltiples vendedores activos generando transacciones diarias.",
        "Club de vinos funcionando completamente con entregas automatizadas mensuales, tracking de colecciones personales y cálculo de ahorros en tiempo real.",
        "Migración exitosa a GoDaddy Managed WordPress superando bloqueos de seguridad mediante solución técnica de transferencia manual.",
        "Sommelier de IA ampliamente utilizado por clientes con excelente retroalimentación en recomendaciones de maridaje.",
        "Sistema de membresías operando sin intervención manual: generación automática de pedidos mensuales con un solo clic desde panel administrativo.",
      ],
      en: [
        "Operational platform with multiple active vendors generating daily transactions.",
        "Fully functional wine club with automated monthly deliveries, personal collection tracking, and real-time savings calculation.",
        "Successful migration to GoDaddy Managed WordPress overcoming security blocks through technical manual transfer solution.",
        "AI sommelier widely used by customers with excellent feedback on pairing recommendations.",
        "Membership system operating without manual intervention: automatic monthly order generation with single click from admin panel.",
      ],
    },
    prevProject: "/project/sipmer-seduc",
    nextProject: "/project/go-consultores",
  },
  {
    id: "go-consultores",
    slug: "go-consultores",
    featured: true,
    title: {
      es: "Go Consultores - Sitio Corporativo",
      en: "Go Consultores - Corporate Site",
    },
    intro: {
      es: "Personalización y optimización de sitio corporativo con producción completa de contenido multimedia. Gestión integral desde adaptación de plantilla hasta creación de videos promocionales profesionales y estrategia SEO.",
      en: "Corporate site customization and optimization with complete multimedia content production. Comprehensive management from template adaptation to professional promotional video creation and SEO strategy.",
    },
    category: "corporativo",
    tags: ["WordPress", "SEO", "Video Production", "Content Creation"],
    year: 2023,
    client: {
      es: "Go Consultores",
      en: "Go Consultores",
    },
    role: {
      es: "Full Stack Developer, Content Creator & Multimedia Producer",
      en: "Full Stack Developer, Content Creator & Multimedia Producer",
    },
    technologies: [
      "WordPress",
      "Elementor",
      "RankMath SEO",
      "Google Analytics",
      "cPanel",
      "Figma",
      "Video Editing",
      "Pexels",
      "Unsplash",
      "Icons8",
    ],
    images: {
      main: "/portfolio/images/projects/goconsultores/main.png",
      /*
      gallery: [
        "/portfolio/images/projects/tsc/screenshot-1.jpg",
        "/images/projects/tsc/screenshot-2.jpg",
        "/images/projects/tsc/screenshot-3.jpg"
      ]*/
    },
    media: {
      iframe: "https://www.goconsultores.com/",
      videos: [
        {
          url: "8L8t8FQOBLQ",
          title: {
            es: "Video de presentación del producto de Asistente IA Empresarial",
            en: "Presentation video of the Business AI Assistant product",
          },
        },
        {
          url: "hjnuJa1RiU0",
          title: {
            es: "Video de presentación del producto de Facturación Electrónica",
            en: "Product presentation video for Electronic Invoicing",
          },
        },
      ],
    },
    relatedCode: {
      repositories: [],
    },
    links: {
      site: "https://www.goconsultores.com/",
      video1: "https://youtu.be/hjnuJa1RiU0",
      video2: "https://youtu.be/8L8t8FQOBLQ",
    },
    description: {
      es: [
        "Personalización completa de plantilla WordPress premium adaptada a necesidades específicas de firma consultora mediante Elementor.",
        "Producción integral de contenido multimedia: creación de entradas de blog, selección y optimización de imágenes de bancos gratuitos (Pexels, Unsplash), curación de íconos personalizados de Icons8 con adaptación de colores a identidad de marca.",
        "Producción de videos promocionales profesionales para productos destacados, generando entusiasmo del equipo con resultados de calidad comercial.",
        "Implementación creativa de diagrama animado de Figma para producto 'Asistente IA Empresarial': animaciones interactivas activadas por hover del cursor sobre elementos del diagrama.",
        "Optimización técnica SEO mediante RankMath, optimización de imágenes y estructura de contenido para posicionamiento orgánico.",
        "Gestión completa de hosting en cPanel y mantenimiento continuo del sitio.",
      ],
      en: [
        "Complete customization of premium WordPress template adapted to specific consulting firm needs through Elementor.",
        "Comprehensive multimedia content production: blog post creation, selection and optimization of images from free banks (Pexels, Unsplash), custom icon curation from Icons8 with color adaptation to brand identity.",
        "Production of professional promotional videos for featured products, generating team enthusiasm with commercial-quality results.",
        "Creative implementation of animated Figma diagram for 'Enterprise AI Assistant' product: interactive animations triggered by cursor hover over diagram elements.",
        "Technical SEO optimization through RankMath, image optimization and content structure for organic positioning.",
        "Complete hosting management on cPanel and continuous site maintenance.",
      ],
    },
    challenges: {
      es: [
        "Adaptación de plantilla premium a necesidades específicas sin perder funcionalidad",
        "Producción de contenido multimedia profesional con recursos limitados",
        "Posicionamiento en mercado competitivo de consultoría",
        "Comunicar valor diferencial de servicios complejos como IA empresarial",
        "Creación de experiencia interactiva para producto técnico sin saturar al usuario",
        "Optimización para conversión de leads calificados",
        "Gestión completa sin equipo técnico interno del cliente",
      ],
      en: [
        "Adaptation of premium template to specific needs without losing functionality",
        "Production of professional multimedia content with limited resources",
        "Positioning in competitive consulting market",
        "Communicate differential value of complex services like enterprise AI",
        "Creation of interactive experience for technical product without overwhelming user",
        "Optimization for qualified lead conversion",
        "Complete management without client's internal technical team",
      ],
    },
    solutions: {
      es: [
        "Personalización profunda de plantilla mediante Elementor adaptando layouts, colores y componentes a marca corporativa",
        "Estrategia de contenido SEO-focused implementada con RankMath para optimización on-page",
        "Producción de videos promocionales de alta calidad usando herramientas de edición profesional, logrando resultados que entusiasmaron al equipo completo",
        "Curación estratégica de recursos visuales: imágenes optimizadas de Pexels/Unsplash, íconos personalizados de Icons8 con palette de colores de marca",
        "Implementación de diagrama animado de Figma con interacciones hover para producto de IA empresarial, creando experiencia visual innovadora sin JavaScript complejo",
        "Diseño UX orientado a conversión con llamados a acción estratégicos",
        "Implementación de Google Analytics para tracking de comportamiento y conversiones",
        "Gestión proactiva de hosting en cPanel y mantenimiento preventivo",
        "Creación completa de entradas de blog optimizadas para SEO y engagement",
      ],
      en: [
        "Deep template customization through Elementor adapting layouts, colors and components to corporate brand",
        "SEO-focused content strategy implemented with RankMath for on-page optimization",
        "Production of high-quality promotional videos using professional editing tools, achieving results that excited the entire team",
        "Strategic curation of visual resources: optimized images from Pexels/Unsplash, custom icons from Icons8 with brand color palette",
        "Implementation of animated Figma diagram with hover interactions for enterprise AI product, creating innovative visual experience without complex JavaScript",
        "Conversion-oriented UX design with strategic calls to action",
        "Google Analytics implementation for behavior and conversion tracking",
        "Proactive hosting management on cPanel and preventive maintenance",
        "Complete creation of blog posts optimized for SEO and engagement",
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
        value: "2",
        label: {
          es: "Videos profesionales producidos",
          en: "Professional videos produced",
        },
      },
      {
        value: "100%",
        label: {
          es: "Imágenes optimizadas",
          en: "Optimized images",
        },
      },
      {
        value: "99.9%",
        label: { es: "Uptime", en: "Uptime" },
      },
    ],
    results: {
      es: [
        "Videos promocionales recibidos con entusiasmo por equipo completo, elevando estándar de comunicación de productos.",
        "Implementación exitosa de diagrama animado interactivo para producto de IA empresarial, diferenciando presentación de competencia.",
        "Incremento significativo en leads calificados generados por el sitio.",
        "Posicionamiento mejorado en resultados de búsqueda para keywords objetivo mediante optimización RankMath.",
        "Identidad visual cohesiva lograda mediante curación estratégica de recursos visuales y adaptación de colores de marca.",
      ],
      en: [
        "Promotional videos received with enthusiasm by entire team, elevating product communication standard.",
        "Successful implementation of interactive animated diagram for enterprise AI product, differentiating presentation from competition.",
        "Significant increase in qualified leads generated by site.",
        "Improved positioning in search results for target keywords through RankMath optimization.",
        "Cohesive visual identity achieved through strategic curation of visual resources and brand color adaptation.",
      ],
    },
    prevProject: "/project/copa-y-queso",
    nextProject: "/project/api-node",
  },
  {
    id: "api-node",
    slug: "api-node",
    featured: false,
    title: {
      es: "API REST Versionada para Gestión de Proyectos",
      en: "Versioned REST API for Project Management",
    },
    intro: {
      es: "API REST robusta y escalable construida con Node.js y Express para la gestión integral de proyectos, etapas, proveedores, equipos y empleados, con arquitectura versionada y validación avanzada de datos.",
      en: "Robust and scalable REST API built with Node.js and Express for comprehensive management of projects, phases, suppliers, teams and employees, with versioned architecture and advanced data validation.",
    },
    category: "backend",
    tags: ["Node.js", "Express", "REST API", "MSSQL", "Joi"],
    year: 2023,
    client: {
      es: "Proyecto para empresa Constructora",
      en: "Project for Constructor Business",
    },
    role: {
      es: "Desarrolladora Backend",
      en: "Backend Developer",
    },
    technologies: [
      "Node.js",
      "Express.js",
      "MSSQL",
      "Joi",
      "SQL Server",
      "REST API",
      "CORS",
    ],
    images: {
      main: "/portfolio/images/projects/apinode/main.png",
    },
    media: {
      iframe: null,
      videos: [],
    },
    relatedCode: {
      repositories: [
        {
          label: {
            es: "Repositorio en GitHub",
            en: "GitHub Repository",
          },
          url: "https://github.com/fersycode/api_node",
          status: "available",
        },
      ],
    },
    links: null,
    description: {
      es: [
        "Esta API REST fue desarrollada para proporcionar una solución backend robusta y escalable para la gestión de proyectos empresariales. El sistema permite administrar de manera eficiente proyectos, sus etapas, proveedores asociados, equipos de trabajo y empleados, todo a través de una interfaz programática estandarizada.",
        "La arquitectura implementa un sistema de versionado de API (actualmente v1) que facilita la evolución del sistema sin romper compatibilidad con clientes existentes. Cada endpoint está diseñado siguiendo las mejores prácticas de REST, con validación exhaustiva de datos de entrada mediante el esquema Joi y manejo centralizado de errores para garantizar respuestas consistentes.",
        "El proyecto utiliza SQL Server como base de datos, implementando consultas preparadas para prevenir vulnerabilidades de SQL injection y optimizar el rendimiento. La estructura modular del código separa claramente controladores, rutas, validadores y configuración de base de datos, facilitando el mantenimiento y la escalabilidad del sistema.",
      ],
      en: [
        "This REST API was developed to provide a robust and scalable backend solution for enterprise project management. The system efficiently manages projects, their phases, associated suppliers, work teams, and employees, all through a standardized programmatic interface.",
        "The architecture implements an API versioning system (currently v1) that facilitates system evolution without breaking compatibility with existing clients. Each endpoint is designed following REST best practices, with exhaustive input data validation using Joi schema and centralized error handling to ensure consistent responses.",
        "The project uses SQL Server as the database, implementing prepared statements to prevent SQL injection vulnerabilities and optimize performance. The modular code structure clearly separates controllers, routes, validators, and database configuration, facilitating system maintenance and scalability.",
      ],
    },
    challenges: {
      es: [
        "Diseñar una arquitectura de API escalable y preparada para evolucionar sin romper compatibilidad con versiones anteriores",
        "Implementar un sistema robusto de validación de datos que proteja contra entradas maliciosas y errores de usuario",
        "Garantizar la seguridad de las consultas SQL y prevenir vulnerabilidades de inyección",
        "Crear un sistema de manejo de errores centralizado que proporcione información útil sin exponer detalles sensibles del sistema",
        "Estructurar el código de manera modular para facilitar el mantenimiento y la adición de nuevas funcionalidades",
        "Establecer estándares de respuesta consistentes para todos los endpoints de la API",
      ],
      en: [
        "Design a scalable API architecture prepared to evolve without breaking backward compatibility",
        "Implement a robust data validation system that protects against malicious inputs and user errors",
        "Ensure SQL query security and prevent injection vulnerabilities",
        "Create a centralized error handling system that provides useful information without exposing sensitive system details",
        "Structure code modularly to facilitate maintenance and addition of new functionalities",
        "Establish consistent response standards for all API endpoints",
      ],
    },
    solutions: {
      es: [
        "Implementación de versionado de API en las URLs (v1) para permitir evolución controlada del sistema y mantener compatibilidad con clientes existentes",
        "Utilización de Joi para validación exhaustiva de query parameters, tipos de datos, longitudes de string y valores permitidos, con mensajes de error descriptivos",
        "Uso de parámetros preparados en todas las consultas SQL para prevenir inyección y garantizar la seguridad de los datos",
        "Desarrollo de middleware de manejo de errores centralizado que diferencia entre entornos de desarrollo y producción para no exponer información sensible",
        "Estructura modular con separación clara: controladores base, rutas versionadas, validadores independientes y configuración de base de datos aislada",
        "Estandarización de respuestas JSON con estructura consistente (success, data, count) para facilitar el consumo por clientes",
        "Configuración de CORS y logging de requests para mejorar la trazabilidad y depuración",
        "Sanitización automática de datos de entrada para prevenir ataques XSS y garantizar la integridad de la información",
      ],
      en: [
        "Implementation of API versioning in URLs (v1) to allow controlled system evolution and maintain compatibility with existing clients",
        "Use of Joi for exhaustive validation of query parameters, data types, string lengths, and allowed values, with descriptive error messages",
        "Use of prepared statements in all SQL queries to prevent injection and ensure data security",
        "Development of centralized error handling middleware that differentiates between development and production environments to avoid exposing sensitive information",
        "Modular structure with clear separation: base controllers, versioned routes, independent validators, and isolated database configuration",
        "Standardization of JSON responses with consistent structure (success, data, count) to facilitate consumption by clients",
        "CORS configuration and request logging to improve traceability and debugging",
        "Automatic sanitization of input data to prevent XSS attacks and ensure information integrity",
      ],
    },
    resultsCards: [
      {
        value: "5",
        label: { es: "Endpoints principales", en: "Main endpoints" },
      },
      {
        value: "v1",
        label: { es: "Versión de API activa", en: "Active API version" },
      },
      {
        value: "100%",
        label: { es: "Validación de datos", en: "Data validation coverage" },
      },
      {
        value: { es: "Modular", en: "Modular" },
        label: { es: "Arquitectura del código", en: "Code architecture" },
      },
    ],
    results: {
      es: [
        "La API proporciona una base sólida y escalable para la gestión de proyectos empresariales, con una arquitectura que facilita la adición de nuevas funcionalidades sin comprometer la estabilidad del sistema. El sistema de versionado permite evolucionar la API de manera controlada, mientras que la validación exhaustiva garantiza la integridad de los datos.",
        "La estructura modular del código facilita significativamente el mantenimiento y la colaboración en equipo. La implementación de seguridad mediante consultas preparadas y la validación con Joi protege efectivamente contra las vulnerabilidades más comunes. El proyecto establece una base técnica sólida lista para incorporar mejoras como autenticación JWT, rate limiting, tests automatizados y documentación con Swagger.",
      ],
      en: [
        "The API provides a solid and scalable foundation for enterprise project management, with an architecture that facilitates adding new functionalities without compromising system stability. The versioning system allows controlled API evolution, while exhaustive validation ensures data integrity.",
        "The modular code structure significantly facilitates maintenance and team collaboration. Security implementation through prepared statements and Joi validation effectively protects against the most common vulnerabilities. The project establishes a solid technical foundation ready to incorporate improvements such as JWT authentication, rate limiting, automated tests, and Swagger documentation.",
      ],
    },
    prevProject: "/project/go-consultores",
    nextProject: "/project/posts-comments-manager",
  },
  {
    id: "posts-comments-manager",
    slug: "posts-comments-manager",
    featured: false,
    title: {
      es: "Posts & Comments Manager - Sistema Full-Stack con JWT",
      en: "Posts & Comments Manager - Full-Stack System with JWT",
    },
    intro: {
      es: "Aplicación full-stack desarrollada en 3 días como prueba técnica, superando ampliamente los requisitos. Implementación extra de autenticación JWT, upload de imágenes con Docker volumes, y diseño glassmorfismo aprovechando certificación UI/UX reciente. Arquitectura con Angular 18 signals, NestJS modular, MongoDB en Docker, y experiencia de usuario premium.",
      en: "Full-stack application developed in 3 days as technical assessment, widely exceeding requirements. Extra implementation of JWT authentication, image upload with Docker volumes, and glassmorphism design leveraging recent UI/UX certification. Architecture with Angular 18 signals, modular NestJS, MongoDB on Docker, and premium user experience.",
    },
    category: "full-stack",
    tags: [
      "Angular 18",
      "NestJS",
      "MongoDB",
      "Docker",
      "JWT",
      "TypeScript",
      "Glassmorphism",
      "UI/UX",
    ],
    year: 2026,
    client: {
      es: "Prueba Técnica Personal",
      en: "Personal Technical Assessment",
    },
    role: {
      es: "Full Stack Developer & UI/UX Designer Certificado - Solo",
      en: "Full Stack Developer & Certified UI/UX Designer - Solo",
    },
    technologies: [
      "Angular 18",
      "NestJS",
      "MongoDB",
      "Docker",
      "Docker Compose",
      "TypeScript",
      "JWT",
      "Passport",
      "Bcrypt",
      "Multer",
      "Bootstrap 5",
      "Glassmorphism UI",
      "RxJS",
      "Angular Signals",
      "Reactive Forms",
      "Mongoose",
      "Class Validator",
    ],
    images: {
      main: "/portfolio/images/projects/posts-comments-manager/main.png",
      gallery: [
        "/portfolio/images/projects/posts-comments-manager/web.png",
        "/portfolio/images/projects/posts-comments-manager/mobile.png",
        "/portfolio/images/projects/posts-comments-manager/login.png",
        "/portfolio/images/projects/posts-comments-manager/register.png",
        "/portfolio/images/projects/posts-comments-manager/docker-container.png",
        "/portfolio/images/projects/posts-comments-manager/docker-image.png",
        "/portfolio/images/projects/posts-comments-manager/Docker-Volume.png",
        "/portfolio/images/projects/posts-comments-manager/postman-collection-login.png",
        "/portfolio/images/projects/posts-comments-manager/postman-collection-post-with-image.png",
        "/portfolio/images/projects/posts-comments-manager/postman-collection-variables.png",
      ],
    },
    media: {
      iframe: null,
      videos: [
        {
          url: "Ntrv9iX3rOc",
          title: {
            es: "Demostración completa del sistema Posts & Comments Manager",
            en: "Complete demonstration of Posts & Comments Manager system",
          },
        },
      ],
    },
    relatedCode: {
      repositories: [
        {
          status: "available",
          url: "https://github.com/fersycode/posts_comments_manager_frontend",
          label: {
            es: "Frontend - Angular 18",
            en: "Frontend - Angular 18",
          },
        },
        {
          status: "available",
          url: "https://github.com/fersycode/posts_comments_manager_backend",
          label: {
            es: "Backend - NestJS",
            en: "Backend - NestJS",
          },
        },
      ],
    },
    links: {
      postman:
        "https://www.postman.com/midle-cs/posts-and-comments-manager/collection/11132222-9fcea1e1-aaf8-45b6-8aaf-7f40d77b10e4/?action=share&creator=11132222&active-environment=11132222-263e77b4-7e33-440e-ae5b-5300edf6d271",
    },
    description: {
      es: [
        "Sistema completo desarrollado en tiempo récord de 3 días como prueba técnica, superando ampliamente los requisitos base con funcionalidades extra que demuestran iniciativa y dominio técnico avanzado.",
        "EXTRAS IMPLEMENTADOS MÁS ALLÁ DE LO SOLICITADO: Autenticación JWT completa (no requerida), sistema de upload de imágenes con Multer y Docker volumes (no requerido), diseño glassmorfismo premium aplicando certificación UI/UX reciente (no requerido), containerización completa con Docker Compose.",
        "Infraestructura con Docker: MongoDB containerizado con volumen persistente, backend NestJS en container dedicado, docker-compose orquestando servicios, volumen Docker específico para almacenamiento de imágenes subidas garantizando persistencia entre deploys.",
        "Diseño UI/UX premium con glassmorfismo: Cards con efecto glass, backdrop-filter blur, gradientes sutiles, sombras depth-aware, animaciones micro-interactions, paleta de colores cohesiva, tipografía jerárquica clara, espaciado consistente aplicando principios de certificación UI/UX.",
        "Backend robusto con NestJS implementando arquitectura modular, autenticación JWT con Passport (EXTRA), validación de datos con class-validator, manejo profesional de errores con filtros globales y responses estandarizadas.",
        "Sistema de autenticación completo (EXTRA): registro de usuarios con hash de contraseñas usando bcrypt, login con generación de tokens JWT con expiración de 7 días, protección de endpoints mediante guards globales, decorador @Public() para rutas públicas, middleware de validación de tokens.",
        "Upload de imágenes con Multer y Docker (EXTRA): validación de tipo y tamaño de archivos (máx 5MB), nombres únicos generados con timestamps, almacenamiento en volumen Docker persistente, servicio de archivos estáticos, soporte para JPG, PNG, GIF, WEBP, preview en tiempo real.",
        "Frontend moderno con Angular 18 utilizando standalone components exclusivamente, signals para manejo de estado reactivo sin Observables innecesarios, computed signals para búsqueda filtrada en tiempo real, formularios reactivos con validaciones completas y feedback visual.",
        "Búsqueda en tiempo real con resaltado visual (EXTRA): implementación de pipe personalizado para highlight de términos con HTML seguro, filtrado instantáneo usando computed signals sin re-renders, experiencia fluida sin delays, contadores de resultados, clear filters.",
        "Arquitectura frontend organizada siguiendo mejores prácticas: core (services, interceptors, utils), shared (10 componentes reutilizables, 3 pipes, 3 directives, models), features modulares con separación clara de responsabilidades.",
        "Sistema de comentarios anidados con validación de email, timestamps automáticos, capacidad de eliminación con confirmación, contador de comentarios por post, ordenamiento por fecha, integración completa con backend.",
        "Integración MongoDB con Docker: container de MongoDB con volumen persistente, Mongoose con schemas tipados, validaciones a nivel de base de datos, índices optimizados para queries, manejo de relaciones entre documentos, backup automático.",
        "Componentes reutilizables premium: loading spinner configurable con glassmorphism, estados vacíos personalizables con ilustraciones, alertas dismissibles con animaciones, componente de upload de imágenes con drag&drop y preview, cards de posts con hover effects, items de comentarios con glass effect.",
        "Pipes y directivas custom avanzadas: formateador de fechas con múltiples formatos (short, medium, long), truncado de texto inteligente con ellipsis, highlight de búsqueda con sanitización, auto-focus automático, click-outside detector, debounce-click para prevenir doble submit.",
        "Utilidades helpers profesionales: validadores personalizados (noWhitespace, minWords, maxWords, alphanumeric), helpers de fechas (timeAgo, isToday, isYesterday), helpers de strings (slugify, wordCount, readingTime, excerpt).",
        "Docker Compose completo: orquestación de MongoDB y backend, variables de ambiente configurables, volúmenes para persistencia de datos e imágenes, networking entre containers, health checks, restart policies, logs centralizados.",
        "Experiencia UI/UX premium certificada: micro-animations en todas las interacciones, estados de carga con skeleton screens, transiciones suaves entre vistas, feedback inmediato en acciones, mensajes de error user-friendly, confirmaciones visuales, empty states ilustrados, responsive design mobile-first.",
      ],
      en: [
        "Complete system developed in record time of 3 days as technical assessment, widely exceeding base requirements with extra functionalities demonstrating initiative and advanced technical mastery.",
        "EXTRAS IMPLEMENTED BEYOND REQUIREMENTS: Complete JWT authentication (not required), image upload system with Multer and Docker volumes (not required), premium glassmorphism design applying recent UI/UX certification (not required), complete containerization with Docker Compose.",
        "Infrastructure with Docker: Containerized MongoDB with persistent volume, NestJS backend in dedicated container, docker-compose orchestrating services, specific Docker volume for uploaded image storage ensuring persistence between deploys.",
        "Premium UI/UX design with glassmorphism: Glass effect cards, backdrop-filter blur, subtle gradients, depth-aware shadows, micro-interaction animations, cohesive color palette, clear typographic hierarchy, consistent spacing applying UI/UX certification principles.",
        "Robust backend with NestJS implementing modular architecture, JWT authentication with Passport (EXTRA), data validation with class-validator, professional error handling with global filters and standardized responses.",
        "Complete authentication system (EXTRA): user registration with password hashing using bcrypt, login with JWT token generation with 7-day expiration, endpoint protection through global guards, @Public() decorator for public routes, token validation middleware.",
        "Image upload with Multer and Docker (EXTRA): file type and size validation (max 5MB), unique names generated with timestamps, storage in persistent Docker volume, static file serving, support for JPG, PNG, GIF, WEBP, real-time preview.",
        "Modern frontend with Angular 18 using standalone components exclusively, signals for reactive state management without unnecessary Observables, computed signals for real-time filtered search, reactive forms with complete validations and visual feedback.",
        "Real-time search with visual highlighting (EXTRA): custom pipe implementation for term highlighting with safe HTML, instant filtering using computed signals without re-renders, smooth experience without delays, result counters, clear filters.",
        "Organized frontend architecture following best practices: core (services, interceptors, utils), shared (10 reusable components, 3 pipes, 3 directives, models), modular features with clear separation of concerns.",
        "Nested comments system with email validation, automatic timestamps, deletion capability with confirmation, comment counter per post, date sorting, complete backend integration.",
        "MongoDB integration with Docker: MongoDB container with persistent volume, Mongoose with typed schemas, database-level validations, optimized indexes for queries, document relationship handling, automatic backup.",
        "Premium reusable components: configurable loading spinner with glassmorphism, customizable empty states with illustrations, dismissible alerts with animations, image upload component with drag&drop and preview, post cards with hover effects, comment items with glass effect.",
        "Advanced custom pipes and directives: date formatter with multiple formats (short, medium, long), intelligent text truncation with ellipsis, search highlighting with sanitization, automatic auto-focus, click-outside detector, debounce-click to prevent double submit.",
        "Professional helper utilities: custom validators (noWhitespace, minWords, maxWords, alphanumeric), date helpers (timeAgo, isToday, isYesterday), string helpers (slugify, wordCount, readingTime, excerpt).",
        "Complete Docker Compose: MongoDB and backend orchestration, configurable environment variables, volumes for data and image persistence, inter-container networking, health checks, restart policies, centralized logs.",
        "Certified premium UI/UX experience: micro-animations in all interactions, loading states with skeleton screens, smooth transitions between views, immediate action feedback, user-friendly error messages, visual confirmations, illustrated empty states, mobile-first responsive design.",
      ],
    },
    challenges: {
      es: [
        "Completar proyecto full-stack en solo 3 días e ir más allá implementando features extras no requeridas",
        "Aplicar certificación UI/UX recién obtenida en diseño glassmorfismo premium sin saturar el proyecto",
        "Implementar autenticación JWT desde cero sin bibliotecas de alto nivel (EXTRA no requerido)",
        "Configurar Docker Compose orquestando MongoDB y backend con volúmenes persistentes (EXTRA)",
        "Integrar sistema de carga de imágenes con Multer y Docker volumes para persistencia (EXTRA)",
        "Dominar Angular 18 signals (tecnología nueva) en tiempo limitado para búsqueda reactiva",
        "Crear arquitectura escalable y mantenible bajo presión de tiempo con enfoque profesional",
        "Diseñar UI/UX profesional aplicando glassmorphism sin afectar performance ni accesibilidad",
        "Balancear estética premium con funcionalidad y usabilidad en timeframe ajustado",
        "Implementar micro-animations y transitions suaves sin sacrificar velocidad de desarrollo",
        "Manejar relaciones entre documentos en MongoDB dentro de containers Docker",
        "Crear componentes reutilizables con glass effect mientras se cumplen deadlines críticos",
        "Implementar validaciones completas en frontend y backend con feedback visual inmediato",
        "Documentar exhaustivamente arquitectura compleja en tiempo limitado para futuras referencias",
      ],
      en: [
        "Complete full-stack project in only 3 days and go beyond implementing extra unrequired features",
        "Apply recently obtained UI/UX certification in premium glassmorphism design without overwhelming project",
        "Implement JWT authentication from scratch without high-level libraries (EXTRA not required)",
        "Configure Docker Compose orchestrating MongoDB and backend with persistent volumes (EXTRA)",
        "Integrate image upload system with Multer and Docker volumes for persistence (EXTRA not required)",
        "Master Angular 18 signals (new technology) in limited time for reactive search",
        "Create scalable and maintainable architecture under time pressure with professional focus",
        "Design professional UI/UX applying glassmorphism without affecting performance or accessibility",
        "Balance premium aesthetics with functionality and usability in tight timeframe",
        "Implement micro-animations and smooth transitions without sacrificing development speed",
        "Handle document relationships in MongoDB within Docker containers",
        "Create reusable components with glass effect while meeting critical deadlines",
        "Implement complete validations in frontend and backend with immediate visual feedback",
        "Exhaustively document complex architecture in limited time for future references",
      ],
    },
    solutions: {
      es: [
        "Planificación estratégica inicial definiendo MVP + EXTRAS: Día 1 backend + Docker, Día 2 frontend base, Día 3 JWT + Upload + Glassmorphism UI.",
        "Día 1 - Backend + Docker: Setup NestJS con MongoDB en Docker Compose, volumen persistente para base de datos, schemas con validaciones, CRUD endpoints completos, manejo global de errores, testing con Postman, volumen para imágenes configurado.",
        "Día 2 - Frontend Angular 18: Standalone components, servicios con signals, páginas principales, formularios reactivos, integración API, búsqueda en tiempo real, componentes base con Bootstrap.",
        "Día 3 - EXTRAS Premium: Autenticación JWT (registro, login, guards), upload de imágenes con Multer, diseño glassmorfismo aplicando certificación UI/UX, micro-animations, pulido visual profesional.",
        "Docker Compose profesional: Orquestación de MongoDB container con volumen 'mongodb-data', backend container con hot-reload, volumen 'uploads_data' para persistencia de archivos, networking entre servicios, variables de ambiente, health checks.",
        "Diseño glassmorfismo certificado UI/UX: Cards con backdrop-filter blur(10px), backgrounds rgba con transparencia, borders sutiles con gradient, box-shadows depth-aware múltiples, hover effects con scale y brightness, transitions smooth 0.3s, paleta de colores cohesiva con gradientes.",
        "Aplicación de principios UI/UX: Spacing consistente (8px grid), tipografía jerárquica clara (headings, body, captions), contraste AAA en textos, feedback visual en todas las acciones, estados de loading con skeleton, empty states ilustrados, micro-interactions en hover/click.",
        "Implementación de guards globales con decorador @Public() optimizando seguridad sin código repetitivo en cada endpoint protegido.",
        "Uso estratégico de Angular 18 signals: Estado reactivo sin Observables innecesarios, computed para búsqueda filtrada sin re-renders, effect para logging y side effects, mejor performance que ChangeDetection tradicional.",
        "Biblioteca de componentes glassmorfismo: Spinner con glass effect, empty-state con ilustración y glass card, alert con blur background, image-upload con preview y glass border, acelerando desarrollo posterior.",
        "Sistema de validación dual profesional: class-validator en backend para seguridad, reactive validators en frontend para UX inmediata, mensajes de error personalizados user-friendly.",
        "Multer con Docker volumes: Configuración custom con límites, filtros de tipo, nombres únicos timestamp-based, almacenamiento en volumen Docker 'uploads_data' garantizando persistencia, servicio estático para acceso.",
        "Arquitectura modular escalable: NestJS con módulos auth/posts/comments independientes, Angular con feature modules preparados para lazy loading, separación clara de responsabilidades.",
        "Interceptor HTTP global: Captura errores automáticamente, mapea a mensajes user-friendly, muestra alertas con glass effect, logging centralizado para debugging.",
        "Documentación exhaustiva: READMEs con instalación Docker, arquitectura explicada, troubleshooting, ejemplos código, guías de deployment.",
        "Testing continuo: Postman collection compartible, pruebas de endpoints protegidos/públicos, validación de upload de imágenes, verificación de persistencia en volúmenes.",
        "Micro-animations premium: Fade-in en cards, scale en hover, slide-in en alertas, skeleton loading, smooth transitions entre vistas, indicators de progreso animados.",
      ],
      en: [
        "Strategic initial planning defining MVP + EXTRAS: Day 1 backend + Docker, Day 2 base frontend, Day 3 JWT + Upload + Glassmorphism UI.",
        "Day 1 - Backend + Docker: NestJS setup with MongoDB in Docker Compose, persistent volume for database, schemas with validations, complete CRUD endpoints, global error handling, Postman testing, image volume configured.",
        "Day 2 - Angular 18 Frontend: Standalone components, services with signals, main pages, reactive forms, API integration, real-time search, base components with Bootstrap.",
        "Day 3 - Premium EXTRAS: JWT authentication (register, login, guards), image upload with Multer, glassmorphism design applying UI/UX certification, micro-animations, professional visual polish.",
        "Professional Docker Compose: MongoDB container orchestration with 'mongodb-data' volume, backend container with hot-reload, 'uploads_data' volume for file persistence, inter-service networking, environment variables, health checks.",
        "Certified UI/UX glassmorphism design: Cards with backdrop-filter blur(10px), rgba backgrounds with transparency, subtle borders with gradient, depth-aware multiple box-shadows, hover effects with scale and brightness, smooth 0.3s transitions, cohesive color palette with gradients.",
        "UI/UX principles application: Consistent spacing (8px grid), clear typographic hierarchy (headings, body, captions), AAA text contrast, visual feedback in all actions, loading states with skeleton, illustrated empty states, hover/click micro-interactions.",
        "Global guards implementation with @Public() decorator optimizing security without repetitive code on each protected endpoint.",
        "Strategic use of Angular 18 signals: Reactive state without unnecessary Observables, computed for filtered search without re-renders, effect for logging and side effects, better performance than traditional ChangeDetection.",
        "Glassmorphism component library: Spinner with glass effect, empty-state with illustration and glass card, alert with blur background, image-upload with preview and glass border, accelerating subsequent development.",
        "Professional dual validation system: class-validator on backend for security, reactive validators on frontend for immediate UX, custom user-friendly error messages.",
        "Multer with Docker volumes: Custom configuration with limits, type filters, timestamp-based unique names, storage in 'uploads_data' Docker volume ensuring persistence, static service for access.",
        "Scalable modular architecture: NestJS with independent auth/posts/comments modules, Angular with feature modules prepared for lazy loading, clear separation of concerns.",
        "Global HTTP interceptor: Automatically captures errors, maps to user-friendly messages, displays alerts with glass effect, centralized logging for debugging.",
        "Exhaustive documentation: READMEs with Docker installation, explained architecture, troubleshooting, code examples, deployment guides.",
        "Continuous testing: Shareable Postman collection, protected/public endpoint tests, image upload validation, volume persistence verification.",
        "Premium micro-animations: Fade-in on cards, scale on hover, slide-in on alerts, skeleton loading, smooth transitions between views, animated progress indicators.",
      ],
    },
    resultsCards: [
      {
        value: "3",
        label: {
          es: "Días de desarrollo total",
          en: "Total development days",
        },
      },
      {
        value: "3",
        label: {
          es: "EXTRAS implementados",
          en: "EXTRAS implemented",
        },
      },
      {
        value: "100%",
        label: {
          es: "Glassmorphism UI/UX",
          en: "Glassmorphism UI/UX",
        },
      },
      {
        value: "Docker",
        label: {
          es: "Containerizado completo",
          en: "Fully containerized",
        },
      },
    ],
    results: {
      es: [
        "Proyecto completo entregado en 3 días superando ampliamente los requisitos con 3 EXTRAS implementados: JWT (no requerido), Upload de imágenes con Docker (no requerido), Diseño glassmorfismo premium (no requerido).",
        "Infraestructura Docker productiva: MongoDB containerizado con volumen persistente, backend en container con hot-reload, volumen dedicado 'uploads_data' garantizando persistencia de archivos entre deploys, docker-compose orquestando servicios.",
        "Diseño glassmorfismo premium aplicando certificación UI/UX reciente: backdrop-filter blur en cards, transparencias rgba sutiles, gradientes cohesivos, shadows depth-aware, micro-animations en todas las interacciones, paleta de colores profesional.",
        "Sistema de autenticación JWT completo funcionando (EXTRA): registro con hash bcrypt, login con tokens de 7 días, guards globales protegiendo endpoints, decorador @Public() para rutas públicas, middleware de validación.",
        "Upload de imágenes operativo con Multer y Docker volumes (EXTRA): validaciones de tipo y tamaño, almacenamiento en volumen Docker persistente, preview en tiempo real, soporte multi-formato (jpg, png, gif, webp).",
        "Frontend con 45+ archivos organizados profesionalmente: 10 componentes reutilizables con glass effect, 3 pipes custom, 3 directivas, 6 servicios con signals, múltiples utilities y helpers.",
        "Backend robusto con arquitectura NestJS modular: 3 módulos principales (auth, posts, comments), guards globales, manejo de errores profesional, validaciones duales, responses estandarizadas.",
        "Búsqueda en tiempo real con highlighting visual funcionando perfectamente usando Angular 18 signals y computed sin re-renders innecesarios.",
        "Experiencia UI/UX certificada pulida: estados de loading con skeleton, mensajes user-friendly, confirmaciones visuales, estados vacíos ilustrados, animaciones micro-interactions suaves.",
        "Código limpio y exhaustivamente documentado: READMEs completos con instrucciones Docker, arquitectura explicada, troubleshooting, ejemplos de uso.",
        "Performance optimizada: uso de signals sobre Observables, lazy loading preparado, debounce en búsquedas, caching de imágenes, Docker con health checks.",
        "Repositorios públicos en GitHub con estructura profesional, commits descriptivos, documentación completa, listos para portfolio y entrevistas técnicas.",
        "Proyecto 100% deployable: configuraciones de ambiente, docker-compose production-ready, volúmenes persistentes, networking configurado, scripts de build.",
        "Certificación UI/UX aplicada exitosamente en timeframe limitado demostrando capacidad de integrar conocimientos recientes en producción.",
      ],
      en: [
        "Complete project delivered in 3 days widely exceeding requirements with 3 EXTRAS implemented: JWT (not required), Image upload with Docker (not required), Premium glassmorphism design (not required).",
        "Productive Docker infrastructure: Containerized MongoDB with persistent volume, backend in container with hot-reload, dedicated 'uploads_data' volume ensuring file persistence between deploys, docker-compose orchestrating services.",
        "Premium glassmorphism design applying recent UI/UX certification: backdrop-filter blur on cards, subtle rgba transparencies, cohesive gradients, depth-aware shadows, micro-animations in all interactions, professional color palette.",
        "Complete JWT authentication system working (EXTRA): registration with bcrypt hash, login with 7-day tokens, global guards protecting endpoints, @Public() decorator for public routes, validation middleware.",
        "Operational image upload with Multer and Docker volumes (EXTRA): type and size validations, storage in persistent Docker volume, real-time preview, multi-format support (jpg, png, gif, webp).",
        "Frontend with 45+ professionally organized files: 10 reusable components with glass effect, 3 custom pipes, 3 directives, 6 services with signals, multiple utilities and helpers.",
        "Robust backend with modular NestJS architecture: 3 main modules (auth, posts, comments), global guards, professional error handling, dual validations, standardized responses.",
        "Real-time search with visual highlighting working perfectly using Angular 18 signals and computed without unnecessary re-renders.",
        "Certified polished UI/UX experience: loading states with skeleton, user-friendly messages, visual confirmations, illustrated empty states, smooth micro-interaction animations.",
        "Clean and exhaustively documented code: Complete READMEs with Docker instructions, explained architecture, troubleshooting, usage examples.",
        "Optimized performance: signals usage over Observables, lazy loading prepared, search debouncing, image caching, Docker with health checks.",
        "Public GitHub repositories with professional structure, descriptive commits, complete documentation, ready for portfolio and technical interviews.",
        "100% deployable project: environment configurations, production-ready docker-compose, persistent volumes, configured networking, build scripts.",
        "UI/UX certification successfully applied in limited timeframe demonstrating ability to integrate recent knowledge in production.",
      ],
    },
    prevProject: "/project/api-node",
    nextProject: "/project/tribunal-superior-cuentas",
  },
];
