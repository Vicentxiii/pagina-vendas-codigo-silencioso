/* ============================================================
   O CÓDIGO SILENCIOSO — motor de interações
   JavaScript puro, sem dependências. Respeita prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  root.classList.add('js');

  // Link de compra (Hotmart). Usado em todos os botões com data-cta.
  // Link direto: o antigo tinyurl.com/codigo-silecioso redirecionava para este endereço.
  var LINK_HOTMART = 'https://pay.hotmart.com/F104369663N?checkoutMode=10&bid=1795125131103';
  document.querySelectorAll('[data-cta]').forEach(function (a) {
    a.href = LINK_HOTMART;
    a.rel = 'noopener';
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var mobileQuery = window.matchMedia('(max-width: 640px)');

  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function lint(el, cls, on) { if (el) el.classList.toggle(cls, !!on); }

  /* ---------- entrada ---------- */
  function ready() { body.classList.add('is-ready'); }
  if (document.readyState === 'complete') ready();
  else window.addEventListener('load', ready, { once: true });
  setTimeout(ready, 600); // garante a entrada mesmo se um recurso externo demorar

  /* ---------- navegação ---------- */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function closeMenu() {
    if (!navToggle) return;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menu');
    body.classList.remove('menu-open');
  }
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      navToggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
      body.classList.toggle('menu-open', !open);
    });
  }
  if (navLinks) {
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) closeMenu();
  });

  /* ---------- reveals ---------- */
  var revealItems = [].slice.call(document.querySelectorAll('[data-reveal]'));
  var revealObserver = null;
  if ('IntersectionObserver' in window && !reduceMotion) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting && entry.boundingClientRect.bottom > 0) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    revealItems.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Segurança: elementos que ficaram acima da viewport (roteiro/âncora) também aparecem.
  function revealPassed() {
    for (var i = revealItems.length - 1; i >= 0; i--) {
      var el = revealItems[i];
      if (el.classList.contains('is-visible')) { revealItems.splice(i, 1); continue; }
      if (el.getBoundingClientRect().bottom < window.innerHeight * 0.94) {
        el.classList.add('is-visible');
        if (revealObserver) revealObserver.unobserve(el);
        revealItems.splice(i, 1);
      }
    }
  }

  /* ---------- seqüência de reconhecimento ---------- */
  var stage = document.getElementById('recognitionStage');
  var statements = [].slice.call(document.querySelectorAll('.recognition__statement'));
  var countEl = document.getElementById('recognitionCount');
  var railEl = document.getElementById('recognitionRail');
  var activeIndex = -1;

  function updateRecognition() {
    if (!stage || !statements.length) return;
    if (mobileQuery.matches || reduceMotion) {
      if (activeIndex !== -1) {
        statements.forEach(function (s) { s.classList.remove('is-active'); });
        activeIndex = -1;
      }
      return;
    }
    var rect = stage.getBoundingClientRect();
    var travel = stage.offsetHeight - window.innerHeight;
    var p = travel > 0 ? clamp(-rect.top / travel, 0, 1) : 0;
    var idx = clamp(Math.floor(p * statements.length), 0, statements.length - 1);
    if (idx !== activeIndex) {
      activeIndex = idx;
      statements.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
      if (countEl) countEl.textContent = ('0' + (idx + 1)).slice(-2);
    }
    if (railEl) railEl.style.width = (p * 100).toFixed(2) + '%';
  }

  /* ---------- progresso, nav e CTA fixo ---------- */
  var progressBar = document.getElementById('progressBar');
  var sticky = document.querySelector('.sticky-cta');
  var offer = document.getElementById('oferta');
  var navLinksList = navLinks ? [].slice.call(navLinks.querySelectorAll('a[href^="#"]')) : [];
  var sections = [].slice.call(document.querySelectorAll('section[id], header[id]'));

  function updateScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = (max > 0 ? (y / max) * 100 : 0).toFixed(2) + '%';
    lint(nav, 'is-stuck', y > 40);
    lint(body, 'data-scrolling', y > 10);

    if (sticky) {
      var passouHero = y > window.innerHeight * 0.9;
      var naOferta = false;
      if (offer) {
        var r = offer.getBoundingClientRect();
        naOferta = r.top < window.innerHeight * 0.6 && r.bottom > 0;
      }
      lint(sticky, 'is-visible', passouHero && !naOferta);
    }

    navLinksList.forEach(function (a) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      var t = target.getBoundingClientRect();
      lint(a, 'is-current', t.top < window.innerHeight * 0.45 && t.bottom > window.innerHeight * 0.45);
    });

    revealPassed();

    // parallax vertical das camadas decorativas
    parallaxLayers.forEach(function (item) {
      item.scrollY = y * item.depth * 0.12;
    });
    updateRecognition();
    requestFrame();
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateScroll();
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ---------- parallax de mouse / scroll ---------- */
  var parallaxLayers = [].slice.call(document.querySelectorAll('[data-depth]')).map(function (el) {
    return { el: el, depth: parseFloat(el.getAttribute('data-depth')) || 0, mx: 0, my: 0, scrollY: 0, cx: 0, cy: 0 };
  });

  var pointer = { x: 0, y: 0, nx: 0, ny: 0 };
  if (finePointer && !reduceMotion) {
    window.addEventListener('mousemove', function (e) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.nx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ny = (e.clientY / window.innerHeight - 0.5) * 2;
      parallaxLayers.forEach(function (item) {
        item.mx = pointer.nx * item.depth * 34;
        item.my = pointer.ny * item.depth * 24;
      });
      requestFrame();
    }, { passive: true });
  }

  function renderFrame() {
    parallaxLayers.forEach(function (item) {
      item.cx += (item.mx - item.cx) * 0.075;
      item.cy += (item.my - item.cy) * 0.075;
      item.el.style.transform = 'translate3d(' + item.cx.toFixed(2) + 'px,' + (item.cy + item.scrollY).toFixed(2) + 'px,0)';
    });
    if (cursorActive) renderCursor();
    framePending = false;
  }
  var framePending = false;
  function requestFrame() {
    if (framePending || reduceMotion) return;
    framePending = true;
    window.requestAnimationFrame(renderFrame);
  }

  /* ---------- livro com inclinação 3D ---------- */
  var tiltStage = document.querySelector('[data-tilt]');
  var book = tiltStage ? tiltStage.querySelector('.showcase__book') : null;
  if (tiltStage && book && finePointer && !reduceMotion) {
    tiltStage.addEventListener('mousemove', function (e) {
      var r = tiltStage.getBoundingClientRect();
      var dx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      var dy = ((e.clientY - r.top) / r.height - 0.5) * 2;
      book.style.transform = 'rotateY(' + (-17 + dx * 11).toFixed(2) + 'deg) rotateX(' + (4 - dy * 8).toFixed(2) + 'deg)';
    }, { passive: true });
    tiltStage.addEventListener('mouseleave', function () {
      book.style.transform = '';
    });
  }

  /* ---------- botões magnéticos ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var dx = (e.clientX - r.left - r.width / 2) * 0.22;
        var dy = (e.clientY - r.top - r.height / 2) * 0.3;
        el.style.transform = 'translate3d(' + dx.toFixed(2) + 'px,' + dy.toFixed(2) + 'px,0)';
      }, { passive: true });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  /* ---------- cursor customizado ---------- */
  var cursorActive = finePointer && !reduceMotion;
  var cursor = document.querySelector('.cursor');
  var cursorDot = document.getElementById('cursorDot');
  var cursorRing = document.getElementById('cursorRing');
  var ringX = -100, ringY = -100;
  function renderCursor() {
    if (!cursor) return;
    ringX += (pointer.x - ringX) * 0.16;
    ringY += (pointer.y - ringY) * 0.16;
    if (cursorRing) cursorRing.style.transform = 'translate3d(' + ringX.toFixed(2) + 'px,' + ringY.toFixed(2) + 'px,0)';
    if (cursorDot) cursorDot.style.transform = 'translate3d(' + pointer.x + 'px,' + pointer.y + 'px,0)';
  }
  if (cursorActive && cursor) {
    body.classList.add('has-cursor');
    window.addEventListener('mousemove', function () {
      requestFrame();
      var t = document.elementFromPoint(pointer.x, pointer.y);
      lint(cursor, 'is-hover', !!(t && t.closest('a,button,summary,[data-cta]')));
    }, { passive: true });
    window.addEventListener('mousedown', function () { lint(cursor, 'is-down', true); });
    window.addEventListener('mouseup', function () { lint(cursor, 'is-down', false); });
    document.addEventListener('mouseleave', function () { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', function () { cursor.style.opacity = '1'; });
    requestFrame();
  }

  /* ---------- acordeão de capítulos ---------- */
  document.querySelectorAll('[data-accordion]').forEach(function (item) {
    var trigger = item.querySelector('.chapter__trigger');
    if (!trigger) return;
    trigger.addEventListener('click', function () {
      var open = item.classList.contains('is-open');
      document.querySelectorAll('[data-accordion]').forEach(function (other) {
        other.classList.remove('is-open');
        var t = other.querySelector('.chapter__trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- âncoras suaves com foco acessível ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      if (history.replaceState) history.replaceState(null, '', id);
      if (target.hasAttribute('tabindex')) target.focus({ preventScroll: true });
      closeMenu();
    });
  });

  /* ---------- initialize ---------- */
  updateScroll();
  updateRecognition();
})();
