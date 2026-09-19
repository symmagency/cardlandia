$(document).ready(function () {

    // Inicialização e utilitários
    if (window.__thkeysUiInitialized) {
        return;
    }
    window.__thkeysUiInitialized = true;

    var tam = $(window).width();
    var isDesktop = tam >= 768;
    var isMobile = tam <= 767;

    function runDeferred(task) {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(task);
        } else {
            setTimeout(task, 0);
        }
    }

    runDeferred(function () {

        const bannerConfig = {
    
            inserirDepoisDe: '.pagina-inicial .secao-banners',
    
            baseUrl: 'https://symmagency.github.io/cardlandia/assets/banners/',
    
            banners: [
                {
                    imagem: 'apple.png',
                    imagemMobile: 'apple-m.png',
                    link: '/app-store',
                    alt: 'Apple'
                },
                {
                    imagem: 'google-play.png',
                    imagemMobile: 'google-play-m.png',
                    link: '/google-play',
                    alt: 'Google Play'
                },
                {
                    imagem: 'playstation.png',
                    imagemMobile: 'playstation-m.png',
                    link: '/gift-playstation',
                    alt: 'PlayStation'
                },
                {
                    imagem: 'razer-gold.png',
                    imagemMobile: 'razer-gold-m.png',
                    link: '/buscar?q=razer+gold',
                    alt: 'Razer Gold'
                },
                {
                    imagem: 'steam.png',
                    imagemMobile: 'steam-m.png',
                    link: '/pc-',
                    alt: 'Steam'
                },
                {
                    imagem: 'xbox.png',
                    imagemMobile: 'xbox-m.png',
                    link: '/gift-xbox',
                    alt: 'Xbox'
                }
            ]
        };
    
    
        if (
            !$('#home-banners-grid').length &&
            $(bannerConfig.inserirDepoisDe).length
        ) {
    
            const bannersHTML = bannerConfig.banners.map(function(banner) {
    
                return `
                    <div class="home-banner-item">
    
                        <a
                            href="${banner.link}"
                            title="${banner.alt}"
                        >
    
                            <picture>
    
                                <source
                                    media="(max-width: 767px)"
                                    srcset="${bannerConfig.baseUrl}${banner.imagemMobile}"
                                >
    
                                <img
                                    src="${bannerConfig.baseUrl}${banner.imagem}"
                                    alt="${banner.alt}"
                                    loading="lazy"
                                >
    
                            </picture>
    
                        </a>
    
                    </div>
                `;
    
            }).join('');
    
    
            $(bannerConfig.inserirDepoisDe).after(`
    
                <section id="home-banners-grid">
    
                    <div class="conteiner">
    
                        <div class="home-banners-list">
    
                            ${bannersHTML}
    
                        </div>
    
                    </div>
    
                </section>
    
            `);
    
        }
    
    });


    // Carrossel de produtos

    var $slider = $('#listagemProdutos ul .flex-viewport > ul');

    $slider.removeAttr('style');
    $slider.find('li').removeAttr('style');

    $slider.slick({
        dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
                }
            ]
    });

        // Barra de promoção inicial

        $(function () {

            const promoImage = 'https://cdn.awsli.com.br/2727/2727537/arquivos/header_promo_bar.png';
            const promoLink = '#';
        
            $('#cabecalho').before(`
                <div class="promo-bar">
                    <a href="${promoLink}">
                        <img src="${promoImage}" alt="Promoção">
                    </a>
                </div>
            `);
        
        });


    // Cabeçalho desktop
    if (isDesktop) {
        runDeferred(function () {

            $('#cabecalho').after('<div id="menuCat"><div class="conteiner"><div class="row-fluid"></div></div></div>');
            $('#menuCat .row-fluid').append($('#cabecalho .menu.superior'));

            if (!$('.pagina-inicial .mini-banner #miniBannerFullw').length) {
                $('.pagina-inicial .mini-banner').prepend('<div id="miniBannerFullw" class="conteiner"></div>');
                $('.pagina-inicial .mini-banner .modulo.span4').appendTo($('#miniBannerFullw'));
            }

            $('.pagina-inicial #listagemProdutos > ul:nth-child(2)').after($('.banner.tarja'));
            $('.pagina-busca .listagem > .titulo').appendTo('.pagina-busca .ordenar-listagem.topo');

            $('.conteudo-topo').before(
                '<div class="cat">' +
                '<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>' +
                '</div>'
            );

            $('.cat').on('click', function () {
                $('#menuCat').toggleClass('active');
                $('.category').toggleClass('active');
            });

            $('.conteudo-topo .inferior .span8.busca-mobile').after(
                '<div class="login-top">' +
                '<a href="../conta/login"><span class="login-txt"><strong>Login / Cadastre-se</strong></span></a>' +
                '</div>'
            );

            $('.carrinho>a>i').addClass('cor-principal');
            $('.atd-top ul.drop-atd').prepend($('.barra-inicial .canais-contato.span9>ul>li'));

            $('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.pagina-produto #buy-together-position1'));
            $('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.abas-custom'));
            $('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.pagina-produto #buy-together-position2'));
            $('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.konfidency-reviews-details'));
            $('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.listagem.aproveite-tambem'));

        });
    }

    if ($('.drop-atd .tel-whatsapp>span').length) {
        $('.drop-atd .tel-whatsapp>span').each(function () {
            var $result = $(this).text().replace("Whatsapp:", "");
            $(this).text($result);
        });
    }

    if ($('.drop-atd li:nth-child(2)>span').length) {
        $('.drop-atd li:nth-child(2)>span').each(function () {
            var $result = $(this).text().replace("Telefone:", "");
            $(this).text($result);
        });
    }

    if ($('.drop-atd .tel-skype>a').length) {
        $('.drop-atd .tel-skype>a').each(function () {
            var $result = $(this).text().replace("Skype:", "");
            $(this).text($result);
        });
    }

    if ($('.marcas').length) {

        $('#rodape').before(
            '<div id="marcas">' +
            '<div class="conteiner">' +
            '<div class="row-fluid">' +
            '<div class="titulo-categoria borda-principal cor-principal">' +
            '<strong>Navegue por marcas</strong>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');

        $('#marcas .row-fluid').append($('.marcas'));

    }

    $('body').append('<a href="#" onclick="topFunction()" class="back-top borda-principal"><i class="fa fa-chevron-up"></i><span>subir</span></a>');

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            $(".back-top").addClass('show');
        } else {
            $(".back-top").removeClass('show');
        }
    }

    function topFunction() {
        $('body').animate({
            scrollTop: '0'
        }, 200);
    }

    $('.carrinho>a span').html('Carrinho');

    $('.pagina-categoria .ordenar-listagem.topo').append(`
<div class="titulo_categoria"></div>
`);

    $('.titulo_categoria').append($('.pagina-categoria .conteudo > h1.titulo'));
    $('.titulo_categoria').append($('.coluna .componente .interno .titulo + p'));

    if ($('.conteudo-topo .superior .span8 .btn-group:first-child').is(':visible')) {
        $('.login-txt').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
        //Recorta o primeiro nome do usuário logado no menu desktop
        let usenameText = $('.login-top .btn-group .dropdown-toggle').text();
        let index = $('.login-top .btn-group .dropdown-toggle').text().indexOf(',');
        let firstname = usenameText.substring(index + 2).split(' ').slice(0, -1)[0];
        if (firstname.length > 10) {
            firstname = firstname.substring(0, 10) + ' ...';
        }
        document.querySelector('.login-top .btn-group .dropdown-toggle').textContent = `Olá, ${firstname}`;
        $('.login-top ul.dropdown-menu').css("left", "-67px");
    }

    if ($('.conteudo-topo .superior .span8 .btn-group:first-child').is(':visible')) {
        $('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));

    }

    if ($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child').is(':visible')) {
        $('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));
    }
    // Cabeçalho fixo
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $('#cabecalho').addClass('scroll');
            $('#menuCat').addClass('scroll');
        } else {
            $('#cabecalho').removeClass('scroll');
            $('#menuCat').removeClass('scroll');
        }
    });

    $('.banner .newsletter .titulo').addClass('cor-principal').removeClass('cor-secundaria');
    $('#rodape .span12.visible-phone > ul > li').clone().appendTo('#rodape .redes-sociais');

    // Inputs de login
    $('.cadastro-logar .form-horizontal .controls #id_email').attr("placeholder", "E-mail");
    $('.cadastro-logar .form-horizontal .controls #id_senha').attr("placeholder", "Senha");
    $('.cadastro-logar>.span6:nth-child(2) #id_email').attr("placeholder", "Digite o email que deseja cadastrar:");
    $('.produto .acoes-produto .desconto-a-vista').before('<span class="bandeira_promo_principal">-10% OFF NO PIX</span>');
    $('.pagina-produto .produto .span6 > .principal').append('<span class="aviso_produto">* Todos os produtos do nosso site são códigos 100% originais, enviados por e-mail.</span>');

    $('#rodape > div:last-child .row-fluid > div:last-child a img').attr('src', 'https://cdn.awsli.com.br/1041/1041512/arquivos/loja-integrada.svg');
    $('#rodape .span4.selos > ul > li:first-child img').attr('src', 'https://cdn.awsli.com.br/1041/1041512/arquivos/selo-protegido.png');
    $('#rodape > div:last-child .row-fluid > div:last-child a').before('<a href="https://wa.me/551152863976" class="symm" target="_blank"><img src="https://cdn.awsli.com.br/1041/1041512/arquivos/desenvolvido-symm.svg" alt="Symm.agency" width="120px" height="35px"></a>');
    $('#rodape > div:last-child .row-fluid > div:first-child').removeClass('span9 span6 atendimento').addClass('assinatura').attr('style', '');
    $('#rodape > div:last-child .row-fluid > div:last-child').attr('style', '').addClass('assinatura-rodape');

    if ($('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').length) {
        $('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').each(function () {
            var $result = $(this).text().replace("% Desconto", "");
            $(this).text($result);
        });
    }

    // Cabeçalho mobile
    if (isMobile) {
        runDeferred(function () {

            $('#cabecalho .conteiner .logo').before(
                '<div class="cat cor-principal">' +
                '<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>' +
                '</div>'
            );

            $('.vitrine-3323786').before($('.banner.tarja'));

            $('#cabecalho .menu.superior .nivel-um').prepend(
                '<li class="cab-nav">' +
                '<a class="close-nav-full"></a>' +
                '<div class="close-nav">' +
                '<span class="category cor-principal"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>' +
                '</div>' +
                '<ul class="cab-nav-menu"></ul>' +
                '<div class="acc-nav">' +
                '</div>' +
                '</li>'
            );
            if ($('.btn-group').length) {
                $('.menu.superior .nivel-um .cab-nav .cab-nav-menu').prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
            }
            $('.menu.superior .nivel-um .cab-nav .acc-nav').append($('#cabecalho a.icon-user'));
            $('#cabecalho .cab-nav a').addClass('cor-principal');

            $('.cat').click(
                function () {
                    $('.menu.superior .nivel-um').toggleClass('active');
                }
            );

            $('#cabecalho .close-nav').click(
                function () {
                    $('.menu.superior .nivel-um').toggleClass('active');
                }
            );

            $('.menu.superior .nivel-um .cab-nav .close-nav-full').click(
                function () {
                    $('.menu.superior .nivel-um').toggleClass('active');
                }
            );

            $('.produto .conteiner-imagem').before($('.produto .span6> .principal .info-principal-produto'));
            $('.atalhos-mobile li.fundo-principal').addClass('cor-principal borda-principal');
            $('.atalhos-mobile li.fundo-principal a').addClass('cor-principal');
            $('#cabecalho .conteiner .logo').after($('.atalhos-mobile li.fundo-principal'));

            $('#cabecalho>.conteiner>.row-fluid>.span3 > .fundo-principal').before(
                `<div class="busca_topo">
                <a >
                Busca
                </a>
                </div>
                <div class="login-top">
                <a href="../conta/index">
                Login
                </a>
                </div>`
            );

            $('#cabecalho>.conteiner>.row-fluid>.span6 > .fundo-principal').before(
                `<div class="busca_topo">
                <a >
                Busca
                </a>
                </div>
                <div class="login-top">
                <a href="../conta/index">
                Login
                </a>
                </div>`
            );

            $('#cabecalho>.conteiner>.row-fluid>.span3 > .fundo-principal').append($('.conteudo-topo .inferior .span4.hidden-phone .carrinho>a strong'));

            $('.busca_topo').click(function () {
                $('.conteudo-topo').toggleClass("active");
            });

            $('.conteudo-topo').before($('.menu.superior'));
        });
    }

    runDeferred(function () {
        $('.ordenar-listagem.topo').after($('.banner.vitrine'));

        setTimeout(function () {
            let isLogged = $('.btn-group .menu-user-name').text() !== "";

            if (isLogged) {
                $('.login-conta a').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
                $('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));
                $('.login-top .login-txt').html('Olá!');
                $('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));

            }

            if (isLogged) {
                var nomeUsuario = $('span.menu-user-name').text();
                $('.menu.superior .nivel-um').prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
                $('.menu.superior .nivel-um').prepend('<li class="logado"><a href="/conta/index"><i class="fa-solid fa-user"></i><span>Olá, ' + nomeUsuario + '</span></a></li>');

                $('li.signin-menu-superior, li.signup-menu-superior').css('display', 'none');

                $('.login-txt').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
                //Recorta o primeiro nome do usuário logado no menu desktop
                let usenameText = $('.login-top .btn-group .dropdown-toggle').text();
                let index = $('.login-top .btn-group .dropdown-toggle').text().indexOf(',');
                let firstname = usenameText.substring(index + 2).split(' ').slice(0, -1)[0];
                if (firstname.length > 10) {
                    firstname = firstname.substring(0, 10) + ' ...';
                }
                document.querySelector('.login-top .btn-group .dropdown-toggle').textContent = `Olá, ${firstname}`;
                $('.login-top ul.dropdown-menu').css("left", "-67px");

            }
        }, 500);

    $(function () {

        // ==========================================
        // CONFIGURAÇÃO
        // Altere os conteúdos somente aqui
        // ==========================================
    
        const reviewsConfig = {
    
            titulo: 'Veja o que estão falando de nós',
            subtitulo: 'Quem comprou recomenda <3',
    
            reviews: [
                {
                    nome: 'Lucas Almeida',
                    texto: 'Compra rápida e segura. Recebi meu produto praticamente na mesma hora!',
                    nota: 5
                },
                {
                    nome: 'Gabriel Martins',
                    texto: 'Já comprei algumas vezes e sempre deu tudo certo. Recomendo demais.',
                    nota: 5
                },
                {
                    nome: 'Matheus Souza',
                    texto: 'Atendimento excelente e entrega muito rápida. Pode comprar sem medo.',
                    nota: 5
                },
                {
                    nome: 'Rafael Oliveira',
                    texto: 'Gostei bastante da experiência. Processo simples, rápido e seguro.',
                    nota: 5
                },
                {
                    nome: 'Bruno Santos',
                    texto: 'Produto chegou certinho e sem complicação. Voltarei a comprar.',
                    nota: 5
                },
                {
                    nome: 'Felipe Costa',
                    texto: 'Tudo muito fácil de entender. A entrega foi praticamente instantânea.',
                    nota: 5
                }
            ]
        };
    
    
        // Evita duplicar a seção
        if (!$('#rodape').length || $('#reviews-section').length) {
            return;
        }
    
    
        // ==========================================
        // CRIA ESTRELAS
        // ==========================================
    
        function criarEstrelas(nota) {
    
            let estrelas = '';
    
            for (let i = 1; i <= 5; i++) {
                estrelas += `
                    <span class="${i <= nota ? 'active' : ''}">
                        ★
                    </span>
                `;
            }
    
            return estrelas;
        }
    
    
        // ==========================================
        // CARDS
        // ==========================================
    
        const reviewsHtml = reviewsConfig.reviews.map(review => `
            
            <div class="review-item">
    
                <div class="review-card">
    
                    <div class="review-stars">
                        ${criarEstrelas(review.nota)}
                    </div>
    
                    <div class="review-content">
    
                        <p class="review-text">
                            ${review.texto}
                        </p>
    
                        <strong class="review-name">
                            ${review.nome}
                        </strong>
    
                    </div>
    
                    <div class="review-security">
    
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
    
                            <path
                                d="M12 3L19 6V11C19 15.55 16.04 19.74 12 21C7.96 19.74 5 15.55 5 11V6L12 3Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
    
                            <path
                                d="M12 8V13"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
    
                            <circle
                                cx="12"
                                cy="16"
                                r="1"
                                fill="currentColor"
                            />
    
                        </svg>
                        Verificado
    
                    </div>
    
                </div>
    
            </div>
    
        `).join('');
    
    
        // ==========================================
        // MONTA SEÇÃO
        // ==========================================
    
        const sectionHtml = `
    
            <section id="reviews-section">
    
                <div class="reviews-container">
    
                    <div class="reviews-header">
    
                        <div class="reviews-heading">
    
                            <h2>
                                ${reviewsConfig.titulo}
                            </h2>
    
                            <p>
                                ${reviewsConfig.subtitulo}
                            </p>
    
                        </div>
    
    
                        <div class="reviews-navigation">
    
                            <button
                                class="review-arrow review-prev"
                                type="button"
                                aria-label="Depoimento anterior"
                            >
                                ←
                            </button>
    
                            <button
                                class="review-arrow review-next"
                                type="button"
                                aria-label="Próximo depoimento"
                            >
                                →
                            </button>
    
                        </div>
    
                    </div>
    
    
                    <div class="reviews-slider">
                        ${reviewsHtml}
                    </div>
    
                </div>
    
            </section>
    
        `;
    
    
        $('.pagina-inicial #corpo').after(sectionHtml);
    
    
        // ==========================================
        // SLICK
        // ==========================================
    
        const $slider = $('.reviews-slider');
    
    
        if (typeof $.fn.slick !== 'function') {
            console.warn('Slick Slider não foi encontrado.');
            return;
        }
    
    
        $slider.slick({
    
            slidesToShow: 4,
            slidesToScroll: 1,
    
            infinite: false,
    
            arrows: true,
    
            dots: false,
    
            speed: 400,
    
            prevArrow: $('.review-prev'),
            nextArrow: $('.review-next'),
    
            responsive: [
    
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
    
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
    
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
    
            ]
    
        });
    
    });

    // Ajustes exclusivos para desktop
    if (isDesktop) {
        runDeferred(function () {

            $('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.pagina-produto #buy-together-position1'));
            $('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.abas-custom'));
            $('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.pagina-produto #buy-together-position2'));
            $('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.listagem.aproveite-tambem'));

        });
    }

    runDeferred(function () {

        if (!$('#explore').length && $('.pagina-inicial .secao-banners').length) {
    
            // ==========================================
            // CONFIGURAÇÃO DOS CARDS
            // Altere texto, ícone e link somente aqui
            // ==========================================
    
            const exploreItems = [
                {
                    texto: 'Ação',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-acao.svg',
                    link: '/acao'
                },
                {
                    texto: 'Aventura',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-aventura.svg',
                    link: '/aventura'
                },
                {
                    texto: 'Co-op',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-coop.svg',
                    link: '/co-op'
                },
                {
                    texto: 'Corrida',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-corrida.svg',
                    link: '/corrida'
                },
                {
                    texto: 'Esporte',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-esporte.svg',
                    link: '/esporte'
                },
                {
                    texto: 'Estratégia',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-estrategia.svg',
                    link: '/estrategia'
                },
                {
                    texto: 'FPS',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-fps.svg',
                    link: '/fps'
                },
                {
                    texto: 'Hack & Slash',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-slash.svg',
                    link: '/hack-slash'
                },
                {
                    texto: 'Indie',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-indie.svg',
                    link: '/indie'
                },
                {
                    texto: 'Luta',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-luta.svg',
                    link: '/luta'
                },
                {
                    texto: 'MMO',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-mmo.svg',
                    link: '/mmo'
                },
                {
                    texto: 'RPG',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-rpg.svg',
                    link: '/rpg'
                },
                {
                    texto: 'Simulação',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-simulacao.svg',
                    link: '/simulacao'
                },
                {
                    texto: 'Soulslike',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-soulslike.svg',
                    link: '/soulslike'
                },
                {
                    texto: 'Terror',
                    icone: 'https://symmagency.github.io/cardlandia/assets/icones/cat/icon-c-terror.svg',
                    link: '/terror'
                }
            ];
    
    
            // ==========================================
            // MONTA OS CARDS AUTOMATICAMENTE
            // ==========================================
    
            const itemsHTML = exploreItems.map(function(item) {
    
                return `
                    <li class="explore_item">
                        <a href="${item.link}">
    
                            <div class="explore_icon">
                                <img
                                    src="${item.icone}"
                                    alt="${item.texto}"
                                >
                            </div>
    
                            <span class="explore_text">
                                ${item.texto}
                            </span>
    
                        </a>
                    </li>
                `;
    
            }).join('');
    
    
            // ==========================================
            // INSERE A SEÇÃO
            // ==========================================
    
            $('.pagina-inicial .secao-banners').after(`
    
                <section id="explore">
    
                    <div class="conteiner">
    
                        <div class="explore_carousel">
    
                            <div class="explore_items">
    
                                <!-- Grupo original -->
                                <ul class="explore_group">
                                    ${itemsHTML}
                                </ul>
    
                                <!-- Grupo duplicado para criar o loop infinito -->
                                <ul
                                    class="explore_group"
                                    aria-hidden="true"
                                >
                                    ${itemsHTML}
                                </ul>
    
                            </div>
    
                        </div>
    
                    </div>
    
                </section>
    
            `);
    
        }
    
    

        if (!$('.videoTrailer').length && $('#listagemProdutos .vitrine-3332079').length) {
            var videoTrailer = {
                titulo: 'Ofertas em destaque',
                subtitulo: 'Jogos selecionados pela THKeys.',
                trailerLabel: 'Assista ao trailer',
                trailerUrl: 'https://www.youtube.com/watch?v=cv041_93_0Q',
                preco: 'R$ 299,99',
                precoSufixo: 'no pix',
                compraLabel: 'Comprar agora',
                compraUrl: './dy4bfpyl4-/grand-theft-auto-vi-ultimate-edition'
            };

            function youtubeEmbedUrl(url) {
                if (!url) {
                    return '';
                }

                var match = String(url).match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

                if (!match) {
                    return '';
                }

                return 'https://www.youtube.com/embed/' + match[1] + '?autoplay=1&rel=0';
            }

            $('#listagemProdutos .vitrine-3332079').before(`
                <div class="videoTrailer">
                    <div class="banner-title">
                        <strong>${videoTrailer.titulo}</strong>
                        <span>${videoTrailer.subtitulo}</span>
                    </div>
                    <div class="append-dbanners">
                        <div class="trailer_banner">
                            <button type="button" class="trailer_play-trigger" aria-label="${videoTrailer.trailerLabel}" data-trailer="${videoTrailer.trailerUrl}">
                                <span class="trailer_play-icon" aria-hidden="true"></span>
                                <span class="trailer_play-label">${videoTrailer.trailerLabel}</span>
                            </button>
                        </div>
                        <div class="jogo_banner">
                            <div class="append_preco_btn">
                                <div class="preco">
                                    <span class="preco-diamond" aria-hidden="true"></span>
                                    <strong>${videoTrailer.preco}</strong>
                                    <span>${videoTrailer.precoSufixo}</span>
                                </div>
                                <a class="btn" href="${videoTrailer.compraUrl}">
                                    ${videoTrailer.compraLabel}
                                    <svg class="btn-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                        <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `);

            $('.videoTrailer').on('click', '.trailer_play-trigger', function () {
                var $banner = $(this).closest('.trailer_banner');
                var embedUrl = youtubeEmbedUrl($(this).attr('data-trailer'));

                if (!embedUrl || $banner.hasClass('is-playing')) {
                    return;
                }

                $banner.addClass('is-playing').append(`
                    <iframe
                        src="${embedUrl}"
                        title="${videoTrailer.trailerLabel}"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                `);
            });
        }

        $(function () {
            var $container = $('#listagemProdutos');
          
            var $titulo = $container.find('.vitrine-mas-vendido');
            var $ul = $titulo.next('ul');
          
            if (!$titulo.length || !$ul.length) return;
          
            // clona
            var $cloneTitulo = $titulo.clone(true, true)
              .addClass('mais-vendidos-destaque');
          
            var $cloneUl = $ul.clone(true, true)
              .addClass('mais-vendidos-destaque');
          
            // insere no final
            $container
              .find('ul.produtos-carrossel')
              .last()
              .after($cloneTitulo, $cloneUl);
          });

        $('#rodape .institucional').after($('.span4.selos'));
        $('.span4.selos ul > li:first-child').after(`
    <li> <img alt="Google Safe Browsing" src="https://cdn.awsli.com.br/1041/1041512/arquivos/google-s-b.png"/ width="127" height="38px"> </li>
    `);

    $('.pagina-login .cabecalho-interno .titulo').html(`Entre na sua conta ou cadastre-se <small>Faça o seu login ou crie uma conta caso ainda não possua cadastro</small>`);

        //redes sociais no rodape
        $('.links-rodape-paginas').after($('#rodape .redes-sociais'));
        if (!$('#telefoneRodape').length) {
            $('#rodape .redes-sociais').append(`
    <div id="telefoneRodape">
    <div class="tel_rp">
    <p>WhatsApp</p>
    <a href="#"><i class="fa-whatsapp"></i>(11) 5286-3976</a>
    </div>
    <div class="envio_rp">
    <p>Formas de envio</p>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/envio_digital.svg" alt="Envio Digital" width="127" height="24px">
    </li>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/envio_digital_vip.svg" alt="Envio Digital VIP" width="154" height="24px">
    </li>
    </div>
    <div class="pagamento_rp">
    <p>Formas de pagamento</p>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/boleto.svg" alt="Boleto Bancário">
    </li>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/cartao.svg" alt="Cartão de crédito">
    </li>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/pix.svg" alt="Pix">
    </li>
    </div>
    </div>
    `);
        }

        (function insertPorPreco() {
            var $target = $('.mini-banner .modulo.span4:first-child');
            if (!$target.length || $('#porPreco').length) return;

            var precos = [10, 20, 30, 50, 100, 150, 200, 250];
            var itens = precos.map(function (valor) {
                return (
                    '<li class="porpreco_item">' +
                        '<a href="./' + valor + '">' +
                            '<span>R$</span> <strong>' + valor + '</strong>' +
                        '</a>' +
                    '</li>'
                );
            });
            var metade = Math.ceil(itens.length / 2);

            $target.before(
                '<div id="porPreco">' +
                    '<div class="titulo_porpreco">' +
                        '<h2>Já sabe quanto vai gastar?</h2>' +
                        '<p>Encontre produtos por faixa de preço</p>' +
                    '</div>' +
                    '<div class="precos">' +
                        '<ul class="preco_linha">' + itens.slice(0, metade).join('') + '</ul>' +
                        '<ul class="preco_linha">' + itens.slice(metade).join('') + '</ul>' +
                    '</div>' +
                '</div>'
            );
        })();

    $('.mini-banner img').each(function () {
        var $img = $(this);
        var src = $img.attr('src');

        if (!src) return;

        // Troca 400x400 por 800x800
        var newSrc = src.replace('/400x400/', '/800x800/');

        if (newSrc !== src) {
        $img.attr('src', newSrc);

        // Se houver lazyload com data-src
        if ($img.attr('data-src')) {
            $img.attr('data-src', newSrc);
        }
        }
    });

        if ($('#miniBannerFullw').length && $('#listagemProdutos .vitrine-22673218').length) {
            $('#listagemProdutos .vitrine-22673218').before($('#miniBannerFullw'));
        }
        $('#rodape .institucional .links-rodape-paginas ul').append(`<li><a href="https://blog.thkeys.com.br/" target="_blank">Blog</a></li>`);

        if (!$('#explore_by-cat').length && $('.pagina-inicial .vitrine-3323787').length) {
            $('.pagina-inicial .vitrine-3323787').before(`

        <div id="explore_by-cat">
        
        <div class="conteiner">
        <h2 class="titulo_explore">
        Explore por gênero
        </h2>
        
        <div class="row-fluid">
        <div class="append_items">  
        
        
        <li class="explore_i_cat">
        <a href="./acao-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-acao.svg" alt="">
        <span>Ação</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./aventura-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-aventura.svg" alt="">
        <span>Aventura</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./coop-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-coop.svg" alt="">
        <span>Co-op</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./corrida-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-corrida.svg" alt="">
        <span>Corrida</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./esporte-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-esporte.svg" alt="">
        <span>Esporte</span>
        </a>
        </li>
        
        
        <li class="explore_i_cat">
        <a href="./estrategia-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-estrategia.svg" alt="">
        <span>Estratégia</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./fps-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-fps.svg" alt="">
        <span>FPS</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./hack-slash-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-slash.svg" alt="">
        <span>Hack & Slash</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./indie-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-indie.svg" alt="">
        <span>Indie</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./luta-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-luta.svg" alt="">
        <span>Luta</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./mmo-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-mmo.svg" alt="">
        <span>MMO</span>
        </a>
        </li>
        
        
        <li class="explore_i_cat">
        <a href="./rpg-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-rpg.svg" alt="">
        <span>RPG</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./simulacao-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-simulacao.svg" alt="">
        <span>Simulação</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="./soulslike-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-soulslike.svg" alt="">
        <span>Soulslike</span>
        </a>
        </li>
        
        
        <li class="explore_i_cat">
        <a href="./terror-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-terror.svg" alt="">
        <span>Terror</span>
        </a>
        </li>
        
        
        </div>
        </div>
        </div>
        
        </div>
        
        `);
        }
    });


});

