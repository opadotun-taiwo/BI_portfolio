import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';

/**
 * Footer Component
 * ─────────────────────────────────
 * Site footer with teal/coral palette.
 */

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/opadotun-taiwo', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/opadotun-taiwo', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/opadotuntaiwo', label: 'Twitter' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-teal-200/30 dark:border-teal-800/15 bg-white/50 dark:bg-sand-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <a href="#home" className="text-2xl font-bold">
              <span className="text-teal-700 dark:text-teal-300">Opadotun</span>
              <span className="text-coral-500">.</span>
            </a>
            <p className="text-sm text-sand-500 mt-2">Turning data into decisions.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-sand-600 dark:text-sand-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-end gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card w-10 h-10 flex items-center justify-center text-sand-600 dark:text-sand-400 hover:text-teal-700 dark:hover:text-teal-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-teal-200/20 dark:border-teal-800/10 mt-8 pt-8 text-center">
          <p className="text-sm text-sand-500 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Opadotun Taiwo. Made with
            <HiHeart className="w-4 h-4 text-coral-500" />
            and data.
          </p>
        </div>
      </div>
    </footer>
  );
}
