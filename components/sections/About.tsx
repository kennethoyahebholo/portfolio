import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import {
  MapPinIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import faceCard from '../../public/faceCard.png'

const FACTS = [
  {
    icon: BriefcaseIcon,
    label: '5+ Years',
    detail: 'Production frontend engineering',
  },
  {
    icon: RocketLaunchIcon,
    label: 'Fintech & AI',
    detail: 'Core specialisation across both verticals',
  },
  {
    icon: MapPinIcon,
    label: 'Open to Relocation',
    detail: 'Currently based in Lagos',
  },
]

const EASE = [0.23, 1, 0.32, 1] as const

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="relative py-28 px-6 overflow-hidden">
      {/* Very subtle section separator glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(79,136,255,0.35), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 dot-motif"
        >
          <span className="section-label mb-3">About me</span>
          <h2 className="section-heading max-w-sm">
            Engineer by craft,
            <br />
            <span style={{ color: 'var(--accent-light)' }}>builder</span> by nature
          </h2>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="mb-10 flex justify-start"
        >
          <div className="rounded-full p-[3px]" style={{ background: 'linear-gradient(135deg, rgba(79,136,255,0.6), rgba(79,136,255,0.15))' }}>
            <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden">
              <Image
                src={faceCard}
                alt="Kenneth Oyahebholo"
                fill
                className="object-cover object-top"
                sizes="88px"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_340px] gap-5 items-start">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="glass-strong rounded-[20px] p-8 sm:p-10"
          >
            <p className="text-[1.0625rem] leading-[1.75] text-[var(--text-secondary)] mb-6">
              I&apos;m a Senior Frontend Engineer with five-plus years building production
              software in{' '}
              <span className="text-[var(--text-primary)] font-medium">fintech</span> and{' '}
              <span className="text-[var(--text-primary)] font-medium">AI products</span>
              {' '}— most recently contributing to Sprekar, an AI-powered real-time
              translation platform. I&apos;ve built design systems from scratch, owned
              entire frontend codebases solo, and shipped features used by real people
              in high-stakes financial contexts.
            </p>

            <p className="text-[1.0625rem] leading-[1.75] text-[var(--text-secondary)] mb-6">
              I work entirely remotely and have spent the last three years collaborating
              with distributed teams across Canada, the US, and West Africa. Named{' '}
              <span className="text-[var(--text-primary)] font-medium">
                Culture Champion
              </span>{' '}
              at Payfi in 2023.
            </p>

            <p className="text-[1.0625rem] leading-[1.75] text-[var(--text-secondary)] mb-10">
              Looking for a senior role where frontend quality is taken seriously.
              Currently based in Lagos and open to relocating to Europe — visa sponsorship welcome.
            </p>

            {/* Social links row */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/kennethoyahebholo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-[var(--accent-light)] hover:text-white transition-colors duration-200"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                LinkedIn
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <span className="text-[var(--text-muted)]" aria-hidden="true">·</span>
              <a
                href="https://github.com/kennethoyahebholo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-[var(--accent-light)] hover:text-white transition-colors duration-200"
                aria-label="GitHub profile (opens in new tab)"
              >
                GitHub
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <span className="text-[var(--text-muted)]" aria-hidden="true">·</span>
              <a
                href="mailto:oyahebholokennethizosea@gmail.com"
                className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-[var(--accent-light)] hover:text-white transition-colors duration-200"
                aria-label="Send email"
              >
                Email me
              </a>
            </div>
          </motion.div>

          {/* Fact cards stack */}
          <div className="flex flex-col gap-4">
            {FACTS.map((fact, i) => {
              const Icon = fact.icon
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.18 + i * 0.1, ease: EASE }}
                  className="glass rounded-[16px] p-5 flex items-start gap-4"
                >
                  {/* Icon container */}
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(79,136,255,0.12)',
                      border: '1px solid rgba(79,136,255,0.22)',
                    }}
                    aria-hidden="true"
                  >
                    <Icon className="w-[18px] h-[18px] text-[var(--accent-light)]" />
                  </div>

                  <div>
                    <p className="text-[0.9375rem] font-semibold text-[var(--text-primary)] mb-0.5 leading-snug">
                      {fact.label}
                    </p>
                    <p className="text-[0.8125rem] text-[var(--text-muted)] leading-snug">
                      {fact.detail}
                    </p>
                  </div>
                </motion.div>
              )
            })}

            {/* Availability callout */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.48, ease: EASE }}
              className="glass-accent rounded-[16px] p-5"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                  style={{ boxShadow: '0 0 6px rgba(52,211,153,0.9)' }}
                  aria-hidden="true"
                />
                <p className="text-[0.875rem] font-semibold text-[var(--text-primary)]">
                  Available now
                </p>
              </div>
              <p className="text-[0.8125rem] text-[var(--text-secondary)] leading-snug">
                Open to new roles. Let&apos;s talk.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
