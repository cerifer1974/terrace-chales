/**
 * Central de Dados e Conteúdo do Terrace Chalés
 * 
 * Estrutura modular para facilitar alterações de textos, imagens,
 * acomodações e futura duplicação para outras pousadas.
 */

export const siteData = {
  pousada: {
    name: "Terrace Chalés",
    tagline: "CHALÉS • MONTE VERDE",
    location: "Monte Verde, Minas Gerais",
    phone: "(35) 98700-0736",
    phoneHref: "tel:+5535987000736",
  },

  navigation: {
    logo: {
      primary: "TERRACE",
      secondary: "CHALÉS • MONTE VERDE"
    },
    links: [
      { label: "Chalés", href: "#acomodacoes" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Nossa História", href: "#historia" },
      { label: "Localização", href: "#localizacao" }
    ],
    cta: {
      label: "RESERVAR",
      href: "https://hotels.cloudbeds.com/reservas/bjasvx"
    }
  },

  hero: {
    eyebrow: "MONTE VERDE • MINAS GERAIS",
    headlineLine1: "Viva Monte Verde",
    headlineLine2: "com quem nasceu aqui.",
    subheadline: "Chalés acolhedores construídos em família, entre o silêncio das montanhas e a essência de Monte Verde.",
    primaryCta: {
      label: "VER DISPONIBILIDADE",
      href: "https://hotels.cloudbeds.com/reservas/bjasvx"
    },
    secondaryCta: {
      label: "CONHECER OS CHALÉS ↓",
      href: "#acomodacoes"
    },
    scrollIndicator: "ROLE PARA DESCOBRIR",
    backgroundImage: "/images/terrace/terrace-chales/panoramica-terrace.jpg"
  },

  experience: {
    eyebrow: "A EXPERIÊNCIA",
    headlinePart1: "Mais que uma",
    headlinePart2: "hospedagem.",
    headlinePart3: "Um pedaço de Monte",
    headlinePart4: "Verde.",
    description: "Entre madeira, montanhas, lareira e o silêncio da natureza, o Terrace nasceu para receber quem deseja viver Monte Verde com calma, conforto e autenticidade.",
    badge: "FEITO EM FAMÍLIA • MONTE VERDE, MG",
    images: {
      main: {
        src: "/images/terrace/terrace-chales/interna-quarto-terrace-chale-01.jpg",
        alt: "Quarto acolhedor do chalé Terrace em Monte Verde"
      },
      detail: {
        src: "/images/terrace/terrace-chales/interna-sacada-terrace-chale.jpg",
        alt: "Sacada do chalé com vista para as montanhas"
      }
    }
  },

  accommodations: {
    eyebrow: "ACOMODAÇÕES",
    headline: "Seu refúgio nas montanhas.",
    subheadline: "Privacidade, conforto e aquele tipo de silêncio que só a montanha oferece.",
    chalets: [
      {
        id: "chale-01",
        title: "Chalé 01",
        image: "/images/terrace/terrace-chales/interna-quarto-terrace-chale-01.jpg",
        imageAlt: "Quarto completo do Chalé 01 do Terrace Chalés",
        amenities: [
          "LAREIRA",
          "HIDROMASSAGEM",
          "CAFÉ DA MANHÃ",
          "VISTA PARA NATUREZA"
        ]
      },
      {
        id: "chale-02",
        title: "Chalé 02",
        image: "/images/terrace/terrace-chales/interna-hidro-terrace-chale.jpg",
        imageAlt: "Hidromassagem no interior do Chalé 02 do Terrace Chalés",
        amenities: [
          "LAREIRA",
          "HIDROMASSAGEM",
          "CAFÉ DA MANHÃ",
          "VISTA PARA NATUREZA"
        ]
      }
    ],
    ctaButton: {
      label: "CONHECER ACOMODAÇÕES",
      href: "#acomodacoes"
    }
  },

  // ─── EXPERIÊNCIA IMERSIVA — UM LUGAR PARA DESACELERAR ──────────────────────
  experienceVideo: {
    eyebrow: "A EXPERIÊNCIA",
    headlineLine1: "Um lugar",
    headlineLine2: "para desacelerar.",
    description: "Entre madeira, silêncio e o clima das montanhas, cada detalhe convida a viver Monte Verde com mais calma.",
    microtext: "CONFORTO • SILÊNCIO • MONTANHA",
    video: {
      src: "/images/terrace/terrace-chales/video-interno-terrace-chale.mp4",
      poster: "/images/terrace/terrace-chales/interna-hidro-terrace-chale.jpg",
      alt: "Interior do chalé Terrace Chalés em Monte Verde"
    }
  },

  // ─── 04 NOSSA HISTÓRIA ────────────────────────────────────────────────────
  story: {
    eyebrow: "NOSSA HISTÓRIA",
    headlineLine1: "Feito por quem chama",
    headlineLine2: "Monte Verde de casa.",
    paragraph1: "Thiago nasceu e cresceu em Monte Verde. O Terrace Chalés nasceu dessa ligação com a região e foi construído com o envolvimento da própria família e de profissionais locais.",
    paragraph2: "Mais do que receber hóspedes, a proposta é compartilhar um pouco da experiência de quem conhece essas montanhas desde sempre.",
    pullquote: "Aqui, você não apenas visita Monte Verde. Você é recebido por quem faz parte dela.",
    signature: "Thiago • Anfitrião",
    /* FOTO REAL DO CLIENTE: Fotografia editorial da história do Terrace Chalés */
    image: {
      src: "/images/terrace/terrace-chales/nossa-historia-terrace-chales.jpg",
      alt: "Família do Terrace Chalés em Monte Verde"
    }
  },

  // ─── 05 CAFÉ DA MANHÃ ────────────────────────────────────────────────────
  breakfast: {
    eyebrow: "BOM DIA, MONTE VERDE",
    headlineLine1: "A montanha também",
    headlineLine2: "se sente à mesa.",
    description: "Comece o dia sem pressa, com sabores locais e um café da manhã preparado para ser apreciado no conforto do seu chalé.",
    complementaryLine: "Um começo de manhã no ritmo das montanhas.",
    mainImage: {
      src: "/images/terrace/terrace-chales/cafe-da-manha-na-cama-terrace.jpg",
      alt: "Café da manhã servido na cama do chalé, um momento íntimo"
    },
    detailImage: {
      src: "/images/terrace/terrace-chales/vista-da-sacada-chale-terrace.jpg",
      alt: "Vista da sacada do chalé para a Serra da Mantiqueira"
    }
  },

  // ─── 06 PROVA SOCIAL ─────────────────────────────────────────────────────
  reviews: {
    eyebrow: "QUEM JÁ VIVEU O TERRACE",
    score: "9,9",
    scoreLabel: "Excepcional",
    source: "Booking.com • 159 avaliações",
    complementaryText: "Uma experiência reconhecida por quem já se hospedou aqui.",
    indicators: [
      { score: "10", label: "Limpeza" },
      { score: "10", label: "Funcionários" },
      { score: "9,9", label: "Conforto" },
      { score: "9,8", label: "Localização" },
      { score: "9,8", label: "Comodidades" },
      { score: "9,6", label: "Custo-benefício" }
    ],
    /*
     * DEPOIMENTOS REAIS: Adicione os depoimentos reais aqui quando disponíveis.
     * Cada depoimento deve ter: { text, author, date (opcional) }
     * Deixe o array vazio [] até ter os textos reais.
     */
    testimonials: []
  },

  // ─── 07 GALERIA EDITORIAL ────────────────────────────────────────────────
  gallery: {
    eyebrow: "UM POUCO MAIS DO TERRACE",
    headlineLine1: "Entre montanhas,",
    headlineLine2: "cada detalhe convida a ficar.",
    description: "Um olhar mais de perto para os pequenos momentos que fazem parte da experiência em Monte Verde.",
    /* FOTOS REAIS DO CLIENTE: Galeria editorial — imagens do Terrace Chalés */
    images: {
      panoramic: {
        src: "/images/terrace/terrace-chales/cafe-da-manha-terrace.jpg",
        alt: "Café da manhã do Terrace Chalés em Monte Verde"
      },
      balcony: {
        src: "/images/terrace/terrace-chales/interna-sacada-terrace-chale.jpg",
        alt: "Sacada do chalé com vista para a Serra da Mantiqueira"
      },
      coffeeInBed: {
        src: "/images/terrace/terrace-chales/interna-quarto-terrace-chaale-02.jpg",
        alt: "Detalhe do interior do quarto do chalé Terrace"
      },
      fireplace: {
        src: "/images/terrace/terrace-chales/lareira-terrace.jpg",
        alt: "Lareira acesa dentro do chalé Terrace"
      },
      chaletView: {
        src: "/images/terrace/terrace-chales/vista-chale-terrace.jpg",
        alt: "Vista do chalé Terrace entre as árvores da montanha"
      }
    }
  },

  // ─── 08 LOCALIZAÇÃO ─────────────────────────────────────────────────────────
  location: {
    eyebrow: "MONTE VERDE • MINAS GERAIS",
    headlineLine1: "Perto de tudo.",
    headlineLine2: "Longe do barulho.",
    description: "Na Avenida Monte Verde, a cerca de 500 metros do centro. Perto de restaurantes, lojas e experiências — sem abrir mão do sossego das montanhas.",
    address: {
      street: "Av. Monte Verde, 2094",
      city: "Monte Verde • Minas Gerais"
    },
    details: [
      { label: "≈ 500 m do centro" },
      { label: "Estacionamento privativo" },
      { label: "Vista para as montanhas" }
    ],
    ctaLabel: "VER NO MAPA ↗",
    ctaHref: "https://maps.google.com/?q=Av.+Monte+Verde,+2094,+Monte+Verde,+MG",
    /* FOTO REAL DO CLIENTE: Placa externa — detalhe editorial */
    detailImage: {
      src: "/images/terrace/terrace-chales/placa-externa-terrace.jpg",
      alt: "Placa externa do Terrace Chalés na Avenida Monte Verde"
    }
  },

  // ─── 09 CTA FINAL ───────────────────────────────────────────────────────────
  ctaFinal: {
    eyebrow: "SUA ESTADIA COMEÇA AQUI",
    headlineLine1: "Talvez esteja na hora",
    headlineLine2: "de viver Monte Verde sem pressa.",
    description: "Consulte as datas disponíveis e encontre seu refúgio entre as montanhas.",
    primaryCta: {
      label: "VER DISPONIBILIDADE",
      href: "https://hotels.cloudbeds.com/reservas/bjasvx"
    },
    secondaryCta: {
      label: "FALAR POR TELEFONE",
      href: "tel:+5535987000736"
    },
    backgroundImage: {
      src: "/images/terrace/terrace-chales/vista-chale-terrace.jpg",
      alt: "Vista do chalé Terrace entre as árvores da montanha"
    }
  },

  // ─── 10 FOOTER ──────────────────────────────────────────────────────────────
  footer: {
    logo: {
      primary: "TERRACE",
      secondary: "CHALÉS • MONTE VERDE"
    },
    location: "Monte Verde • Minas Gerais",
    contact: {
      phone: "(35) 98700-0736",
      email: "contato@terracechales.com.br"
    },
    social: {
      instagram: {
        label: "@terracemonteverde",
        href: "https://www.instagram.com/terracemonteverde/"
      }
    },
    links: [
      { label: "Chalés", href: "#acomodacoes" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Nossa História", href: "#historia" },
      { label: "Localização", href: "#localizacao" },
      { label: "Reservar", href: "https://hotels.cloudbeds.com/reservas/bjasvx" }
    ],
    reserveUrl: "https://hotels.cloudbeds.com/reservas/bjasvx"
  }
};
