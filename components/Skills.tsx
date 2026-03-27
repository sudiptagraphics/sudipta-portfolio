import Reveal from './Reveal'
import { techStack } from '@/lib/data'

interface SkillBarProps {
  name: string
  level: number // out of 5
}

function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-muted">{name}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: i < level ? 'var(--accent)' : 'var(--border)' }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32" style={{ background: 'rgba(26,26,29,0.5)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal tag="span" className="text-accent font-mono text-sm tracking-widest uppercase">
            Skills
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Tools &amp; Technologies
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Design */}
          <Reveal className="skill-card rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(0,212,170,0.1)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">Design</h3>
            <div className="space-y-3">
              <SkillBar name="Figma" level={5} />
              <SkillBar name="Adobe XD" level={5} />
              <SkillBar name="Prototyping" level={4} />
              <SkillBar name="Design Systems" level={5} />
            </div>
          </Reveal>

          {/* Frontend */}
          <Reveal delay={1} className="skill-card rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(0,212,170,0.1)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">Frontend</h3>
            <div className="space-y-3">
              <SkillBar name="React / Next.js" level={5} />
              <SkillBar name="Angular" level={4} />
              <SkillBar name="SCSS / CSS" level={5} />
              <SkillBar name="TypeScript" level={4} />
            </div>
          </Reveal>

          {/* Workflow */}
          <Reveal delay={2} className="skill-card rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(0,212,170,0.1)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">Workflow</h3>
            <div className="space-y-3">
              <SkillBar name="AI-Assisted Dev" level={5} />
              <SkillBar name="Git / Version Control" level={4} />
              <SkillBar name="Agile / Scrum" level={5} />
              <SkillBar name="User Research" level={4} />
            </div>
          </Reveal>
        </div>

        {/* Tech Stack */}
        <Reveal className="mt-16 text-center">
          <h3 className="font-display text-xl font-semibold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag cursor-default">{tech}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
