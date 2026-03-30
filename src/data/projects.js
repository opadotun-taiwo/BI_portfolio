/**
 * Projects Data
 * ─────────────────────────────────
 * Single source of truth for all portfolio projects.
 * To add a new project, simply append a new object to this array.
 */

const projects = [
  {
    id: 1,
    title: "Loan Application Analytics – Credit Risk Monitoring",
    category: "Data Analytics",
    cover_image: "/images/loan/main.png",
    images: [
      "/images/loan/1.png",
      "/images/loan/2.png",
      "/images/loan/3.png",
    ],
    summary: "Analyzed loan application data to assess credit risk, repayment behavior, and profitability, enabling data-driven decisions on whether to continue the loan feature.",

    techStack: ["Power BI", "DAX", "MySQL", "Power Automate"],

    story: {
      objective: "To evaluate loan performance, measure risk (good vs bad loans), and determine if the loan application feature should be continued.",

      data_source: "MySQL database containing loan applications, repayment data, and customer/state information",

      tools: ["Power BI", "DAX", "MySQL", "Power Automate"],

      modeling: "Star-like schema with fact table (financial_loan) and dimension table (state_mapping) joined via state code",
      approach: "Built DAX measures (CALCULATE, COUNTROWS, DIVIDE) to analyze loan performance, profitability, and good-to-bad loan ratios. Designed interactive dashboards for state-level and overall insights, and automated reporting using Power Automate.",

      features: "Interactive dashboard with KPI tracking, state-level analysis, profitability insights, and automated CFO reporting",
      challenges: [
        "MySQL password access issue → resolved by resetting root password using init-file method",
        "State code mapping (e.g., CA → California) → created mapping table for accurate segmentation",
        "Automating state-level reports using Power Automate → required DAX query optimization and formatting"
      ],
      outcome: "Identified a strong 6:1 good-to-bad loan ratio (~86% repayment rate), leading to the recommendation to continue the loan feature with improved targeting (e.g., employees with 10+ years experience)."
    },
    link: "https://github.com/opadotun-taiwo/creadit_risk_monitoring",
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
    link: "https://github.com/opadotun-taiwo/data-visualization",
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
    link: "https://github.com/opadotun-taiwo/data-visualization",
    demo: ""
  },
  {
    id: 4,
    title: "RFM Analysis for Customer Segmentation & Revenue Growth",
    category: "Data Analytics",
    cover_image: "/images/RFM/main.png",
    images: [
      "/images/RFM/1.jpg",
      "/images/RFM/main.png"
    ],
    summary: "Segmented customers using RFM analysis to identify high-value and dormant users, leading to targeted reactivation strategies and measurable revenue growth.",

    techStack: ["SQL", "BigQuery", "Metabase"],

    story: {
      objective: "To segment customers based on behavior (recency, frequency, and monetary value) and drive targeted strategies to improve retention and revenue.",

      data_source: "Customer transaction data stored in BigQuery",

      tools: ["SQL", "BigQuery", "Metabase"],

      modeling: "Aggregated customer-level dataset using SQL to compute Recency, Frequency, and Monetary (RFM) metrics",

      approach: "Wrote SQL queries to calculate RFM features, scored and segmented customers into categories (e.g., high-value, loyal, at-risk, dormant). Visualized segments and trends using Metabase dashboards for business stakeholders.",

      features: "Customer segmentation dashboard highlighting high-value customers, churn risk, and revenue contribution by segment",

      challenges: [
        "Defining meaningful RFM thresholds for segmentation",
        "Handling inconsistent transaction history across customers",
        "Translating raw SQL outputs into business-friendly segments"
      ],

      outcome: "Successfully reactivated 20% of dormant customers within one month, resulting in a 5.2% increase in overall revenue."
    },

    link: "https://github.com/opadotun-taiwo/RFM",
    demo: ""
  },
  {
    id: 5,
    title: "Weather ELT Data Pipeline",
    category: "Data Engineering",
    cover_image: "/images/weather/main.png",
    images: ["/images/weather/1.png", "/images/weather/2.png"],
    summary: "Built an automated daily weather analytics pipeline from API to warehouse.",
    techStack: ["Python", "Docker", "Airflow", "BigQuery", "dbt"],
    story: {
      objective: "Build ELT pipeline from API to warehouse",
      data_source: "USA Weather API",
      tools: ["Python", "Docker", "Airflow", "BigQuery", "dbt", "Superset"],
      modeling: "",
      approach: "API ingestion(Python script) → warehouse(Big query) → transformation(dbt) → orchestration(Airflow) + Visualization (Superset)",
      features: "",
      challenges: [],
      outcome: "Automated daily weather analytics pipeline"
    },
    link: "https://github.com/opadotun-taiwo/modern-elt-bigquery",
    demo: ""
  },
  {
    id: 6,
    title: "Monthly ELT batch data processing for NYC Taxi Data Pipeline (GCP)",
    category: "Data Engineering",
    cover_image: "/images/taxi/main.png",
    images: ["/images/taxi/1.png", "/images/taxi/2.png"],
    summary: "Built production-grade pipeline for large-scale taxi data with schema modeling for BI reporting and ML.",
    techStack: ["dlt", "dbt", "BigQuery", "GCS", "Python", "Superset"],
    story: {
      objective: "Build production-grade pipeline for large-scale taxi data",
      data_source: "NYC taxi data",
      tools: ["dlt", "BigQuery", "GCS", "Python", "Superset"],
      modeling: "",
      approach: "Idempotent ingestion + schema evolution(dlt) + GCS (data staging) + Data warehousing (Big query) +schema modeling for reporting and ml feature model (dbt) + Orchestration (Airflow) + Visualization (Superset)",
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
    link: "https://github.com/opadotun-taiwo/pipeline_observability_monitoring",
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
      tools: ["Python", "Duckdb", "Qwen2.5 LLM", "Streamlit"],
      modeling: "",
      approach: "Python script + Prompt engineering + schema injection + SQL execution loop + Streamlit UI",
      features: "",
      challenges: [
        "LLM hallucination → fixed via schema grounding"
      ],
      outcome: "Democratized data access across teams"
    },
    link: "https://github.com/opadotun-taiwo/NLP_datawarehouse",
    demo: ""
  },
  {
    id: 9,
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
    link: "https://github.com/opadotun-taiwo/data-visualization",
    demo: ""
  }
];

export default projects;
