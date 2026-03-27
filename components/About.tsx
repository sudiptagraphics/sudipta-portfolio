import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal tag="span" className="text-accent font-mono text-sm tracking-widest uppercase">
              About
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8">
                Designing &amp; Building Digital Products Since 2013
              </h2>
            </Reveal>
            <Reveal delay={2} className="space-y-6 text-muted leading-relaxed">
              <p>
                I&apos;m a Product Designer and Frontend Engineer with over a decade of experience
                crafting digital products. My journey began in design, evolved through development,
                and now encompasses the full spectrum of product creation.
              </p>
              <p>
                Currently at{' '}
                <strong className="text-fg">ABC</strong>, I lead design initiatives while
                implementing complex frontend architectures. My unique position allows me to bridge
                the gap between creative vision and technical execution.
              </p>
              <p>
                With 8 years dedicated to SaaS products, I understand the nuances of building
                scalable, user-centric applications that drive business outcomes.
              </p>
            </Reveal>
          </div>

          <Reveal delay={3}>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Core Philosophy</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                    ),
                    title: 'Design-Led Development',
                    desc: 'Every line of code serves the user experience. No compromises.',
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    ),
                    title: 'AI-Augmented Workflow',
                    desc: 'Leveraging AI tools for faster iteration without sacrificing quality.',
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    ),
                    title: 'SaaS Expertise',
                    desc: 'Deep understanding of subscription models, onboarding, and retention.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0,212,170,0.1)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
