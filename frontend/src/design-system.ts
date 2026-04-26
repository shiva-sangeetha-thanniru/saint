export const designSystem = {
  colors: {
    primaryGradient: 'from-[#662d8c] to-[#ed1e79]',
    background: 'bg-slate-950/0',
    surface: 'bg-white/80',
    border: 'border-white/35',
    textPrimary: 'text-slate-900',
    textSecondary: 'text-slate-600',
  },
  typography: {
    h1: 'text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl',
    h2: 'text-3xl font-bold tracking-tight sm:text-4xl',
    h3: 'text-xl font-semibold tracking-tight',
    body: 'text-base leading-7',
    small: 'text-sm leading-6',
  },
  spacing: {
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  },
  buttons: {
    primary:
      'bg-gradient-to-r from-[#662d8c] to-[#ed1e79] text-white shadow-[0_14px_30px_rgba(102,45,140,0.34)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(237,30,121,0.34)] focus-visible:ring-fuchsia-500',
    secondary:
      'border border-slate-300 bg-white/90 text-slate-800 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white focus-visible:ring-slate-400',
    ghost: 'bg-transparent text-slate-700 hover:bg-white/65 hover:text-slate-900 focus-visible:ring-slate-400',
  },
} as const
