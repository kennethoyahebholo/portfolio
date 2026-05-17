import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const PROJECTS = [
  {
    name: "Ka'bo",
    tagline: 'Student housing fintech platform',
    description:
      'Fintech platform helping students access housing with zero hidden fees, guarantor support, and rent-reporting to build credit. Built the frontend from scratch — property search, tenant dashboards, and a multi-step onboarding flow.',
    stack: ['Next.js', 'Tailwind CSS', 'GraphQL', 'TypeScript'],
    url: 'https://kaabo.ai',
    metrics: [{ value: '40%', label: 'TTI improvement' }, { value: '50%', label: 'Payload reduction' }],
    accent: true,
  },
  {
    name: 'VBiz by VBank',
    tagline: 'White-label corporate banking platform',
    description:
      'Multi-tenant corporate banking platform for VFD Microfinance Bank — bulk transfers, bill payments, role-based access, and real-time financial dashboards for MSMEs across Nigeria. Built the full frontend from the ground up.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    url: 'https://business.vbank.ng',
    metrics: [{ value: '92%', label: 'On-time delivery' }, { value: '80%', label: 'Less manual ops' }],
    accent: false,
  },
  {
    name: 'Sprekar',
    tagline: 'AI-powered real-time translation',
    description:
      'AI-powered platform delivering real-time speech translation for live events and multilingual audiences. Contributed to the frontend — low-latency audio streaming interfaces, real-time state management, and WebSocket integrations.',
    stack: ['Next.js', 'WebSockets', 'TypeScript', 'Tailwind CSS'],
    url: 'https://sprekar.com',
    metrics: [{ value: '3', label: 'Live products' }, { value: '5+', label: 'Years shipped' }],
    accent: false,
  },
]

const EASE = [0.23, 1, 0.32, 1] as const

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      className={`glass-hover rounded-[22px] p-7 sm:p-9 ${project.accent ? 'glass-accent' : 'glass'}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3 mb-1.5">
            <h3 className="text-[1.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              {project.name}
            </h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[3px] flex-shrink-0 text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors duration-200"
              aria-label={`Visit ${project.name} (opens in new tab)`}
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <p
            className="text-[0.875rem] font-medium mb-4"
            style={{ color: 'var(--accent-light)' }}
          >
            {project.tagline}
          </p>

          <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.7] mb-6">
            {project.description}
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[0.75rem] font-medium px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: 'var(--text-secondary)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metric pair */}
        <div className="flex sm:flex-col gap-3 sm:min-w-[140px]">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="flex-1 sm:flex-none glass rounded-[14px] px-4 py-3 text-center"
            >
              <div
                className="text-[1.5rem] font-bold leading-none mb-1"
                style={{ color: 'var(--accent-light)' }}
              >
                {m.value}
              </div>
              <div className="text-[0.6875rem] text-[var(--text-muted)] leading-snug">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 dot-motif"
        >
          <span className="section-label mb-4 inline-block">Selected work</span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
            Live products
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
