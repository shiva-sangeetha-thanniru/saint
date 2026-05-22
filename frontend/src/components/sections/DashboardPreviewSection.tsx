import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import Section from '../ui/Section'
import { APP_NAME } from '../../constants/app'

const dashboardViews = [
  {
    name: 'Home',
    headerTitle: 'Workspace Overview',
    badgeText: '97.2% Pass Rate',
    badgeTone: 'positive',
    stats: [
      ['Runs Today', '248'],
      ['Avg Duration', '3m 12s'],
      ['Flaky Tests', '6'],
    ],
    trendTitle: 'Execution Trend',
    listTitle: 'Latest Runs',
    listItems: [
      ['Checkout flow', 'Passed'],
      ['Login resilience', 'Passed'],
      ['Payment fallback', 'Needs review'],
    ],
    stateCards: [
      ['Empty State', 'No blocked runs', 'Your execution queue is clear for this environment.'],
      ['Loading State', 'Syncing run insights', 'Refreshing charts from the latest CI execution data.'],
      ['Error State', 'Provider timeout', 'Anthropic API timed out. Retry is available in orchestration settings.'],
    ],
  },
  {
    name: 'Tests',
    headerTitle: 'Test Operations',
    badgeText: '18 suites active',
    badgeTone: 'positive',
    stats: [
      ['Queued Tests', '42'],
      ['Running Now', '11'],
      ['Failed Today', '3'],
    ],
    trendTitle: 'Suite Stability',
    listTitle: 'Recent Test Batches',
    listItems: [
      ['Auth regression', 'Passed'],
      ['Checkout smoke', 'Passed'],
      ['Cross-browser pack', 'Needs review'],
    ],
    stateCards: [
      ['Empty State', 'No pending retries', 'All retry queues are currently empty.'],
      ['Loading State', 'Provisioning runners', 'Allocating ephemeral runners for parallel execution.'],
      ['Error State', 'Runner capacity low', 'Increase concurrent workers or reschedule non-critical suites.'],
    ],
  },
  {
    name: 'Reports',
    headerTitle: 'Quality Reports',
    badgeText: 'Weekly trend +4.1%',
    badgeTone: 'positive',
    stats: [
      ['Published Reports', '36'],
      ['Stakeholders', '19'],
      ['Open Insights', '7'],
    ],
    trendTitle: 'Quality Signal Trend',
    listTitle: 'Latest Report Packs',
    listItems: [
      ['API Reliability', 'Passed'],
      ['Payment Journeys', 'Needs review'],
      ['UAT Coverage', 'Passed'],
    ],
    stateCards: [
      ['Empty State', 'No draft reports', 'All generated reports have been published.'],
      ['Loading State', 'Compiling evidence', 'Aggregating logs, screenshots, and traces for summary output.'],
      ['Error State', 'Export job failed', 'CSV export failed due to malformed external webhook payload.'],
    ],
  },
  {
    name: 'Settings',
    headerTitle: 'Workspace Settings',
    badgeText: '2 policy alerts',
    badgeTone: 'warning',
    stats: [
      ['Active Policies', '24'],
      ['Connected Tools', '18'],
      ['Pending Invites', '4'],
    ],
    trendTitle: 'Policy Compliance Trend',
    listTitle: 'Recent Config Changes',
    listItems: [
      ['Role permissions', 'Passed'],
      ['Webhook signatures', 'Needs review'],
      ['Data retention rules', 'Passed'],
    ],
    stateCards: [
      ['Empty State', 'No pending approvals', 'All governance changes are approved and active.'],
      ['Loading State', 'Applying workspace config', 'Rolling out updated settings across connected providers.'],
      ['Error State', 'Policy conflict found', 'Two guardrail policies overlap. Resolve before publishing changes.'],
    ],
  },
] as const

