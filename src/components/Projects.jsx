import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';
import ProjectModal from './ProjectModal';

/**
 * Projects Section
 * ─────────────────────────────────
 * Filterable project cards with teal/coral palette.
 */

const categories = ['Finance Analytics', 'Marketing Analytics', 'Data Engineering', 'Business Intelligence'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Finance Analytics');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-divider" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-sand-900 dark:text-sand-50">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sand-600 dark:text-sand-400 mt-4 max-w-xl mx-auto">
            Explore my work in data analysis, engineering, and business intelligence
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeFilter === cat
                  ? 'btn-primary shadow-none py-2.5 px-5'
                  : 'card text-sand-700 dark:text-sand-300 hover:text-teal-700 dark:hover:text-teal-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * Project Card
 * ─────────────────────────────────
 */
function ProjectCard({ project, onClick }) {
  const [imgError, setImgError] = useState(false);

  const categoryStyles = {
    'Finance Analytics': {
      badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
      emoji: '📈',
    },
    'Marketing Analytics': {
      badge: 'bg-teal-50 text-teal-700 dark:bg-teal-800/40 dark:text-teal-200',
      emoji: '📊',
    },
    'Data Engineering': {
      badge: 'bg-teal-200/60 text-teal-900 dark:bg-teal-800/30 dark:text-teal-200',
      emoji: '⚙️',
    },
    'Business Intelligence': {
      badge: 'bg-coral-100 text-coral-700 dark:bg-coral-500/15 dark:text-coral-300',
      emoji: '💡',
    },
  };

  const style = categoryStyles[project.category] || { badge: '', emoji: '📁' };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group cursor-pointer card overflow-hidden"
    >
      {/* Cover Image */}
      <div className="relative h-48 bg-gradient-to-br from-teal-100 to-coral-100 dark:from-teal-900/30 dark:to-coral-900/20 overflow-hidden">
        {!imgError ? (
          <img
            src={project.cover_image}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">{style.emoji}</div>
              <span className="text-sm font-medium text-sand-600 dark:text-sand-400">{project.category}</span>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${style.badge}`}>
          {project.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-sand-900 dark:text-white mb-2 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm text-sand-600 dark:text-sand-400 mb-4 line-clamp-2">
          {project.summary}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-lg border border-teal-200/40 dark:border-teal-700/30"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium text-coral-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
