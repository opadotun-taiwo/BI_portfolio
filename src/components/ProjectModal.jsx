import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight, HiPlay } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

/**
 * ProjectModal Component
 * ─────────────────────────────────
 * Image carousel, structured project story, CTA buttons.
 * Teal/coral palette throughout.
 */

export default function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imgErrors, setImgErrors] = useState({});

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  const handleImgError = (idx) => {
    setImgErrors((prev) => ({ ...prev, [idx]: true }));
  };

  const { story } = project;

  const categoryStyles = {
    'Data Analytics': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
    'Data Engineering': 'bg-teal-200/60 text-teal-900 dark:bg-teal-800/30 dark:text-teal-200',
    'Business Intelligence': 'bg-coral-100 text-coral-700 dark:bg-coral-500/15 dark:text-coral-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-sand-950/60 backdrop-blur-md" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-sand-900 rounded-3xl shadow-2xl overflow-hidden border border-teal-200/20 dark:border-teal-800/20"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-sand-900/50 hover:bg-sand-900/70 text-white transition-colors"
          aria-label="Close modal"
        >
          <HiX className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] modal-scroll">
          {/* ── Image Carousel ── */}
          <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-teal-100 to-coral-100 dark:from-teal-900/30 dark:to-coral-900/20">
            {!imgErrors[currentImage] ? (
              <img
                src={project.images[currentImage]}
                alt={`${project.title} - Screenshot ${currentImage + 1}`}
                loading="lazy"
                onError={() => handleImgError(currentImage)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-3">📊</div>
                  <p className="text-sand-700 dark:text-sand-300 font-medium">{project.title}</p>
                  <p className="text-sm text-sand-400 mt-1">Screenshot {currentImage + 1}</p>
                </div>
              </div>
            )}

            {/* Carousel Controls */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-sand-900/40 hover:bg-sand-900/60 text-white transition-colors"
                >
                  <HiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-sand-900/40 hover:bg-sand-900/60 text-white transition-colors"
                >
                  <HiChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentImage
                          ? 'bg-white w-6'
                          : 'bg-white/50 w-2 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── Modal Body ── */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Title & Category */}
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${categoryStyles[project.category] || ''}`}>
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-sand-900 dark:text-white">
                {project.title}
              </h2>
            </div>

            {/* Tools / Tech Stack */}
            {story.tools?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {story.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-sm font-medium bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-xl border border-teal-200/50 dark:border-teal-700/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}

            {/* ── Story Sections ── */}
            <div className="space-y-6">
              {story.objective && <StoryBlock title="🎯 Objective" content={story.objective} />}
              {story.data_source && <StoryBlock title="📁 Data Source" content={story.data_source} />}
              {story.modeling && <StoryBlock title="🗂️ Data Modeling" content={story.modeling} />}
              {story.approach && <StoryBlock title="🔬 Approach / Methodology" content={story.approach} />}
              {story.features && <StoryBlock title="✨ Key Features" content={story.features} />}

              {/* Challenges */}
              {story.challenges?.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-sand-900 dark:text-white mb-3">
                    ⚡ Challenges & Solutions
                  </h3>
                  <ul className="space-y-2">
                    {story.challenges.map((challenge, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-sand-700 dark:text-sand-300 rounded-xl p-3 bg-coral-50/50 dark:bg-coral-500/5 border border-coral-200/30 dark:border-coral-500/10"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-coral-100 dark:bg-coral-500/20 text-coral-600 dark:text-coral-400 flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcome */}
              {story.outcome && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-800/10 border border-teal-200/50 dark:border-teal-700/20">
                  <h3 className="text-lg font-bold text-sand-900 dark:text-white mb-2">
                    🏆 Outcome / Business Impact
                  </h3>
                  <p className="text-sand-700 dark:text-sand-300 leading-relaxed">{story.outcome}</p>
                </div>
              )}
            </div>

            {/* ── CTA Buttons ── */}
            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-sand-200/50 dark:border-sand-700/30">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-sand-900 dark:bg-white text-white dark:text-sand-900 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <FaGithub className="w-5 h-5" />
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn-coral"
                >
                  <HiPlay className="w-5 h-5" />
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StoryBlock({ title, content }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-sand-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sand-600 dark:text-sand-400 leading-relaxed">{content}</p>
    </div>
  );
}
