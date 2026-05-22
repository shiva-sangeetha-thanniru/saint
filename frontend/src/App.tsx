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
    <div className="page-shell min-h-screen overflow-x-clip pt-16 text-[var(--ink-900)]">
      <a
        href="#hero"
        className="sr-only rounded-lg bg-[var(--surface-0)] px-3 py-2 text-sm font-medium text-[var(--ink-900)] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>
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
