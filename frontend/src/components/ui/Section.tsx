import { cn } from '../../utils/cn'

type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('reveal-on-scroll py-14 sm:py-20', className)}>
      <header className="mb-8 sm:mb-10">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-700)]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.02em] text-[var(--ink-900)] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-600)]">{description}</p>}
      </header>
      {children}
    </section>
  )
}

export default Section
