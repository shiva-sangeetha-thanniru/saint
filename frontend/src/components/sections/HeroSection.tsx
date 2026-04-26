import Button from '../ui/Button'
import Container from '../ui/Container'

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      <div className="absolute inset-x-0 -top-20 h-72 bg-[radial-gradient(circle_at_top,rgba(102,45,140,0.34),rgba(237,30,121,0.2)_36%,rgba(15,23,42,0)_72%)]" />
      <Container>
        <div className="reveal-on-scroll grid gap-8 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-[0_24px_60px_rgba(102,45,140,0.22)] backdrop-blur-2xl md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#662d8c]">AI Testing Control Plane</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build, run, and govern autonomous quality workflows with confidence.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              SAINT blends multi-agent orchestration, deterministic routing, and enterprise guardrails into one
              clean platform for modern QA teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary">Start AI Test Workflow</Button>
              <Button variant="secondary">Explore Documentation</Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/50 bg-slate-950/95 p-5 text-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.3)]">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-fuchsia-200">Live Orchestration Preview</p>
              <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-[11px] font-semibold text-emerald-200">
                ACTIVE
              </span>
            </div>
            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-900/80 p-4 text-xs leading-6 text-blue-100">
{`routing.envelope({
  primary_agent: "WEB",
  confidence: 0.91,
  alternates: ["API", "WORKFLOW"],
  reason_codes: ["signal:framework_playwright"]
})
execute(plan: "generate -> validate -> report")`}
            </pre>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="text-fuchsia-200">Agents</p>
                <p className="mt-1 text-sm font-semibold text-white">14</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="text-fuchsia-200">Tools</p>
                <p className="mt-1 text-sm font-semibold text-white">18</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="text-fuchsia-200">Providers</p>
                <p className="mt-1 text-sm font-semibold text-white">5+</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
