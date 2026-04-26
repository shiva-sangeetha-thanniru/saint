import { cn } from '../../utils/cn'

type CardProps = {
  children: React.ReactNode
  className?: string
}

function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-white/45 bg-white/78 p-5 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-[0_20px_52px_rgba(102,45,140,0.2)]',
        className,
      )}
    >
      {children}
    </article>
  )
}

export default Card
