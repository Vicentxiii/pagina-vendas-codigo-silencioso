// ===== CONFIGURAÇÕES EDITÁVEIS =====
// Link de compra (Hotmart). Usado em todos os botões com data-cta.
// Link direto: o antigo tinyurl.com/codigo-silecioso redirecionava para este endereço.
var LINK_HOTMART = "https://pay.hotmart.com/F104369663N?checkoutMode=10&bid=1795125131103";
document.querySelectorAll('[data-cta]').forEach(function(a){ a.href = LINK_HOTMART; a.rel = 'noopener'; });

// CTA fixo no mobile: aparece depois do hero e some quando a oferta entra em tela.
var sticky = document.querySelector('.sticky-cta');
var offer = document.getElementById('oferta');
function atualizarSticky(){
 if (!sticky) return;
 var passouHero = (window.scrollY || window.pageYOffset) > 600;
 var naOferta = false;
 if (offer) {
  var r = offer.getBoundingClientRect();
  naOferta = r.top < window.innerHeight * 0.6 && r.bottom > 0;
 }
 if (passouHero && !naOferta) sticky.classList.add('is-visible');
 else sticky.classList.remove('is-visible');
}
window.addEventListener('scroll', atualizarSticky, {passive:true});
window.addEventListener('resize', atualizarSticky);
atualizarSticky();
