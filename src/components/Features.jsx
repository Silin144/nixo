import { motion } from 'framer-motion';
import { MessageSquare, GitPullRequest, FileCode } from 'lucide-react';

import slackLogo from '../assets/logos/slack-logo.webp';
import linearLogo from '../assets/logos/linear-logo.webp';
import githubLogo from '../assets/logos/github-logo.svg';
import salesforceLogo from '../assets/logos/Salesforce.com_logo.svg.png';

const avatars = {
  richard: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Richard&backgroundColor=b6e3f4',
  mark: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark&backgroundColor=c0aede',
  sarah: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=d1d4f9',
  nixo: 'https://api.dicebear.com/7.x/bottts/svg?seed=Nixo&backgroundColor=c4287e',
};

const features = [
  {
    title: 'Capture customer context automatically',
    description: 'Nixo turns customer calls into an organized view of their tech stack, environment, and feature requests.',
    skeleton: 'context',
    className: 'col-span-1 md:col-span-4 border-b md:border-r border-border',
  },
  {
    title: 'Direct your attention to what matters',
    description: 'Know which tickets to focus on based on account importance and issue complexity.',
    skeleton: 'attention',
    className: 'col-span-1 md:col-span-2 border-b border-border',
  },
  {
    title: 'AI-powered Intake',
    description: "Nixo's AI Intake Agent engages customers to collect the context FDEs need before stepping in.",
    skeleton: 'intake',
    className: 'col-span-1 md:col-span-3 border-b md:border-r border-border',
  },
  {
    title: 'Prevent Duplicate Work',
    description: 'See connected tickets, pull requests, and past solutions in one view so you can move faster.',
    skeleton: 'duplicate',
    className: 'col-span-1 md:col-span-3 border-b md:border-b-0 border-border',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <span className="badge badge-nixo mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-nixo animate-pulse" />
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text mb-6 tracking-tight">
            One platform to
            <br />
            <span className="gradient-text-nixo">run your FDE ops</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Nixo brings together customer context, code intelligence, and workload visibility
            into one platform built specifically for forward deployed engineers.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-6 border rounded-2xl border-border overflow-hidden bg-void/40">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`p-6 sm:p-8 relative overflow-hidden group transition-colors duration-300 hover:bg-surface/20 ${feature.className}`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-nixo/5 blur-3xl rounded-full" />
                </div>

                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.15 }}
                  className="relative text-left text-text text-xl md:text-2xl font-display font-bold tracking-tight"
                >
                  {feature.title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.25 }}
                  className="relative text-sm text-text-secondary text-left max-w-sm mt-2 mb-6"
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 + 0.3 }}
                  className="relative w-full"
                >
                  {feature.skeleton === 'context' && <SkeletonContext />}
                  {feature.skeleton === 'attention' && <SkeletonAttention />}
                  {feature.skeleton === 'intake' && <SkeletonIntake />}
                  {feature.skeleton === 'duplicate' && <SkeletonDuplicate />}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Full-width bottom feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 border rounded-2xl border-border overflow-hidden bg-void/40 p-6 sm:p-8 group relative transition-colors duration-300 hover:bg-surface/20"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-nixo/5 blur-3xl rounded-full" />
            </div>

            <div className="relative flex flex-col lg:flex-row gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:w-1/3 flex-shrink-0"
              >
                <p className="text-left text-text text-xl md:text-2xl font-display font-bold tracking-tight">
                  Start 80% Done
                </p>
                <p className="text-sm text-text-secondary text-left max-w-sm mt-2">
                  Get a running start with relevant code, configs, and fixes pulled from past work.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 w-full"
              >
                <SkeletonStart80 />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Skeleton Visuals ── */

