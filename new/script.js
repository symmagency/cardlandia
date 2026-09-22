(function ($, window, document) {
  'use strict';

  var C = window.THKEYS_CONFIG;
  if (!C) return console.error('THKEYS_CONFIG não foi carregado.');

  $(function () {
    if (window.__thkeysUiInitialized) return;
    window.__thkeysUiInitialized = true;

    var mobile = $(window).width() < C.breakpoint;
    var desktop = !mobile;

    function later(fn) {
      window.requestIdleCallback ? requestIdleCallback(fn) : setTimeout(fn, 0);
    }

    function once(selector, target, html, method) {
      if ($(selector).length || !$(target).length) return false;
      $(target)[method || 'append'](html);
      return true;
    }

    function youtubeId(url) {
      var match = String(url || '').match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
      return match ? match[1] : '';
    }

    function initBanners() {
      var cfg = C.banners;
      var html = cfg.itens.map(function (b) {
        return '<div class="home-banner-item"><a href="' + b[2] + '" title="' + b[3] + '">' +
          '<picture><source media="(max-width: 767px)" srcset="' + C.assets.banners + b[1] + '">' +
          '<img src="' + C.assets.banners + b[0] + '" alt="' + b[3] + '" loading="lazy"></picture></a></div>';
      }).join('');

      once('#home-banners-grid', cfg.inserirDepoisDe,
        '<section id="home-banners-grid"><div class="conteiner"><div class="home-banners-list">' + html + '</div></div></section>',
        'after');
    }

    function initProductSlider() {
      var $slider = $(C.produtosSlider.seletor);
      if (!$slider.length || typeof $.fn.slick !== 'function' || $slider.hasClass('slick-initialized')) return;
      $slider.removeAttr('style').find('li').removeAttr('style');
      $slider.slick({
        dots: false, infinite: false, speed: 300,
        slidesToShow: C.produtosSlider.desktop, slidesToScroll: 1,
        responsive: [{ breakpoint: C.breakpoint, settings: {
          slidesToShow: C.produtosSlider.mobile, slidesToScroll: C.produtosSlider.mobile, dots: true, infinite: false
        }}]
      });
    }

    function initPromo() {
      once('.promo-bar', '#cabecalho', '<div class="promo-bar"><a href="' + C.promocao.link + '">' +
        '<img src="' + C.promocao.imagem + '" alt="' + C.promocao.alt + '"></a></div>', 'before');
    }

    function initProductPage() {
      var p = C.produto;
      once('.produto-detalhe-info', '.produto .conteiner-imagem', '<div class="produto-detalhe-info"></div>');

      once('#principal-rareviews', '.pagina-produto .produto div.principal',
        '<div id="principal-rareviews"><p>' + p.reputacao.texto + '</p>' +
        '<img src="' + p.reputacao.estrelas + '" alt="Avaliação">' +
        '<img src="' + p.reputacao.logo + '" alt="Reclame Aqui"></div>', 'before');

      once('.checkout-seguro', '.pagina-produto .produto .span6 > .principal',
        '<div class="checkout-seguro"><strong>' + p.checkout.titulo + '</strong>' +
        '<div class="pgto"><span>' + p.checkout.pagamento + '</span><ul>' +
        '<li><img src="' + C.assets.base + 'icones/boleto-rp.svg" alt="Boleto"></li>' +
        '<li><img src="' + C.assets.base + 'icones/pix-rp.svg" alt="Pix"></li></ul></div>' +
        '<div class="seguro"><span>' + p.checkout.seguranca + '</span><ul>' +
        '<li><img src="' + C.assets.aws + 'selo-protegido.png" alt="Site seguro"></li>' +
        '<li><img src="' + C.assets.aws + 'google-s-b.png" alt="Google Safe Browsing"></li></ul></div></div>', 'after');

      once('.bandeira_promo_principal', '.produto .acoes-produto .desconto-a-vista',
        '<span class="bandeira_promo_principal">' + p.pixLabel + '</span>', 'before');
      once('.aviso_produto', '.pagina-produto .produto .span6 > .principal',
        '<span class="aviso_produto">' + p.aviso + '</span>');

      if (!desktop) return;
      var $info = $('.produto .produto-detalhe-info');
      [$('.pagina-produto .produto div.principal .info-principal-produto'), $('.produto-detalhe'),
       $('.produto .principal .acoes-produto .preco-produto')].forEach(function ($el) {
        if ($el.length && !$info.find($el).length) $info.append($el);
      });
      if (!$info.find('.benefits').length) {
        $info.append('<div class="benefits">' + p.beneficios.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>');
      }
    }

    function moveProductExtras(row) {
      var $target = $('.pagina-produto #corpo .produto > .row-fluid:' + row + ' > .span6:first-child');
      if (!$target.length) return;
      ['#buy-together-position1', '.abas-custom', '#buy-together-position2', '.konfidency-reviews-details', '.listagem.aproveite-tambem']
        .forEach(function (selector) { $target.append($('.pagina-produto ' + selector + ', ' + selector).first()); });
    }

    function initDesktopHeader() {
      if (!desktop) return;

      function mountMiniBanners() {
        var $source = $('.pagina-inicial .mini-banner');
        var $target = $('#listagemProdutos .vitrine-22673218').first();
        var $wrapper = $('#miniBannerFullw');

        if (!$source.length) return;

        if (!$wrapper.length) {
          $wrapper = $('<div id="miniBannerFullw" class="conteiner"></div>');
        }

        // Posiciona o container uma única vez e preserva a ordem dos banners.
        if ($target.length) $wrapper.insertBefore($target);
        else if (!$wrapper.parent().length) $source.prepend($wrapper);

        $source.children('.modulo.span4').appendTo($wrapper);
      }

      mountMiniBanners();
      later(mountMiniBanners);

      later(function () {
        once('#menuCat', '#cabecalho', '<div id="menuCat"><div class="conteiner"><div class="row-fluid"></div></div></div>', 'after');
        $('#menuCat .row-fluid').append($('#cabecalho .menu.superior'));
        $('.pagina-inicial #listagemProdutos > ul:nth-child(2)').after($('.banner.tarja'));
        $('.pagina-busca .listagem > .titulo').appendTo('.pagina-busca .ordenar-listagem.topo');
        once('.cat', '.conteudo-topo', '<div class="cat"><span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span></div>', 'before');
        once('.login-top', '.conteudo-topo .inferior .span8.busca-mobile', '<div class="login-top"><a href="../conta/login"><span class="login-txt"><strong>Login / Cadastre-se</strong></span></a></div>', 'after');
        $('.carrinho > a > i').addClass('cor-principal');
        $('.atd-top ul.drop-atd').prepend($('.barra-inicial .canais-contato.span9 > ul > li'));
        moveProductExtras('first-child');
      });
    }

    function initMobileHeader() {
      if (!mobile) return;
      later(function () {
        once('#cabecalho .cat', '#cabecalho .conteiner .logo', '<div class="cat cor-principal"><span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span></div>', 'before');
        $('.vitrine-3323786').before($('.banner.tarja'));
        $('.menu.superior .nivel-um .cab-nav .acc-nav').append($('#cabecalho a.icon-user'));
        $('#cabecalho .cab-nav a').addClass('cor-principal');
        $('.atalhos-mobile li.fundo-principal').addClass('cor-principal borda-principal').find('a').addClass('cor-principal');
        $('#cabecalho .conteiner .logo').after($('.atalhos-mobile li.fundo-principal'));
        $('#cabecalho > .conteiner > .row-fluid > .span3 > .fundo-principal, #cabecalho > .conteiner > .row-fluid > .span6 > .fundo-principal')
          .before('<div class="busca_topo"><a>Busca</a></div><div class="login-top"><a href="../conta/index">Login</a></div>');
        $('#cabecalho > .conteiner > .row-fluid > .span3 > .fundo-principal').append($('.conteudo-topo .inferior .span4.hidden-phone .carrinho > a strong'));
        $('.conteudo-topo').before($('.menu.superior'));
      });
    }

    function initHeaderEvents() {
      $(document)
        .on('click', '.cat', function () {
          if (mobile) $('.menu.superior .nivel-um').toggleClass('active');
          else $('#menuCat, .category').toggleClass('active');
        })
        .on('click', '#cabecalho .close-nav, .menu.superior .close-nav-full', function () {
          $('.menu.superior .nivel-um').toggleClass('active');
        })
        .on('click', '.busca_topo', function () { $('.conteudo-topo').toggleClass('active'); });

      $(window).on('scroll', function () {
        var fixed = $(this).scrollTop() > 150;
        $('#cabecalho, #menuCat').toggleClass('scroll', fixed);
        $('.back-top').toggleClass('show', $(this).scrollTop() > 300);
      });
    }

    function cleanContactLabels() {
      [['.drop-atd .tel-whatsapp > span', 'Whatsapp:'], ['.drop-atd li:nth-child(2) > span', 'Telefone:'], ['.drop-atd .tel-skype > a', 'Skype:']]
        .forEach(function (x) { $(x[0]).each(function () { $(this).text($(this).text().replace(x[1], '')); }); });
      $('.bandeira-promocao').each(function () { $(this).text($(this).text().replace('% Desconto', '')); });
    }

    function initCommonLayout() {
      if ($('.marcas').length && !$('#marcas').length) {
        $('#rodape').before('<div id="marcas"><div class="conteiner"><div class="row-fluid"><div class="titulo-categoria borda-principal cor-principal"><strong>Navegue por marcas</strong></div></div></div></div>');
        $('#marcas .row-fluid').append($('.marcas'));
      }
      once('.back-top', 'body', '<a href="#" class="back-top borda-principal"><i class="fa fa-chevron-up"></i><span>subir</span></a>');
      $('.carrinho > a span').html('Carrinho');
      once('.titulo_categoria', '.pagina-categoria .ordenar-listagem.topo', '<div class="titulo_categoria"></div>');
      $('.titulo_categoria').append($('.pagina-categoria .conteudo > h1.titulo'), $('.coluna .componente .interno .titulo + p'));
      $('.banner .newsletter .titulo').addClass('cor-principal').removeClass('cor-secundaria');
      $('#rodape .span12.visible-phone > ul > li').clone().appendTo('#rodape .redes-sociais');
      $('#id_email').first().attr('placeholder', 'E-mail');
      $('#id_senha').attr('placeholder', 'Senha');
      $('.cadastro-logar > .span6:nth-child(2) #id_email').attr('placeholder', 'Digite o email que deseja cadastrar:');
    }

    function initLogin() {
      later(function () {
        $('.ordenar-listagem.topo').after($('.banner.vitrine'));
        setTimeout(function () {
          var $user = $('.btn-group .menu-user-name');
          if (!$.trim($user.text())) return;
          var name = $.trim($user.text());
          $('.menu.superior .nivel-um').prepend('<li class="logado"><a href="/conta/index"><i class="fa-solid fa-user"></i><span>Olá, ' + name + '</span></a></li><li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
          $('li.signin-menu-superior, li.signup-menu-superior').hide();
          var $group = $('.conteudo-topo .superior .span8 .btn-group:first-child');
          $('.login-txt').replaceWith($group);
          var first = $.trim($group.find('.dropdown-toggle').text().split(',').pop()).split(' ')[0];
          if (first.length > 10) first = first.slice(0, 10) + ' ...';
          $group.find('.dropdown-toggle').text('Olá, ' + first);
          $('.login-top ul.dropdown-menu').css('left', '-67px');
        }, 500);
      });
    }

    function stars(rating) {
      var html = '';
      for (var i = 1; i <= 5; i++) html += '<span class="' + (i <= rating ? 'active' : '') + '">★</span>';
      return html;
    }

    function initReviews() {
      if (!$('#rodape').length || $('#reviews-section').length) return;
      var cards = C.reviews.itens.map(function (r) {
        return '<div class="review-item"><div class="review-card"><div class="review-stars">' + stars(r[2]) + '</div>' +
          '<div class="review-content"><p class="review-text">' + r[1] + '</p><strong class="review-name">' + r[0] + '</strong></div>' +
          '<div class="review-security"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3L19 6V11C19 15.55 16.04 19.74 12 21C7.96 19.74 5 15.55 5 11V6L12 3Z" stroke="currentColor" stroke-width="2"/><path d="M12 8V13" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>Verificado</div></div></div>';
      }).join('');
      $('.pagina-inicial #corpo').after('<section id="reviews-section"><div class="reviews-container"><div class="reviews-header"><div class="reviews-heading"><h2>' + C.reviews.titulo + '</h2><p>' + C.reviews.subtitulo + '</p></div><div class="reviews-navigation"><button class="review-arrow review-prev" type="button">←</button><button class="review-arrow review-next" type="button">→</button></div></div><div class="reviews-slider">' + cards + '</div></div></section>');
      if (typeof $.fn.slick === 'function') $('.reviews-slider').slick({ slidesToShow: 4, slidesToScroll: 1, infinite: false, arrows: true, dots: false, speed: 400, prevArrow: $('.review-prev'), nextArrow: $('.review-next'), responsive: [{ breakpoint: 1200, settings: { slidesToShow: 3 } }, { breakpoint: 992, settings: { slidesToShow: 2 } }, { breakpoint: 600, settings: { slidesToShow: 1 } }] });
    }

    function genreItems(items, pc) {
      return items.map(function (x) {
        var src = pc ? C.assets.aws + 'icon-c-' + x[1] + '.svg' : C.assets.base + 'icones/cat/icon-c-' + x[1] + '.svg';
        return '<li class="' + (pc ? 'explore_i_cat' : 'explore_item') + '"><a href="' + x[2] + '"><div class="explore_icon"><img src="' + src + '" alt="' + x[0] + '"></div><span class="explore_text">' + x[0] + '</span></a></li>';
      }).join('');
    }

    function initExplore() {
      if (!$('#explore').length && $('.pagina-inicial .secao-banners').length) {
        var items = genreItems(C.explorar, false);
        $('.pagina-inicial .secao-banners').after('<section id="explore"><div class="conteiner"><div class="explore_carousel"><div class="explore_items"><ul class="explore_group">' + items + '</ul><ul class="explore_group" aria-hidden="true">' + items + '</ul></div></div></div></section>');
      }
      if (!$('#explore_by-cat').length && $(C.explorarPc.vitrine).length) {
        $(C.explorarPc.vitrine).before('<div id="explore_by-cat"><div class="conteiner"><h2 class="titulo_explore">' + C.explorarPc.titulo + '</h2><div class="row-fluid"><div class="append_items">' + genreItems(C.explorarPc.itens, true) + '</div></div></div></div>');
      }
    }

    function initTrailer() {
      var cfg = C.trailer;
      var timer = setInterval(function () {
        var $target = $(cfg.vitrine).first();
        if ($('.videoTrailer').length) return clearInterval(timer);
        if (!$target.length) return;
        $target.before('<div class="videoTrailer"><div class="banner-title"><strong>' + cfg.titulo + '</strong><span>' + cfg.subtitulo + '</span></div><div class="append-dbanners"><div class="trailer_banner"><button class="trailer_play-trigger" data-video="' + cfg.video + '"><span class="trailer_play-icon"></span><span class="trailer_play-label">Assista ao trailer</span></button></div><div class="jogo_banner"><div class="append_preco_btn"><div class="preco"><span class="preco-diamond"></span><strong>' + cfg.preco + '</strong><span>' + cfg.sufixo + '</span></div><a class="btn" href="' + cfg.link + '">' + cfg.botao + '<svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" fill="none"/></svg></a></div></div></div></div>');
        clearInterval(timer);
      }, 300);
      setTimeout(function () { clearInterval(timer); }, 15000);
    }

    function initFooter() {
      $('#rodape .institucional').after($('.span4.selos'));
      once('.google-safe-extra', '.span4.selos ul > li:first-child', '<li class="google-safe-extra"><img alt="Google Safe Browsing" src="' + C.assets.aws + 'google-s-b.png" width="127" height="38"></li>', 'after');
      $('.links-rodape-paginas').after($('#rodape .redes-sociais'));
      once('#telefoneRodape', '#rodape .redes-sociais', '<div id="telefoneRodape"><div class="tel_rp"><p>WhatsApp</p><a href="' + C.rodape.whatsappLink + '"><i class="fa-whatsapp"></i>' + C.rodape.whatsapp + '</a></div><div class="envio_rp"><p>Formas de envio</p><li><img src="' + C.assets.base + 'icones/envio_digital-rp.svg" alt="Envio Digital"></li></div><div class="pagamento_rp"><p>Formas de pagamento</p><li><img src="' + C.assets.base + 'icones/boleto-rp.svg" alt="Boleto"></li><li><img src="' + C.assets.base + 'icones/pix-rp.svg" alt="Pix"></li></div></div>');
      once('.link-blog', '#rodape .institucional .links-rodape-paginas ul', '<li class="link-blog"><a href="' + C.rodape.blog + '" target="_blank">Blog</a></li>');
      $('#rodape > div:last-child .row-fluid > div:last-child a img').attr('src', C.assets.aws + 'loja-integrada.svg');
      $('#rodape .span4.selos > ul > li:first-child img').attr('src', C.assets.aws + 'selo-protegido.png');
      once('a.symm', '#rodape > div:last-child .row-fluid > div:last-child a', '<a href="' + C.rodape.whatsappLink + '" class="symm" target="_blank"><img src="' + C.assets.aws + 'desenvolvido-symm.svg" alt="Symm.agency" width="120" height="35"></a>', 'before');
    }

    function initPriceFinder() {
      var $target = $('#miniBannerFullw .modulo.span4:first-child, .mini-banner .modulo.span4:first-child').first();
      if (!$target.length || $('#porPreco').length) return;
      var items = C.porPreco.valores.map(function (v) { return '<li class="porpreco_item"><a href="./' + v + '"><span>R$</span> <strong>' + v + '</strong></a></li>'; });
      var half = Math.ceil(items.length / 2);
      $target.before('<div id="porPreco"><div class="titulo_porpreco"><h2>' + C.porPreco.titulo + '</h2><p>' + C.porPreco.subtitulo + '</p></div><div class="precos"><ul class="preco_linha">' + items.slice(0, half).join('') + '</ul><ul class="preco_linha">' + items.slice(half).join('') + '</ul></div></div>');

      // Move #miniBannerFullw antes do .vitrine-mas-vendido
      var $miniBanner = $('#miniBannerFullw');
      var $vitrineMaisVendido = $('.vitrine-mas-vendido').first();
      if ($miniBanner.length && $vitrineMaisVendido.length) {
        $miniBanner.insertBefore($vitrineMaisVendido);
      }
    }

    function cloneBestSellers() {
      var $container = $('#listagemProdutos');
      var $title = $container.find('.vitrine-mas-vendido');
      var $list = $title.next('ul');
      if (!$title.length || !$list.length || $container.find('.mais-vendidos-destaque').length) return;
      $container.find('ul.produtos-carrossel').last().after(
        $title.clone(true, true).addClass('mais-vendidos-destaque'),
        $list.clone(true, true).addClass('mais-vendidos-destaque')
      );
    }

    function initCart() {
      var $box = $('.pagina-carrinho .finalizar-compra > .caixa-sombreada');
      if ($box.length && !$box.find('.cart-resume').length) {
        $box.append('<div class="cart-resume"><div class="cart-resume-container"><h3>Resumo</h3><div class="cart-resume-subtotal"></div><div class="cart-resume-total"></div><div class="cart-resume-button"></div><div class="cart-resume-coupon"><div class="resume-toggle-coupon"><span class="toggle-button"><img src="https://cdn.awsli.com.br/2775/2775575/arquivos/coupon.svg">Tem um cupom?</span><i class="icon-chevron-down"></i></div></div></div><div class="cart-email-send"><i></i><span>Envio feito por e-mail.</span></div></div>');
        var $subtotal = $('.cart-resume-subtotal');
        var $row = $('tr.hidden-phone.bg-dark');
        if ($row.length) { $('<div class="hidden-phone bg-dark"></div>').append($row.children()).appendTo($subtotal); $('.formas-envio').appendTo($subtotal); $row.remove(); }
        $('form[action*="/checkout/redirect/"]').appendTo('.cart-resume-button');
        var $total = $('tr.bg-dark').has('.line-18');
        if ($total.length) { $('<div class="bg-dark line-18"></div>').append($total.find('td').children()).appendTo('.cart-resume-total'); $total.remove(); }
        var $coupon = $('tr.bg-dark').has('form[action*="/carrinho/cupom/"]');
        if ($coupon.length) { $('<div class="bg-dark cart-coupon"></div>').append($coupon.find('form')).appendTo('.cart-resume-coupon'); $coupon.remove(); }
        var $applied = $('tr.bg-dark.possui-cupom');
        if ($applied.length) { $('<div class="bg-dark cart-coupon aplicado"></div>').append($applied.find('td').children()).appendTo('.cart-resume-coupon'); $applied.remove(); }
        $('.cupom-valor').appendTo($subtotal);
      }
      $('tr[data-produto-id]').addClass('cart-product');
      var $cart = $('.pagina-carrinho:not(.carrinho-checkout) .tabela-carrinho');
      if (!$cart.length) return;
      if (!$cart.children('h3').length) $cart.prepend('<h3>Meu carrinho</h3>');
      var s = C.surpresa;
      if ($('tr[data-produto-id="' + s.produtoId + '"]').length || $cart.find('.surprise-box').length) return;
      $cart.append('<div class="surprise-box"><div class="box-image"><img src="' + s.imagem + '" alt="Caixa surpresa para PC"></div><div class="box-text"><span>' + s.titulo + '</span><img src="' + s.plataforma + '" alt="Steam"></div><div class="append-price"><div class="box-price">' + s.preco + '</div><a class="box-button-add" href="./carrinho/produto/' + s.produtoId + '/adicionar"><img src="' + C.assets.base + 'icones/add-cart.svg" alt="Adicionar ao carrinho"></a></div></div>');
      if ($('.embalagem').length) $('.surprise-box').before($('.embalagem'));
    }

    $(document)
      .on('click', '.back-top', function (e) { e.preventDefault(); $('html, body').animate({ scrollTop: 0 }, 200); })
      .on('click', '.resume-toggle-coupon', function (e) { e.preventDefault(); $('.cart-resume-coupon').toggleClass('open'); })
      .on('click', '.trailer_play-trigger', function () {
        var id = youtubeId($(this).data('video'));
        if (id) $(this).closest('.trailer_banner').addClass('is-playing').html('<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>');
      });

    later(initBanners);
    initProductSlider();
    initPromo();
    initProductPage();
    initDesktopHeader();
    initMobileHeader();
    initHeaderEvents();
    cleanContactLabels();
    initCommonLayout();
    initLogin();
    initReviews();
    later(function () { initExplore(); initTrailer(); cloneBestSellers(); initFooter(); initPriceFinder(); });
    initCart();

    $('.mini-banner img').each(function () {
      var src = $(this).attr('src');
      if (src) $(this).attr('src', src.replace('/400x400/', '/800x800/')).attr('data-src', function (_, value) { return value ? value.replace('/400x400/', '/800x800/') : value; });
    });
    $('.pagina-login .cabecalho-interno .titulo').html('Entre na sua conta ou cadastre-se <small>Faça o seu login ou crie uma conta caso ainda não possua cadastro</small>');
  });
})(jQuery, window, document);