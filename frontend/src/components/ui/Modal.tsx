import { useEffect } from 'react'
import { cn } from '../../utils/cn'

type ModalProps = {
  open: boolean
  title: string
  description?: string
  onClose: () => void
  children: React.ReactNode
  className?: string
}

function Modal({ open, title, description, onClose, children, className }: ModalProps) {
  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(8,15,28,0.55)] p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className={cn('glass-surface max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl p-6 sm:max-h-[calc(100vh-3rem)] sm:p-7', className)}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-[var(--ink-900)]">{title}</h3>
            {description && <p className="mt-2 text-sm leading-6 text-[var(--ink-600)]">{description}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line-soft)] bg-white text-[var(--ink-600)] transition hover:border-[var(--line-strong)] hover:text-[var(--ink-900)]"
            aria-label="Close modal"
          >
            x
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  )
}

export default Modal
