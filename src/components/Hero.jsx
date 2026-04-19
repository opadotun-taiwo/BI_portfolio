import { motion } from 'framer-motion';
import { HiArrowDown, HiCode, HiPlay } from 'react-icons/hi';

/**
 * Hero Section
 * ─────────────────────────────────
 * Animated intro with organic blob shapes using the teal/coral palette.
 */

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-20">
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

          <span className="gradient-text">Experienced Data Analyst</span>
        </motion.h1>

        {/* Role Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          {['Product Analyst', 'BI Developer', 'Growth analyst'].map((role, i) => (
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
          Looking for someone to turn your data into structured, revenue-driving products?
          I have spent the last 4+ years helping companies build data solutions that improve operations and generate real business impact. <br /><strong>#Google Cloud Certified</strong>
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

        {/* Mascot Demo Video Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex justify-center cursor-pointer group"
          onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="flex items-center max-w-sm sm:max-w-md"
          >
            {/* The Blob Mascot */}
            <div className="relative z-10 w-16 h-16 shrink-0 bg-gradient-to-br from-teal-400 to-coral-400 rounded-[40%] shadow-xl flex flex-col items-center justify-center overflow-hidden border-2 border-white dark:border-sand-900 group-hover:scale-110 transition-transform duration-300">
              {/* Eyes */}
              <div className="flex gap-2 mt-1">
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
                  className="w-2.5 h-3.5 bg-white origin-center rounded-full"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
                  className="w-2.5 h-3.5 bg-white origin-center rounded-full"
                />
              </div>

              {/* Small smile */}
              <div className="w-3 h-1.5 border-b-2 border-white rounded-full mt-1.5 opacity-80" />

              {/* Blush */}
              <div className="absolute bottom-3 left-2.5 w-3 h-1.5 bg-coral-600/40 rounded-full blur-[1px]" />
              <div className="absolute bottom-3 right-2.5 w-3 h-1.5 bg-coral-600/40 rounded-full blur-[1px]" />
            </div>

            {/* Speech Bubble */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative ml-4 px-5 py-3 sm:py-4 bg-white dark:bg-sand-800 rounded-2xl shadow-xl shadow-teal-500/10 border border-teal-100 dark:border-teal-800/50 text-left transition-all group-hover:shadow-teal-500/20 group-hover:border-teal-300 dark:group-hover:border-teal-600"
            >
              {/* Arrow pointing to mascot */}
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white dark:bg-sand-800 border-l border-b border-teal-100 dark:border-teal-800/50 rotate-45 transform" />
              <p className="text-sm font-medium text-sand-700 dark:text-sand-300 leading-relaxed">
                <span className="font-bold text-teal-600 dark:text-teal-400 block mb-0.5">Psst! Need proof? 👀</span>
                You can watch <strong className="text-coral-500 dark:text-coral-400">Video Demos</strong> of my projects inside the cards! <HiPlay className="inline-block w-4 h-4 text-coral-500 dark:text-coral-400 mb-0.5" />
              </p>
            </motion.div>
          </motion.div>
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
