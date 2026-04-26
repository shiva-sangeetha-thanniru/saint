import Container from '../ui/Container'
import Section from '../ui/Section'

function DashboardPreviewSection() {
  const trendHeights = ['h-[32%]', 'h-[54%]', 'h-[46%]', 'h-[72%]', 'h-[68%]', 'h-[88%]', 'h-[74%]']

  return (
    <Container>
      <Section
        id="dashboard"
        eyebrow="Dashboard Preview"
        title="A SaaS command center for end-to-end test operations"
        description="Monitor orchestration state, quality trends, and execution queues in a single screen."
      >
        <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/80 shadow-[0_24px_60px_rgba(15,23,42,0.1)] backdrop-blur-xl">
          <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[220px_1fr]">
            <aside className="border-b border-white/50 bg-slate-900/95 p-5 text-slate-200 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
              <h3 className="mt-3 text-lg font-semibold text-white">SAINT Ops</h3>
              <nav className="mt-6 space-y-2">
                {['Home', 'Tests', 'Reports', 'Settings'].map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                      index === 1
                        ? 'bg-gradient-to-r from-[#662d8c] to-[#ed1e79] font-semibold text-white'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="p-4 sm:p-6">
              <header className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/85 p-3">
                <p className="text-sm font-semibold text-slate-800">Execution Overview</p>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                  97.2% Pass Rate
                </span>
              </header>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  ['Runs Today', '248'],
                  ['Avg Duration', '3m 12s'],
                  ['Flaky Tests', '6'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
                    <p className="mt-1 text-xl font-bold text-slate-900">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-800">Execution Trend</p>
                  <div className="mt-3 flex h-36 items-end gap-2">
                    {trendHeights.map((barClass, index) => (
                      <div
                        key={`${barClass}-${index}`}
                        className={`flex-1 rounded-t-md bg-gradient-to-t from-[#662d8c] to-[#ed1e79] ${barClass}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-800">Latest Runs</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {[
                      ['Checkout flow', 'Passed'],
                      ['Login resilience', 'Passed'],
                      ['Payment fallback', 'Needs review'],
                    ].map(([name, status]) => (
                      <li key={name} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
                        <span className="text-slate-700">{name}</span>
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-semibold ${
                            status === 'Passed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}

export default DashboardPreviewSection
