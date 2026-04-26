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
    <section id={id} className={cn('reveal-on-scroll py-12 sm:py-16', className)}>
      <header className="mb-6 sm:mb-8">
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#662d8c]">{eyebrow}</p>}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">{description}</p>}
      </header>
      {children}
    </section>
  )
}

export default Section
