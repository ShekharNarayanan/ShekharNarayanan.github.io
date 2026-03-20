/* ─────────────────────────────────────────
   visuals.js — Shekhar Narayanan Portfolio
   Edit SVG animations here, never in index.html.
   ───────────────────────────────────────── */

const VISUALS = {

  'universal-text': `
<svg class="viz-wave" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <rect width="600" height="300" fill="#060a0d"/>

          <!-- Col 1: .DOCX  .RTF  .TXT -->
          <g fill="none" stroke="#3ecfff" stroke-width="1.2" opacity="0.65">
            <rect x="18" y="30"  width="78" height="34" rx="4" opacity="0"><animate attributeName="opacity" from="0" to="0.65" dur="0.4s" begin="0.1s" fill="freeze"/></rect>
            <rect x="18" y="126" width="78" height="34" rx="4" opacity="0"><animate attributeName="opacity" from="0" to="0.65" dur="0.4s" begin="0.3s" fill="freeze"/></rect>
            <rect x="18" y="222" width="78" height="34" rx="4" opacity="0"><animate attributeName="opacity" from="0" to="0.65" dur="0.4s" begin="0.5s" fill="freeze"/></rect>
          </g>
          <g font-family="monospace" font-size="13" font-weight="700" fill="#3ecfff" text-anchor="middle">
            <text x="57" y="52"  opacity="0">.DOCX<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.15s" fill="freeze"/></text>
            <text x="57" y="148" opacity="0">.RTF<animate  attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.35s" fill="freeze"/></text>
            <text x="57" y="244" opacity="0">.TXT<animate  attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.55s" fill="freeze"/></text>
          </g>

          <!-- Col 2: .DOC  .ODT  .PDF -->
          <g fill="none" stroke="#3ecfff" stroke-width="1.2" opacity="0.65">
            <rect x="108" y="30"  width="78" height="34" rx="4" opacity="0"><animate attributeName="opacity" from="0" to="0.65" dur="0.4s" begin="0.2s" fill="freeze"/></rect>
            <rect x="108" y="126" width="78" height="34" rx="4" opacity="0"><animate attributeName="opacity" from="0" to="0.65" dur="0.4s" begin="0.4s" fill="freeze"/></rect>
            <rect x="108" y="222" width="78" height="34" rx="4" opacity="0"><animate attributeName="opacity" from="0" to="0.65" dur="0.4s" begin="0.6s" fill="freeze"/></rect>
          </g>
          <g font-family="monospace" font-size="13" font-weight="700" fill="#3ecfff" text-anchor="middle">
            <text x="147" y="52"  opacity="0">.DOC<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.25s" fill="freeze"/></text>
            <text x="147" y="148" opacity="0">.ODT<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.45s" fill="freeze"/></text>
            <text x="147" y="244" opacity="0">.PDF<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.65s" fill="freeze"/></text>
          </g>

          <!-- One arrow per row → engine -->
          <polyline points="186,47  211,47  233,126"  fill="none" stroke="#3ecfff" stroke-width="1.2" opacity="0"><animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="0.9s" fill="freeze"/></polyline>
          <polygon  points="227,120 237,126 227,132"  fill="#3ecfff" opacity="0"><animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="0.9s" fill="freeze"/></polygon>
          <line x1="186" y1="143" x2="233" y2="153" stroke="#3ecfff" stroke-width="1.2" opacity="0"><animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="1.0s" fill="freeze"/></line>
          <polygon points="226,148 236,153 226,158"   fill="#3ecfff" opacity="0"><animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="1.0s" fill="freeze"/></polygon>
          <polyline points="186,239  211,239  233,180" fill="none" stroke="#3ecfff" stroke-width="1.2" opacity="0"><animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="1.1s" fill="freeze"/></polyline>
          <polygon  points="227,174 237,180 227,186"   fill="#3ecfff" opacity="0"><animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="1.1s" fill="freeze"/></polygon>

          <!-- Engine box -->
          <rect x="236" y="108" width="118" height="90" rx="6" fill="none" stroke="#3ecfff" stroke-width="1.5" opacity="0"><animate attributeName="opacity" from="0" to="0.75" dur="0.4s" begin="1.3s" fill="freeze"/></rect>
          <text x="295" y="148" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#3ecfff" opacity="0">LibreOffice<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="1.4s" fill="freeze"/></text>
          <text x="295" y="165" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#3ecfff" opacity="0">Engine<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="1.45s" fill="freeze"/></text>

          <!-- Engine → output arrow (plain, no filter) -->
          <line x1="354" y1="153" x2="425" y2="153" stroke="#3ecfff" stroke-width="3" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.7s" fill="freeze"/></line>
          <polygon points="423,145  433,153  423,161" fill="#3ecfff" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.75s" fill="freeze"/></polygon>

          <!-- Output box -->
          <rect x="432" y="115" width="150" height="76" rx="6" fill="none" stroke="#ff7a5a" stroke-width="1.8" opacity="0"><animate attributeName="opacity" from="0" to="0.85" dur="0.4s" begin="1.9s" fill="freeze"/></rect>
          <text x="507" y="148" text-anchor="middle" font-family="monospace" font-size="14" font-weight="700" fill="#ff7a5a" opacity="0">Unified .PDF<animate attributeName="opacity" from="0" to="0.95" dur="0.3s" begin="2.0s" fill="freeze"/></text>
          <text x="507" y="174" text-anchor="middle" font-family="monospace" font-size="10" fill="#ff7a5a" opacity="0">Python · LibreOffice<animate attributeName="opacity" from="0" to="0.5" dur="0.3s" begin="2.1s" fill="freeze"/></text>
        </svg>
  `,

  'youtube-api': `
<svg class="viz-wave" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <rect width="600" height="300" fill="#060a0d"/>
          <g stroke="#0c1810" stroke-width="0.5" opacity="0.5">
            <line x1="0" y1="100" x2="600" y2="100"/><line x1="0" y1="200" x2="600" y2="200"/>
            <line x1="150" y1="0" x2="150" y2="300"/><line x1="300" y1="0" x2="300" y2="300"/>
            <line x1="450" y1="0" x2="450" y2="300"/>
          </g>
          <rect x="20" y="100" width="130" height="84" rx="6" fill="none" stroke="#3ecfff" stroke-width="1.4" opacity="0"><animate attributeName="opacity" from="0" to="0.7" dur="0.4s" begin="0.2s" fill="freeze"/></rect>
          <text x="85" y="130" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#3ecfff" opacity="0">YouTube<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.3s" fill="freeze"/></text>
          <text x="85" y="148" text-anchor="middle" font-family="monospace" font-size="10" fill="#3ecfff" opacity="0">Data API v3<animate attributeName="opacity" from="0" to="0.6" dur="0.3s" begin="0.35s" fill="freeze"/></text>
          <text x="85" y="166" text-anchor="middle" font-family="monospace" font-size="8" fill="#3ecfff" opacity="0">videos · comments<animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="0.4s" fill="freeze"/></text>
          <text x="218" y="118" text-anchor="middle" font-family="monospace" font-size="9" fill="#3ecfff" opacity="0">HTTP GET<animate attributeName="opacity" from="0" to="0.45" dur="0.3s" begin="0.9s" fill="freeze"/></text>
          <line x1="150" y1="142" x2="218" y2="142" stroke="#3ecfff" stroke-width="2.5" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.8s" fill="freeze"/></line>
          <polygon points="216,135 226,142 216,149" fill="#3ecfff" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.85s" fill="freeze"/></polygon>
          <rect x="226" y="88" width="148" height="108" rx="6" fill="none" stroke="#3ecfff" stroke-width="1.6" opacity="0"><animate attributeName="opacity" from="0" to="0.75" dur="0.4s" begin="1.1s" fill="freeze"/></rect>
          <text x="300" y="120" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#3ecfff" opacity="0">Python<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="1.2s" fill="freeze"/></text>
          <text x="300" y="138" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#3ecfff" opacity="0">Parser<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="1.25s" fill="freeze"/></text>
          <text x="300" y="160" text-anchor="middle" font-family="monospace" font-size="8" fill="#3ecfff" opacity="0">quota · pagination<animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="1.3s" fill="freeze"/></text>
          <text x="300" y="178" text-anchor="middle" font-family="monospace" font-size="8" fill="#3ecfff" opacity="0">reply threading<animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="1.35s" fill="freeze"/></text>
          <text x="432" y="118" text-anchor="middle" font-family="monospace" font-size="9" fill="#ff7a5a" opacity="0">JSON<animate attributeName="opacity" from="0" to="0.45" dur="0.3s" begin="1.7s" fill="freeze"/></text>
          <line x1="374" y1="142" x2="442" y2="142" stroke="#ff7a5a" stroke-width="2.5" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.6s" fill="freeze"/></line>
          <polygon points="440,135 450,142 440,149" fill="#ff7a5a" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.65s" fill="freeze"/></polygon>
          <rect x="450" y="100" width="130" height="84" rx="6" fill="none" stroke="#ff7a5a" stroke-width="1.6" opacity="0"><animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="1.8s" fill="freeze"/></rect>
          <text x="515" y="130" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#ff7a5a" opacity="0">pandas<animate attributeName="opacity" from="0" to="0.95" dur="0.3s" begin="1.9s" fill="freeze"/></text>
          <text x="515" y="148" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#ff7a5a" opacity="0">DataFrame<animate attributeName="opacity" from="0" to="0.95" dur="0.3s" begin="1.95s" fill="freeze"/></text>
          <text x="515" y="166" text-anchor="middle" font-family="monospace" font-size="8" fill="#ff7a5a" opacity="0">analysis-ready<animate attributeName="opacity" from="0" to="0.5" dur="0.3s" begin="2.0s" fill="freeze"/></text>
          <text x="300" y="268" text-anchor="middle" font-family="monospace" font-size="9" fill="#3ecfff" opacity="0">Tilburg University · TSB-RST · 2024<animate attributeName="opacity" from="0" to="0.3" dur="0.4s" begin="2.2s" fill="freeze"/></text>
        </svg>
  `,

  'companies-house': `
<svg class="viz-wave" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <rect width="600" height="300" fill="#060a0d"/>

          <!-- faint grid -->
          <g stroke="#0c1810" stroke-width="0.5" opacity="0.5">
            <line x1="0" y1="100" x2="600" y2="100"/>
            <line x1="0" y1="200" x2="600" y2="200"/>
            <line x1="150" y1="0" x2="150" y2="300"/>
            <line x1="300" y1="0" x2="300" y2="300"/>
            <line x1="450" y1="0" x2="450" y2="300"/>
          </g>

          <!-- Python script box -->
          <rect x="20" y="118" width="130" height="64" rx="6" fill="none" stroke="#3ecfff" stroke-width="1.4" opacity="0"><animate attributeName="opacity" from="0" to="0.7" dur="0.4s" begin="0.2s" fill="freeze"/></rect>
          <text x="85" y="145" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#3ecfff" opacity="0">Python<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.3s" fill="freeze"/></text>
          <text x="85" y="163" text-anchor="middle" font-family="monospace" font-size="11" fill="#3ecfff" opacity="0">Script<animate attributeName="opacity" from="0" to="0.6" dur="0.3s" begin="0.35s" fill="freeze"/></text>

          <!-- Arrow 1: Python → API -->
          <!-- HTTP GET label above arrow -->
          <text x="218" y="128" text-anchor="middle" font-family="monospace" font-size="9" fill="#3ecfff" opacity="0">HTTP GET<animate attributeName="opacity" from="0" to="0.45" dur="0.3s" begin="0.9s" fill="freeze"/></text>
          <line x1="150" y1="150" x2="218" y2="150" stroke="#3ecfff" stroke-width="2.5" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.8s" fill="freeze"/></line>
          <polygon points="216,143 226,150 216,157" fill="#3ecfff" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.85s" fill="freeze"/></polygon>

          <!-- Companies House API box (centre) -->
          <rect x="226" y="104" width="148" height="92" rx="6" fill="none" stroke="#3ecfff" stroke-width="1.6" opacity="0"><animate attributeName="opacity" from="0" to="0.75" dur="0.4s" begin="1.1s" fill="freeze"/></rect>
          <text x="300" y="140" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#3ecfff" opacity="0">Companies House<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="1.2s" fill="freeze"/></text>
          <text x="300" y="158" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#3ecfff" opacity="0">Open API<animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="1.25s" fill="freeze"/></text>
          <text x="300" y="182" text-anchor="middle" font-family="monospace" font-size="9" fill="#3ecfff" opacity="0">UK Gov · REST<animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="1.3s" fill="freeze"/></text>

          <!-- Arrow 2: API → Data -->
          <text x="432" y="128" text-anchor="middle" font-family="monospace" font-size="9" fill="#ff7a5a" opacity="0">JSON<animate attributeName="opacity" from="0" to="0.45" dur="0.3s" begin="1.7s" fill="freeze"/></text>
          <line x1="374" y1="150" x2="442" y2="150" stroke="#ff7a5a" stroke-width="2.5" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.6s" fill="freeze"/></line>
          <polygon points="440,143 450,150 440,157" fill="#ff7a5a" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.65s" fill="freeze"/></polygon>

          <!-- Structured data output box -->
          <rect x="450" y="118" width="130" height="64" rx="6" fill="none" stroke="#ff7a5a" stroke-width="1.6" opacity="0"><animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="1.8s" fill="freeze"/></rect>
          <text x="515" y="145" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#ff7a5a" opacity="0">Structured<animate attributeName="opacity" from="0" to="0.95" dur="0.3s" begin="1.9s" fill="freeze"/></text>
          <text x="515" y="163" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#ff7a5a" opacity="0">Data<animate attributeName="opacity" from="0" to="0.95" dur="0.3s" begin="1.95s" fill="freeze"/></text>

          <!-- Tilburg label -->
          <text x="300" y="268" text-anchor="middle" font-family="monospace" font-size="9" fill="#3ecfff" opacity="0">Tilburg University · TSB-RST · 2024<animate attributeName="opacity" from="0" to="0.3" dur="0.4s" begin="2.2s" fill="freeze"/></text>
        </svg>
  `,

  'covert-cvep': `
<svg class="viz-wave" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="brainGlow" cx="50%" cy="42%" r="52%">
              <stop offset="0%"   stop-color="#3ecfff" stop-opacity="0.08"/>
              <stop offset="100%" stop-color="#3ecfff" stop-opacity="0.0"/>
            </radialGradient>
            <filter id="sg">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <rect width="800" height="500" fill="#060a0d"/>
          <ellipse cx="400" cy="210" rx="310" ry="190" fill="url(#brainGlow)"/>
          <g stroke="#0c1810" stroke-width="0.5">
            <line x1="0" y1="125" x2="800" y2="125"/><line x1="0" y1="250" x2="800" y2="250"/>
            <line x1="0" y1="375" x2="800" y2="375"/>
            <line x1="160" y1="0" x2="160" y2="500"/><line x1="320" y1="0" x2="320" y2="500"/>
            <line x1="480" y1="0" x2="480" y2="500"/><line x1="640" y1="0" x2="640" y2="500"/>
          </g>
          <circle  class="stim stim-1" cx="120" cy="120" r="36" fill="none" stroke="#3ecfff" stroke-width="1.4" filter="url(#sg)"/>
          <text x="120" y="174" text-anchor="middle" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.35">10110100</text>
          <rect    class="stim stim-2" x="232" y="84" width="72" height="72" fill="none" stroke="#3ecfff" stroke-width="1.4"/>
          <text x="268" y="174" text-anchor="middle" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.35">01001101</text>
          <polygon class="stim stim-3" points="400,78 446,156 354,156" fill="none" stroke="#3ecfff" stroke-width="1.6" filter="url(#sg)"/>
          <text x="400" y="174" text-anchor="middle" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.35">11010010</text>
          <polygon class="stim stim-4" points="532,84 570,120 532,156 494,120" fill="none" stroke="#3ecfff" stroke-width="1.4"/>
          <text x="532" y="174" text-anchor="middle" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.35">00111011</text>
          <line    class="stim stim-5" x1="644" y1="86" x2="686" y2="154" stroke="#3ecfff" stroke-width="1.4" filter="url(#sg)"/>
          <line    class="stim stim-5" x1="686" y1="86" x2="644" y2="154" stroke="#3ecfff" stroke-width="1.4" filter="url(#sg)"/>
          <text x="665" y="174" text-anchor="middle" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.35">10010111</text>
          <line x1="400" y1="196" x2="400" y2="228" stroke="#ff7a5a" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
          <polygon points="396,226 404,226 400,236" fill="#ff7a5a" opacity="0.6"/>
          <text x="400" y="256" text-anchor="middle" font-family="monospace" font-size="8" fill="#ff7a5a" opacity="0.55">covert attention</text>
          <polyline
            points="30,370 68,370 82,350 92,390 102,370 146,370 160,352 170,388 180,370 224,370 238,351 248,389 258,370 302,370 316,352 326,388 336,370 380,370 394,349 404,391 414,370 458,370 472,351 482,389 492,370 536,370 550,350 560,390 570,370 614,370 628,352 638,388 648,370 692,370 706,351 716,389 726,370 768,370"
            fill="none" stroke="#3ecfff" stroke-width="1.8" opacity="0.7" filter="url(#sg)"
          />
          <text x="30" y="424" font-family="monospace" font-size="8" fill="#3ecfff" opacity="0.38">EEG · O1/O2 · Occipital · 60 Hz C-VEP</text>
          <text x="30" y="440" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.22">Graz BCI Conference 2024 · arXiv:2404.00031</text>
          <text x="770" y="28" text-anchor="end" font-family="monospace" font-size="8" fill="#ff7a5a" opacity="0.45">gaze-independent</text>
        </svg>
  `,

  'eda-ecg': `
<svg class="viz-wave" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="edaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stop-color="#3ecfff" stop-opacity="0.0"/>
              <stop offset="25%"  stop-color="#3ecfff" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#3ecfff" stop-opacity="0.55"/>
            </linearGradient>
            <linearGradient id="ecgGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stop-color="#ff7a5a" stop-opacity="0.0"/>
              <stop offset="25%"  stop-color="#ff7a5a" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#ff7a5a" stop-opacity="0.6"/>
            </linearGradient>
            <filter id="glow2">
              <feGaussianBlur stdDeviation="2.5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <rect width="800" height="500" fill="#060a0d"/>
          <g stroke="#0c1810" stroke-width="0.5">
            <line x1="0" y1="108" x2="800" y2="108"/><line x1="0" y1="216" x2="800" y2="216"/>
            <line x1="0" y1="324" x2="800" y2="324"/><line x1="0" y1="432" x2="800" y2="432"/>
            <line x1="200" y1="0" x2="200" y2="500"/><line x1="400" y1="0" x2="400" y2="500"/>
            <line x1="600" y1="0" x2="600" y2="500"/>
          </g>
          <text x="20" y="30"  font-family="monospace" font-size="9" fill="#3ecfff" opacity="0.55">EDA  ·  Electrodermal Activity</text>
          <path d="M20,185 C70,183 110,180 150,176 C190,171 220,158 252,134 C272,118 292,110 318,112 C344,114 372,126 400,132 C428,137 448,130 474,120 C494,113 516,102 544,94 C566,88 592,90 618,97 C646,105 680,116 760,122"
            fill="none" stroke="url(#edaGrad)" stroke-width="2.4" filter="url(#glow2)"
            stroke-dasharray="1200" stroke-dashoffset="1200">
            <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="2.8s" begin="0.4s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1"/>
          </path>
          <g opacity="0">
            <line x1="244" y1="54" x2="244" y2="186" stroke="#3ecfff" stroke-width="0.7" stroke-dasharray="3,4" opacity="0.35"/>
            <text x="248" y="52" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.45">SCR onset</text>
            <line x1="476" y1="54" x2="476" y2="130" stroke="#3ecfff" stroke-width="0.7" stroke-dasharray="3,4" opacity="0.35"/>
            <text x="480" y="52" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.45">SCR onset</text>
            <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="2.8s" fill="freeze"/>
          </g>
          <line x1="20" y1="265" x2="780" y2="265" stroke="#3ecfff" stroke-width="0.4" opacity="0.1"/>
          <text x="20" y="290" font-family="monospace" font-size="9" fill="#ff7a5a" opacity="0.55">ECG  ·  Electrocardiogram</text>
          <path d="M20,380 L58,380 L70,368 L78,386 L84,380 L90,380 L95,310 L100,450 L105,380 L110,392 L116,366 L122,380 L178,380 L216,380 L228,368 L236,386 L242,380 L248,380 L253,310 L258,450 L263,380 L268,392 L274,366 L280,380 L336,380 L374,380 L386,368 L394,386 L400,380 L406,380 L411,310 L416,450 L421,380 L426,392 L432,366 L438,380 L494,380 L532,380 L544,368 L552,386 L558,380 L564,380 L569,310 L574,450 L579,380 L584,392 L590,366 L596,380 L652,380 L690,380 L702,368 L710,386 L716,380 L722,380 L727,310 L732,450 L737,380 L742,392 L748,366 L754,380 L780,380"
            fill="none" stroke="url(#ecgGrad2)" stroke-width="2.2" filter="url(#glow2)"
            stroke-dasharray="2800" stroke-dashoffset="2800">
            <animate attributeName="stroke-dashoffset" from="2800" to="0" dur="3.2s" begin="1s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1"/>
          </path>
          <g font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.22">
            <text x="20"  y="486">raw signal</text>
            <text x="160" y="486">→  bandpass filter</text>
            <text x="348" y="486">→  peak detection</text>
            <text x="530" y="486">→  HRV / SCR features</text>
          </g>
          <text x="780" y="486" text-anchor="end" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.16">UvT · TSB-RST · 2025</text>
        </svg>
  `,

  'ecg-arrhythmia-mlds': `
<svg class="viz-wave" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ecgGrad-mlds" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stop-color="#3ecfff" stop-opacity="0.0"/>
              <stop offset="35%"  stop-color="#3ecfff" stop-opacity="0.95"/>
              <stop offset="80%"  stop-color="#3ecfff" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#ff7a5a" stop-opacity="0.7"/>
            </linearGradient>
            <filter id="glow-mlds">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <rect width="800" height="500" fill="#03080a"/>
          <g stroke="#0e2a18" stroke-width="0.8">
            <line x1="0" y1="100" x2="800" y2="100"/><line x1="0" y1="200" x2="800" y2="200"/>
            <line x1="0" y1="300" x2="800" y2="300"/><line x1="0" y1="400" x2="800" y2="400"/>
            <line x1="160" y1="0" x2="160" y2="500"/><line x1="320" y1="0" x2="320" y2="500"/>
            <line x1="480" y1="0" x2="480" y2="500"/><line x1="640" y1="0" x2="640" y2="500"/>
          </g>
          <g stroke="#081810" stroke-width="0.3">
            <line x1="0" y1="50" x2="800" y2="50"/><line x1="0" y1="150" x2="800" y2="150"/>
            <line x1="0" y1="250" x2="800" y2="250"/><line x1="0" y1="350" x2="800" y2="350"/>
            <line x1="0" y1="450" x2="800" y2="450"/>
            <line x1="80"  y1="0" x2="80"  y2="500"/><line x1="240" y1="0" x2="240" y2="500"/>
            <line x1="400" y1="0" x2="400" y2="500"/><line x1="560" y1="0" x2="560" y2="500"/>
            <line x1="720" y1="0" x2="720" y2="500"/>
          </g>
          <path d="M0,250 L40,250 L50,240 L58,255 L64,250 L70,250 L75,140 L80,360 L85,250 L90,270 L96,230 L102,250 L160,250 L200,250 L210,240 L218,255 L224,250 L230,250 L235,140 L240,360 L245,250 L250,270 L256,230 L262,250 L320,250 L360,250 L370,240 L378,255 L384,250 L390,250 L395,140 L400,360 L405,250 L410,270 L416,230 L422,250 L480,250 L520,250 L530,240 L538,255 L544,250 L550,250 L555,140 L560,360 L565,250 L570,270 L576,230 L582,250 L640,250 L680,250 L690,240 L698,255 L704,250 L710,250 L715,140 L720,360 L725,250 L730,270 L736,230 L742,250 L800,250"
            fill="none" stroke="url(#ecgGrad-mlds)" stroke-width="2.4" filter="url(#glow-mlds)">
            <animate attributeName="stroke-dashoffset" from="2800" to="0"        dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="stroke-dasharray"  from="0 2800" to="2800 0" dur="3.5s" repeatCount="indefinite"/>
          </path>
          <g opacity="0">
            <rect x="690" y="94" width="96" height="28" rx="3" fill="none" stroke="#3ecfff" stroke-width="0.8" opacity="0.5"/>
            <text x="738" y="113" text-anchor="middle" font-family="monospace" font-size="8" fill="#3ecfff" opacity="0.8">NORMAL SINUS</text>
            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.4s;3.5s" fill="freeze"/>
          </g>
          <text x="20" y="30" fill="#3ecfff" font-family="monospace" font-size="10" opacity="0.55">MIT-BIH · Lead II · 360 Hz</text>
          <text x="20" y="46" fill="#3ecfff" font-family="monospace" font-size="8"  opacity="0.28">Arrhythmia Classification · In Progress</text>
          <line x1="20" y1="455" x2="20" y2="415" stroke="#3ecfff" stroke-width="0.8" opacity="0.25"/>
          <line x1="18" y1="455" x2="22" y2="455" stroke="#3ecfff" stroke-width="0.8" opacity="0.25"/>
          <line x1="18" y1="415" x2="22" y2="415" stroke="#3ecfff" stroke-width="0.8" opacity="0.25"/>
          <text x="28" y="438" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.25">1 mV</text>
        </svg>
  `,

  'ecg-arrhythmia-ind': `
<svg class="viz-wave" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ecgGrad-ind" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stop-color="#3ecfff" stop-opacity="0.0"/>
              <stop offset="35%"  stop-color="#3ecfff" stop-opacity="0.95"/>
              <stop offset="80%"  stop-color="#3ecfff" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#ff7a5a" stop-opacity="0.7"/>
            </linearGradient>
            <filter id="glow-ind">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <rect width="800" height="500" fill="#03080a"/>
          <g stroke="#0e2a18" stroke-width="0.8">
            <line x1="0" y1="100" x2="800" y2="100"/><line x1="0" y1="200" x2="800" y2="200"/>
            <line x1="0" y1="300" x2="800" y2="300"/><line x1="0" y1="400" x2="800" y2="400"/>
            <line x1="160" y1="0" x2="160" y2="500"/><line x1="320" y1="0" x2="320" y2="500"/>
            <line x1="480" y1="0" x2="480" y2="500"/><line x1="640" y1="0" x2="640" y2="500"/>
          </g>
          <g stroke="#081810" stroke-width="0.3">
            <line x1="0" y1="50" x2="800" y2="50"/><line x1="0" y1="150" x2="800" y2="150"/>
            <line x1="0" y1="250" x2="800" y2="250"/><line x1="0" y1="350" x2="800" y2="350"/>
            <line x1="0" y1="450" x2="800" y2="450"/>
            <line x1="80"  y1="0" x2="80"  y2="500"/><line x1="240" y1="0" x2="240" y2="500"/>
            <line x1="400" y1="0" x2="400" y2="500"/><line x1="560" y1="0" x2="560" y2="500"/>
            <line x1="720" y1="0" x2="720" y2="500"/>
          </g>
          <path d="M0,250 L40,250 L50,240 L58,255 L64,250 L70,250 L75,140 L80,360 L85,250 L90,270 L96,230 L102,250 L160,250 L200,250 L210,240 L218,255 L224,250 L230,250 L235,140 L240,360 L245,250 L250,270 L256,230 L262,250 L320,250 L360,250 L370,240 L378,255 L384,250 L390,250 L395,140 L400,360 L405,250 L410,270 L416,230 L422,250 L480,250 L520,250 L530,240 L538,255 L544,250 L550,250 L555,140 L560,360 L565,250 L570,270 L576,230 L582,250 L640,250 L680,250 L690,240 L698,255 L704,250 L710,250 L715,140 L720,360 L725,250 L730,270 L736,230 L742,250 L800,250"
            fill="none" stroke="url(#ecgGrad-ind)" stroke-width="2.4" filter="url(#glow-ind)">
            <animate attributeName="stroke-dashoffset" from="2800" to="0"        dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="stroke-dasharray"  from="0 2800" to="2800 0" dur="3.5s" repeatCount="indefinite"/>
          </path>
          <g opacity="0">
            <rect x="690" y="94" width="96" height="28" rx="3" fill="none" stroke="#3ecfff" stroke-width="0.8" opacity="0.5"/>
            <text x="738" y="113" text-anchor="middle" font-family="monospace" font-size="8" fill="#3ecfff" opacity="0.8">NORMAL SINUS</text>
            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.4s;3.5s" fill="freeze"/>
          </g>
          <text x="20" y="30" fill="#3ecfff" font-family="monospace" font-size="10" opacity="0.55">MIT-BIH · Lead II · 360 Hz</text>
          <text x="20" y="46" fill="#3ecfff" font-family="monospace" font-size="8"  opacity="0.28">Arrhythmia Classification · In Progress</text>
          <line x1="20" y1="455" x2="20" y2="415" stroke="#3ecfff" stroke-width="0.8" opacity="0.25"/>
          <line x1="18" y1="455" x2="22" y2="455" stroke="#3ecfff" stroke-width="0.8" opacity="0.25"/>
          <line x1="18" y1="415" x2="22" y2="415" stroke="#3ecfff" stroke-width="0.8" opacity="0.25"/>
          <text x="28" y="438" font-family="monospace" font-size="7" fill="#3ecfff" opacity="0.25">1 mV</text>
        </svg>
  `,

};