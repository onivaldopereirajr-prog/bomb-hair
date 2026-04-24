import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { About } from '@/components/sections/About'
import { AppFeatures } from '@/components/sections/AppFeatures'
import { AppWireframe } from '@/components/sections/AppWireframe'
import { CTA } from '@/components/sections/CTA'
import { Founders } from '@/components/sections/Founders'
import { Hero } from '@/components/sections/Hero'
import { Products } from '@/components/sections/Products'
import { Roadmap } from '@/components/sections/Roadmap'
import { TechStack } from '@/components/sections/TechStack'
import '@/styles/globals.css'

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Bomb-Hair | Ciência. Tecnologia. Comunidade. - Beauty Tech</title>
        <meta
          name="description"
          content="Bomb-Hair é a primeira Beauty Tech que une cosméticos capilares de alta performance a um aplicativo inteligente. Transforme sua rotina capilar com ciência e tecnologia."
        />
        <meta
          name="keywords"
          content="bomb-hair, beauty tech, cuidados capilares, shampoo premium, hair tonic, aplicativo capilar, crescimento capilar"
        />
        <meta property="og:title" content="Bomb-Hair | Ciência. Tecnologia. Comunidade." />
        <meta
          property="og:description"
          content="A primeira Beauty Tech que une cosméticos premium a um aplicativo inteligente para transformar sua rotina capilar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://bomb-hair.com" />
      </Helmet>

      <div className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold-400 text-charcoal-900 px-4 py-2 rounded-lg z-[100] font-body font-semibold"
        >
          Ir para conteúdo principal
        </a>

        <Header />

        <main id="main-content">
          <Hero />
          <About />
          <Founders />
          <Products />
          <AppFeatures />
          <AppWireframe />
          <TechStack />
          <Roadmap />
          <CTA />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  )
}
