import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const EASE = [0.23, 1, 0.32, 1] as const

const LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kennethoyahebholo',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kennethoyahebholo',
  },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 px-6 pb-32">
      <div className="max-w-2xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-12 dot-motif"
        >
          <span className="section-label mb-4 inline-block">Get in touch</span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-[-0.03em] text-[var(--text-primary)] mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-[1rem] text-[var(--text-secondary)] leading-[1.7] max-w-[30rem] mx-auto">
            Send me a message and let&apos;s talk.
          </p>
        </motion.div>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
          className="glass-strong rounded-[24px] p-8 sm:p-10"
        >
          {/* Availability badge */}
          <div className="flex items-center gap-2 mb-8">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
              style={{ boxShadow: '0 0 6px rgba(52,211,153,0.9)' }}
              aria-hidden="true"
            />
            <span className="text-[0.8125rem] font-medium text-[var(--text-secondary)]">
              Available now
            </span>
          </div>

          {/* Email */}
          <a
            href="mailto:oyahebholokennethizosea@gmail.com"
            className="group flex items-center gap-3 mb-6 w-fit"
            aria-label="Send email to Kenneth"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(79,136,255,0.12)',
                border: '1px solid rgba(79,136,255,0.22)',
              }}
            >
              <EnvelopeIcon className="w-5 h-5 text-[var(--accent-light)]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[0.75rem] text-[var(--text-muted)] mb-0.5">Email</p>
              <p className="text-[1rem] font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-light)] transition-colors duration-200 break-all">
                oyahebholokennethizosea@gmail.com
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(79,136,255,0.12)',
                border: '1px solid rgba(79,136,255,0.22)',
              }}
            >
              <MapPinIcon className="w-5 h-5 text-[var(--accent-light)]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[0.75rem] text-[var(--text-muted)] mb-0.5">Location</p>
              <p className="text-[1rem] font-semibold text-[var(--text-primary)]">
                Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mb-8"
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
            }}
            aria-hidden="true"
          />

          {/* Links row */}
          <div className="flex flex-wrap gap-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.875rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {link.label}
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            ))}
            <a
              href="mailto:oyahebholokennethizosea@gmail.com"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-[0.875rem]"
            >
              Email me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
