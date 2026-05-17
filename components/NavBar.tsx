import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-x-0 top-0 z-50"
        role="banner"
      >
        <div
          className={[
            'mx-auto flex items-center justify-between duration-500 transition-[background,backdrop-filter,border-color,box-shadow,max-width,padding,margin,border-radius]',
            scrolled
              ? 'glass max-w-5xl mt-3 mx-4 md:mx-auto px-5 py-3 rounded-2xl'
              : 'max-w-6xl px-6 py-5 border border-transparent',
          ].join(' ')}
        >
          {/* Logo mark */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-xl glass-accent flex items-center justify-center flex-shrink-0">
              <span className="text-[11px] font-bold text-[var(--accent-light)] tracking-tight">
                KO
              </span>
            </div>
            <span className="hidden sm:block text-[0.8125rem] font-semibold text-[var(--text-primary)] leading-none">
              Kenneth Oyahebholo
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.8125rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex btn-primary text-[0.8125rem] py-2 px-5">
              Get in touch
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-xl glass text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? (
                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-x-4 top-[4.5rem] z-40 glass-strong rounded-2xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center py-3 px-2 text-[0.9375rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b border-[var(--glass-border)] last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Get in touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
