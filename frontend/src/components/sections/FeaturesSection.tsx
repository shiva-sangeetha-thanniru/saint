import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'

const features = [
  {
    icon: 'RA',
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
          {features.map((feature) => (
            <Card key={feature.title} className="group">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-fuchsia-200 bg-fuchsia-50 text-sm font-bold text-[#662d8c] transition group-hover:border-fuchsia-300 group-hover:bg-fuchsia-100 group-hover:text-[#ed1e79]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  )
}

export default FeaturesSection
