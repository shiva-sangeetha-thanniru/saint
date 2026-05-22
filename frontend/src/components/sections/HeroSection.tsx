import { useEffect, useMemo, useState } from 'react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Modal from '../ui/Modal'
import { APP_NAME } from '../../constants/app'

const agentPreviews = [
  {
    id: 'WEB',
    confidence: 0.91,
    alternates: ['API', 'WORKFLOW'],
    reasonCode: 'signal:framework_playwright',
    plan: 'generate -> validate -> report',
  },
  {
    id: 'API',
    confidence: 0.89,
    alternates: ['WEB', 'DATA'],
    reasonCode: 'signal:swagger_contract_detected',
    plan: 'spec-parse -> scenario-map -> execute',
  },
  {
    id: 'WORKFLOW',
    confidence: 0.93,
    alternates: ['WEB', 'API'],
    reasonCode: 'signal:business_process_intent',
    plan: 'intent-decompose -> graph-build -> simulate',
  },
  {
    id: 'DATA',
    confidence: 0.87,
    alternates: ['API', 'WORKFLOW'],
    reasonCode: 'signal:test_data_complexity_high',
    plan: 'seed -> synthesize -> reconcile',
  },
] as const

function HeroSection() {
  const [email, setEmail] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [touched, setTouched] = useState(false)
  const [activeAgentIndex, setActiveAgentIndex] = useState(0)

  const isEmailValid = useMemo(() => /^\S+@\S+\.\S+$/.test(email), [email])
  const activePreview = useMemo(() => agentPreviews[activeAgentIndex] ?? agentPreviews[0], [activeAgentIndex])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveAgentIndex((previousIndex) => (previousIndex + 1) % agentPreviews.length)
    }, 1500)

    return () => window.clearInterval(timer)
  }, [])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTouched(true)

    if (isEmailValid) {
      setIsModalOpen(true)
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden pt-10 sm:pt-14">
      <div className="absolute inset-x-0 -top-28 h-80 bg-[radial-gradient(circle_at_top,rgba(15,95,212,0.3),rgba(14,165,177,0.16)_38%,rgba(15,23,42,0)_72%)]" />
      <Container>
        <div className="glass-surface reveal-on-scroll grid gap-8 rounded-3xl p-5 sm:p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-700)]">AI Testing Control Plane</p>
            <h1 className="font-display mt-3 text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--ink-900)] sm:text-5xl lg:text-6xl">
              Govern autonomous quality workflows with enterprise-grade confidence.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-600)] sm:text-lg">
              {APP_NAME} unifies orchestration, routing intelligence, and policy guardrails in a single platform for
              high velocity QA organizations.
            </p>

            <form onSubmit={onSubmit} className="mt-6 max-w-xl">
              <label htmlFor="work-email" className="mb-2 block text-sm font-semibold text-[var(--ink-800)]">
                Work email
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="work-email"
                  type="email"
                  value={email}
                  onBlur={() => setTouched(true)}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  aria-invalid={touched && !isEmailValid}
                  aria-describedby="email-help"
                  className="min-h-11 w-full rounded-xl border border-[var(--line-soft)] bg-white px-4 text-sm text-[var(--ink-900)] shadow-[var(--shadow-sm)] transition placeholder:text-[var(--ink-500)] focus:border-[var(--brand-700)]"
                />
                <Button type="submit" variant="primary" className="sm:min-w-44">
                  Request a Demo
                </Button>
              </div>
              <p
                id="email-help"
                className={`mt-2 text-sm ${touched && !isEmailValid ? 'text-[var(--danger-700)]' : 'text-[var(--ink-500)]'}`}
              >
                {touched && !isEmailValid
                  ? 'Enter a valid business email to continue.'
                  : 'No credit card required. We will schedule a tailored walkthrough.'}
              </p>
            </form>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="secondary">Explore Documentation</Button>
              <Button variant="ghost" className="border border-[var(--line-soft)]">
                View Sample Workflow
              </Button>
            </div>
          </div>

          <aside className="self-start rounded-2xl border border-[rgba(199,216,236,0.84)] bg-[linear-gradient(165deg,#102844,#14395a)] p-5 text-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.32)]">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">Live Orchestration Preview</p>
              <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-[11px] font-semibold text-emerald-200">
                ACTIVE
              </span>
            </div>

            <div className="mb-3" role="tablist" aria-label="Agent previews carousel">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeAgentIndex * 100}%)` }}
                >
                  {agentPreviews.map((agent, index) => (
                    <button
                      key={agent.id}
                      type="button"
                      role="tab"
                      aria-selected={activeAgentIndex === index}
                      onClick={() => setActiveAgentIndex(index)}
                      className={`min-h-9 w-full shrink-0 px-3 text-xs font-semibold tracking-[0.04em] transition ${
                        activeAgentIndex === index
                          ? 'bg-cyan-100/20 text-cyan-100'
                          : 'text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {agent.id}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex items-center justify-center gap-1.5">
                {agentPreviews.map((agent, index) => (
                  <button
                    key={`${agent.id}-dot`}
                    type="button"
                    aria-label={`Show ${agent.id} preview`}
                    onClick={() => setActiveAgentIndex(index)}
                    className={`h-1.5 w-5 rounded-full transition ${
                      activeAgentIndex === index ? 'bg-cyan-200' : 'bg-white/25 hover:bg-white/45'
                    }`}
                  />
                ))}
              </div>
            </div>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-900/70 p-4 text-xs leading-6 text-blue-100">
{`routing.envelope({
  primary_agent: "${activePreview.id}",
  confidence: ${activePreview.confidence},
  alternates: ["${activePreview.alternates[0]}", "${activePreview.alternates[1]}"],
  reason_codes: ["${activePreview.reasonCode}"]
})
execute(plan: "${activePreview.plan}")`}
            </pre>
            <div className="mt-4 grid grid-cols-1 gap-2 text-center text-xs sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="text-cyan-200">Agents</p>
                <p className="mt-1 text-sm font-semibold text-white">14</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="text-cyan-200">Tools</p>
                <p className="mt-1 text-sm font-semibold text-white">18</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="text-cyan-200">Providers</p>
                <p className="mt-1 text-sm font-semibold text-white">5+</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-200">Routing Health</p>
                <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-100">
                  {activePreview.id} ACTIVE
                </span>
              </div>

              <ul className="space-y-2">
                <li className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900/50 px-2.5 py-1.5 text-xs">
                  <span className="text-slate-300">Route confidence</span>
                  <span className="font-semibold text-white">{Math.round(activePreview.confidence * 100)}%</span>
                </li>
                <li className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900/50 px-2.5 py-1.5 text-xs">
                  <span className="text-slate-300">Fallback readiness</span>
                  <span className="font-semibold text-emerald-200">99.4%</span>
                </li>
                <li className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900/50 px-2.5 py-1.5 text-xs">
                  <span className="text-slate-300">Avg handoff time</span>
                  <span className="font-semibold text-white">420ms</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Demo Request Received"
          description="Your request has been queued. Our team will contact you within one business day."
        >
          <div className="rounded-xl border border-[var(--line-soft)] bg-white p-4">
            <p className="text-sm text-[var(--ink-700)]">
              We registered <span className="font-semibold text-[var(--ink-900)]">{email}</span> for a guided {APP_NAME}{' '}
              product session.
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </div>
        </Modal>
      </Container>
    </section>
  )
}

export default HeroSection
