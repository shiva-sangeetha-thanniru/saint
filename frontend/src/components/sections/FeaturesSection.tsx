import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'

const features = [
  {
    icon: 'RT',
    title: 'Routing Intelligence',
    description: 'Deterministic confidence scoring routes every request to the best-fit agent with transparent reason codes.',
  },
  {
    icon: 'MG',
    title: 'Multi-Agent Governance',
    description: 'Strict boundaries, correction protocol, and runtime fallback keep automation reliable at enterprise scale.',
  },
  {
    icon: 'WG',
    title: 'Workflow Generation',
    description: 'Transform plain language, stories, or test cases into executable Playwright suites with data generation.',
  },
  {
    icon: 'EG',
    title: 'Execution Guardrails',
    description: 'Block destructive actions, prevent framework substitution, and enforce safe operational behavior.',
  },
  {
    icon: 'IR',
    title: 'Insight Reporting',
    description: 'Consolidate execution outputs into dashboard-ready quality metrics and executive summaries.',
  },
  {
    icon: 'IX',
    title: 'Integration Mesh',
    description: 'Connect Jira, X-Ray, Figma MCP, and custom toolchains through unified interfaces and APIs.',
  },
]

function FeaturesSection() {
  return (
    <Container>
      <Section
        id="features"
        eyebrow="Features"
        title="Purpose-built capabilities for AI-native quality engineering"
        description="Each module is designed for velocity, safety, and explainability without sacrificing developer ergonomics."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className={`group reveal-on-scroll stagger-${(index % 4) + 1}`}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#c5d8f1] bg-[#ecf5ff] text-sm font-bold text-[#0f5fd4] transition group-hover:border-[#9dc2ed] group-hover:bg-[#deefff] group-hover:text-[#0a4fa8]">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-[var(--ink-900)]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-600)]">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  )
}

export default FeaturesSection
