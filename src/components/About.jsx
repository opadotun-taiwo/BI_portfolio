import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiLightBulb } from 'react-icons/hi';

/**
 * About Section
 * ─────────────────────────────────
 * Profile intro with highlight cards using teal/coral palette.
 */

const highlights = [
  {
    icon: HiBriefcase,
    title: '3+ Years',
    desc: 'Professional experience in data analytics and BI',
    accent: 'from-teal-700 to-teal-500',
  },
  {
    icon: HiAcademicCap,
    title: 'Multi-Domain',
    desc: 'Fintech and consulting',
    accent: 'from-coral-500 to-coral-400',
  },
  {
    icon: HiLightBulb,
    title: 'Business Impact',
    desc: 'Translating data into actionable strategies',
    accent: 'from-teal-400 to-teal-300',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-divider" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-sand-900 dark:text-sand-50">
            Driven by <span className="gradient-text">Data</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-sand-600 dark:text-sand-300 leading-relaxed mb-6">
              I'm <strong className="text-sand-900 dark:text-white">Opadotun Taiwo</strong>, a data analyst with 3+ years of experience turning raw data into actionable insights across fintech, consulting, and development programs.
            </p>
            <p className="text-sand-600 dark:text-sand-300 leading-relaxed mb-6">
              My expertise spans the full data lifecycle — from building scalable <strong className="text-teal-700 dark:text-teal-300">data pipelines</strong> and <strong className="text-teal-700 dark:text-teal-300">warehouse architectures</strong> to crafting executive dashboards that drive strategic decisions.
            </p>
            <p className="text-sand-600 dark:text-sand-300 leading-relaxed">
              I thrive at the intersection of data engineering and business intelligence, where I connect technical implementation with real business outcomes. Whether building an ETL pipeline from scratch or designing an interactive Power BI dashboard, I focus on <strong className="text-coral-500 dark:text-coral-400">clarity, impact, and scalability</strong>.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card flex items-start gap-4 p-5"
              >
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-lg`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-sand-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-sand-600 dark:text-sand-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
