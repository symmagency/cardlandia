$(document).ready(function(){

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

if (isDesktop ){
runDeferred(function(){

$('#cabecalho').after('<div id="menuCat"><div class="conteiner"><div class="row-fluid"></div></div></div>');
$('#menuCat .row-fluid').append($('#cabecalho .menu.superior'));

if (!$('.pagina-inicial .mini-banner #miniBannerFullw').length) {
$('.pagina-inicial .mini-banner').prepend('<div id="miniBannerFullw" class="conteiner"></div>');
$('.pagina-inicial .mini-banner .modulo.span4').appendTo($('#miniBannerFullw'));
}


$('.pagina-inicial #listagemProdutos > ul:nth-child(2)').after($('.banner.tarja'));
$('.pagina-busca .listagem > .titulo').appendTo('.pagina-busca .ordenar-listagem.topo');


$('.conteudo-topo').before(
'<div class="cat">'+
'<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
'</div>'
);

$('.cat').on('click', function(){
$('#menuCat').toggleClass('active');
$('.category').toggleClass('active');
});

$('.conteudo-topo .inferior .span8.busca-mobile').after(
'<div class="login-top">'+
'<a href="../conta/criar?next=conta_index&email=_"><span class="login-txt"><strong>Cadastre-se</strong></span></a>'+
'</div>'
);


$('.conteudo-topo .inferior .span8.busca-mobile').after(
'<div class="atd-top">'+
'<a href="../conta/login"><span class="atd-txt"><strong>Login</strong></span></a>'+
'</div>'
);

$('.carrinho>a>i').addClass('cor-principal');
$('.atd-top ul.drop-atd').prepend($('.barra-inicial .canais-contato.span9>ul>li'));


// $('.pagina-produto .produto > .row-fluid .info-principal-produto').prependTo('.pagina-produto .produto');
// $('.pagina-produto .produto > .row-fluid .span6 > .principal').prepend($('.pagina-produto .produto > .info-principal-produto .codigo-produto'));
$('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.pagina-produto #buy-together-position1'));
$('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.abas-custom'));
$('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.pagina-produto #buy-together-position2'));
$('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.konfidency-reviews-details'));
$('.pagina-produto #corpo .produto > .row-fluid:first-child > .span6:first-child').append($('.listagem.aproveite-tambem'));

});
}

if( $('.drop-atd .tel-whatsapp>span').length ){
$('.drop-atd .tel-whatsapp>span').each(function () {
var $this = $(this).text();
var $result = $(this).text().replace("Whatsapp:", "");
$(this).text($result);
});
}

if( $('.drop-atd li:nth-child(2)>span').length ){
$('.drop-atd li:nth-child(2)>span').each(function () {
var $this = $(this).text();
var $result = $(this).text().replace("Telefone:", "");
$(this).text($result);
});
}

if( $('.drop-atd .tel-skype>a').length ){
$('.drop-atd .tel-skype>a').each(function () {
var $this = $(this).text();
var $result = $(this).text().replace("Skype:", "");
$(this).text($result);
});
}

if($('.marcas').length) {

$('#rodape').before(
'<div id="marcas">'+
'<div class="conteiner">'+
'<div class="row-fluid">'+
'<div class="titulo-categoria borda-principal cor-principal">'+
'<strong>Navegue por marcas</strong>'+
'</div>'+
'</div>'+
'</div>'+
'</div>');

$('#marcas .row-fluid').append($('.marcas'));

} else {

}

$('body').append('<a href="#" onclick="topFunction()" class="back-top borda-principal"><i class="fa fa-chevron-up"></i><span>subir</span></a>');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
$(".back-top").addClass('show');
} else {
$(".back-top").removeClass('show');
}
}

function topFunction() {
$('body').animate({scrollTop: '0'}, 200);
}

$('.carrinho>a span').html('Carrinho');

//$('.pagina-categoria .secao-banners').before($('.breadcrumbs'));
//$('.pagina-categoria .breadcrumbs').append($('.conteudo h1'));

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
if(firstname.length > 10 ) {
firstname = firstname.substring(0, 10) + ' ...';
}
document.querySelector('.login-top .btn-group .dropdown-toggle').textContent = `Olá, ${firstname}`;
$('.login-top ul.dropdown-menu').css("left", "-67px");
}

