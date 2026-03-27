import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-card border border-border rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            style={{ background: 'rgba(0,212,170,0.1)' }} />

          <div className="relative z-10 max-w-2xl">
            <Reveal tag="span" className="text-accent font-mono text-sm tracking-widest uppercase">
              Contact
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Let&apos;s Build Something Amazing Together
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-muted text-lg mb-8">
                Whether you need a product designed from scratch, an existing interface revamped, or
                a complete frontend implementation — I&apos;m here to help.
              </p>
            </Reveal>

            <Reveal delay={3} className="flex flex-wrap gap-4 mb-12">
              <a href="mailto:sudipta@example.com" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Send Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </Reveal>

            <Reveal delay={4} className="grid sm:grid-cols-3 gap-6">
              {[
                { value: '24h', label: 'Response Time' },
                { value: 'Remote', label: 'Availability' },
                { value: 'Global', label: 'Timezone Friendly' },
              ].map((stat) => (
                <div key={stat.label} className="border border-border rounded-xl p-4 text-center"
                  style={{ background: 'var(--surface)' }}>
                  <p className="text-2xl font-display font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
