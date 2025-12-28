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
    prevProject: "/project/copa-y-queso",
    nextProject: "/project/tribunal-superior-cuentas",
  },
  {
    id: "copa-y-queso",
    slug: "copa-y-queso",
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
          url: "https://youtu.be/8L8t8FQOBLQ",
          title: {
            es: "Video de presentación del producto de Asistente IA Empresarial",
            en: "Presentation video of the Business AI Assistant product",
          },
        },
         {
          url: "https://www.youtube.com/watch?v=hjnuJa1RiU0",
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
    prevProject: "/project/tribunal-superior-cuentas",
    nextProject: "/project/sipmer-seduc",
  },
];
