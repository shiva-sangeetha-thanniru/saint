import Container from '../ui/Container'

function TopHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line-soft)] bg-[rgba(243,247,251,0.82)] backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="inline-flex items-center gap-3" aria-label="SAINT home">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f5fd4] to-[#0ea5b1] text-sm font-bold text-white shadow-[0_10px_24px_rgba(15,95,212,0.34)]"
            >
              S
            </span>
            <div>
              <p className="font-display text-sm font-semibold tracking-wide text-[var(--ink-900)] sm:text-base">SAINT</p>
              <p className="hidden text-xs text-[var(--ink-500)] sm:block">AI Quality Command</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Top navigation">
            <a
              href="#features"
              className="inline-flex min-h-10 items-center rounded-lg px-4 text-sm font-medium text-[var(--ink-700)] transition hover:bg-[var(--surface-1)] hover:text-[var(--ink-900)]"
            >
              Features
            </a>
            <a
              href="#workflow"
              className="inline-flex min-h-10 items-center rounded-lg px-4 text-sm font-medium text-[var(--ink-700)] transition hover:bg-[var(--surface-1)] hover:text-[var(--ink-900)]"
            >
              Workflow
            </a>
            <a
              href="#integrations"
              className="inline-flex min-h-10 items-center rounded-lg px-4 text-sm font-medium text-[var(--ink-700)] transition hover:bg-[var(--surface-1)] hover:text-[var(--ink-900)]"
            >
              Integrations
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#dashboard"
              className="hidden min-h-10 items-center rounded-lg border border-[var(--line-soft)] bg-[var(--surface-0)] px-4 text-sm font-semibold text-[var(--ink-800)] transition hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-white sm:inline-flex"
            >
              Live Dashboard
            </a>
            <a
              href="#cta"
              className="inline-flex min-h-10 items-center rounded-lg bg-gradient-to-r from-[#0f5fd4] to-[#0ea5b1] px-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,95,212,0.3)] transition hover:-translate-y-0.5"
            >
              Request Demo
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default TopHeader
