import { motion } from 'framer-motion';
import { MessageSquare, GitPullRequest, FileCode, AlertCircle } from 'lucide-react';

// Import logos
import slackLogo from '../assets/logos/slack-logo.webp';
import linearLogo from '../assets/logos/linear-logo.webp';
import githubLogo from '../assets/logos/github-logo.svg';
import salesforceLogo from '../assets/logos/Salesforce.com_logo.svg.png';

// Avatar URLs (using UI Avatars service for realistic looking avatars)
const avatars = {
  richard: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Richard&backgroundColor=b6e3f4',
  mark: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark&backgroundColor=c0aede',
  sarah: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=d1d4f9',
  nixo: 'https://api.dicebear.com/7.x/bottts/svg?seed=Nixo&backgroundColor=c4287e',
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      {/* Semi-transparent background to let Plasma show through */}
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge badge-nixo mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-nixo animate-pulse" />
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text mb-6 tracking-tight">
            Everything to ship
            <br />
            <span className="gradient-text-nixo">faster than ever</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Nixo brings together customer context, code intelligence, and workload visibility 
            into one platform built specifically for forward deployed engineers.
          </p>
        </motion.div>

        {/* Top Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          <FeatureCard index={0}>
            <CaptureContextVisual />
          </FeatureCard>
          <FeatureCard index={1}>
            <DirectAttentionVisual />
          </FeatureCard>
          <FeatureCard index={2}>
            <AIIntakeVisual />
          </FeatureCard>
        </div>

        {/* Bottom Row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeatureCard index={3}>
            <PreventDuplicateVisual />
          </FeatureCard>
          <FeatureCard index={4}>
            <Start80Visual />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ children, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card card-hover overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

// Feature 1: Capture customer context automatically
function CaptureContextVisual() {
  return (
    <div className="p-6">
      <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-2 leading-tight">
        Capture customer context automatically
      </h3>
      <p className="text-text-secondary text-sm mb-5">
        Nixo turns customer calls into an organized view of their tech stack, environment, and feature requests.
      </p>
      
      {/* Visual */}
      <div className="bg-void/50 rounded-xl border border-border overflow-hidden">
        {/* Account Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={salesforceLogo} alt="Salesforce" className="h-8 w-auto object-contain" />
            <div className="flex-1">
              <div className="font-semibold text-text">Salesforce</div>
              <div className="text-xs text-text-muted">Enterprise Account</div>
            </div>
            <img src={avatars.sarah} alt="Account Manager" className="w-8 h-8 rounded-full bg-surface" />
          </div>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-4 divide-x divide-border border-b border-border">
          {[
            { value: '$185k', label: 'Annual Contract' },
            { value: '98th', label: 'Percentile' },
            { value: '+12%', label: 'QoQ Growth' },
            { value: 'Jan 2025', label: 'Customer Since' },
          ].map((m, i) => (
            <div key={i} className="p-3 text-center">
              <div className="text-sm font-semibold text-text">{m.value}</div>
              <div className="text-[10px] text-text-muted">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="p-4">
          <div className="text-xs text-nixo-light mb-3 font-medium flex items-center gap-2">
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
                <div className="text-xs text-text-muted mb-1">{tech.icon} {tech.label}</div>
                <div className="text-[11px] text-text font-medium truncate">{tech.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature 2: Direct your attention to what matters
function DirectAttentionVisual() {
  return (
    <div className="p-6">
      <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-2 leading-tight">
        Direct your attention to what matters
      </h3>
      <p className="text-text-secondary text-sm mb-5">
        Know which tickets to focus on based on account importance and issue complexity.
      </p>
      
      {/* Visual - Priority Queue */}
      <div className="bg-void/50 rounded-xl border border-border overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium text-text">High Priority</span>
          </div>
          <span className="text-xs text-text-muted bg-surface px-2 py-1 rounded-full">5 tickets</span>
        </div>
        
        {/* Ticket */}
        <div className="p-4">
          <div className="bg-surface rounded-xl p-4 border border-border">
            <div className="flex items-start gap-3 mb-3">
              <img src={avatars.richard} alt="Richard" className="w-10 h-10 rounded-full bg-surface-elevated flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium text-text">Pied Piper</div>
                  <img src={slackLogo} alt="Slack" className="w-4 h-4 object-contain" />
                </div>
                <div className="text-xs text-text-muted">Richard Hendricks</div>
              </div>
            </div>
            
            <p className="text-sm text-text-secondary mb-4">
              We don't think the ETL pipeline is working for us
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span>Just now</span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  12
                </span>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded-full bg-amber/20 text-amber text-[10px] font-medium">Account: medium</span>
                <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-[10px] font-medium">Complexity: high</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature 3: AI-powered Intake
function AIIntakeVisual() {
  return (
    <div className="p-6">
      <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-2 leading-tight">
        AI-powered Intake
      </h3>
      <p className="text-text-secondary text-sm mb-5">
        Nixo's AI Intake Agent engages customers to collect the context FDEs need before stepping in.
      </p>
      
      {/* Visual - Chat */}
      <div className="bg-void/50 rounded-xl border border-border overflow-hidden">
        <div className="p-4 space-y-4">
          {/* Message 1 */}
          <div className="flex gap-3">
            <img src={avatars.richard} alt="Richard" className="w-8 h-8 rounded-full bg-surface flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-text">Richard Hendricks</span>
                <span className="text-[10px] text-text-faded">8/5/2025, 12:15 AM</span>
              </div>
              <div className="bg-surface rounded-xl rounded-tl-sm px-3 py-2 text-sm text-text-secondary inline-block">
                We don't think the ETL pipeline is working for us
              </div>
            </div>
          </div>
          
          {/* AI Response */}
          <div className="flex gap-3">
            <img src={avatars.nixo} alt="Nixo AI" className="w-8 h-8 rounded-full bg-nixo/20 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-nixo-light">Mark Scout</span>
                <span className="text-[10px] text-text-faded">8/5/2025, 12:17 AM</span>
              </div>
              <div className="bg-nixo/10 border border-nixo/20 rounded-xl rounded-tl-sm px-3 py-2 text-sm text-text-secondary inline-block">
                Thanks for flagging this! To clarify, are you hoping to bring Datadog metrics into our dashboard?
              </div>
            </div>
          </div>
          
          {/* Message 2 */}
          <div className="flex gap-3">
            <img src={avatars.richard} alt="Richard" className="w-8 h-8 rounded-full bg-surface flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-text">Richard Hendricks</span>
                <span className="text-[10px] text-text-faded">8/5/2025, 1:20 AM</span>
              </div>
              <div className="bg-surface rounded-xl rounded-tl-sm px-3 py-2 text-sm text-text-secondary inline-block">
                Yeah, we want to track a few custom app metrics alongside our internal KPIs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature 4: Prevent Duplicate Work
function PreventDuplicateVisual() {
  return (
    <div className="p-6">
      <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-2 leading-tight">
        Prevent Duplicate Work
      </h3>
      <p className="text-text-secondary text-sm mb-5">
        See connected tickets, pull requests, and past solutions in one view so you can move faster.
      </p>
      
      {/* Visual - Connected Items */}
      <div className="bg-void/50 rounded-xl border border-border overflow-hidden">
        {/* Linear Ticket */}
        <div className="p-4 border-b border-border">
          <div className="flex items-start gap-3">
            <img src={linearLogo} alt="Linear" className="w-5 h-5 object-contain brightness-0 invert flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-text-muted">NIX-45</span>
                <span className="text-sm font-medium text-text">Add Datadog integration</span>
              </div>
              <p className="text-xs text-text-muted mb-2">
                Implement initial Datadog integration to support API key-based authentication and ingest metrics into the dashboard.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] px-2 py-1 rounded-full bg-emerald/20 text-emerald font-medium">Done</span>
                <span className="text-[10px] text-text-muted hover:text-nixo-light cursor-pointer">View in Linear ↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub PR */}
        <div className="p-4">
          <div className="flex items-start gap-3">
            <img src={githubLogo} alt="GitHub" className="w-5 h-5 object-contain brightness-0 invert flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <GitPullRequest className="w-3.5 h-3.5 text-emerald" />
                <span className="text-sm font-medium text-text">PR #234: Multi-Region Monitoring API</span>
              </div>
              <p className="text-xs text-text-muted">
                Handle Fidelity's EU1 Datadog account, including fallback to region-specific API base URLs for metrics and logs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature 5: Start 80% Done
function Start80Visual() {
  return (
    <div className="p-6">
      <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-2 leading-tight">
        Start 80% Done
      </h3>
      <p className="text-text-secondary text-sm mb-5">
        Get a running start with relevant code, configs, and fixes pulled from past work.
      </p>
      
      {/* Visual - Code Matches */}
      <div className="bg-void/50 rounded-xl border border-border overflow-hidden divide-y divide-border">
        {[
          { id: '#4751', prefix: 'CUSTESC', title: 'Added a custom ETL pipeline for Fidelity', match: 80, color: 'emerald' },
          { id: '#4743', prefix: 'TEAMENG', title: 'Upgrade Datadog integration to pull data from EU1', match: 63, color: 'amber' },
          { id: '#4750', prefix: 'DEFECT', title: 'Improved performance of the data cleaning AI agent', match: 41, color: 'nixo' },
        ].map((item, i) => (
          <div key={i} className="p-4 flex items-center gap-4 hover:bg-surface/50 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
              <FileCode className="w-4 h-4 text-amber" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono text-nixo-light">{item.id}</span>
                <span className="text-[10px] font-mono text-text-muted">{item.prefix} {item.id.replace('#', '')}</span>
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
          </div>
        ))}
      </div>
    </div>
  );
}
