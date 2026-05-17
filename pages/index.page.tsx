import Head from 'next/head'
import NavBar from '../components/NavBar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Metrics from '../components/sections/Metrics'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenneth Oyahebholo — Senior Frontend Engineer</title>
        <meta
          name="description"
          content="Senior Frontend Engineer with 5+ years building production interfaces for fintech products. React, Next.js, TypeScript."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kenneth Oyahebholo — Senior Frontend Engineer" />
        <meta
          property="og:description"
          content="Senior Frontend Engineer with 5+ years building production interfaces for fintech products. React, Next.js, TypeScript."
        />
        <link rel="canonical" href="https://kennethoyahebholo.com" />
      </Head>

      <main>
        <NavBar />

        <section id="hero" aria-label="Introduction">
          <Hero />
        </section>

        <section id="about" aria-label="About">
          <About />
        </section>

        <section id="metrics" aria-label="Performance metrics">
          <Metrics />
        </section>

        <section id="experience" aria-label="Work experience">
          <Experience />
        </section>

        <section id="projects" aria-label="Projects">
          <Projects />
        </section>

        <section id="skills" aria-label="Skills">
          <Skills />
        </section>

        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>
    </>
  )
}
