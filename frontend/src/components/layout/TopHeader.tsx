import Container from '../ui/Container'

function TopHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#662d8c] to-[#ed1e79] text-sm font-bold text-white shadow-[0_10px_24px_rgba(102,45,140,0.35)]"
            >
              S
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-900 sm:text-base">SAINT</span>
          </a>

          <nav className="flex items-center gap-2" aria-label="Top navigation">
            <a
              href="#features"
              className="inline-flex min-h-10 items-center rounded-lg px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Docs
            </a>
            <a
              href="#dashboard"
              className="inline-flex min-h-10 items-center rounded-lg bg-gradient-to-r from-[#662d8c] to-[#ed1e79] px-4 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(102,45,140,0.32)] transition hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default TopHeader
