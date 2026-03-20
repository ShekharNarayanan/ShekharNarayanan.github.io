/* ─────────────────────────────────────────
   main.js — Shekhar Narayanan Portfolio
   ───────────────────────────────────────── */





/* ─────────────────────────────────────────
   THEME INJECTION
   Reads THEME from theme.js and writes all
   tokens as CSS variables onto :root
   ───────────────────────────────────────── */
(function injectTheme() {
  if (typeof THEME === 'undefined') {
    console.warn('theme.js not loaded');
    return;
  }
  const root = document.documentElement;
  Object.entries(THEME).forEach(([k, v]) => root.style.setProperty(k, v));
})();

/* ─────────────────────────────────────────
   NEURAL NET BACKGROUND
   Drifting nodes, glowing edges, pulsing halos
   ───────────────────────────────────────── */
(function initNeuralBg() {
  const canvas = document.getElementById('neural-bg');
  if (!canvas) return;

  const root = document.documentElement;
  const gv   = function(k) { return parseFloat(getComputedStyle(root).getPropertyValue(k)); };

  const C         = [gv('--neural-r'), gv('--neural-g'), gv('--neural-b')];
  const MAX_SPEED = gv('--neural-speed')     || 0.28;
  const GLOW      = gv('--neural-glow')      || 0.22;
  const NODE_SIZE = gv('--neural-node-size') || 1.8;
  const VIGNETTE  = gv('--neural-vignette')  || 0.72;

  const ctx = canvas.getContext('2d');
  let W, H, pts, t = 0;
  const BG = '#060a0d';

  function build(w, h) {
    const count = Math.max(40, Math.floor((w * h) / 6000));
    pts = Array.from({ length: count }, function() {
      var angle = Math.random() * Math.PI * 2;
      var spd   = 0.08 + Math.random() * 0.18;
      return {
        x: Math.random() * w,  y: Math.random() * h,
        r: NODE_SIZE * (0.7 + Math.random()),
        phase:  Math.random() * Math.PI * 2,
        pSpeed: 0.3 + Math.random() * 0.5,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        wAngle: Math.random() * Math.PI * 2,
        wSpeed: 0.002 + Math.random() * 0.004,
        active: 0,
      };
    });
  }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    build(W, H);
  }
  resize();
  window.addEventListener('resize', function() {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(resize, 100);
  });

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, W, H);
    t += 0.008;

    var md = W * 0.22;

    pts.forEach(function(n) {
      n.wAngle += n.wSpeed;
      n.vx += Math.cos(n.wAngle) * 0.004;
      n.vy += Math.sin(n.wAngle) * 0.004;
      var spd = Math.hypot(n.vx, n.vy);
      if (spd > MAX_SPEED) { n.vx = (n.vx / spd) * MAX_SPEED; n.vy = (n.vy / spd) * MAX_SPEED; }
      n.x += n.vx;  n.y += n.vy;
      if (n.x < -20)    n.x = W + 20;
      if (n.x > W + 20) n.x = -20;
      if (n.y < -20)    n.y = H + 20;
      if (n.y > H + 20) n.y = -20;
      n.active = (Math.sin(t * n.pSpeed + n.phase) + 1) * 0.5;
    });

    for (var i = 0; i < pts.length; i++) {
      var a = pts[i];
      for (var j = i + 1; j < pts.length; j++) {
        var b = pts[j];
        var d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d > md) continue;
        var str    = 1 - d / md;
        var bright = (a.active + b.active) * 0.5;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = 'rgba(' + C.join(',') + ',' + (str * (0.15 + bright * 0.25)) + ')';
        ctx.lineWidth   = str * (0.8 + bright * 1.8);
        ctx.stroke();
      }
    }

    pts.forEach(function(n) {
      var pulse  = n.active;
      var radius = n.r + pulse * 3;
      if (pulse > 0.3) {
        var grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 7);
        grd.addColorStop(0, 'rgba(' + C.join(',') + ',' + (GLOW * pulse) + ')');
        grd.addColorStop(1, 'rgba(' + C.join(',') + ',0)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 7, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + C.join(',') + ',' + (0.35 + pulse * 0.45) + ')';
      ctx.fill();
    });

    var vig = ctx.createRadialGradient(W/2, H/2, H*0.2, W/2, H/2, H*0.85);
    vig.addColorStop(0, 'rgba(6,10,13,0)');
    vig.addColorStop(1, 'rgba(6,10,13,' + VIGNETTE + ')');
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

/* ─────────────────────────────────────────
   CATEGORY INJECTION
   Reads CONTENT.categories and injects into
   data-cat-nav / data-cat-tag / data-cat-title
   ───────────────────────────────────────── */
(function injectCategories() {
  if (typeof CONTENT === 'undefined' || !CONTENT.categories) return;

  const catMap = {};
  CONTENT.categories.forEach(c => { catMap[c.id] = c; });

  // Nav links and hero pills
  document.querySelectorAll('[data-cat-nav]').forEach(el => {
    const c = catMap[el.dataset.catNav];
    if (c) el.innerHTML = c.navLabel;
  });

  // Section tags (// Utility & Software Development)
  document.querySelectorAll('[data-cat-tag]').forEach(el => {
    const c = catMap[el.dataset.catTag];
    if (c) el.innerHTML = c.tag;
  });

  // Category titles (big headings)
  document.querySelectorAll('[data-cat-title]').forEach(el => {
    const c = catMap[el.dataset.catTitle];
    if (c) el.innerHTML = c.title;
  });
})();