/* ─────────────────────────────────────────
   content.js — Shekhar Narayanan Portfolio
   Edit this file to update all page text.
   ───────────────────────────────────────── */

const CONTENT = {

  /* ── META ── */
  pageTitle: 'Shekhar Narayanan — Portfolio',

  /* ── NAV ── */
  nav: {
    github:   'https://github.com/ShekharNarayanan',
    linkedin: 'https://www.linkedin.com/in/shekharnarayanan',
  },

  /* ── HERO ── */
  hero: {
    label:     'Software Engineer · Utrecht, Netherlands',
    firstName: 'Shekhar',
    lastName:  'Narayanan',
    tagline:   'Machine Learning Data Scientist. I build pipelines that go from raw data to actionable insights.',
    image:     'media/hero.jpg',
    ticker: [
      'scikit-learn', 'XGBoost', 'Random Forest', 'MLflow',
      'MNE-Python', 'CCA', 'LDA', 'NeuroKit2',
      'WFDB', 'OpenCV', 'pandas', 'NumPy', 'SciPy', 'MATLAB', 'SQL',
    ],
  },

  /* ── ABOUT ── */
  about: {
    heading: 'Who I am',
    p1: `I have four years of experience working data heavy python projects,
    from dashboards to complete data pipelines. My background is in electronics engineering and neurotechnology,
    which means I spend a lot of time working with noisy, real-world physiological datasets.
    I have experience with machine learning frameworks like <strong>scikit-learn</strong>, MLOps tools like <strong>MLFlow</strong> 
    which I learnt deploying ML models like <strong>XGBoost, Logistic Regression, CCA and LDA</strong>. I am comfortable
    with data wrangling, feature extraction, model selection/evaluation and deployment.`,
    p2: `Currently a Software Engineer and Data Steward at Tilburg University, where I write research software
    and advise scientists in the School of Social and Behavioral Sciences. Before that I led a
    <strong>brain-computer interface project at the Donders Institute</strong>, resulting in a first-author
    publication at the Graz BCI Conference 2024. I am open to
    <strong>part-time collaborations</strong> in wearables, biosensors and health-tech.`,
  },

  /* ── FOOTER ── */
  footer: {
    heading:  "Let's Connect",
    tagline:  'Open to collaborations · Utrecht, NL',
    bottom:   'Shekhar Narayanan · 2026',
    location: 'Utrecht, Netherlands',
  },


  /* ── CATEGORIES ──
     These control the nav links, hero pills, section tags and headings.
     Change a label here and it updates everywhere automatically.
     navLabel   → nav bar link text and hero pill text
     tag        → the small "// ..." label above each section heading
     title      → the large section heading (HTML allowed for line breaks) */
  categories: [
    {
      id:       'utility',
      navLabel: 'Software Dev',
      tag:      '// Software Development',
      title:    'Software Development',
    },
    {
      id:       'ml-ds',
      navLabel: 'ML & Data Science',
      tag:      '// Machine Learning &amp; Data Science',
      title:    'ML &amp;<br />Data Science',
    },
    {
      id:       'independent',
      navLabel: 'Independent',
      tag:      '// Independent',
      title:    'Independent',
    },
  ],

  /* ── PROJECTS ── */
  projects: [

    /* ── UTILITY ── */
    {
      id:     'universal-text',
      status: { text: 'Backend Required', live: false },
      title:  'Universal<br />Text Converter',
      desc:   `Merges and converts <strong>mixed-format documents</strong> (DOCX, DOC, RTF, ODT, PDF, TXT)
               into a single unified PDF using LibreOffice as the conversion engine. Built for research
               pipelines where documents come from many sources and consistent output format matters.`,
      tags:   ['Python', 'LibreOffice', 'Document Processing', 'PDF'],
      links:  [{ label: 'GitHub ↗', url: 'https://github.com/ShekharNarayanan' }],
    },

    {
      id:     'youtube-api',
      status: { text: 'Released · MIT License', live: true },
      title:  'YouTube API<br />Data Extraction',
      desc:   `A Python tool for extracting structured data from YouTube using the
               <strong>YouTube Data API v3</strong>, built at Tilburg University (TSB-RST lab)
               for social science researchers. Pulls video metadata, view counts and engagement stats,
               then goes a level deeper to extract <strong>comments and threaded replies</strong>
               per video. Handles quota management, pagination and rate limiting automatically,
               and returns everything as clean <strong>pandas</strong> DataFrames ready for analysis.`,
      tags:   ['Python', 'YouTube API', 'pandas', 'REST API', 'Comment Extraction', 'Tilburg University'],
      links:  [{ label: 'GitLab ↗', url: 'https://gitlab.uvt.nl/tsb-rst/youtube_api_data_extraction' }],
    },

    {
      id:     'companies-house',
      status: { text: 'Released · MIT License', live: true },
      title:  'Companies House<br />API Integration',
      desc:   `A Python integration with the <strong>UK Companies House Open API</strong>, built at
               Tilburg University as part of broader data collection work for researchers in the
               School of Social and Behavioral Sciences. Handles authentication, pagination and
               rate limiting, and returns structured output ready for downstream analysis.`,
      tags:   ['Python', 'REST API', 'Companies House', 'Data Pipeline', 'Tilburg University'],
      links:  [{ label: 'GitLab ↗', url: 'https://gitlab.uvt.nl/tsb-rst/os_companies_house_api_integration' }],
    },

    /* ── ML & DATA SCIENCE ── */
    {
      id:     'covert-cvep',
      status: { text: 'Published · Graz BCI 2024', live: true },
      title:  'Covert<br />C-VEP BCI',
      desc:   `A <strong>gaze-independent brain-computer interface</strong> for people with late-stage ALS,
               built in Python in under 10 months. I ran EEG data collection with over 20 participants,
               preprocessed signals with <strong>MNE-Python</strong>, extracted features using
               <strong>CCA</strong>, and classified intent with <strong>LDA via scikit-learn</strong>.
               No eye movement required. First author publication at Graz BCI Conference 2024.`,
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
      desc:   `A preprocessing pipeline for <strong>electrodermal activity and ECG biosignals</strong>
               built at Tilburg University (TSB-RST lab). Handles bandpass filtering, artifact removal,
               <strong>SCR peak detection via NeuroKit2</strong> and HRV feature extraction with
               <strong>SciPy</strong>. Outputs structured <strong>pandas</strong> DataFrames
               ready for classification. Planning to extend with Elastic Net and SVM models
               to classify experimental conditions.`,
      tags:   ['Python', 'NeuroKit2', 'scikit-learn', 'pandas', 'SciPy', 'EDA', 'ECG', 'HRV'],
      links:  [{ label: 'GitLab ↗', url: 'https://gitlab.uvt.nl/tsb-rst/eda_ecg_preprocessing' }],
    },

    {
      id:     'stocks-tracker',
      status: { text: 'Live', live: true },
      title:  'Live Stocks<br />Tracker',
      desc:   `An open-source, ad-free analytics dashboard for exploring US stock trends across
               large-, mid- and small-cap universes. I built a <strong>SQL-backed data layer</strong>
               using Supabase, scraped ticker lists from Wikipedia, pulled price data with
               <strong>yfinance</strong> and visualized RSI, percentage change and 30-day volume.
               Deployed via Streamlit with Google OAuth for personalised watchlists.`,
      tags:   ['Python', 'Streamlit', 'SQL', 'yfinance', 'Supabase', 'Google OAuth', 'RSI'],
      links:  [
        { label: 'View Live App ↗', url: 'https://livestockstracker-foryou.streamlit.app/' },
        { label: 'GitHub ↗',        url: 'https://github.com/ShekharNarayanan/live_stocks_tracker' },
      ],
    },

    {
      id:     'ecg-arrhythmia',
      status: { text: 'In Progress', live: false },
      title:  'ECG Arrhythmia<br />Detection',
      desc:   `An independent ML project to classify heartbeats from the MIT-BIH Arrhythmia database.
               I read raw signals with <strong>WFDB</strong>, extract time-domain and frequency features,
               and benchmark <strong>XGBoost and Random Forest</strong> classifiers with cross-validation
               using <strong>scikit-learn</strong>. Experiment tracking and model versioning handled
               by <strong>MLflow</strong> so the whole pipeline runs from a single call.`,
      tags:   ['Python', 'XGBoost', 'Random Forest', 'scikit-learn', 'MLflow', 'WFDB', 'MIT-BIH'],
      links:  [{ label: 'GitHub ↗', url: 'https://github.com/ShekharNarayanan' }],
    },

  ],
};