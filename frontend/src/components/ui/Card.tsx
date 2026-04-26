import { cn } from '../../utils/cn'

type CardProps = {
  children: React.ReactNode
  className?: string
}

function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-2)] p-5 shadow-[var(--shadow-sm)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-md)]',
        className,
      )}
    >
      {children}
    </article>
  )
}

export default Card
