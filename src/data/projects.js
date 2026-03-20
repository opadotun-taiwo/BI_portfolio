/**
 * Projects Data
 * ─────────────────────────────────
 * Single source of truth for all portfolio projects.
 * To add a new project, simply append a new object to this array.
 */

const projects = [
  {
    id: 1,
    title: "HR Analytics – Workforce Optimization",
    category: "Data Analytics",
    cover_image: "/images/hr/main.png",
    images: ["/images/hr/1.png", "/images/hr/2.png", "/images/hr/3.png"],
    summary: "Interrogated HR database to extract actionable insights to improve staff strength and operational efficiency.",
    techStack: ["Power BI", "DAX"],
    story: {
      objective: "Interrogated HR database to extract actionable insights to improve staff strength and operational efficiency.",
      data_source: "Excel live sheet",
      tools: ["Power BI", "DAX"],
      modeling: "Two-table schema with Employee ID relationship",
      approach: "Built DAX measures (CALCULATE, IF, COUNTROWS) for promotion and appraisal tracking",
      features: "",
      challenges: [
        "Ambiguity in promotion criteria → resolved via stakeholder interviews",
        "Missing location data",
        "Complex performance rating logic → validated with stakeholders"
      ],
      outcome: "Delivered a comprehensive workforce dashboard for decision-making"
    },
    link: "https://github.com/opadotun-taiwo",
    demo: ""
  },
  {
    id: 2,
    title: "Customer Call Center Analytics",
    category: "Data Analytics",
    cover_image: "/images/callcenter/main.png",
    images: ["/images/callcenter/1.png", "/images/callcenter/2.png"],
    summary: "Evaluated employee efficiency and call utilization through interactive dashboards.",
    techStack: ["Power BI", "SQL", "Power Query"],
    story: {
      objective: "Evaluate employee efficiency and call utilization",
      data_source: "MySQL Database",
      tools: ["Power BI", "SQL", "Power Query"],
      modeling: "Star schema with calendar and manager dimension",
      approach: "Built slicers and validated results with SQL queries",
      features: "",
      challenges: [],
      outcome: "Improved visibility into call performance and routing efficiency"
    },
    link: "https://github.com/opadotun-taiwo",
    demo: ""
  },
  {
    id: 3,
    title: "Marketing Cohort Analysis (User Retention)",
    category: "Data Analytics",
    cover_image: "/images/cohort/main.png",
    images: ["/images/cohort/1.png", "/images/cohort/2.png"],
    summary: "Analyzed user retention using cohort analysis to provide actionable marketing insights.",
    techStack: ["SQL", "Metabase"],
    story: {
      objective: "Analyze user retention using cohort analysis",
      data_source: "Google BigQuery",
      tools: ["SQL", "Metabase"],
      modeling: "",
      approach: "Built cohort SQL model tracking monthly retention",
      features: "",
      challenges: [
        "Mismatch with PostHog → resolved via data audit"
      ],
      outcome: "Provided accurate retention insights for marketing decisions"
    },
    link: "",
    demo: ""
  },
  {
    id: 4,
    title: "Executive Sales Dashboard",
    category: "Business Intelligence",
    cover_image: "/images/sales/main.png",
    images: ["/images/sales/1.png", "/images/sales/2.png"],
    summary: "Provided executive-level sales insights with interactive YoY metrics.",
    techStack: ["Excel"],
    story: {
      objective: "Provide executive-level sales insights",
      data_source: "",
      tools: ["Excel"],
      modeling: "",
      approach: "Built interactive dashboard with YoY metrics",
      features: "",
      challenges: [],
      outcome: "Enabled leadership to track performance trends easily"
    },
    link: "",
    demo: "https://youtu.be/R8gWQYKUGLw"
  },
  {
    id: 5,
    title: "Weather Data Pipeline",
    category: "Data Engineering",
    cover_image: "/images/weather/main.png",
    images: ["/images/weather/1.png", "/images/weather/2.png"],
    summary: "Built an automated daily weather analytics pipeline from API to warehouse.",
    techStack: ["Python", "Docker", "Airflow", "BigQuery", "dbt"],
    story: {
      objective: "Build pipeline from API to warehouse",
      data_source: "",
      tools: ["Python", "Docker", "Airflow", "BigQuery", "dbt"],
      modeling: "",
      approach: "API ingestion → warehouse → transformation → orchestration",
      features: "",
      challenges: [],
      outcome: "Automated daily weather analytics pipeline"
    },
    link: "https://github.com/opadotun-taiwo/modern-elt-bigquery",
    demo: ""
  },
  {
    id: 6,
    title: "Monthly batch data processing for NYC Taxi Data Pipeline (GCP)",
    category: "Data Engineering",
    cover_image: "/images/taxi/main.png",
    images: ["/images/taxi/1.png", "/images/taxi/2.png"],
    summary: "Built production-grade pipeline for large-scale taxi data with star schema modeling.",
    techStack: ["dlt", "dbt", "BigQuery", "GCS", "Python"],
    story: {
      objective: "Build production-grade pipeline for large-scale taxi data",
      data_source: "",
      tools: ["dlt", "BigQuery", "GCS", "Python"],
      modeling: "",
      approach: "Idempotent ingestion + schema evolution + star schema modeling",
      features: "",
      challenges: [
        "Large file handling",
        "Preventing duplicates"
      ],
      outcome: "Scalable analytics-ready data platform"
    },
    link: "https://github.com/opadotun-taiwo/data_eng_end_to_end_GCP",
    demo: ""
  },
  {
    id: 7,
    title: "Data Observability & Alerting System",
    category: "Data Engineering",
    cover_image: "/images/observability/main.png",
    images: ["/images/observability/1.png", "/images/observability/2.png"],
    summary: "Automated monitoring and alerting to reduce failure detection time to seconds.",
    techStack: ["Airflow", "Python", "ClickHouse"],
    story: {
      objective: "Automate monitoring and alerting",
      data_source: "",
      tools: ["Airflow", "Python", "ClickHouse"],
      modeling: "",
      approach: "DAG + Teams webhook alerts",
      features: "",
      challenges: [],
      outcome: "Reduced failure detection time to seconds"
    },
    link: "",
    demo: ""
  },
  {
    id: 8,
    title: "NLP-to-SQL Data Interface",
    category: "Business Intelligence",
    cover_image: "/images/nlp/main.png",
    images: ["/images/nlp/1.png", "/images/nlp/2.png"],
    summary: "Enabled non-technical users to query data using natural language via LLM-powered interface.",
    techStack: ["Python", "BigQuery", "LLM"],
    story: {
      objective: "Enable non-technical users query data using natural language",
      data_source: "",
      tools: ["Python", "BigQuery", "LLM"],
      modeling: "",
      approach: "Prompt engineering + schema injection + SQL execution loop",
      features: "",
      challenges: [
        "LLM hallucination → fixed via schema grounding"
      ],
      outcome: "Democratized data access across teams"
    },
    link: "https://github.com/opadotun-taiwo/NLP_datawarehouse",
    demo: ""
  }
];

export default projects;
