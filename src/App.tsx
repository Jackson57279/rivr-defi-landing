import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Metrics from './components/Metrics'

export default function App() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <Metrics />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
