export const designSystem = {
  colors: {
    primaryGradient: 'from-[#0f5fd4] to-[#0ea5b1]',
    background: 'bg-[var(--bg-canvas)]',
    surface: 'bg-[var(--surface-1)]',
    border: 'border-[var(--line-soft)]',
    textPrimary: 'text-[var(--ink-900)]',
    textSecondary: 'text-[var(--ink-600)]',
  },
  typography: {
    h1: 'font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-6xl',
    h2: 'font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl',
    h3: 'font-display text-xl font-semibold tracking-[-0.01em]',
    body: 'text-base leading-7',
    small: 'text-sm leading-6',
  },
  spacing: {
    xs: 'p-2',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
    xl: 'p-10',
  },
  buttons: {
    primary:
      'border border-transparent bg-gradient-to-r from-[#0f5fd4] to-[#0ea5b1] text-white shadow-[0_14px_34px_rgba(15,95,212,0.34)] hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(14,165,177,0.36)] active:translate-y-0 focus-visible:ring-[var(--focus-ring)]',
    secondary:
      'border border-[var(--line-soft)] bg-[var(--surface-0)] text-[var(--ink-800)] hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-white focus-visible:ring-[var(--focus-ring)]',
    ghost:
      'border border-transparent bg-transparent text-[var(--ink-700)] hover:bg-[var(--surface-1)] hover:text-[var(--ink-900)] focus-visible:ring-[var(--focus-ring)]',
  },
} as const