function DashboardPreviewSection() {
  const navItems = dashboardViews.map((view) => view.name)
  const trendHeights = ['h-[32%]', 'h-[54%]', 'h-[46%]', 'h-[72%]', 'h-[68%]', 'h-[88%]', 'h-[74%]']
  const [activeNavIndex, setActiveNavIndex] = useState(1)
  const activeView = dashboardViews[activeNavIndex] ?? dashboardViews[0]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveNavIndex((previousIndex) => (previousIndex + 1) % navItems.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [navItems.length])

  return (
    <Container>
      <Section
        id="dashboard"
        eyebrow="Dashboard Preview"
        title="A SaaS command center for end-to-end test operations"
        description="Monitor orchestration state, quality trends, and execution queues in a single screen."
        className="pt-7 sm:pt-10"
      >
        <div className="overflow-hidden rounded-3xl border border-[var(--line-soft)] bg-[var(--surface-2)] shadow-[var(--shadow-md)] backdrop-blur-xl">
          <div className="grid min-h-[360px] grid-cols-1 lg:min-h-[420px] lg:grid-cols-[220px_1fr]">
            <aside className="border-b border-[rgba(255,255,255,0.1)] bg-[linear-gradient(175deg,#10233d,#15395c)] p-5 text-slate-200 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{`${APP_NAME} Ops`}</h3>
              <nav className="mt-6 space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    onClick={(event) => {
                      event.preventDefault()
                      setActiveNavIndex(index)
                    }}
                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                      index === activeNavIndex
                        ? 'bg-gradient-to-r from-[#0f5fd4] to-[#0ea5b1] font-semibold text-white'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="p-4 sm:p-6">
              <header className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--line-soft)] bg-white p-3">
                <p className="text-sm font-semibold text-[var(--ink-800)]">{activeView.headerTitle}</p>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    activeView.badgeTone === 'warning'
                      ? 'bg-[var(--warning-100)] text-[var(--warning-700)]'
                      : 'bg-[var(--positive-100)] text-[var(--positive-700)]'
                  }`}
                >
                  {activeView.badgeText}
                </span>
              </header>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {activeView.stats.map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-[var(--line-soft)] bg-white p-3">
                    <p className="text-xs uppercase tracking-wide text-[var(--ink-500)]">{label}</p>
                    <p className="mt-1 text-xl font-bold text-[var(--ink-900)]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-xl border border-[var(--line-soft)] bg-white p-4">
                  <p className="text-sm font-semibold text-[var(--ink-800)]">{activeView.trendTitle}</p>
                  <div className="mt-3 flex h-36 items-end gap-2">
                    {trendHeights.map((barClass, index) => (
                      <div
                        key={`${barClass}-${index}`}
                        className={`flex-1 rounded-t-md bg-gradient-to-t from-[#0f5fd4] to-[#0ea5b1] ${barClass}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--line-soft)] bg-white p-4">
                  <p className="text-sm font-semibold text-[var(--ink-800)]">{activeView.listTitle}</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {activeView.listItems.map(([name, status]) => (
                      <li key={name} className="flex items-center justify-between rounded-lg border border-[var(--line-soft)] px-3 py-2">
                        <span className="text-[var(--ink-700)]">{name}</span>
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-semibold ${
                            status === 'Passed'
                              ? 'bg-[var(--positive-100)] text-[var(--positive-700)]'
                              : 'bg-[var(--warning-100)] text-[var(--warning-700)]'
                          }`}
                        >
                          {status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {activeView.stateCards.map(([title, headline, copy]) => {
                  const isLoading = title === 'Loading State'
                  const isError = title === 'Error State'

                  return (
                    <article
                      key={title}
                      className={`rounded-xl p-4 ${
                        isError
                          ? 'border border-[#f3c6d1] bg-[#fff6f8]'
                          : 'border border-[var(--line-soft)] bg-white'
                      }`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                          isError ? 'text-[var(--danger-700)]' : 'text-[var(--ink-500)]'
                        }`}
                      >
                        {title}
                      </p>
                      <p
                        className={`mt-2 text-sm font-semibold ${
                          isLoading
                            ? 'flex items-center gap-2 text-[var(--ink-800)]'
                            : isError
                              ? 'text-[var(--danger-700)]'
                              : 'text-[var(--ink-800)]'
                        }`}
                      >
                        {isLoading && (
                          <span
                            className="animate-pulse-dot inline-flex h-2 w-2 rounded-full bg-[var(--brand-700)]"
                            aria-hidden="true"
                          />
                        )}
                        {headline}
                      </p>
                      <p className="mt-1 text-sm text-[var(--ink-600)]">{copy}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}

export default DashboardPreviewSection
