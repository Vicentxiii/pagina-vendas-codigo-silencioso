// ===== CONFIGURAÇÕES EDITÁVEIS =====
// Link de compra (Hotmart). Usado em todos os botões com data-cta.
// Link direto: o antigo tinyurl.com/codigo-silecioso redirecionava para este endereço.
var LINK_HOTMART = "https://pay.hotmart.com/F104369663N?checkoutMode=10&bid=1795125131103";
document.querySelectorAll('[data-cta]').forEach(function(a){ a.href = LINK_HOTMART; a.rel = 'noopener'; });
