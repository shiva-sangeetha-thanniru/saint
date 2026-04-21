import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import {
  generateWorkflowPreview,
  type WorkflowPreview,
} from './services/workflowApi'

const defaultPrompt =
  'Create an enterprise onboarding workflow for a multi-region product team.'

const capabilities = [
  {
    title: 'Multi-agent execution',
    description:
      'Coordinate planning, test-case generation, scripting, execution, and reporting with specialised agents.',
  },
  {
    title: 'Deterministic routing',
    description:
      'Route every request with additive confidence scoring, clear reason codes, and alternate suggestions.',
  },
  {
    title: 'Enterprise guardrails',
    description:
      'Protect teams with framework checks, non-destructive automation policies, and strict scope boundaries.',
  },
  {
    title: 'MCP-first tooling',
    description:
      'Access SAINT through 18 MCP tools spanning web, API, mobile, performance, security, and reporting flows.',
  },
]

const highlights = [
  { label: 'Specialised agents', value: '14' },
  { label: 'MCP tools', value: '18' },
  { label: 'Confidence bands', value: '4' },
  { label: 'Supported LLM providers', value: '5+' },
]

const routingSignals = [
  'Explicit agent mention',
  'Framework and tool references',
  'Strong domain keyword intent',
  'Attachment and payload type match',
]

const agentModeRows = [
  {
    mode: 'WEB',
    focus: 'Playwright TypeScript automation',
    interface: 'MCP + CLI',
    outcome: 'Specs, pages, actions, reports',
  },
  {
    mode: 'API',
    focus: 'OpenAPI and Postman test generation',
    interface: 'MCP + CLI',
    outcome: 'API suites with validation flow',
  },
  {
    mode: 'MOBILE',
    focus: 'Appium and Detox mobile flows',
    interface: 'MCP + CLI',
    outcome: 'iOS and Android automation',
  },
  {
    mode: 'WORKFLOW',
    focus: 'Cross-agent orchestration',
    interface: 'SAINT Chat',
    outcome: 'End-to-end lifecycle automation',
  },
]

