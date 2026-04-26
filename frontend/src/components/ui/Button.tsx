import { designSystem } from '../../design-system'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

function Button({ children, variant = 'primary', className, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        designSystem.buttons[variant],
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
