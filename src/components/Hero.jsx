import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, MessageSquare, GitPullRequest, CheckCircle2, AlertCircle, Brain, Slack, Github } from 'lucide-react';
import ycLogo from '../assets/logos/yc-logo.png';
import slackLogo from '../assets/logos/slack-logo.webp';
import githubLogo from '../assets/logos/github-logo.svg';
import linearLogo from '../assets/logos/linear-logo.webp';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* YC Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-10"
          >
            <a 
              href="https://www.ycombinator.com/companies/nixo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="badge badge-yc hover:scale-105 transition-transform"
            >
              <span className="text-text-secondary">Backed by</span>
              <img src={ycLogo} alt="Y Combinator" className="h-6 w-auto" />
            </a>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-display font-bold tracking-tight mb-8 leading-[1.05]">
            <span className="text-text">The ops platform for</span>
            <br />
            <span className="gradient-text-nixo">forward deployed engineers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop chasing customers for context. Stop redoing work across accounts.
            <br className="hidden md:block" />
            <span className="text-text">Nixo gets you from discovery to deployment 10x faster.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-base px-8 py-4"
            >
              <Sparkles className="w-4 h-4" />
              Request Access
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-base px-8 py-4"
            >
              <Zap className="w-4 h-4" />
              See Features
            </motion.a>
          </div>

          {/* Hero Visual - Animated Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="card-glass p-1.5 rounded-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-mono text-text-muted">nixo — context engine</span>
                </div>
                <div className="w-12" />
              </div>
              
              {/* Dashboard Content */}
              <div className="bg-void/90 rounded-b-xl p-6">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-nixo/20 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-nixo-light" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text">Acme Corp Context</div>
                      <div className="text-xs text-text-muted">Gathering from 4 sources...</div>
                    </div>
                  </div>
                  <motion.div 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-2 text-xs text-emerald"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald" />
                    Live sync
                  </motion.div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Source Cards Column */}
                  <div className="col-span-1 space-y-3">
                    <SourceCard 
                      logo={slackLogo}
                      name="Slack"
                      count={23}
                      label="threads"
                      delay={0}
                    />
                    <SourceCard 
                      logo={githubLogo}
                      name="GitHub"
                      count={12}
                      label="PRs"
                      delay={0.2}
                      invert
                    />
                    <SourceCard 
                      logo={linearLogo}
                      name="Linear"
                      count={8}
                      label="issues"
                      delay={0.4}
                      invert
                    />
                  </div>

                  {/* Context Feed */}
                  <div className="col-span-2 bg-surface/50 rounded-xl border border-border p-4 space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-text-muted">Context Feed</span>
                      <span className="text-[10px] text-nixo-light">Updated 2s ago</span>
                    </div>
                    
                    <FeedItem 
                      icon={<MessageSquare className="w-3 h-3" />}
                      color="electric"
                      title="Sarah mentioned ETL requirements"
                      meta="Slack • #acme-support • 5m ago"
                      delay={0.5}
                    />
                    <FeedItem 
                      icon={<GitPullRequest className="w-3 h-3" />}
                      color="emerald"
                      title="PR #234 merged: API rate limiting"
                      meta="GitHub • acme-integration • 12m ago"
                      delay={0.7}
                    />
                    <FeedItem 
                      icon={<AlertCircle className="w-3 h-3" />}
                      color="amber"
                      title="ACM-147: Dashboard latency issues"
                      meta="Linear • High Priority • 1h ago"
                      delay={0.9}
                    />
                    <FeedItem 
                      icon={<CheckCircle2 className="w-3 h-3" />}
                      color="nixo"
                      title="Context summary generated"
                      meta="Nixo AI • Ready for review"
                      delay={1.1}
                      highlight
                    />
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-4 pt-4 border-t border-border grid grid-cols-4 gap-4">
                  {[
                    { label: 'Time Saved', value: '4.2 hrs', trend: '+23%' },
                    { label: 'Context Score', value: '94%', trend: 'High' },
                    { label: 'Similar Cases', value: '7', trend: 'Found' },
                    { label: 'AI Confidence', value: '98%', trend: 'Ready' },
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 + i * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-lg font-semibold text-text">{stat.value}</div>
                      <div className="text-[10px] text-text-muted">{stat.label}</div>
                      <div className="text-[10px] text-emerald">{stat.trend}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glow effect under card */}
            <div className="absolute -inset-4 -z-10 bg-nixo/10 blur-3xl rounded-full" />
          </motion.div>

          {/* Trust metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-border"
          >
            {[
              { value: '10x', label: 'Faster context gathering' },
              { value: '80%', label: 'Less duplicate work' },
              { value: '50+', label: 'AI companies waiting' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-text">{stat.value}</div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-border-strong flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 rounded-full bg-nixo"
          />
        </div>
      </motion.div>
    </section>
  );
}

function SourceCard({ logo, name, count, label, delay, invert }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-surface/50 rounded-lg border border-border p-3 flex items-center gap-3"
    >
      <img 
        src={logo} 
        alt={name} 
        className={`w-6 h-6 object-contain ${invert ? 'brightness-0 invert' : ''}`} 
      />
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium text-text">{name}</div>
        <div className="text-[10px] text-text-muted">{count} {label}</div>
      </div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
        className="w-2 h-2 rounded-full bg-emerald"
      />
    </motion.div>
  );
}

function FeedItem({ icon, color, title, meta, delay, highlight }) {
  const colorClasses = {
    electric: 'bg-electric/20 text-electric',
    emerald: 'bg-emerald/20 text-emerald',
    amber: 'bg-amber/20 text-amber',
    nixo: 'bg-nixo/20 text-nixo-light',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`flex items-start gap-3 p-2 rounded-lg ${highlight ? 'bg-nixo/10 border border-nixo/20' : ''}`}
    >
      <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${colorClasses[color]}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-text truncate">{title}</div>
        <div className="text-[10px] text-text-muted">{meta}</div>
      </div>
    </motion.div>
  );
}
