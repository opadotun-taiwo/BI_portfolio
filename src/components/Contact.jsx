import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

/**
 * Contact Section
 * ─────────────────────────────────
 * Contact form with info cards and social links, teal/coral palette.
 */

const contactInfo = [
  { icon: HiMail, label: 'Email', value: 'officialopadotun2021@gmail.com', href: 'mailto:opadotuntaiwo@gmail.com' },
  { icon: HiLocationMarker, label: 'Location', value: 'Lagos, Nigeria', href: null },
];

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/opadotun-taiwo' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/taiwo-opadotun-39147117b/' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/opadotuntaiwo' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using formsubmit.co which requires no domain registration or accounts
      const response = await fetch('https://formsubmit.co/ajax/officialopadotun2021@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New portfolio message from ${formData.name}`,
          email: formData.email,
          name: formData.name,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success || response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error('Form error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
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
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-sand-900 dark:text-sand-50">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-sand-600 dark:text-sand-400 mt-4 max-w-xl mx-auto">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="card flex items-center gap-4 p-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-700 to-teal-500 text-white flex-shrink-0 shadow-lg">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-sand-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-semibold text-sand-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-sand-900 dark:text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-sand-400 mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="card w-12 h-12 flex items-center justify-center text-sand-600 dark:text-sand-400 hover:text-teal-700 dark:hover:text-teal-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="card space-y-5 p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sand-700 dark:text-sand-300 mb-2">Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-teal-50/50 dark:bg-sand-800/50 border border-teal-200/40 dark:border-teal-800/20 text-sand-900 dark:text-white placeholder-sand-400 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sand-700 dark:text-sand-300 mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-teal-50/50 dark:bg-sand-800/50 border border-teal-200/40 dark:border-teal-800/20 text-sand-900 dark:text-white placeholder-sand-400 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sand-700 dark:text-sand-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-teal-50/50 dark:bg-sand-800/50 border border-teal-200/40 dark:border-teal-800/20 text-sand-900 dark:text-white placeholder-sand-400 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 outline-none transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending' || status === 'success'}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${status === 'success'
                ? 'bg-teal-500'
                : status === 'error'
                  ? 'bg-red-500'
                  : 'btn-primary'
                }`}
            >
              {status === 'sending' ? (
                <>Sending...</>
              ) : status === 'success' ? (
                <>✓ Message Sent!</>
              ) : status === 'error' ? (
                <>❌ Error! Try again</>
              ) : (
                <>
                  <HiPaperAirplane className="w-5 h-5 rotate-90" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
