// ===== CONFIGURAÇÕES EDITÁVEIS =====
// Link de compra (Hotmart). Usado em todos os botões com data-cta.
var LINK_HOTMART = "https://tinyurl.com/codigo-silecioso";
document.querySelectorAll('[data-cta]').forEach(function(a){ a.href = LINK_HOTMART; a.rel = 'noopener'; });
