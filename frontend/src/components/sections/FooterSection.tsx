import Container from '../ui/Container'

function FooterSection() {
  return (
    <footer className="border-t border-white/50 py-8">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">SAINT Platform</p>
            <p className="text-sm text-slate-600">Smart AI Tool for Next Gen Testing</p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-slate-700" aria-label="Footer links">
            <a className="transition hover:text-slate-900" href="#features">
              Features
            </a>
            <a className="transition hover:text-slate-900" href="#workflow">
              Workflow
            </a>
            <a className="transition hover:text-slate-900" href="#integrations">
              Integrations
            </a>
          </nav>

          <div className="flex items-center gap-2" aria-label="Social links">
            {['GH', 'LI', 'X'].map((social) => (
              <a
                key={social}
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-5 text-xs text-slate-600">© 2026 SAINT. All rights reserved.</p>
      </Container>
    </footer>
  )
}

export default FooterSection
