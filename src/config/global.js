export default {
  global: {
    componenteFormativo: 'Plan de cuidado integral al recién nacido',
    descripcionCurso:
      'El cuidado al recién nacido contribuye al cumplimiento de los derechos de los niños, con el apoyo de un equipo de talento humano concentrado en reducir los índices de morbimortalidad y riesgos de enfermedades tempranas de la infancia, y un plan de atención integral del recién nacido con las necesidades encontradas en las Rutas Integrales de Atención en Salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-gif-1'],
        imagen: require('@/assets/curso/portada/circulo.gif'),
      },
      {
        clases: ['banner-principal-gif-2'],
        imagen: require('@/assets/curso/portada/linea.gif'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Habilidades de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos de la comunicación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de comunicación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Asertividad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recomendaciones para el egreso del recién nacido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Recomendaciones para recién nacidos con riesgo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cuidados del recién nacido',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Signos de alarma',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Seguimientos y atenciones en el marco de la RPMS',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Habilidades de comunicación',
      referencia:
        'KidesHealth. (2022). <em>La comunicación y su recién nacido.</em> (2022)',
      tipo: 'Artículo web',
      link: 'https://kidshealth.org/es/parents/cnewborn.html',
    },
    {
      tema: '2.2. Cuidados del recién nacido',
      referencia:
        'Instituto Nacional de Salud. (2018). Mortalidad Perinatal y Neonatal. <em>Boletín Epidemiológico Semanal.</em> Semana epidemiológica 32.',
      tipo: 'Boletín',
      descarga: '/downloads/2018_Boletin_epidemiologico_semana_32.pdf',
    },
    {
      tema: '2.2. Cuidados del recién nacido',
      referencia:
        'Ministerio de Salud y Protección Social - Colciencias. (2013). <em>Guía de práctica clínica del recién nacido sano.</em>',
      tipo: 'Guía',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IETS/GPC_Prof_Sal_RNSano.pdf',
    },
    {
      tema: '2.2. Cuidados del recién nacido',
      referencia:
        'Organización Mundial de la Salud. (2021). <em>Normas para mejorar la calidad de la atención a los recién nacidos enfermos o de pequeño tamaño en los establecimientos de salud.</em>',
      tipo: 'PDF',
      descarga: '/downloads/9789240017245-spa.pdf',
    },
    {
      tema: '2.2. Cuidados del recién nacido',
      referencia:
        'Organización Panamericana de la Salud. (s.f.). Campaña de los 28 días - <em>Salud del recién nacido.</em>',
      tipo: 'Artículo web',
      link:
        'https://www.paho.org/es/campanas/campana-28-dias-salud-recien-nacido',
    },
    {
      tema: '2.2. Cuidados del recién nacido',
      referencia:
        'Soria, R. M. (s.f.). Educación a los padres del recién nacido en el alojamiento conjunto. <em>Revista de enfermería.</em> pp. 22-31.',
      tipo: 'PDF',
      descarga:
        '/downloads/Educacion-padres-recien-nacido-alojamiento-conjunto.pdf',
    },
    {
      tema: '2.2. Cuidados del recién nacido',
      referencia:
        'Suárez Ojeda, E. N. (1982). El enfoque de riesgo en la atención perinatal y materno infantil. <em>Bol Of Sanit Panam</em>, 92(6). 482-493.',
      tipo: 'PDF',
      descarga: '/downloads/v92n6p482.pdf',
    },
    {
      tema: '2.4. Seguimientos y atenciones en el marco de la RPMS',
      referencia:
        'Secretaría Distrital de Salud de Bogotá. (2018). <em>Política de Atención Integral en Salud. Modelo Integral de Atención en Salud.</em>',
      tipo: 'PDF',
      descarga: '/downloads/PAIS_MIAS_RIAS_060318.pdf',
    },
    {
      tema: '2.4. Seguimientos y atenciones en el marco de la RPMS',
      referencia:
        'Ministerio de Salud y Protección Social. (2014). <em>Preguntas y respuestas sobre la Ley Estatutaria.</em>',
      tipo: 'PDF',
      descarga: '/downloads/ley-estatutaria-abc-jun-2014.pdf',
    },
    {
      tema: '2.4. Seguimientos y atenciones en el marco de la RPMS',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). <em>Ruta para mejorar la salud materna.</em>',
      tipo: 'Artículo web',
      link:
        'https://www.minsalud.gov.co/salud/publica/ssr/Paginas/Ruta-para-mejorar-la-salud-materna.aspx',
    },
    {
      tema: '2.4. Seguimientos y atenciones en el marco de la RPMS',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). <em>Rutas integrales de atención en salud - RIAS</em>',
      tipo: 'PDF',
      descarga: '/downloads/05-rias-presentacion.pdf',
    },
    {
      tema: '2.4. Seguimientos y atenciones en el marco de la RPMS',
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Lineamiento técnico y operativo de la ruta integral de atención en salud materno perinatal.</em>',
      tipo: 'PDF',
      descarga: '/downloads/Lineamiento_materno_perinatal.pdf',
    },
    {
      tema: '2.4. Seguimientos y atenciones en el marco de la RPMS',
      referencia:
        'Resolución 3280 de 2018. [Ministerio de Salud y Protección Social]. Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Agosto 2 de 2018.',
      tipo: 'PDF',
      descarga: '/downloads/resolucion-3280-de-2018.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención',
      significado:
        'servicios recibidos por los individuos o las poblaciones para promover, mantener la salud.',
    },
    {
      termino: 'Anamnesis',
      significado:
        'conjunto de datos que se recogen en la historia clínica de un paciente con un objetivo diagnóstico.',
    },
    {
      termino: 'Crecimiento',
      significado:
        'incremento de talla en un determinado periodo de tiempo. Tiene variaciones significativas según edad, sexo y estaciones del año.',
    },
    {
      termino: 'Desarrollo',
      significado:
        'adquisición progresiva de las capacidades motoras y cognoscitivas durante la infancia.',
    },
    {
      termino: 'Familia nuclear',
      significado:
        'los padres son de género diferente, desempeñan papeles complementarios de madre y padre, y viven en un hogar común.',
    },
    {
      termino: 'Ictericia',
      significado:
        'coloración amarilla de la piel o mucosas debido al aumento de bilirrubinas encontrada en el plasma.',
    },
    {
      termino: 'Lactancia materna',
      significado:
        'es el alimento que recibe el recién nacido, producido por la madre.',
    },
    {
      termino: 'Materno perinatal',
      significado:
        'desarrollo de control prenatal y perinatal que debe ser precoz, periódico, completo, de calidad, de amplia cobertura; y ser ofrecido a la mayor población posible, garantizando fácil accesibilidad.',
    },
    {
      termino: 'Morbilidad',
      significado:
        'presentación de una enfermedad, síntoma de una enfermedad, o proporción de la enfermedad en una población.',
    },
    {
      termino: 'Mortalidad',
      significado:
        'frecuencia del número de defunciones ocurridas en una población, área geográfica y periodo determinado.',
    },
    {
      termino: 'Neonatología',
      significado:
        'se centra en el cuidado, diagnóstico y tratamiento del recién nacido durante los primeros 28 días de vida.',
    },
    {
      termino: 'Recién nacido',
      significado: 'desde el nacimiento hasta los 28 o 30 días de nacido.',
    },
    {
      termino: 'Rutas Integrales de Atención en Salud (RIAS)',
      significado:
        'definen las condiciones necesarias para asegurar la integridad en la atención por parte de los agentes del Sistema de Salud (territorio, asegurador, prestador) y de otros sectores.',
    },
    {
      termino: 'Tamizaje neonatal',
      significado:
        'pruebas de detección realizadas en los primeros minutos o días de nacimiento con el fin de identificar trastornos metabólicos, genéticos y del desarrollo durante la etapa de recién nacido.',
    },
    {
      termino: 'Vacuna',
      significado:
        'preparación microbiana que, introducida en el organismo provoca inmunización activa contra una enfermedad determinada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). <em>Rutas integrales de atención en salud</em> - RIAS.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/05-rias-presentacion.pdf',
    },
    {
      referencia:
        'Resolución 3280 de 2018 [Ministerio de Salud y Protección Social]. Por la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Agosto 2 de 2018.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Efraín Gómez Matamoros',
          cargo: 'Experto Temático',
          centro:
            'Centro de Formación de Talento Humano en Salud  - Regional Distrito Capital',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
