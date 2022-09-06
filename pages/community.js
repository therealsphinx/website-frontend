import React from 'react'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Community from 'components/Community'

export default function DApp({ locale, onLocale }) {
  return (
    <>
      <Layout locale={locale} onLocale={onLocale} dapp>
        <Nav dapp page={'community'} locale={locale} onLocale={onLocale} />
        <div className="home d-flex flex-column">
          <Community />
        </div>
      </Layout>
      <style jsx>{`
        .home {
          padding-top: 20px;
        }

        @media (max-width: 799px) {
          .home {
            padding: 0;
          }
        }
      `}</style>
    </>
  )
}