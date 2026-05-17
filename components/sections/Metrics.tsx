import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from '../ui/AnimatedCounter'

const METRICS = [
  {
    value: 5,
    suffix: '+',
    label: 'Years of experience',
    sub: 'Production frontend engineering',
    accent: false,
  },
  {
    value: 40,
    suffix: '%',
    label: 'TTI improvement',
    sub: 'Time-to-interactive across key flows',
    accent: true,
  },
  {
    value: 50,
    suffix: '%',
    label: 'Payload reduction',
    sub: 'GraphQL query optimisation',
    accent: false,
  },
  {
    value: 92,
    suffix: '%',
    label: 'On-time delivery',
    sub: 'Up from 65% through process changes',
    accent: true,
  },
  {
    value: 80,
    suffix: '%',
    label: 'Less manual work',
    sub: 'Via automation & workflow tooling',
    accent: false,
  },
  {
    value: 3,
    suffix: '',
    label: 'Live products shipped',
    sub: 'Fintech, AI & SaaS verticals',
    accent: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.23, 1, 0.32, 1] as const },
  }),
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="metrics" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-14 dot-motif"
        >
          <span className="section-label mb-4 inline-block">By the numbers</span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
            Numbers that matter
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className={`glass-hover rounded-[20px] p-7 flex flex-col gap-2 ${
                m.accent ? 'glass-accent' : 'glass'
              }`}
            >
              <div
                className="text-[3rem] font-bold tracking-[-0.04em] leading-none"
                style={{ color: 'var(--accent-light)' }}
              >
                {inView ? (
                  <AnimatedCounter value={m.value} suffix={m.suffix} duration={1.8} />
                ) : (
                  <span>0{m.suffix}</span>
                )}
              </div>
              <p className="text-[1rem] font-semibold text-[var(--text-primary)] leading-snug">
                {m.label}
              </p>
              <p className="text-[0.8125rem] text-[var(--text-muted)] leading-relaxed">
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