function SkeletonContext() {
  return (
    <div className="relative">
      <div className="bg-void/50 rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={salesforceLogo} alt="Salesforce" className="h-8 w-auto object-contain" />
            <div className="flex-1">
              <div className="font-semibold text-text text-sm">Salesforce</div>
              <div className="text-xs text-text-muted">Enterprise Account</div>
            </div>
            <img src={avatars.sarah} alt="" className="w-8 h-8 rounded-full bg-surface" />
          </div>
        </div>
        <div className="grid grid-cols-4 divide-x divide-border border-b border-border">
          {[
            { value: '$185k', label: 'Annual Contract' },
            { value: '98th', label: 'Percentile' },
            { value: '+12%', label: 'QoQ Growth' },
            { value: 'Jan 2025', label: 'Since' },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-2.5 text-center"
            >
              <div className="text-xs font-semibold text-text">{m.value}</div>
              <div className="text-[9px] text-text-muted">{m.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="p-4">
          <div className="text-[10px] text-nixo-light mb-2 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-nixo" />
            Technical Environment
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: '☁️', label: 'Cloud', value: 'AWS + GovCloud' },
              { icon: '🗄️', label: 'Database', value: 'Oracle RAC' },
              { icon: '🔒', label: 'Security', value: 'SOC 2 Type II' },
            ].map((tech, i) => (
              <div key={i} className="bg-surface rounded-lg p-2">
                <div className="text-[10px] text-text-muted mb-0.5">{tech.icon} {tech.label}</div>
                <div className="text-[10px] text-text font-medium truncate">{tech.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-void/90 to-transparent pointer-events-none" />
    </div>
  );
}

function SkeletonAttention() {
  return (
    <div className="relative">
      <div className="bg-void/50 rounded-xl border border-border overflow-hidden">
        <div className="px-3 py-2.5 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-text">High Priority</span>
          </div>
          <span className="text-[10px] text-text-muted bg-surface px-1.5 py-0.5 rounded-full">5 tickets</span>
        </div>
        <div className="p-3">
          <div className="bg-surface rounded-xl p-3 border border-border">
            <div className="flex items-start gap-2.5 mb-2">
              <img src={avatars.richard} alt="" className="w-8 h-8 rounded-full bg-surface-elevated flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="text-sm font-medium text-text">Pied Piper</div>
                  <img src={slackLogo} alt="Slack" className="w-3.5 h-3.5 object-contain" />
                </div>
                <div className="text-[10px] text-text-muted">Richard Hendricks</div>
              </div>
            </div>
            <p className="text-xs text-text-secondary mb-3">
              We don't think the ETL pipeline is working for us
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-1.5 py-0.5 rounded-full bg-amber/20 text-amber text-[9px] font-medium">Account: medium</span>
              <span className="px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[9px] font-medium">Complexity: high</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-void/90 to-transparent pointer-events-none" />
    </div>
  );
}

function SkeletonIntake() {
  return (
    <div className="relative">
      <div className="bg-void/50 rounded-xl border border-border overflow-hidden">
        <div className="p-4 space-y-4">
          {[
            { avatar: avatars.richard, name: 'Richard Hendricks', nameColor: 'text-text', time: '12:15 AM', msg: "We don't think the ETL pipeline is working for us", bubbleClass: 'bg-surface' },
            { avatar: avatars.nixo, name: 'Mark Scout', nameColor: 'text-nixo-light', time: '12:17 AM', msg: 'Thanks for flagging this! Are you hoping to bring Datadog metrics into our dashboard?', bubbleClass: 'bg-nixo/10 border border-nixo/20' },
            { avatar: avatars.richard, name: 'Richard Hendricks', nameColor: 'text-text', time: '1:20 AM', msg: 'Yeah, we want to track custom app metrics alongside our internal KPIs.', bubbleClass: 'bg-surface' },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex gap-2.5"
            >
              <img src={m.avatar} alt="" className="w-7 h-7 rounded-full bg-surface flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-medium ${m.nameColor}`}>{m.name}</span>
                  <span className="text-[9px] text-text-faded">{m.time}</span>
                </div>
                <div className={`${m.bubbleClass} rounded-xl rounded-tl-sm px-3 py-2 text-xs text-text-secondary inline-block`}>
                  {m.msg}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-void/90 to-transparent pointer-events-none" />
    </div>
  );
}

function SkeletonDuplicate() {
  return (
    <div className="relative">
      <div className="bg-void/50 rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="flex items-start gap-3">
            <img src={linearLogo} alt="Linear" className="w-5 h-5 object-contain dark-invert flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono text-text-muted">NIX-45</span>
                <span className="text-sm font-medium text-text">Add Datadog integration</span>
              </div>
              <p className="text-[11px] text-text-muted mb-2">
                Implement initial Datadog integration to support API key-based authentication.
              </p>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald/20 text-emerald font-medium">Done</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start gap-3">
            <img src={githubLogo} alt="GitHub" className="w-5 h-5 object-contain dark-invert flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <GitPullRequest className="w-3.5 h-3.5 text-emerald" />
                <span className="text-sm font-medium text-text">PR #234: Multi-Region Monitoring</span>
              </div>
              <p className="text-[11px] text-text-muted">
                Handle Fidelity's EU1 Datadog account with region-specific API base URLs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-void/90 to-transparent pointer-events-none" />
    </div>
  );
}

function SkeletonStart80() {
  const items = [
    { id: '#4751', prefix: 'CUSTESC', title: 'Added a custom ETL pipeline for Fidelity', match: 80, color: 'emerald' },
    { id: '#4743', prefix: 'TEAMENG', title: 'Upgrade Datadog integration to pull data from EU1', match: 63, color: 'amber' },
    { id: '#4750', prefix: 'DEFECT', title: 'Improved performance of the data cleaning AI agent', match: 41, color: 'nixo' },
  ];

  return (
    <div className="bg-void/50 rounded-xl border border-border overflow-hidden divide-y divide-border">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-4 flex items-center gap-4 hover:bg-surface/50 transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
            <FileCode className="w-4 h-4 text-amber" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-nixo-light">{item.id}</span>
              <span className="text-[10px] font-mono text-text-muted">{item.prefix}</span>
            </div>
            <span className="text-sm text-text truncate block">{item.title}</span>
          </div>
          <span className={`text-xs px-3 py-1.5 rounded-full font-medium flex-shrink-0 ${
            item.color === 'emerald' ? 'bg-emerald/20 text-emerald' :
            item.color === 'amber' ? 'bg-amber/20 text-amber' :
            'bg-nixo/20 text-nixo-light'
          }`}>
            {item.match}% match
          </span>
        </motion.div>
      ))}
    </div>
  );
}
