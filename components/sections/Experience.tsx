import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Grey Invent Technology',
    period: 'Sep 2025 – Dec 2025',
    type: 'Contract',
    location: 'Wilmington, Delaware · Remote',
    bullets: [
      'Led frontend development for client-facing web applications working remotely with a US-based team.',
      'Contributed to architecture decisions and code reviews to maintain quality across a fast-moving engagement.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'VFD Tech Limited',
    period: 'Apr 2025 – Aug 2025',
    type: 'Contract',
    location: 'Lagos, Nigeria · Remote',
    bullets: [
      'Built VBiz, a white-label multi-tenant corporate banking platform supporting bulk transfers, bill payments, and role-based user management for MSMEs across Nigeria.',
      'Delivered a beneficiary management system and recurring transaction scheduler that cut repetitive data entry by 80% for teams handling payroll, vendor payments, and utility bills.',
      'Built multi-tenant company-switching so business owners could manage multiple corporate accounts from one login with zero data crossover.',
      'Created real-time financial dashboards giving clients instant visibility into cash flow and transaction patterns.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Forcythe',
    period: 'Feb 2025 – Apr 2025',
    type: 'Contract',
    location: 'Lagos, Nigeria · Hybrid',
    bullets: [
      'Launched DC Innovate and Apapa LGA websites using Next.js and Tailwind CSS.',
      'Reduced bundle size by 40% through code splitting and lazy loading, achieving sub-2s first contentful paint.',
      'Achieved full WCAG AA accessibility compliance across both products.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Jasere',
    period: 'Apr 2024 – Mar 2025',
    type: 'Contract',
    location: 'Delaware, United States · Remote',
    bullets: [
      'Built and optimised web applications using Next.js, hitting sub-2s FCP and reducing bundle size by 40%.',
      'Achieved full WCAG AA accessibility compliance across all delivered projects.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Payfi',
    period: 'Nov 2022 – Aug 2025',
    type: 'Full-time',
    location: 'Toronto, Canada · Remote',
    bullets: [
      'Cut first-contentful-paint from 3.2s to 1.9s and improved time-to-interactive by 40% across payfi.ca and kaabo.co.',
      'Designed a GraphQL data layer that reduced average payload sizes by 50%, improving experience on mobile connections.',
      'Took on-time release delivery from 65% to 92% across 10 to 12 major releases per year.',
      'Set up ESLint, pre-commit hooks, and structured peer reviews that reduced production regressions.',
      'Recognised as Culture Champion in May 2023 for running mentorship sessions and cross-team knowledge sharing.',
    ],
  },
]

const EASE = [0.23, 1, 0.32, 1] as const

function TimelineEntry({ entry }: { entry: (typeof EXPERIENCE)[number] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="relative pl-10 sm:pl-14">
      {/* Timeline dot */}
      <div
        className="absolute top-[1.4rem] w-3 h-3 rounded-full transition-[transform,background,box-shadow] duration-300"
        style={{
          left: '1px',
          background: inView ? 'var(--accent-light)' : 'transparent',
          boxShadow: inView ? '0 0 10px rgba(79,136,255,0.6)' : 'none',
          transform: `translateX(-50%) scale(${inView ? 1 : 0})`,
        }}
        aria-hidden="true"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
        className="glass rounded-[18px] p-6 sm:p-7 mb-4"
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-[1.0625rem] font-semibold text-[var(--text-primary)]">
                {entry.role}
              </h3>
              {entry.type && (
                <span className="text-[0.6875rem] font-medium px-2 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(79,136,255,0.12)',
                    border: '1px solid rgba(79,136,255,0.22)',
                    color: 'var(--accent-light)',
                  }}
                >
                  {entry.type}
                </span>
              )}
            </div>
            <p className="text-[0.9375rem] font-medium mt-0.5"
              style={{ color: 'var(--accent-light)' }}
            >
              {entry.company}
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-0.5 sm:mt-0.5">
            <span className="text-[0.8125rem] text-[var(--text-muted)] whitespace-nowrap">
              {entry.period}
            </span>
            <span className="text-[0.75rem] text-[var(--text-muted)] opacity-70">
              {entry.location}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="flex flex-col gap-2.5">
          {entry.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span
                className="mt-[0.45rem] w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent-light)', opacity: 0.7 }}
                aria-hidden="true"
              />
              <span className="text-[0.875rem] text-[var(--text-secondary)] leading-[1.65]">
                {b}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  const headRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 dot-motif"
        >
          <span className="section-label mb-4 inline-block">Career</span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
            Work experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: '1px',
              width: '1px',
              background:
                'linear-gradient(to bottom, var(--accent-light) 0%, rgba(79,136,255,0.15) 60%, transparent 100%)',
              opacity: 0.35,
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-2">
            {EXPERIENCE.map((entry) => (
              <TimelineEntry key={entry.company + entry.period} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
