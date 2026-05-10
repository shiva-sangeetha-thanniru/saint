import Button from '../ui/Button'
import Container from '../ui/Container'
import { APP_NAME } from '../../constants/app'

function FooterSection() {
  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
          <path d="M6.4 8.5A1.4 1.4 0 1 1 6.4 5.7a1.4 1.4 0 0 1 0 2.8ZM5.2 9.8h2.4v8.5H5.2V9.8Zm4 0h2.3v1.2h.1c.3-.6 1.2-1.5 2.6-1.5 2.8 0 3.3 1.8 3.3 4.2v4.6h-2.4V14c0-1-.1-2.2-1.4-2.2s-1.6 1-1.6 2.1v4.4H9.2V9.8Z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
          <path d="M18.9 7.1c.8-.1 1.5-.5 2.1-1-.3.8-.9 1.5-1.7 2 .8 0 1.5-.3 2.1-.6-.5.8-1.2 1.4-1.9 1.9v.5c0 5.1-3.9 11-11 11-2.2 0-4.2-.6-5.9-1.7h.9c1.8 0 3.4-.6 4.7-1.7-1.7 0-3.1-1.1-3.6-2.7.2 0 .5.1.7.1.3 0 .6 0 .9-.1-1.8-.4-3.2-2-3.2-3.9v-.1c.5.3 1.1.4 1.8.5-1.1-.7-1.8-1.9-1.8-3.3 0-.7.2-1.4.6-2 2 2.4 4.9 3.9 8.3 4-.1-.3-.1-.6-.1-.9 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.1.5 2.8 1.2.9-.2 1.7-.5 2.4-.9-.3.9-.9 1.6-1.7 2.1Z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="mt-10 border-t border-[var(--line-soft)] bg-[var(--surface-1)] pt-10 pb-6 sm:pt-12 sm:pb-7" aria-labelledby="footer-heading">
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          <section className="sm:col-span-2 lg:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-3" aria-label={`${APP_NAME} home`}>
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f5fd4] to-[#0ea5b1] text-sm font-bold text-white shadow-[0_10px_24px_rgba(15,95,212,0.34)]"
              >
                {APP_NAME.charAt(0)}
              </span>
              <span className="font-display text-base font-semibold tracking-wide text-[var(--ink-900)]">{APP_NAME}</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--ink-600)]">
              AI quality orchestration platform for resilient test execution, deterministic routing, and governed
              automation workflows.
            </p>

            <form className="mt-4 max-w-sm" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="footer-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-700)]">
                Product Updates
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@company.com"
                  className="min-h-11 w-full rounded-xl border border-[var(--line-soft)] bg-white px-4 text-sm text-[var(--ink-900)] shadow-[var(--shadow-sm)] transition placeholder:text-[var(--ink-500)] focus:border-[var(--brand-700)]"
                />
                <Button type="submit" variant="secondary" className="sm:min-w-28">
                  Subscribe
                </Button>
              </div>
            </form>
          </section>

          <nav aria-label="Product links">
            <p className="font-display text-sm font-semibold tracking-[0.01em] text-[var(--ink-900)]">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-700)]">
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#cta">
                  Pricing
                </a>
              </li>
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#integrations">
                  Integrations
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company links">
            <p className="font-display text-sm font-semibold tracking-[0.01em] text-[var(--ink-900)]">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-700)]">
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Resource links">
            <p className="font-display text-sm font-semibold tracking-[0.01em] text-[var(--ink-900)]">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-700)]">
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#features">
                  Docs
                </a>
              </li>
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#cta">
                  Support
                </a>
              </li>
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#workflow">
                  API
                </a>
              </li>
            </ul>
          </nav>

          <section>
            <p className="font-display text-sm font-semibold tracking-[0.01em] text-[var(--ink-900)]">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-700)]">
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="transition hover:text-[var(--ink-900)]" href="#">
                  Terms
                </a>
              </li>
            </ul>

            <p className="mt-5 font-display text-sm font-semibold tracking-[0.01em] text-[var(--ink-900)]">Connect</p>
            <div className="mt-3 flex items-center gap-2" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-soft)] bg-white text-xs font-semibold text-[var(--ink-700)] transition hover:border-[var(--line-strong)] hover:text-[var(--ink-900)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-[var(--line-soft)] pt-4 text-xs text-[var(--ink-600)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default FooterSection
