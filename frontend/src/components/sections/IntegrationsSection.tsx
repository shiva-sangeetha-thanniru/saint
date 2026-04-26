import Container from '../ui/Container'
import Section from '../ui/Section'

const logos = ['GitHub', 'Jira', 'Figma', 'X-Ray', 'OpenAI', 'Anthropic', 'Google', 'Groq']

function IntegrationsSection() {
  return (
    <Container>
      <Section
        id="integrations"
        eyebrow="Integrations"
        title="Works with the tools your testing teams already use"
        description="Plug SAINT into engineering, product, and delivery ecosystems without friction."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-xl border border-slate-300/70 bg-white/75 px-3 py-3 text-center text-sm font-semibold tracking-wide text-slate-500 shadow-[0_10px_24px_rgba(15,23,42,0.06)] grayscale transition duration-300 hover:-translate-y-0.5 hover:text-slate-700 hover:grayscale-0"
            >
              {logo}
            </div>
          ))}
        </div>
      </Section>
    </Container>
  )
}

export default IntegrationsSection
