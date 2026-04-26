import { cn } from '../../utils/cn'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12', className)}>{children}</div>
}

export default Container
