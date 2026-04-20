import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'
import {
  generateWorkflowPreview,
  type WorkflowPreview,
} from './services/workflowApi'

const defaultPrompt =
  'Create an enterprise onboarding workflow for a multi-region product team.'

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
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">SAINT</div>
        <button className="ghost-btn" type="button">
          Product Docs
        </button>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Enterprise workflow designer</p>
          <h1>Design and validate frontend-first workflows</h1>
          <p className="subtitle">
            A clean and scalable interface inspired by modern AI workflow tools,
            built for future backend integration.
          </p>

          <div className="hero-grid">
            <form className="compose-card" onSubmit={handleSubmit}>
              <label htmlFor="workflow-prompt">Describe your workflow goal</label>
              <textarea
                id="workflow-prompt"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder="Describe the workflow, team, constraints, and expected outcome"
              />
              <button className="primary-btn" disabled={loading} type="submit">
                {loading ? 'Generating…' : 'Generate preview'}
              </button>
              {error && <p className="error-text">{error}</p>}
            </form>

            <article className="preview-card" aria-live="polite">
              <h2>Preview output</h2>
              {preview ? (
                <>
                  <h3>{preview.title}</h3>
                  <p>{preview.summary}</p>
                  <ol>
                    {preview.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </>
              ) : (
                <p className="empty-state">
                  Generate a preview to visualize your enterprise workflow plan.
                </p>
              )}
            </article>
          </div>
        </section>

        <section className="section-block">
          <h2>How this UI supports enterprise teams</h2>
          <div className="feature-grid">
            <article>
              <h3>Structured prompts</h3>
              <p>
                Guide product and engineering teams with consistent input patterns.
              </p>
            </article>
            <article>
              <h3>Backend-ready API layer</h3>
              <p>
                Swap local preview mode with live services through one environment
                variable.
              </p>
            </article>
            <article>
              <h3>Simple visual language</h3>
              <p>
                Neutral palette and clear spacing keep focus on decisions and
                outcomes.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
