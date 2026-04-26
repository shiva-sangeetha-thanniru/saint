import { useEffect } from 'react'
import CtaSection from './components/sections/CtaSection'
import DashboardPreviewSection from './components/sections/DashboardPreviewSection'
import FeaturesSection from './components/sections/FeaturesSection'
import FooterSection from './components/sections/FooterSection'
import HeroSection from './components/sections/HeroSection'
import IntegrationsSection from './components/sections/IntegrationsSection'
import WorkflowSection from './components/sections/WorkflowSection'
import TopHeader from './components/layout/TopHeader'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 },
    )

    const targets = document.querySelectorAll('.reveal-on-scroll')
    targets.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(102,45,140,0.24)_0%,rgba(237,30,121,0.14)_30%,rgba(248,250,252,1)_66%)] pt-16 text-slate-900">
      <TopHeader />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <IntegrationsSection />
      <DashboardPreviewSection />
      <CtaSection />
      <FooterSection />
    </div>
  )
}

export default App
