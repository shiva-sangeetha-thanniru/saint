import Container from '../ui/Container'
import Section from '../ui/Section'

const steps = [
  {
    title: 'Understand Intent',
    description: 'Classify request context using deterministic signals and confidence bands before execution starts.',
  },
  {
    title: 'Route and Validate',
    description: 'Select the optimal agent, apply correction protocol when needed, and confirm guardrail compatibility.',
  },
  {
    title: 'Generate and Execute',
    description: 'Produce test scenarios, scripts, and data, then run with retries and fallback behavior.',
  },
  {
    title: 'Report and Improve',
    description: 'Publish outcomes to dashboards and integrations, then feed insights into the next iteration loop.',
  },
]

function WorkflowSection() {
  return (
    <Container>
      <Section
        id="workflow"
        eyebrow="How It Works"
        title="From prompt to production-grade test workflow in four steps"
        description="A clear progression model keeps teams aligned while preserving speed and traceability."
        className="pt-7 sm:pt-10"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="reveal-on-scroll relative rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-2)] p-5 shadow-[var(--shadow-sm)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-md)]"
            >
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-2 top-1/2 hidden h-[2px] w-4 -translate-y-1/2 bg-gradient-to-r from-[#0f5fd4] to-[#0ea5b1] lg:block"
                />
              )}
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#0f5fd4] to-[#0ea5b1] text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-[var(--ink-900)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-600)]">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </Container>
  )
}

export default WorkflowSection
