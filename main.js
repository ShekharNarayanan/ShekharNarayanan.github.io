/* ─────────────────────────────────────────
   main.js — Shekhar Narayanan Portfolio
   ───────────────────────────────────────── */




/* ─────────────────────────────────────────
   NEURAL NET BACKGROUND — DISABLED

   Uses window dimensions (not offsetWidth)
   so it works regardless of canvas CSS sizing
   ───────────────────────────────────────── */
(function initNeuralBg() {
  const canvas = document.getElementById('neural-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, graph, t = 0;

  const GREEN_RGB = [34, 99, 220];
  const BG_DARK   = '#060a0d';

  function rgb() { return GREEN_RGB; }

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
    const C = rgb();

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = BG_DARK;
    ctx.fillRect(0, 0, W, H);

    t += 0.008;

    /* edges */
    graph.edges.forEach(([i, j]) => {
      const a = graph.pts[i], b = graph.pts[j];
      const bright = (a.active + b.active) * 0.5;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(${C.join(',')},${0.33 + bright * 0.27})`;
      ctx.lineWidth   = 1.5 + bright * 2.5;
      ctx.stroke();
    });

    /* nodes */
    graph.pts.forEach(node => {
      const pulse  = (Math.sin(t * node.speed + node.phase) + 1) * 0.5;
      node.active  = pulse;
      const radius = node.r + pulse * 4;

      if (pulse > 0.2) {
        const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 5);
        grd.addColorStop(0, `rgba(${C.join(',')},${0.33 * pulse})`);
        grd.addColorStop(1, `rgba(${C.join(',')},0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${C.join(',')},${0.48 + pulse * 0.12})`;
      ctx.fill();
    });

    /* vignette */
    const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H * 0.9);
    const vBg = '6,10,13';
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

/* ─────────────────────────────────────────
   CONTENT INJECTION
   Reads CONTENT from content.js and injects
   into data-content / data-project-* hooks
   ───────────────────────────────────────── */
(function injectContent() {
  if (typeof CONTENT === 'undefined') {
    console.warn('content.js not loaded');
    return;
  }

  /* ── Simple text/html fields ── */
  document.querySelectorAll('[data-content]').forEach(el => {
    const key = el.dataset.content;            // e.g. "hero.label"
    const val = key.split('.').reduce((o, k) => o?.[k], CONTENT);
    if (val === undefined) return;

    if (key === 'hero.ticker') {
      // Build ticker spans — duplicated for seamless loop
      const items = [...val, ...val];
      el.innerHTML = items.map(t =>
        `<span>${t}</span><span class="sep">·</span>`
      ).join('');

    } else if (key === 'about.stats') {
      el.innerHTML = CONTENT.about.stats.map(s => `
        <div class="about-stat reveal">
          <div class="about-stat-num">${s.num}</div>
          <div class="about-stat-label">${s.label}</div>
        </div>`).join('');

    } else if (key === 'footer.left') {
      el.innerHTML = `
        <h3>${CONTENT.footer.heading}</h3>
        <p>${CONTENT.footer.tagline}</p>`;

    } else if (key === 'footer.right') {
      el.innerHTML = `
        <a class="footer-link" href="${CONTENT.nav.github}" target="_blank">GitHub ↗</a>
        <a class="footer-link" href="${CONTENT.nav.linkedin}" target="_blank">LinkedIn ↗</a>`;

    } else if (key === 'footer.bottom') {
      el.innerHTML = `
        <span>${CONTENT.footer.bottom}</span>
        <span>${CONTENT.footer.location}</span>`;

    } else if (key === 'pageTitle') {
      document.title = val;

    } else {
      el.innerHTML = val;
    }
  });

  /* ── Project panels ── */
  const projectMap = {};
  CONTENT.projects.forEach(p => { projectMap[p.id] = p; });

  // Status badges
  document.querySelectorAll('[data-project-status]').forEach(el => {
    const p = projectMap[el.dataset.projectStatus];
    if (!p) return;
    const cls = p.status.live ? 'status-badge live' : 'status-badge';
    el.innerHTML = `<div class="${cls}"><span class="status-dot"></span> ${p.status.text}</div>`;
  });

  // Titles
  document.querySelectorAll('[data-project-title]').forEach(el => {
    const p = projectMap[el.dataset.projectTitle];
    if (p) el.innerHTML = p.title;
  });

  // Descriptions
  document.querySelectorAll('[data-project-desc]').forEach(el => {
    const p = projectMap[el.dataset.projectDesc];
    if (p) el.innerHTML = p.desc;
  });

  // Tags
  document.querySelectorAll('[data-project-tags]').forEach(el => {
    const p = projectMap[el.dataset.projectTags];
    if (!p) return;
    el.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  });

  // Links
  document.querySelectorAll('[data-project-links]').forEach(el => {
    const p = projectMap[el.dataset.projectLinks];
    if (!p) return;
    el.innerHTML = p.links.map(l =>
      `<a class="project-link" href="${l.url}" target="_blank">${l.label}</a>`
    ).join('');
  });

})();

/* ─────────────────────────────────────────
   VISUAL INJECTION
   Reads VISUALS from visuals.js and injects
   SVG animations into data-project-viz hooks
   ───────────────────────────────────────── */
(function injectVisuals() {
  if (typeof VISUALS === 'undefined') {
    console.warn('visuals.js not loaded');
    return;
  }
  document.querySelectorAll('[data-project-viz]').forEach(el => {
    const id  = el.dataset.projectViz;
    const svg = VISUALS[id];
    if (svg) el.innerHTML = svg;
    else console.warn('No visual found for: ' + id);
  });
})();