import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#07090f" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />

        {/* SEO */}
        <meta name="author" content="Kenneth Oyahebholo" />
        <meta
          name="keywords"
          content="Kenneth Oyahebholo, Frontend Engineer, React, Next.js, TypeScript, Fintech, Lagos, Portfolio"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Kenneth Oyahebholo" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kenneth Oyahebholo — Senior Frontend Engineer" />
        <meta
          property="og:description"
          content="Senior Frontend Engineer with 5+ years building production interfaces for fintech products."
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kenneth Oyahebholo — Senior Frontend Engineer" />
        <meta
          name="twitter:description"
          content="Senior Frontend Engineer with 5+ years building production interfaces for fintech products."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