if ($('.conteudo-topo .superior .span8 .btn-group:first-child').is(':visible')) {
$('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));


}

if ($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child').is(':visible')) {
//  $('.login-top .login-txt').html('<i class="fa fa-user cor-principal"></i>Olá!');


}

if ($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child').is(':visible')) {
$('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));
}
//Header fixo
$(window).scroll(function(){
if ($(window).scrollTop() > 150){
$('#cabecalho').addClass('scroll');
$('#menuCat').addClass('scroll');
} else {
$('#cabecalho').removeClass('scroll');
$('#menuCat').removeClass('scroll');
}
});



$('.banner .newsletter .titulo').addClass('cor-principal').removeClass('cor-secundaria');
$('#rodape .span12.visible-phone > ul > li').clone().appendTo('#rodape .redes-sociais');

//inputs login
$('.cadastro-logar .form-horizontal .controls #id_email').attr("placeholder", "E-mail");
$('.cadastro-logar .form-horizontal .controls #id_senha').attr("placeholder", "Senha");
$('.cadastro-logar>.span6:nth-child(2) #id_email').attr("placeholder", "Digite o email que deseja cadastrar:");
//$('.produto .principal .codigo-produto').appendTo('.produto .nome-produto');
//$('.produto .info-principal-produto .nome-produto').append($('.produto-compartilhar .lista-favoritos'));

//$('.parcelas-produto .accordion .accordion-group:first-child .accordion-body').removeClass('in');
$('.produto .acoes-produto .desconto-a-vista').before('<span class="bandeira_promo_principal">-10% OFF NO PIX</span>');
$('.pagina-produto .produto .span6 > .principal').append('<span class="aviso_produto">* Todos os produtos do nosso site são códigos 100% originais, enviados por e-mail.</span>');

$('#rodape > div:last-child .row-fluid > div:last-child a img').attr('src','https://cdn.awsli.com.br/1041/1041512/arquivos/loja-integrada.svg');
$('#rodape .span4.selos > ul > li:first-child img').attr('src','https://cdn.awsli.com.br/1041/1041512/arquivos/selo-protegido.png');
$('#rodape > div:last-child .row-fluid > div:last-child a').before('<a href="https://wa.me/551152863976" class="symm" target="_blank"><img src="https://cdn.awsli.com.br/1041/1041512/arquivos/desenvolvido-symm.svg" alt="Symm.agency" width="120px" height="35px"></a>');
$('#rodape > div:last-child .row-fluid > div:first-child').removeClass('span9 span6 atendimento').addClass('assinatura').attr('style', '');
$('#rodape > div:last-child .row-fluid > div:last-child').attr('style', '').addClass('assinatura-rodape');


if( $('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').length ){
$('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').each(function () {
var $this = $(this).text();
var $result = $(this).text().replace("% Desconto", "");
$(this).text($result);
});
}

if (isMobile ){
runDeferred(function(){

$('#cabecalho .conteiner .logo').before(
'<div class="cat cor-principal">'+
'<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
'</div>'
);

$('.vitrine-3323786').before($('.banner.tarja'));


$('#cabecalho .menu.superior .nivel-um').prepend(
'<li class="cab-nav">'+
'<a class="close-nav-full"></a>'+
'<div class="close-nav">'+
'<span class="category cor-principal"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
'</div>'+
'<ul class="cab-nav-menu"></ul>'+
'<div class="acc-nav">'+
'</div>'+
'</li>'
);
if ($('.btn-group').length){
$('.menu.superior .nivel-um .cab-nav .cab-nav-menu').prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
}
if ($('#cabecalho .atalhos-mobile .icon-signout').is(':visible')) {
//$('#cabecalho .atalhos-mobile .icon-signout').appendTo($('#cabecalho .acc-nav'));
}


$('.menu.superior .nivel-um .cab-nav .acc-nav').append($('#cabecalho a.icon-user'));
$('#cabecalho .cab-nav a').addClass('cor-principal');

$('.cat').click(
function() {
$('.menu.superior .nivel-um').toggleClass('active');
}
);

$('#cabecalho .close-nav').click(
function() {
$('.menu.superior .nivel-um').toggleClass('active');
}
);

$('.menu.superior .nivel-um .cab-nav .close-nav-full').click(
function() {
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


$('.busca_topo').click(function(){
$('.conteudo-topo').toggleClass("active");
});

$('.conteudo-topo').before($('.menu.superior'));
});
}

runDeferred(function(){
$('.ordenar-listagem.topo').after($('.banner.vitrine'));

setTimeout(function(){
let isLogged = ($('.btn-group .menu-user-name').text() !== "")? true : false;

if(isLogged == true){
$('.login-conta a').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
$('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));
$('.login-top .login-txt').html('Olá!');
$('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));


}


if(isLogged == true){
var nomeUsuario = $('span.menu-user-name').text();
$('.menu.superior .nivel-um').prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
$('.menu.superior .nivel-um').prepend('<li class="logado"><a href="/conta/index"><i class="fa-solid fa-user"></i><span>Olá, ' + nomeUsuario + '</span></a></li>');

$('li.signin-menu-superior, li.signup-menu-superior').css('display','none');

$('.login-txt').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
//Recorta o primeiro nome do usuário logado no menu desktop
let usenameText = $('.login-top .btn-group .dropdown-toggle').text();
let index = $('.login-top .btn-group .dropdown-toggle').text().indexOf(',');
let firstname = usenameText.substring(index + 2).split(' ').slice(0, -1)[0];
if(firstname.length > 10 ) {
firstname = firstname.substring(0, 10) + ' ...';
}
document.querySelector('.login-top .btn-group .dropdown-toggle').textContent = `Olá, ${firstname}`;
$('.login-top ul.dropdown-menu').css("left", "-67px");

}
},500)

$('.titulo_categoria').append(`

<button class="button_vermais" >Ver mais</button>

`);

$('.button_vermais').click(function(){
$('.titulo_categoria p').toggleClass('open');
$('.button_vermais').toggleClass('ver_menos');
});
});

//só desktop
if (isDesktop ){
runDeferred(function(){

$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.pagina-produto #buy-together-position1'));
$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.abas-custom'));
$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.pagina-produto #buy-together-position2'));
$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.listagem.aproveite-tambem'));

});
}

if (!$('.produtos_hz').length && $('.pagina-inicial #listagemProdutos').length) {
runDeferred(function(){
// Defina os dados dos produtos em uma variável JavaScript
var produtosPopulares = [
    {
        url: "https://www.thkeys.com.br/playstation-plus-essential-1-mes-assinatura-brasil-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_psn.png",
        posicao: "1º",
        titulo: "Playstation Plus Essential 1 Mês Assinatura Brasil - Código Digital",
        preco: "R$ 59,80 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/xbox-game-pass-ultimate-brasil-1-mes-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/game-pass.png",
        posicao: "2º",
        titulo: "Xbox Game Pass Ultimate Brasil 1 Mês - Código Digital",
        preco: "R$ 57,90 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/playstation-store-r35-reais-brasil-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_psn-store.png",
        posicao: "3º",
        titulo: "Playstation Store R$35 Reais - Código Digital",
        preco: "R$ 34,82 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/elden-ring-nightreign-pc-codigo-digital-",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/elden.png",
        posicao: "4º",
        titulo: "ELDEN RING NIGHTREIGN - PC Código Digital",
        preco: "R$ 174,90 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/cartao-da-app-store-r20-reais-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_apple.png",
        posicao: "5º",
        titulo: "Cartão da App Store R$20 Reais - Código Digital",
        preco: "R$ 24,00 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/grand-theft-auto-v-premium-online-edition-rockstar-pc-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/gta-5.png",
        posicao: "6º",
        titulo: "Grand Theft Auto V: Premium Online Edition GTA V (Rockstar) - PC Código Digital",
        preco: "R$ 69,90 no pix",
        desconto: "-40%"
    },
    {
        url: "https://www.thkeys.com.br/xbox-live-r35-reais-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/xbox-35.png",
        posicao: "7º",
        titulo: "Cartão Presente Xbox 35 Reais Brasil - Código Digital",
        preco: "R$ 34,69 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/playstation-store-r100-reais-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_psn-store.png",
        posicao: "8º",
        titulo: "Playstation Store R$100 Reais - Código Digital",
        preco: "R$ 98,51 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/playstation-store-r300-reais-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_psn-store.png",
        posicao: "9º",
        titulo: "Playstation Store R$300 Reais - Código Digital",
        preco: "R$ 284,21 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/mortal-kombat-11-standard-edition-pc-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/mk11.png",
        posicao: "10º",
        titulo: "Mortal Kombat 11 - PC Codigo Digital",
        preco: "R$ 24,90 no pix",
        desconto: "-10%"
    }
];

// Construa o HTML com jQuery usando os dados das variáveis
var $produtosHz = $(`
    <div class="produtos_hz">
        <div class="conteiner">
            <div class="row-fluid">
                <a href="#" class="titulo-categoria borda-principal cor-principal">
                    <strong>Mais populares</strong>
                </a>
                <ul class="produtos_list"></ul>
            </div>
        </div>
    </div>
`);

$.each(produtosPopulares, function(index, produto) {
    var $li = $(`
        <li class="produto_item">
            <a href="${produto.url}" target="_blank"></a>
            <img src="${produto.img}" alt="">
            <div class="append_title">
                <div class="position">
                    <span>${produto.posicao}</span>
                    <img src="" alt="">
                </div>
                <span>${produto.titulo}</span>
            </div>
            <div class="produto_preco">
                <strong>${produto.preco}</strong>
                <span>${produto.desconto}</span>
            </div>
        </li>
    `);
    $produtosHz.find('.produtos_list').append($li);
});

// Insira a block de produtos após o elemento #listagemProdutos
$('.pagina-inicial #listagemProdutos').after($produtosHz);
});
}

runDeferred(function(){
if (!$('#explore').length && $('.pagina-inicial .secao-banners').length) {
$('.pagina-inicial .secao-banners').after(`

    <div id="explore">
    
    <div class="conteiner">
    <h2 class="titulo_explore">
    Explore por plataforma
    </h2>
    
    <div class="row-fluid">
    <div class="append_items">    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/gift-xbox">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-xbox.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/app-store-19852754">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore_itunes.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/gift-playstation">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-playstation.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/pc-">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-steam.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/buscar?q=FC+POINTS">
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/explore_fc.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/buscar?q=fortnite">
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/explore_fortinite.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/garena-free-fire-diamantes">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore_freefire.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/buscar?q=playstation+plus+brasil">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore_plus.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/nintendo">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-nintendo.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/roblox?sort=%2Bpreco">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-roblox.png" alt="">
    </a>
    </li>        
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/google-play">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore_googleplay.png" alt="">
    </a>
    </li>
    
    </div>
    </div>
    </div>
    
    </div>
    
    `);
}
    
if (!$('.videoTrailer').length && $('#listagemProdutos .vitrine-3332079').length) {
    $('#listagemProdutos .vitrine-3332079').before(`
    
    <div class="videoTrailer">
    <div class="banner-title">
      <strong>Ofertas em destaque</strong>
      <span>Jogos selecionados pela THKeys.</span>
    </div>
    <div class="append-dbanners">
    <div class="trailer_banner">
    <a href="https://www.thkeys.com.br/pc-?sort=%2Bpreco">
      <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/oferta-qn.png" alt="">
    </a>
    </div>
    <div class="jogo_banner">
    <a href="https://www.thkeys.com.br/pc-">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/jogo-brinde-pc.png" alt="">
    <div class="append_preco_btn">
    </div>
    </a>
    </div>
    </div>
    </div>
    `);
}
    
    $('#rodape .institucional').after($('.span4.selos'));
    $('.span4.selos ul > li:first-child').after(`
    <li> <img alt="Loja Oficial Mercado Livre" src="https://cdn.awsli.com.br/1041/1041512/arquivos/oficial-ml.png" width="135" height="43px" /> </li>
    <li> <img alt="Google Safe Browsing" src="https://cdn.awsli.com.br/1041/1041512/arquivos/google-s-b.png"/ width="127" height="38px"> </li>
    `);
    
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
    
    $('.mini-banner .modulo.span4:first-child').after(`
    <div id="porPreco">
    <div class="titulo_porpreco">
    <h2>Já sabe quanto vai gastar?</h2>
    <p>Encontre produtos por faixa de preço</p>
    </div>
    
    <div class="precos">
    <div class="preco_linha">
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/10">R$ 10</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/20">R$ 20</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/30">R$ 30</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/50">R$ 50</a>
    </li>
    </div>
    
    <div class="preco_linha">
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/100">R$ 100</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/150">R$ 150</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/200">R$ 200</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/250">R$ 250</a>
    </li>
    </div>
    </div>
    </div>
    `);
    
    if ($('#miniBannerFullw').length && $('#listagemProdutos > ul:nth-child(5)').length) {
    $('#listagemProdutos > ul:nth-child(5)').after($('#miniBannerFullw'));
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
        <a href="https://www.thkeys.com.br/acao-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-acao.svg" alt="">
        <span>Ação</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/aventura-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-aventura.svg" alt="">
        <span>Aventura</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/coop-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-coop.svg" alt="">
        <span>Co-op</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/corrida-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-corrida.svg" alt="">
        <span>Corrida</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/esporte-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-esporte.svg" alt="">
        <span>Esporte</span>
        </a>
        </li>
        
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/estrategia-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-estrategia.svg" alt="">
        <span>Estratégia</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/fps-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-fps.svg" alt="">
        <span>FPS</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/hack-slash-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-slash.svg" alt="">
        <span>Hack & Slash</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/indie-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-indie.svg" alt="">
        <span>Indie</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/luta-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-luta.svg" alt="">
        <span>Luta</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/mmo-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-mmo.svg" alt="">
        <span>MMO</span>
        </a>
        </li>
        
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/rpg-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-rpg.svg" alt="">
        <span>RPG</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/simulacao-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-simulacao.svg" alt="">
        <span>Simulação</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/soulslike-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-soulslike.svg" alt="">
        <span>Soulslike</span>
        </a>
        </li>
        
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/terror-pc">
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

// Variáveis para personalizar as informações da tarja de benefícios
var benefit1Icon = "https://cdn.awsli.com.br/1041/1041512/arquivos/tarja-icon-mailcheck.svg";
var benefit1IconAlt = "Ícone de e-mail";
var benefit1Title = "Receba por e-mail";
var benefit1Description = "Seu código vai direto para o seu email";

var benefit2Icon = "https://cdn.awsli.com.br/1041/1041512/arquivos/ra-tarja-2.png";
var benefit2IconAlt = "Reclame aqui";
var benefit2Title = "Reclame aqui";
var benefit2Description = "THKEYS Finalista do Prêmio RA2025";

var benefit3Icon = "https://cdn.awsli.com.br/1041/1041512/arquivos/secure-tarja.svg";
var benefit3IconAlt = "Ícone de avaliação";
var benefit3Title = "Segurança";
var benefit3Description = "Códigos Originais segurança garantida";

// Monta o HTML usando as variáveis acima
var htmlBenefits = `
  <div class="benefits-row">
    <div class="benefit-item">
      <img src="${benefit1Icon}" alt="${benefit1IconAlt}">
      <div>
        <span>${benefit1Title}</span>
        <p><strong>${benefit1Description}</strong></p>
      </div>
    </div>
    <div class="benefit-item">
      <img src="${benefit2Icon}" alt="${benefit2IconAlt}">
      <div>
        <span>${benefit2Title}</span>
        <p><strong>${benefit2Description}</strong></p>
      </div>
    </div>
    <div class="benefit-item">
      <img src="${benefit3Icon}" alt="${benefit3IconAlt}">
      <div>
        <span>${benefit3Title}</span>
        <p><strong>${benefit3Description}</strong></p>
      </div>
    </div>
  </div>
`;

// Insere o HTML no local desejado (substitua o seletor conforme necessário)
$('.pagina-inicial .secao-banners').after(htmlBenefits);

//Remove GetBacky do carrinho 
// Retrying until successful
(function removeGetBackWidget() {
  var $el = $('.pagina-carrinho div#getback-widget-host');
  if ($el.length) {
    $el.remove();
  } else {
    setTimeout(removeGetBackWidget, 300);
  }
})();


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
    var ADD_URL = 'https://www.thkeys.com.br/carrinho/produto/' + PRODUCT_ID + '/adicionar';
  
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
  