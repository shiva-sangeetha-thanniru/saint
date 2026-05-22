import Container from '../ui/Container'
import Section from '../ui/Section'
import { APP_NAME } from '../../constants/app'

const logos = ['GitHub', 'Jira', 'Figma', 'X-Ray', 'OpenAI', 'Anthropic', 'Google', 'Groq']

function IntegrationsSection() {
  return (
    <Container>
      <Section
        id="integrations"
        eyebrow="Integrations"
        title="Works with the tools your testing teams already use"
        description={`Plug ${APP_NAME} into engineering, product, and delivery ecosystems without friction.`}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((logo, index) => (
            <div
              key={logo}
              className={`reveal-on-scroll stagger-${(index % 4) + 1} rounded-xl border border-[var(--line-soft)] bg-[var(--surface-0)] px-3 py-3 text-center text-sm font-semibold tracking-wide text-[var(--ink-500)] shadow-[var(--shadow-sm)] grayscale transition duration-300 hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:text-[var(--ink-800)] hover:grayscale-0`}
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
