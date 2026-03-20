/* ─────────────────────────────────────────
   theme.js — Shekhar Narayanan Portfolio
   ALL design tokens live here.
   Edit this file to change colours, sizes,
   spacing and card density globally.
   ───────────────────────────────────────── */

const THEME = {

  /* ── Colours ──
     --bg        background of the whole page
     --bg2       background of project cards / about stats
     --green     accent colour (neon blue) — used for headings, links, tags, ticker
     --coral     secondary accent — used for output boxes in SVGs and "in progress" badges
     --text      main body text colour
     --muted     dimmed text — subtitles, tags, nav links
     --border    subtle divider lines and tag outlines
     --nav-bg    frosted glass background of the top nav bar */
  '--bg':           '#060a0d',
  '--bg2':          '#0b1217',
  '--green':        '#2263dc',
  '--coral':        '#ff7a5a',
  '--text':         '#dce8e0',
  '--muted':        '#6a8070',
  '--border':       'rgba(62,207,255,0.12)',
  '--nav-bg':       'rgba(6,10,13,0.85)',

  /* ── Type scale ──
     Increase a value to make that text bigger, decrease to shrink it.
     --size-hero-name      SHEKHAR / NARAYANAN large display text
     --size-category       ML & DATA SCIENCE / UTILITY section headings
     --size-section-title  "Who I am" about heading
     --size-project-title  project card title (e.g. "ECG Arrhythmia Detection")
     --size-hero-tagline   the italic subtitle line under your name
     --size-body           about section paragraph text
     --size-body-sm        project card description text
     --size-small          nav links, pills, ticker, project links
     --size-label          section tags (// About), badges, hero label
     --size-tag            project tags, footer text, status badges
     --size-footer-title   "Let's Connect" heading
     --size-stat-num       the big numbers in the about stats (4+, EEG·ECG·EDA, 2)
     --size-nav-logo       the SN logo in the top left
     --size-project-num    the faint background number on each project card (01, 02 etc) */
  '--size-hero-name':     'clamp(5rem, 13vw, 13rem)',
  '--size-category':      'clamp(4rem, 10vw, 9rem)',
  '--size-section-title': 'clamp(3rem, 7vw, 6rem)',
  '--size-project-title': 'clamp(2.5rem, 4vw, 4.2rem)',
  '--size-hero-tagline':  'clamp(1.1rem, 2.5vw, 1.9rem)',
  '--size-body':          '1.15rem',
  '--size-body-sm':       '1.05rem',
  '--size-small':         '0.9rem',
  '--size-label':         '0.85rem',
  '--size-tag':           '0.82rem',
  '--size-footer-title':  '4rem',
  '--size-stat-num':      '2.8rem',
  '--size-nav-logo':      '1.4rem',
  '--size-project-num':   '5rem',

  /* ── Layout density ──
     --card-height       how tall each project card is (default 60vh = 60% of screen height)
     --card-padding      padding inside the text side of each project card
     --about-padding     top/bottom and left/right padding of the About section
     --category-padding  padding above each category heading (Utility & Dev, ML & DS etc)
     --footer-padding    padding inside the footer */
  '--hero-height':  '100vh',   // height of the hero section
  '--hero-padding': '0 3rem',  // left/right padding of the hero section
  '--card-height':      '35vh',
  '--card-padding':     '2.5rem 2.5rem',
  '--about-padding':    '7rem 3rem',
  '--category-padding': '5rem 3rem 3rem',
  '--footer-padding':   '5rem 3rem',
  
  /* ── Neural net ──
   --neural-r / --neural-g / --neural-b   RGB components of the node/edge colour (default matches --green #2263dc)
   --neural-opacity                        overall canvas opacity (0 = invisible, 1 = full)
   --neural-vignette                       how much the edges darken (0 = no vignette, 1 = fully black at edges)
   --neural-node-size                      base radius of each node in px
   --neural-glow                           halo brightness multiplier (0 = no glow, 0.5 = strong)
   --neural-speed                          max drift speed of nodes (0.1 = slow crawl, 0.5 = fast) */
'--neural-r':        '34',
'--neural-g':        '99',
'--neural-b':        '220',
'--neural-opacity':  '0.55',
'--neural-vignette': '0.72',
'--neural-node-size':'7',
'--neural-glow':     '0.7',
'--neural-speed':    '0.9',

};