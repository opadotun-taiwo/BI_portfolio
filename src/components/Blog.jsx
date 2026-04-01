import { motion } from 'framer-motion';
import { HiPencilAlt, HiExternalLink, HiArrowRight } from 'react-icons/hi';

/**
 * Blog Section
 * ─────────────────────────────────
 * Links to external blog posts.
 */

const posts = [
  {
    title: 'Chrun prediction for fintech app is more than a dashboard',
    category: 'Data Analytics',
    readTime: '8 min read',
    link: 'https://www.linkedin.com/pulse/why-churn-dashboards-longer-enough-taiwo-opadotun-5unef/', // Replace with external blog link
  },
  {
    title: 'Natural language processing for SQL query adoption',
    category: 'Business Intelligence',
    readTime: '6 min read',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7440046015899922432/', // Replace with external blog link
  },
  {
    title: 'Power BI DAX logic for the new tax law',
    category: 'Business Intelligence',
    readTime: '6 min read',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7440046015899922432/', // Replace with external blog link
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
          <div className="mt-8 flex justify-center">
            <a
              href="https://medium.com/@opadotun-taiwo" // Or insert the actual blog URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl transition-all shadow-sm shadow-teal-500/20"
            >
              Visit My Blog <HiArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card p-6 border-dashed relative overflow-hidden block"
            >
              {/* Published Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 rounded-full mb-4 border border-teal-200/40 dark:border-teal-500/15">
                <HiExternalLink className="w-3.5 h-3.5" />
                Read Article
              </span>

              <h3 className="font-bold text-lg text-sand-900 dark:text-white mb-3 line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
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
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-sand-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <span className="text-sm font-semibold text-teal-700 dark:text-teal-300 flex items-center gap-1">
                  Read on Blog <HiExternalLink className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
