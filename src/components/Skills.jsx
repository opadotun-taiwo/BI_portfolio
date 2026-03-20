import { motion } from 'framer-motion';
import { HiDatabase, HiChartBar, HiCog, HiCube, HiCode, HiCloud, HiServer, HiChip } from 'react-icons/hi';

/**
 * Skills Section
 * ─────────────────────────────────
 * Grouped skill cards with teal/coral palette.
 */

const skillGroups = [
  {
    category: 'Data Analysis',
    icon: HiChartBar,
    color: 'from-teal-700 to-teal-500',
    tagBg: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200/50 dark:border-teal-700/30 text-teal-800 dark:text-teal-300',
    skills: [
      { name: 'SQL', icon: HiDatabase },
      { name: 'Python', icon: HiCode },
      { name: 'Excel', icon: HiChartBar },
    ],
  },
  {
    category: 'Business Intelligence',
    icon: HiCube,
    color: 'from-coral-500 to-coral-400',
    tagBg: 'bg-coral-50 dark:bg-coral-500/10 border-coral-200/50 dark:border-coral-600/20 text-coral-700 dark:text-coral-300',
    skills: [
      { name: 'Power BI', icon: HiChartBar },
      { name: 'Looker Studio', icon: HiChip },
      { name: 'Metabase', icon: HiChip },
      { name: 'Model integration', icon: HiChip },
      { name: 'N8N', icon: HiChip },
    ],
  },
  {
    category: 'Data Engineering',
    icon: HiCog,
    color: 'from-teal-500 to-teal-300',
    tagBg: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200/50 dark:border-teal-700/30 text-teal-700 dark:text-teal-300',
    skills: [
      { name: 'dbt', icon: HiDatabase },
      { name: 'BigQuery', icon: HiCloud },
      { name: 'Data Pipelines', icon: HiServer },
      { name: 'Docker', icon: HiServer },
      { name: 'Airflow', icon: HiServer },
      { name: 'DLT', icon: HiServer },
    ],
  },
  {
    category: 'Data platform',
    icon: HiDatabase,
    color: 'from-coral-600 to-coral-500',
    tagBg: 'bg-coral-50 dark:bg-coral-500/10 border-coral-200/50 dark:border-coral-600/20 text-coral-600 dark:text-coral-300',
    skills: [
      { name: 'Microsoft Fabric', icon: HiCube },
      { name: 'Python', icon: HiServer }
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-sand-900 dark:text-sand-50">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="card p-6"
            >
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white shadow-lg`}>
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-sand-900 dark:text-white">{group.category}</h3>
              </div>

              {/* Individual Skills */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all cursor-default ${group.tagBg}`}
                  >
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
