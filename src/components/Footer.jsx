import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';
import nixoLogo from '../assets/logos/nixo-logo.png';
import ycLogo from '../assets/logos/yc-logo.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="relative border-t border-border bg-void/80 backdrop-blur-sm">
      
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Waitlist Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 mb-12 border-b border-border">
          <div>
            <h3 className="text-xl font-semibold text-text mb-2">Join the waitlist</h3>
            <p className="text-text-muted">Get early access when we launch</p>
          </div>
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-nixo text-white px-6 py-3 rounded-full font-medium"
            >
              <Check className="w-4 h-4" />
              You're on the list!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-faded" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full md:w-72 pl-11 pr-4 py-3 rounded-full bg-surface border border-border text-text placeholder-text-faded text-[15px] transition-all"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Get Access
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <motion.img 
                src={nixoLogo} 
                alt="Nixo" 
                className="w-8 h-8 object-contain"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-lg font-semibold text-text tracking-tight">Nixo</span>
            </a>
            <p className="text-sm text-text-faded">
              © {new Date().getFullYear()} Nixo Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <img src={ycLogo} alt="Y Combinator" className="h-4" />
              <span className="text-xs text-text-muted">S25 Batch</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {[
              { href: '#features', label: 'Features' },
              { href: '#integrations', label: 'Integrations' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com/withnixo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-nixo/50 hover:bg-nixo/10 flex items-center justify-center transition-all group"
            >
              <svg className="w-4 h-4 text-text-muted group-hover:text-nixo-light transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/withnixo/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-nixo/50 hover:bg-nixo/10 flex items-center justify-center transition-all group"
            >
              <svg className="w-4 h-4 text-text-muted group-hover:text-nixo-light transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
