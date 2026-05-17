import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_GROUPS = [
  {
    label: 'Core',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'Styling',
    skills: ['Tailwind CSS', 'SASS/SCSS', 'Framer Motion', 'Responsive Design'],
  },
  {
    label: 'Data & APIs',
    skills: ['GraphQL', 'REST APIs', 'WebSockets', 'Firebase'],
  },
  {
    label: 'Tooling',
    skills: ['Git', 'Node.js', 'AWS', 'Jira', 'Figma'],
  },
  {
    label: 'Practices',
    skills: ['Agile / Scrum', 'Code Review', 'Performance Optimisation', 'Accessibility', 'Design Systems'],
  },
]

const EASE = [0.23, 1, 0.32, 1] as const

function SkillGroup({
  group,
  groupIndex,
}: {
  group: (typeof SKILL_GROUPS)[number]
  groupIndex: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: groupIndex * 0.05, ease: EASE }}
        className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-3"
        style={{ color: 'var(--accent-light)', opacity: inView ? undefined : 0 }}
      >
        {group.label}
      </motion.p>

      <div className="flex flex-wrap gap-2 mb-8">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.35,
              delay: groupIndex * 0.05 + i * 0.04,
              ease: EASE,
            }}
            className="glass-hover text-[0.875rem] font-medium px-4 py-1.5 rounded-full text-[var(--text-secondary)] cursor-default select-none"
            style={{
              background: 'rgba(255,255,255,0.045)',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const headRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 dot-motif"
        >
          <span className="section-label mb-4 inline-block">Toolkit</span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
            Skills & technologies
          </h2>
        </motion.div>

        {/* Groups */}
        <div className="glass-strong rounded-[24px] px-8 py-10 sm:px-10 sm:py-12">
          {SKILL_GROUPS.map((group, i) => (
            <SkillGroup key={group.label} group={group} groupIndex={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
