import { motion } from 'framer-motion';
import { HiArrowDown, HiCode } from 'react-icons/hi';

/**
 * Hero Section
 * ─────────────────────────────────
 * Animated intro with organic blob shapes using the teal/coral palette.
 */

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] blob bg-teal-300/20 dark:bg-teal-700/10 blur-3xl"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-32 -right-20 w-[450px] h-[450px] blob-alt bg-coral-300/25 dark:bg-coral-500/10 blur-3xl"
        />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-teal-200/15 dark:bg-teal-600/5 blur-2xl" />
      </div>

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #006d77 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-sm font-medium text-teal-700 dark:text-teal-300 bg-white/60 dark:bg-sand-800/50 rounded-full border border-teal-200/50 dark:border-teal-700/30 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
          </span>
          Open to new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I'm a{' '}
          <span className="gradient-text">BI Engineer</span>
        </motion.h1>

        {/* Role Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          {['Data Analyst', 'BI Developer', 'Data Engineering'].map((role, i) => (
            <span
              key={role}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full ${i === 0
                ? 'bg-teal-700/10 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300 border border-teal-300/30'
                : i === 1
                  ? 'bg-coral-500/10 text-coral-600 dark:bg-coral-400/10 dark:text-coral-300 border border-coral-300/30'
                  : 'bg-teal-300/15 text-teal-800 dark:bg-teal-300/10 dark:text-teal-200 border border-teal-200/30'
                }`}
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-base sm:text-lg text-sand-600 dark:text-sand-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Turning raw data into actionable business insights. 3+ years experience
          across fintech and consulting making sure data operations is seamless. <br /><strong>#Google Cloud Certified</strong>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 btn-primary px-8 py-4 text-base"
          >
            <HiCode className="w-5 h-5" />
            View My Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-outline px-8 py-4 text-base"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-sand-400"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <HiArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