function App() {
  const [prompt, setPrompt] = useState(defaultPrompt)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState<WorkflowPreview | null>(null)

  const isPromptValid = useMemo(() => prompt.trim().length > 10, [prompt])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isPromptValid) {
      setError('Please provide a little more detail to generate a useful workflow.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const data = await generateWorkflowPreview(prompt)
      setPreview(data)
    } catch (submitError) {
      setPreview(null)
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Something went wrong while generating the workflow preview.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-7xl bg-background px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div
        className="pointer-events-none absolute -right-20 -top-14 h-56 w-56 rounded-full bg-indigo-100/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-24 h-64 w-64 rounded-full bg-cyan-100/60 blur-3xl"
        aria-hidden="true"
      />

      <header className="animate-fade-rise relative z-10 mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span
            className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-sm"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              SAINT
            </p>
            <p className="text-sm text-text-secondary">Smart AI Tool for Next Gen Testing</p>
          </div>
        </div>

        <nav className="flex w-full gap-2 sm:w-auto" aria-label="Primary">
          <button
            className="transition-all duration-200 ease-in-out rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 ease-smooth hover:bg-gray-50"
            type="button"
          >
            MCP Tools
          </button>
          <button
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 ease-smooth hover:bg-gray-50"
            type="button"
          >
            Documentation
          </button>
        </nav>
      </header>

      <main className="relative z-10 grid gap-6 lg:gap-8">
        <section className="grid gap-6 lg:grid-cols-12">
          <div className="animate-fade-rise rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-smooth hover:shadow-cardHover lg:col-span-7 lg:p-8">
            <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
              Enterprise orchestration for modern QA teams
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-text-primary sm:text-3xl lg:text-4xl">
              Plan, route, and ship reliable automation with AI-native precision.
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-text-secondary sm:text-base">
              SAINT unifies requirement analysis, scenario generation, script creation,
              execution, and reporting through a confidence-driven multi-agent engine.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-smooth hover:bg-primary-hover"
                type="button"
              >
                Start with SAINT Chat
              </button>
              <button
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 ease-smooth hover:bg-gray-50"
                type="button"
              >
                View Architecture
              </button>
            </div>
          </div>

          <aside
            className="animate-fade-rise relative min-h-80 rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-200 ease-smooth hover:shadow-cardHover lg:col-span-5"
            aria-label="Routing envelope preview"
          >
            <div className="animate-float-soft absolute left-4 top-4 w-[84%] rounded-xl border border-border bg-card p-4 shadow-card">
              <p className="text-xs uppercase tracking-wide text-text-muted">Routing Envelope</p>
              <h3 className="mt-2 text-xl font-semibold text-text-primary">WEB</h3>
              <span className="mt-1 inline-block text-sm text-text-secondary">Confidence 0.85</span>
            </div>
            <div className="animate-float-soft absolute left-10 top-24 w-[84%] rounded-xl border border-border bg-card p-4 shadow-card [animation-delay:250ms]">
              <p className="text-xs uppercase tracking-wide text-text-muted">Fallback Plan</p>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">Retry to Workflow</h3>
              <span className="mt-1 inline-block text-sm text-text-secondary">
                Clarify missing inputs
              </span>
            </div>
            <div className="animate-float-soft absolute left-16 top-44 w-[84%] rounded-xl border border-border bg-card p-4 shadow-card [animation-delay:500ms]">
              <p className="text-xs uppercase tracking-wide text-text-muted">Guardrails</p>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">Active</h3>
              <span className="mt-1 inline-block text-sm text-text-secondary">
                No destructive automation
              </span>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-12">
          <form
            className="animate-fade-rise rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-smooth hover:shadow-cardHover lg:col-span-5"
            onSubmit={handleSubmit}
          >
            <div>
              <h2 className="text-xl font-semibold text-text-primary">Workflow prompt studio</h2>
              <p className="mt-1 text-sm text-text-secondary">
                Compose one request and generate a structured test workflow plan.
              </p>
            </div>

            <label
              htmlFor="workflow-prompt"
              className="mt-5 block text-xs uppercase tracking-wide text-text-muted"
            >
              Describe your workflow goal
            </label>
            <textarea
              id="workflow-prompt"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Describe domain, constraints, target framework, and expected outcome"
              aria-invalid={Boolean(error)}
              className="mt-2 min-h-52 w-full rounded-lg border border-gray-300 bg-card p-4 text-sm text-text-primary outline-none transition-all duration-200 ease-smooth placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button
              className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-smooth hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
              aria-busy={loading}
              disabled={loading}
              type="submit"
            >
              {loading ? 'Generating routing preview...' : 'Generate workflow preview'}
            </button>
            {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
          </form>

          <article
            className="animate-fade-rise rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-smooth hover:shadow-cardHover lg:col-span-4"
            aria-live="polite"
          >
            <div>
              <h2 className="text-xl font-semibold text-text-primary">Execution preview</h2>
              <p className="mt-1 text-sm text-text-secondary">
                Structured output aligned with SAINT routing and fallback policies.
              </p>
            </div>

            {preview ? (
              <>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{preview.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{preview.summary}</p>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-text-secondary">
                  {preview.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </>
            ) : (
              <p className="mt-4 text-sm text-text-secondary">
                Generate a preview to simulate how SAINT stages workflow execution.
              </p>
            )}

            <div className="mt-5 border-t border-border pt-4">
              <h4 className="text-sm font-semibold text-text-primary">Confidence signals sampled</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-secondary">
                {routingSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="grid gap-4 lg:col-span-3" aria-label="SAINT key metrics">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="animate-fade-rise rounded-xl border border-border bg-card p-4 shadow-card transition-all duration-200 ease-smooth hover:shadow-cardHover"
              >
                <p className="text-xs uppercase tracking-wide text-text-muted">{item.label}</p>
                <h3 className="mt-2 text-xl font-semibold text-text-primary">{item.value}</h3>
              </article>
            ))}
          </aside>
        </section>

        <section className="animate-fade-rise rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-smooth hover:shadow-cardHover lg:p-7">
          <div>
            <p className="text-xs uppercase tracking-wide text-text-muted">Core capabilities</p>
            <h2 className="mt-2 text-xl font-semibold text-text-primary">
              Important SAINT strengths, distilled for product teams
            </h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-xl border border-border bg-card p-4 shadow-card transition-all duration-200 ease-smooth hover:shadow-cardHover"
              >
                <h3 className="text-lg font-semibold text-text-primary">{capability.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="animate-fade-rise rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-smooth hover:shadow-cardHover lg:p-7"
          aria-label="Agent modes overview"
        >
          <div>
            <p className="text-xs uppercase tracking-wide text-text-muted">Agent mode matrix</p>
            <h2 className="mt-2 text-xl font-semibold text-text-primary">
              Choose the right SAINT mode for each delivery stage
            </h2>
          </div>

          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="min-w-[640px] w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="border-b border-border bg-primary-light px-4 py-3 text-xs uppercase tracking-wide text-text-muted">
                    Mode
                  </th>
                  <th className="border-b border-border bg-primary-light px-4 py-3 text-xs uppercase tracking-wide text-text-muted">
                    Focus
                  </th>
                  <th className="border-b border-border bg-primary-light px-4 py-3 text-xs uppercase tracking-wide text-text-muted">
                    Interface
                  </th>
                  <th className="border-b border-border bg-primary-light px-4 py-3 text-xs uppercase tracking-wide text-text-muted">
                    Expected output
                  </th>
                </tr>
              </thead>
              <tbody>
                {agentModeRows.map((row) => (
                  <tr key={row.mode} className="transition-all duration-200 ease-in-out hover:bg-gray-50">
                    <td className="border-b border-border px-4 py-3 text-sm text-text-secondary">
                      <span className="rounded-full border border-indigo-200 bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary">
                        {row.mode}
                      </span>
                    </td>
                    <td className="border-b border-border px-4 py-3 text-sm text-text-secondary">
                      {row.focus}
                    </td>
                    <td className="border-b border-border px-4 py-3 text-sm text-text-secondary">
                      {row.interface}
                    </td>
                    <td className="border-b border-border px-4 py-3 text-sm text-text-secondary">
                      {row.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="animate-fade-rise rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-smooth hover:shadow-cardHover lg:p-7">
          <h2 className="text-xl font-semibold text-text-primary">
            Built for CLI, MCP, and API-first delivery
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Use SAINT Chat for one-prompt orchestration, or switch to command-level
            control for design analysis, JIRA enrichment, script generation, and test
            execution.
          </p>
          <div className="mt-4 flex flex-wrap gap-2" role="list" aria-label="Supported channels">
            <span
              role="listitem"
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-text-secondary"
            >
              SAINT Chat
            </span>
            <span
              role="listitem"
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-text-secondary"
            >
              MCP JSON-RPC
            </span>
            <span
              role="listitem"
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-text-secondary"
            >
              CLI Automation
            </span>
            <span
              role="listitem"
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-text-secondary"
            >
              HTTP API
            </span>
            <span
              role="listitem"
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-text-secondary"
            >
              JIRA and X-Ray
            </span>
            <span
              role="listitem"
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-text-secondary"
            >
              Figma MCP
            </span>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
