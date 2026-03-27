import Reveal from './Reveal'
import StatCounter from './StatCounter'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="hero-bg">
        <div className="grid-pattern" />
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full mb-8"
                style={{ background: 'var(--surface)' }}>
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm text-muted">Available for opportunities</span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                Product Designer
                <span className="block text-muted">&amp;</span>
                Frontend Engineer
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg text-muted max-w-lg mb-8 leading-relaxed">
                Bridging design and development for 11 years. Crafting SaaS products with
                precision — from pixel-perfect mockups to production-ready code.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#projects" className="btn-primary">
                  View Projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#contact" className="btn-secondary">Download Resume</a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="flex gap-12">
                <StatCounter target={11} label="Years Experience" />
                <StatCounter target={50} label="Projects Delivered" suffix="+" />
                <StatCounter target={8} label="Years in SaaS" />
              </div>
            </Reveal>
          </div>

          {/* Right visual */}
          <Reveal className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,212,170,0.2), transparent)' }} />
              <div className="relative bg-card border border-border rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs text-muted font-mono">portfolio.tsx</span>
                </div>
                <pre className="text-sm font-mono text-muted overflow-x-auto">
                  <code>{`\x1b`}</code>
                  <code>
                    <span style={{ color: 'var(--accent)' }}>const </span>
                    <span style={{ color: 'var(--fg)' }}>designer</span> = {'{'}
                    {'\n'}  role: <span style={{ color: '#fb923c' }}>&quot;Product Designer&quot;</span>,
                    {'\n'}  tools: [<span style={{ color: '#4ade80' }}>&quot;Figma&quot;</span>, <span style={{ color: '#4ade80' }}>&quot;Adobe XD&quot;</span>],
                    {'\n'}  experience: <span style={{ color: '#c084fc' }}>11</span>,
                    {'\n'}  currentCompany: <span style={{ color: '#fb923c' }}>&quot;Xempla&quot;</span>
                    {'\n'}{'}'};{'\n\n'}
                    <span style={{ color: 'var(--accent)' }}>const </span>
                    <span style={{ color: 'var(--fg)' }}>developer</span> = {'{'}
                    {'\n'}  stack: [<span style={{ color: '#4ade80' }}>&quot;React&quot;</span>, <span style={{ color: '#4ade80' }}>&quot;Next.js&quot;</span>],
                    {'\n'}  styling: [<span style={{ color: '#4ade80' }}>&quot;SCSS&quot;</span>, <span style={{ color: '#4ade80' }}>&quot;Tailwind&quot;</span>],
                    {'\n'}  approach: <span style={{ color: '#fb923c' }}>&quot;AI-assisted&quot;</span>
                    {'\n'}{'}'};{'\n\n'}
                    <span style={{ color: 'var(--accent)' }}>export </span>
                    {'{ designer, developer };'}
                  </code>
                </pre>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-surface border border-border rounded-xl p-4 shadow-2xl float-anim">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-xl p-4 shadow-2xl float-anim-slow">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