// =====================================================
// CARRINHO E SURPRISE BOX
// =====================================================

$(document).ready(function () {

    // =====================================================
    // CRIA O RESUMO
    // =====================================================
    $('.finalizar-compra > .caixa-sombreada').append(`
      <div class="cart-resume">
        <div class="cart-resume-container">
          <h3>Resumo</h3>
          <div class="cart-resume-subtotal"></div>
          <div class="cart-resume-total"></div>
          <div class="cart-resume-button"></div>
          <div class="cart-resume-coupon">
            <div class="resume-toggle-coupon">
              <span class="toggle-button">
                <img src="https://cdn.awsli.com.br/2775/2775575/arquivos/coupon.svg"/>
                Tem um cupom?
              </span>
              <i class="icon-chevron-down"></i>
            </div>
          </div>
        </div>
        <div class="cart-email-send">
          <i></i>
          <span>Envio feito por e-mail.</span>
        </div>
      </div>
    `);

    // =====================================================
    // SUBTOTAL
    // =====================================================
    var $subtotalTarget = $('.cart-resume-subtotal');
    var $hiddenRow = $('tr.hidden-phone.bg-dark');

    if ($subtotalTarget.length && $hiddenRow.length) {
        $('<div class="hidden-phone bg-dark"></div>')
            .append($hiddenRow.children())
            .appendTo($subtotalTarget);
        $('.formas-envio').appendTo($subtotalTarget);
        $hiddenRow.remove();
    }

    // =====================================================
    // BOTÃO FINALIZAR + EMBALAGEM + FRETE
    // =====================================================
    var $buttonTarget = $('.cart-resume-button');

    if ($buttonTarget.length) {
        $('form[action*="/checkout/redirect/"]').appendTo($buttonTarget);
    }

    // =====================================================
    // TOTAL
    // =====================================================
    var $totalTarget = $('.cart-resume-total');
    var $totalRow = $('tr.bg-dark').has('.line-18');

    if ($totalTarget.length && $totalRow.length) {
        $('<div class="bg-dark line-18"></div>')
            .append($totalRow.find('td').children())
            .appendTo($totalTarget);
        $totalRow.remove();
    }

    // =====================================================
    // CUPOM (COM E SEM CUPOM APLICADO)
    // =====================================================
    var $couponTarget = $('.cart-resume-coupon');

    if ($couponTarget.length) {

        var $formCupomRow = $('tr.bg-dark').has('form[action*="/carrinho/cupom/"]');
        if ($formCupomRow.length) {
            $('<div class="bg-dark cart-coupon"></div>')
                .append($formCupomRow.find('form'))
                .appendTo($couponTarget);
            $formCupomRow.remove();
        }

        var $cupomAplicadoRow = $('tr.bg-dark.possui-cupom');
        if ($cupomAplicadoRow.length) {
            $('<div class="bg-dark cart-coupon aplicado"></div>')
                .append($cupomAplicadoRow.find('td').children())
                .appendTo($couponTarget);
            $cupomAplicadoRow.remove();
        }
    }

    // =====================================================
    // VALOR DO CUPOM NO SUBTOTAL
    // =====================================================
    var $cupomValor = $('.cupom-valor');
    if ($cupomValor.length && $subtotalTarget.length) {
        if ($cupomValor.is(':visible') || $.trim($cupomValor.text()) !== '') {
            $cupomValor.appendTo($subtotalTarget);
        }
    }

    $('tr[data-produto-id]').addClass('cart-product');
    $('.pagina-carrinho:not(.carrinho-checkout) .tabela-carrinho').prepend(`<h3>Meu carrinho </h3>`);

    // =====================================================
    // ADICIONA BOX SURPRESA
    // =====================================================

    var PRODUCT_ID = '398724436';
    var ADD_URL = './carrinho/produto/' + PRODUCT_ID + '/adicionar';

    // =====================================================
    // CONTEXTO: apenas página de carrinho (não checkout)
    // =====================================================
    var $container = $('.pagina-carrinho:not(.carrinho-checkout) .tabela-carrinho');
    if (!$container.length) return;

    // =====================================================
    // VERIFICA SE O PRODUTO JÁ ESTÁ NO CARRINHO
    // =====================================================
    var produtoNoCarrinho = $('tr[data-produto-id="' + PRODUCT_ID + '"]').length > 0;

    // Se já estiver no carrinho, NÃO mostra o box
    if (produtoNoCarrinho) return;

    // =====================================================
    // INSERE A SURPRISE BOX
    // =====================================================
    if (!$container.find('.surprise-box').length) {
        $container.append(`
        <div class="surprise-box">
          <div class="box-image">
            <img src="https://cdn.awsli.com.br/2775/2775575/arquivos/box-cart.png" alt="Caixa surpresa para PC">
          </div>
          <div class="box-text">
            <span>Ganhe <strong>1</strong> jogo surpresa para PC!</span>
            <img src="https://cdn.awsli.com.br/2775/2775575/arquivos/steam.png" alt="Steam">
          </div>
          <div class="append-price">
              <div class="box-price">
                R$ 19,90
              </div>
              <div class="box-button-add">
                <img src="https://cdn.awsli.com.br/2775/2775575/arquivos/add_shopping_cart.svg" alt="Adicionar ao carrinho">
              </div>
          </div>
        </div>
      `);
    }

    // =====================================================
    // CLICK → ADICIONA O PRODUTO PELO ID
    // =====================================================
    $(document).on('click', '.surprise-box .box-button-add', function (e) {
        e.preventDefault();
        window.location.href = ADD_URL;
    });

    if ($('.embalagem').length && $('.surprise-box').length) {
        $('.surprise-box').before($('.embalagem'));
    }

});

// =====================================================
// TOGGLE DO CUPOM (FORA DO READY)
// =====================================================
$(document).on('click', '.resume-toggle-coupon', function (e) {
    e.preventDefault();
    $('.cart-resume-coupon').toggleClass('open');
});
