import { motion } from 'framer-motion';
import { HiPencilAlt, HiClock } from 'react-icons/hi';

/**
 * Blog Section (Placeholder)
 * ─────────────────────────────────
 * Coming-soon section with teal/coral palette.
 */

const upcomingPosts = [
  {
    title: 'Building Production-Ready Data Pipelines with dbt & BigQuery',
    category: 'Data Engineering',
    readTime: '8 min read',
  },
  {
    title: 'Power BI DAX Patterns Every Analyst Should Know',
    category: 'Business Intelligence',
    readTime: '6 min read',
  },
  {
    title: 'From SQL to Insights: A Practical Cohort Analysis Guide',
    category: 'Data Analytics',
    readTime: '10 min read',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 relative">
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
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">Blog</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-sand-900 dark:text-sand-50">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-sand-600 dark:text-sand-400 mt-4 max-w-xl mx-auto">
            Sharing knowledge and lessons from working with data
          </p>
        </motion.div>

        {/* Coming Soon Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card p-6 border-dashed relative overflow-hidden"
            >
              {/* Coming Soon Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-coral-600 dark:text-coral-400 bg-coral-50 dark:bg-coral-500/10 rounded-full mb-4 border border-coral-200/40 dark:border-coral-500/15">
                <HiClock className="w-3.5 h-3.5" />
                Coming Soon
              </span>

              <h3 className="font-bold text-lg text-sand-900 dark:text-white mb-3 line-clamp-2">
                {post.title}
              </h3>

              <div className="flex items-center gap-3 text-sm text-sand-500">
                <span className="px-2.5 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-lg border border-teal-200/30 dark:border-teal-700/20">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <HiPencilAlt className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-sand-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">Stay Tuned ✨</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
