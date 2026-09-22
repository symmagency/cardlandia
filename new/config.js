window.THKEYS_CONFIG = {
  breakpoint: 768,
  assets: {
    banners: 'https://symmagency.github.io/cardlandia/assets/banners/',
    base: 'https://symmagency.github.io/cardlandia/assets/',
    aws: 'https://cdn.awsli.com.br/1041/1041512/arquivos/'
  },

  banners: {
    inserirDepoisDe: '.pagina-inicial .secao-banners',
    itens: [
      ['apple.png', 'apple-m.png', '/apple-store', 'Apple'],
      ['google-play.png', 'google-play-m.png', '/google-play', 'Google Play'],
      ['playstation.png', 'playstation-m.png', '/cartoes-presente-playstation', 'PlayStation'],
      ['razer-gold.png', 'razer-gold-m.png', '/buscar?q=razer+gold', 'Razer Gold'],
      ['steam.png', 'steam-m.png', '/steam-card-prepago', 'Steam'],
      ['xbox.png', 'xbox-m.png', '/cartao-presente-xbox', 'Xbox']
    ]
  },

  produtosSlider: {
    seletor: '#listagemProdutos ul .flex-viewport > ul',
    desktop: 6,
    mobile: 2
  },

  promocao: {
    imagem: 'https://cdn.awsli.com.br/2727/2727537/arquivos/header_promo_bar.png',
    link: 'https://www.cardlandia.com.br/steam-card-prepago',
    alt: 'Promoção'
  },

  produto: {
    pixLabel: '-10% OFF NO PIX',
    aviso: 'Enviamos os códigos todos os dias da semana, receba de forma rápida e segura em seu E-MAIL, fique atento a caixa de ENTRADA e SPAM.',
    beneficios: [
      'Envio por e-mail super rápido.',
      'Produtos 100% originais.',
      'Pague com Pix ou Boleto bancário.',
      'Loja segura com criptografia SSL.'
    ],
    reputacao: {
      texto: 'Excelente',
      estrelas: 'https://symmagency.github.io/cardlandia/assets/icones/ra-reviews/ra-stars.svg',
      logo: 'https://symmagency.github.io/cardlandia/assets/icones/ra-reviews/ra-logo.svg'
    },
    checkout: {
      titulo: 'Checkout Seguro garantido',
      pagamento: 'Métodos de pagamento confiáveis',
      seguranca: 'Criptografia de Dados e Proteção'
    }
  },

  reviews: {
    titulo: 'Veja o que estão falando de nós',
    subtitulo: 'Quem comprou recomenda <3',
    itens: [
      ['Lucas Almeida', 'Compra rápida e segura. Recebi meu produto praticamente na mesma hora!', 5],
      ['Gabriel Martins', 'Já comprei algumas vezes e sempre deu tudo certo. Recomendo demais.', 5],
      ['Matheus Souza', 'Atendimento excelente e entrega muito rápida. Pode comprar sem medo.', 5],
      ['Rafael Oliveira', 'Gostei bastante da experiência. Processo simples, rápido e seguro.', 5],
      ['Bruno Santos', 'Produto chegou certinho e sem complicação. Voltarei a comprar.', 5],
      ['Felipe Costa', 'Tudo muito fácil de entender. A entrega foi praticamente instantânea.', 5]
    ]
  },

  explorar: [
    ['Ação', 'acao', '/acao'], ['Aventura', 'aventura', '/aventura'],
    ['Co-op', 'coop', '/co-op'], ['Corrida', 'corrida', '/corrida'],
    ['Esporte', 'esporte', '/esporte'], ['Estratégia', 'estrategia', '/estrategia'],
    ['FPS', 'fps', '/fps'], ['Hack & Slash', 'slash', '/hack-slash'],
    ['Indie', 'indie', '/indie'], ['Luta', 'luta', '/luta'],
    ['MMO', 'mmo', '/mmo'], ['RPG', 'rpg', '/rpg'],
    ['Simulação', 'simulacao', '/simulacao'], ['Soulslike', 'soulslike', '/soulslike'],
    ['Terror', 'terror', '/terror']
  ],

  explorarPc: {
    vitrine: '.pagina-inicial .vitrine-3323787',
    titulo: 'Explore por gênero',
    itens: [
      ['Ação', 'acao', './acao-pc'], ['Aventura', 'aventura', './aventura-pc'],
      ['Co-op', 'coop', './coop-pc'], ['Corrida', 'corrida', './corrida-pc'],
      ['Esporte', 'esporte', './esporte-pc'], ['Estratégia', 'estrategia', './estrategia-pc'],
      ['FPS', 'fps', './fps-pc'], ['Hack & Slash', 'slash', './hack-slash-pc'],
      ['Indie', 'indie', './indie-pc'], ['Luta', 'luta', './luta-pc'],
      ['MMO', 'mmo', './mmo-pc'], ['RPG', 'rpg', './rpg-pc'],
      ['Simulação', 'simulacao', './simulacao-pc'], ['Soulslike', 'soulslike', './soulslike-pc'],
      ['Terror', 'terror', './terror-pc']
    ]
  },

  trailer: {
    vitrine: '.vitrine-destaque',
    titulo: 'Jogo em destaque',
    subtitulo: 'Selecionado pela CardLândia',
    video: 'https://www.youtube.com/watch?v=cv041_93_0Q',
    preco: 'R$ 533,00',
    sufixo: 'no pix',
    botao: 'Comprar agora',
    link: '/dy4bfpyl4-/grand-theft-auto-vi-ultimate-edition'
  },

  porPreco: {
    titulo: 'Já sabe quanto vai gastar?',
    subtitulo: 'Encontre produtos por faixa de preço',
  
    valores: [
      {
        valor: 10,
        link: '/buscar?q=+&fq=price_range%3A0.0-10.0'
      },
      {
        valor: 20,
        link: '/buscar?q=+&fq=price_range%3A10.01-20.0'
      },
      {
        valor: 30,
        link: '/buscar?q=+&fq=price_range%3A20.01-30.0'
      },
      {
        valor: 50,
        link: '/buscar?q=+&fq=price_range%3A30.01-50.0'
      },
      {
        valor: 100,
        link: '/buscar?q=+&fq=price_range%3A50.01-100.0'
      },
      {
        valor: 150,
        link: '/buscar?q=+&fq=price_range%3A100.01-150.0'
      },
      {
        valor: 200,
        link: '/buscar?q=+&fq=price_range%3A150.01-200.0'
      },
      {
        valor: 250,
        link: '/buscar?q=+&fq=price_range%3A200.01-250.0'
      }
    ]
  },

  rodape: {
    whatsapp: '(11) 5286-3976',
    whatsappLink: 'https://wa.me/551152863976',
    blog: 'https://blog.thkeys.com.br/'
  },

  surpresa: {
    produtoId: '403976600',
    titulo: 'Ganhe <strong>1</strong> jogo surpresa para PC!',
    preco: 'R$ 19,90',
    imagem: 'https://symmagency.github.io/cardlandia/assets/jogo-surpresa.png',
    plataforma: 'https://symmagency.github.io/cardlandia/assets/steam.png'
  }
};
