/* ─────────────────────────────────────────
   content.js — Shekhar Narayanan Portfolio
   Edit this file to update all page text.
   ───────────────────────────────────────── */

const CONTENT = {

  /* ── META ── */
  pageTitle: 'Shekhar Narayanan — Portfolio',

  /* ── NAV ── */
  nav: {
    github: 'https://github.com/ShekharNarayanan',
    linkedin: 'https://www.linkedin.com/in/',
  },

  /* ── HERO ── */
  hero: {
    label:     'Software Engineer · Utrecht, Netherlands',
    firstName: 'Shekhar',
    lastName:  'Narayanan',
    tagline:   'Biosignal processing, ML engineering & building tools that get out of your way.',
    image:     'media/hero.jpg',
    // Ticker — duplicated internally by the JS for seamless loop
    ticker: [
      'scikit-learn', 'XGBoost', 'Random Forest', 'MLflow',
      'MNE-Python', 'CCA', 'LDA', 'NeuroKit2',
      'WFDB', 'pandas', 'NumPy', 'SciPy',
    ],
  },

  /* ── ABOUT ── */
  about: {
    heading: 'Who I am',
    p1: `I'm a <strong>machine learning engineer</strong> with a background in neuroscience and biosignal
    processing. I build end-to-end ML pipelines from scratch — <strong>raw data ingestion,
    preprocessing, feature engineering, model training and deployment</strong> — across domains
    ranging from EEG brain-computer interfaces to ECG arrhythmia classification.
    My stack includes <strong>scikit-learn, XGBoost, Random Forest, MLflow, MNE-Python and NeuroKit2</strong>.`,
    p2: `Previously at the Donders Institute developing ALS-focused BCIs using <strong>CCA and LDA</strong>
    on live EEG streams. Now based in Utrecht, open to <strong>part-time collaborations</strong>
    with companies in wearables, biosensors and health-tech — anywhere physiological time-series
    data meets real-world ML deployment.`,
    stats: [
      { num: '4+',             label: 'Years in Biosignal Research' },
      { num: 'EEG · ECG · EDA', label: 'Signal Modalities'         },
      { num: 'ML',              label: 'Current Focus'              },
    ],
  },

  /* ── FOOTER ── */
  footer: {
    heading:  "Let's Connect",
    tagline:  'Open to part-time collaborations · Utrecht, NL',
    bottom:   'Shekhar Narayanan · 2026',
    location: 'Utrecht, Netherlands',
  },

  /* ── PROJECTS ──
     id          → matches data-project="..." in the HTML skeleton
     status      → badge text  |  live: true → green badge
     title       → HTML allowed (use <br /> for line breaks)
     desc        → HTML allowed (<strong> etc)
     tags        → array of strings
     links       → array of { label, url }
  ── */
  projects: [

    {
      id:     'universal-text',
      status: { text: 'Backend Required', live: false },
      title:  'Universal<br />Text Converter',
      desc:   `Merges and converts <strong>mixed-format documents</strong> — DOCX, DOC, RTF, ODT, PDF, TXT —
               into a single unified PDF using LibreOffice as the conversion engine. Built for pipelines
               where document provenance is messy and output consistency matters.`,
      tags:   ['Python', 'LibreOffice', 'Document Processing', 'PDF'],
      links:  [{ label: 'GitHub ↗', url: 'https://github.com/ShekharNarayanan' }],
    },

    {
      id:     'companies-house',
      status: { text: 'Released · MIT License', live: true },
      title:  'Companies House<br />API Integration',
      desc:   `A Python integration with the <strong>UK Companies House Open API</strong>, built at
               Tilburg University. Queries company data programmatically, handles authentication,
               pagination and rate limiting, and returns clean structured output — ready for
               downstream analysis pipelines.`,
      tags:   ['Python', 'REST API', 'Companies House', 'Data Pipeline', 'Tilburg University'],
      links:  [{ label: 'GitLab ↗', url: 'https://gitlab.uvt.nl/tsb-rst/os_companies_house_api_integration' }],
    },

    {
      id:     'covert-cvep',
      status: { text: 'Published · Graz BCI 2024', live: true },
      title:  'Covert<br />C-VEP BCI',
      desc:   `A <strong>gaze-independent brain-computer interface</strong> for people with late-stage ALS.
               Built a full ML pipeline on top of raw EEG: preprocessing with <strong>MNE-Python</strong>,
               feature extraction via <strong>CCA</strong> on SSVEP responses, and classification using
               <strong>LDA and scikit-learn</strong>. Participants decoded intent purely from occipital brain
               signals — no eye movement required. Published at the 2024 Graz BCI Conference.`,
      tags:   ['Python', 'MNE-Python', 'scikit-learn', 'CCA', 'LDA', 'EEG', 'BCI', 'ALS'],
      links:  [
        { label: 'arXiv Paper ↗', url: 'https://arxiv.org/pdf/2404.00031' },
        { label: 'GitHub ↗',      url: 'https://github.com/ShekharNarayanan/Covert_CVEP' },
      ],
    },

    {
      id:     'eda-ecg',
      status: { text: 'Released · MIT License', live: true },
      title:  'EDA &amp; ECG<br />Preprocessing',
      desc:   `A reproducible <strong>ML-ready preprocessing pipeline</strong> for electrodermal activity
               and ECG biosignals, built at Tilburg University. Takes raw wearable sensor data and outputs
               clean, analysis-ready features: bandpass filtering, artifact removal, <strong>SCR peak
               detection via NeuroKit2</strong>, HRV feature extraction with <strong>SciPy</strong>,
               and structured <strong>pandas</strong> DataFrames ready for downstream scikit-learn pipelines.`,
      tags:   ['Python', 'NeuroKit2', 'scikit-learn', 'pandas', 'SciPy', 'EDA', 'ECG', 'HRV'],
      links:  [{ label: 'GitLab ↗', url: 'https://gitlab.uvt.nl/tsb-rst/eda_ecg_preprocessing' }],
    },

    {
      id:     'stocks-tracker',
      status: { text: 'Live', live: true },
      title:  'Live Stocks<br />Tracker',
      desc:   `A Streamlit web-app to scan <strong>US large-, mid- and small-cap</strong>
               universes for top daily gainers and losers. Powered by yfinance and Wikipedia
               scrapes — <strong>no paid API keys</strong> needed. Includes a Gmail-authenticated
               personal watchlist with RSI, % change and 30-day volume, backed by Supabase.`,
      tags:   ['Python', 'Streamlit', 'yfinance', 'Supabase', 'Google OAuth', 'RSI', 'Data Viz'],
      links:  [
        { label: 'View Live App ↗', url: 'https://livestockstracker-foryou.streamlit.app/' },
        { label: 'GitHub ↗',        url: 'https://github.com/ShekharNarayanan/live_stocks_tracker' },
      ],
    },

    {
      id:     'ecg-arrhythmia',
      status: { text: 'In Progress', live: false },
      title:  'ECG Arrhythmia<br />Detection',
      desc:   `End-to-end <strong>ML pipeline for cardiac arrhythmia classification</strong> on raw ECG
               signals from the MIT-BIH database. Reads signals with <strong>WFDB</strong>, extracts
               time-domain and frequency features, then trains and benchmarks <strong>XGBoost and
               Random Forest</strong> classifiers with cross-validation using <strong>scikit-learn</strong>.
               Experiment tracking and model versioning handled by <strong>MLflow</strong> — deployable
               from a single pipeline call.`,
      tags:   ['Python', 'XGBoost', 'Random Forest', 'scikit-learn', 'MLflow', 'WFDB', 'MIT-BIH'],
      links:  [{ label: 'GitHub ↗', url: 'https://github.com/ShekharNarayanan' }],
    },

  ],
};