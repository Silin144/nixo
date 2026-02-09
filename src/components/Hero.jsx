import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Flame, ChevronDown, Check, Users, LayoutGrid, Calendar, FileText, Bot, Box, Blocks, Settings2, AlertTriangle } from 'lucide-react';
import ycLogo from '../assets/logos/yc-logo.png';
import nixoLogo from '../assets/logos/nixo-logo.png';
import slackLogo from '../assets/logos/slack-logo.webp';
import githubLogo from '../assets/logos/github-logo.svg';
import linearLogo from '../assets/logos/linear-logo.webp';
import hubspotLogo from '../assets/logos/hubspot-logo.png';
import notionLogo from '../assets/logos/Notion-logo.svg.png';

const avatars = {
  sarah: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen&backgroundColor=b6e3f4',
  mike: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MikeAdams&backgroundColor=c0aede',
  marcus: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusJ&backgroundColor=d1d4f9',
  lisa: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LisaPark&backgroundColor=ffd5dc',
  robert: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RobertC&backgroundColor=c0f0e8',
  david: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidPark&backgroundColor=ffe0b2',
  jordan: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JordanS&backgroundColor=e8d5f5',
  alex: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexKim&backgroundColor=d5e8f5',
  sarahW: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahWilson&backgroundColor=f5d5e8',
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto px-4 md:px-6 lg:px-10 pt-32 pb-20 max-w-[1400px]">
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
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
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
              onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-base px-8 py-4"
            >
              <Zap className="w-4 h-4" />
              See Features
            </motion.a>
          </div>

          {/* Hero Visual - Nixo Digest Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full mx-auto"
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
                  <span className="text-xs font-mono text-text-muted">nixo — digest</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Dashboard */}
              <div className="bg-void/90 rounded-b-xl flex text-left" style={{ minHeight: 460 }}>

                {/* Left Sidebar */}
                <div className="hidden lg:flex flex-col w-56 flex-shrink-0 bg-surface/40 py-5 px-4">
                  {/* Brand */}
                  <div className="flex items-center gap-2 px-2 mb-5">
                    <img src={nixoLogo} alt="Nixo" className="w-5 h-5 object-contain" />
                    <span className="text-sm font-semibold text-nixo">Nixo</span>
                  </div>

                  {/* Account Management */}
                  <div className="mb-4">
                    <div className="text-[9px] font-semibold text-text-faded uppercase tracking-wider px-2 mb-2">Account Management</div>
                    <NavItem icon={<Users className="w-3.5 h-3.5" />} label="Accounts" />
                    <NavItem icon={<Calendar className="w-3.5 h-3.5" />} label="Meetings" />
                    <NavItem icon={<FileText className="w-3.5 h-3.5" />} label="Requests" />
                  </div>

                  {/* AI Studio */}
                  <div className="mb-4">
                    <div className="text-[9px] font-semibold text-text-faded uppercase tracking-wider px-2 mb-2">AI Studio</div>
                    <NavItem icon={<Bot className="w-3.5 h-3.5" />} label="Intake Agent" />
                    <NavItem icon={<LayoutGrid className="w-3.5 h-3.5" />} label="Schemas" />
                    <NavItem icon={<Box className="w-3.5 h-3.5" />} label="Nodes" />
                    <NavItem icon={<Blocks className="w-3.5 h-3.5" />} label="Software Catalog" />
                  </div>

                  {/* Settings */}
                  <div>
                    <div className="text-[9px] font-semibold text-text-faded uppercase tracking-wider px-2 mb-2">Settings</div>
                    <NavItem icon={<Settings2 className="w-3.5 h-3.5" />} label="Integrations" hasArrow />
                    {/* Connected integrations */}
                    <div className="ml-3 mt-1 space-y-1">
                      {[
                        { logo: slackLogo, name: 'Slack', connected: true },
                        { logo: hubspotLogo, name: 'HubSpot', connected: true },
                        { logo: linearLogo, name: 'Linear', connected: true, invert: true },
                        { logo: githubLogo, name: 'GitHub', invert: true },
                        { logo: notionLogo, name: 'Notion' },
                      ].map((app) => (
                        <div key={app.name} className="flex items-center gap-2 px-2 py-1">
                          <img src={app.logo} alt={app.name} className={`w-3.5 h-3.5 object-contain ${app.invert ? 'dark-invert' : ''}`} />
                          <span className="text-[10px] text-text-muted flex-1">{app.name}</span>
                          {app.connected && <Check className="w-2.5 h-2.5 text-emerald" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:flex flex-shrink-0 items-stretch px-5">
                  <div className="w-[1px] bg-border my-4" />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0 flex flex-col">
                  {/* Welcome bar */}
                  <div className="flex items-center justify-between px-6 pt-6 pb-4">
                    <h2 className="text-lg md:text-xl font-display font-bold text-nixo">
                      Welcome to Nixo, Stephanie
                    </h2>
                    <div className="hidden sm:flex items-center gap-1 bg-surface rounded-lg p-0.5 mr-0">
                      <button className="px-3 py-1.5 text-[11px] font-medium bg-nixo/15 text-nixo rounded-md">Digest</button>
                      <button className="px-3 py-1.5 text-[11px] font-medium text-text-muted rounded-md">Actions</button>
                    </div>
                  </div>

                  {/* Fires */}
                  <div className="flex-1 px-6 pb-5 overflow-hidden">
                    <div className="flex items-center gap-2 mb-4">
                      <Flame className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-semibold text-text">Fires</span>
                    </div>

                    <div className="divide-y divide-border">
                      <FireItem
                        company="Retool"
                        title="SSO login failing for team members"
                        person="Sarah Chen"
                        avatar={avatars.sarah}
                        time="Just now"
                        tag="Support"
                        tagColor="red"
                        note="Mike Adams · Fixed 3 SSO issues this month"
                        noteAvatar={avatars.mike}
                        delay={0.5}
                      />
                      <FireItem
                        company="TechStart Inc"
                        title="Webhook delivery delays"
                        person="Marcus Johnson"
                        avatar={avatars.marcus}
                        time="2h ago"
                        tag="Support"
                        tagColor="red"
                        note="Lisa Park · Owns webhook infrastructure"
                        noteAvatar={avatars.lisa}
                        delay={0.6}
                      />
                      <FireItem
                        company="Vercel"
                        title="Custom Salesforce integration"
                        person="Robert Chen"
                        avatar={avatars.robert}
                        time="3h ago"
                        tag="Build"
                        tagColor="blue"
                        note="You · Built Salesforce sync for Linear"
                        delay={0.7}
                      />
                      <FireItem
                        company="DataFlow"
                        title="API returning 500 errors intermittently"
                        person="David Park"
                        avatar={avatars.david}
                        time="5 days ago"
                        tag="Support"
                        tagColor="red"
                        note="Mike Adams · Already responded to this thread"
                        noteAvatar={avatars.mike}
                        delay={0.8}
                      />
                      <FireItem
                        company="Linear"
                        title="Weekly usage reports to Notion"
                        person="Jordan Smith"
                        avatar={avatars.jordan}
                        time="7 days ago"
                        tag="Build"
                        tagColor="blue"
                        note="Alex Kim · Built Notion integration for Stripe"
                        noteAvatar={avatars.alex}
                        delay={0.9}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden xl:flex flex-shrink-0 items-stretch px-10">
                  <div className="w-[1px] bg-border my-4" />
                </div>

                {/* Right Sidebar */}
                <div className="hidden xl:flex flex-col w-60 flex-shrink-0 bg-surface/30 py-5 px-5">
                  {/* Team Workload */}
                  <div className="mb-5">
                    <div className="flex items-center gap-1.5 mb-3">
                      <Users className="w-3.5 h-3.5 text-text-muted" />
                      <span className="text-xs font-semibold text-text">Team Workload</span>
                    </div>
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-[10px] text-text-muted">Unassigned requests</span>
                      <span className="text-[10px] font-semibold bg-nixo/15 text-nixo px-2 py-0.5 rounded-full">2</span>
                    </div>
                    <div className="space-y-2.5">
                      <WorkloadBar name="Mike Adams" avatar={avatars.mike} count={8} pct={85} color="nixo" />
                      <WorkloadBar name="Sarah Wilson" avatar={avatars.sarahW} count={4} pct={45} color="emerald" />
                      <WorkloadBar name="Lisa Park" avatar={avatars.lisa} count={6} pct={65} color="amber" />
                      <WorkloadBar name="David Park" avatar={avatars.david} count={5} pct={55} color="electric" />
                    </div>
                  </div>

                  {/* Critical Accounts */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-xs font-semibold text-text">Critical Accounts</span>
                    </div>
                    <div className="space-y-2">
                      <CriticalAccount name="Retool" detail="SSO blocking eng team" badge="3 open" badgeColor="red" />
                      <CriticalAccount name="DataFlow" detail="API 500 errors" badge="5d alert" badgeColor="amber" />
                      <CriticalAccount name="Linear" detail="Awaiting timeline" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect under card */}
            <div className="absolute -inset-4 -z-10 bg-nixo/10 blur-3xl rounded-full" />
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

/* ── Sub-components ── */

function NavItem({ icon, label, hasArrow }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-text-secondary hover:text-text hover:bg-surface-hover transition-colors cursor-default">
      {icon}
      <span className="text-[11px] font-medium flex-1">{label}</span>
      {hasArrow && <ChevronDown className="w-3 h-3 text-text-faded" />}
    </div>
  );
}

function FireItem({ company, title, person, avatar, time, tag, tagColor, note, noteAvatar, delay }) {
  const tagClasses = {
    red: 'bg-red-500/15 text-red-500',
    blue: 'bg-electric/15 text-electric',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="py-3.5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-semibold text-text">{company}:</span>
            <span className="text-xs text-text-secondary truncate">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={avatar} alt={person} className="w-4 h-4 rounded-full bg-surface" />
            <span className="text-[10px] text-text-muted">{person}</span>
            <span className="text-[10px] text-text-faded">· {time}</span>
          </div>
        </div>
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${tagClasses[tagColor]}`}>
          {tag}
        </span>
      </div>
      {note && (
        <div className="flex items-center gap-2 mt-2 ml-0.5">
          {noteAvatar && <img src={noteAvatar} alt="" className="w-3.5 h-3.5 rounded-full bg-surface" />}
          {!noteAvatar && <div className="w-3.5 h-3.5 rounded-full bg-nixo/20 flex items-center justify-center"><span className="text-[7px] text-nixo font-bold">Y</span></div>}
          <span className="text-[10px] text-text-muted italic">{note}</span>
        </div>
      )}
    </motion.div>
  );
}

function WorkloadBar({ name, avatar, count, pct, color }) {
  const barColors = {
    nixo: 'bg-nixo',
    emerald: 'bg-emerald',
    amber: 'bg-amber',
    electric: 'bg-electric',
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <img src={avatar} alt={name} className="w-4 h-4 rounded-full bg-surface" />
        <span className="text-[10px] text-text flex-1 truncate">{name}</span>
        <span className="text-[10px] text-text-muted">{count} active</span>
      </div>
      <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`h-full rounded-full ${barColors[color]}`}
        />
      </div>
    </div>
  );
}

function CriticalAccount({ name, detail, badge, badgeColor }) {
  const badgeClasses = {
    red: 'bg-red-500/15 text-red-400',
    amber: 'bg-amber/15 text-amber',
  };

  return (
    <div className="bg-surface/60 rounded-lg px-3 py-2">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[11px] font-semibold text-text">{name}</span>
        {badge && (
          <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${badgeClasses[badgeColor]}`}>
            {badge}
          </span>
        )}
      </div>
      <span className="text-[10px] text-text-muted">{detail}</span>
    </div>
  );
}
