/* ─────────────────────────────────────────
   main.js — Shekhar Narayanan Portfolio
   ───────────────────────────────────────── */

/* ─────────────────────────────────────────
   THEME TOGGLE
   ───────────────────────────────────────── */
(function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const body = document.body;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.add('light');
    if (btn) btn.textContent = '☾ Dark';
  } else {
    if (btn) btn.textContent = '☀ Light';
  }
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    btn.textContent = isLight ? '☾ Dark' : '☀ Light';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
})();


/* ─────────────────────────────────────────
   NEURAL NET BACKGROUND
   Uses window dimensions (not offsetWidth)
   so it works regardless of canvas CSS sizing
   ───────────────────────────────────────── */
(function initNeuralBg() {
  const canvas = document.getElementById('neural-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, graph, t = 0;

  const GREEN_RGB = [122, 255, 138];
  const BG_DARK   = '#060a0d';
  const BG_LIGHT  = '#f0f4f1';
  const GN_LIGHT  = [26, 122, 46];

  function rgb(isLight) { return isLight ? GN_LIGHT : GREEN_RGB; }

  function buildGraph(w, h) {
    const count = Math.max(40, Math.floor((w * h) / 5000));
    const pts = Array.from({ length: count }, () => ({
      x:      Math.random() * w,
      y:      Math.random() * h,
      r:      1.5 + Math.random() * 2,
      phase:  Math.random() * Math.PI * 2,
      speed:  0.35 + Math.random() * 0.55,
      active: 0,
    }));
    const edges = [];
    const maxDist = w * 0.30;
    for (let i = 0; i < pts.length; i++) {
      pts
        .map((p, j) => ({ j, d: Math.hypot(p.x - pts[i].x, p.y - pts[i].y) }))
        .filter(o => o.j !== i && o.d < maxDist)
        .sort((a, b) => a.d - b.d)
        .slice(0, 3 + Math.floor(Math.random() * 3))
        .forEach(o => edges.push([i, o.j]));
    }
    return { pts, edges };
  }

  function resize() {
    // Use window dimensions — reliable even when canvas is position:absolute
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    graph = buildGraph(W, H);
  }
  resize();
  window.addEventListener('resize', () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(resize, 100);
  });

  function draw() {
    const isLight = document.body.classList.contains('light');
    const C = rgb(isLight);

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = isLight ? BG_LIGHT : BG_DARK;
    ctx.fillRect(0, 0, W, H);

    t += 0.008;

    /* edges */
    graph.edges.forEach(([i, j]) => {
      const a = graph.pts[i], b = graph.pts[j];
      const bright = (a.active + b.active) * 0.5;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(${C.join(',')},${0.55 + bright * 0.45})`;
      ctx.lineWidth   = 1.5 + bright * 2.5;
      ctx.stroke();
    });

    /* nodes */
    graph.pts.forEach(node => {
      const pulse  = (Math.sin(t * node.speed + node.phase) + 1) * 0.5;
      node.active  = pulse;
      const radius = node.r + pulse * 4;

      if (pulse > 0.2) {
        const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 8);
        grd.addColorStop(0, `rgba(${C.join(',')},${0.55 * pulse})`);
        grd.addColorStop(1, `rgba(${C.join(',')},0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 8, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${C.join(',')},${0.8 + pulse * 0.2})`;
      ctx.fill();
    });

    /* vignette */
    const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H * 0.9);
    const vBg = isLight ? '240,244,241' : '6,10,13';
    vig.addColorStop(0, `rgba(${vBg},0)`);
    vig.addColorStop(1, `rgba(${vBg},0.18)`);
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);

    requestAnimationFrame(draw);
  }
  draw();
})();


/* ─────────────────────────────────────────
   SCROLL REVEAL
   ───────────────────────────────────────── */
(function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


/* ─────────────────────────────────────────
   ML TICKER — time-based, GPU-accelerated
   ───────────────────────────────────────── */
(function initTicker() {
  const ticker = document.querySelector('.ml-ticker');
  if (!ticker) return;

  ticker.style.willChange = 'transform';

  let pos   = 0;
  let halfW = 0;
  let last  = null;
  const PX_PER_SEC = 80;

  // Measure after first paint so layout is settled
  requestAnimationFrame(() => {
    halfW = ticker.scrollWidth / 2;
    requestAnimationFrame(step);
  });

  function step(ts) {
    if (last === null) last = ts;
    const dt = Math.min((ts - last) / 1000, 0.05); // cap delta to avoid jumps
    last = ts;
    pos -= PX_PER_SEC * dt;
    if (halfW > 0 && Math.abs(pos) >= halfW) pos = 0;
    ticker.style.transform = `translate3d(${Math.round(pos)}px,0,0)`;
    requestAnimationFrame(step);
  }
})();