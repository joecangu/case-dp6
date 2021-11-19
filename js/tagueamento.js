// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

function entreEmContato() {
    ga('send', 'event', {
      eventCategory: 'menu',
      eventAction: 'entre_em_contato',
      eventLabel: 'link_externo'
    });
}

function downloadPdf() {
    ga('send', 'event', {
      eventCategory: 'menu',
      eventAction: 'download_pdf',
      eventLabel: 'download_pdf'
    });
}

function lorem() {
    ga('send', 'event', {
      eventCategory: 'analise',
      eventAction: 'ver_mais',
      eventLabel: 'Lorem'
    });
}

function ipsum() {
    ga('send', 'event', {
      eventCategory: 'analise',
      eventAction: 'ver_mais',
      eventLabel: 'Ipsum'
    });
}

function dolor() {
    ga('send', 'event', {
      eventCategory: 'analise',
      eventAction: 'ver_mais',
      eventLabel: 'Dolor'
    });
}

function nomePreenchido() {
    ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'nome',
      eventLabel: 'preencheu'
    });
}

function emailPreenchido() {
    ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'email',
      eventLabel: 'preencheu'
    });
}

function telefonePreenchido() {
    ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'telefone',
      eventLabel: 'preencheu'
    });
}

function aceitoPreenchido() {
    ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'aceito',
      eventLabel: 'preencheu'
    });
}

function enviado() {
    ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'enviado',
      eventLabel: 'enviado'
    });
}



















