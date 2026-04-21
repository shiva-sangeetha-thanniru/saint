import { useState } from 'react'
import './App.css'

type DashboardTab = 'overview' | 'routing' | 'tools' | 'integrations'

const statCards = [
  { label: 'Specialized Agents', value: '14', helper: 'Domain-focused execution' },
  { label: 'MCP Tools', value: '18', helper: 'Production-ready toolchain' },
  { label: 'Confidence Bands', value: '4', helper: 'Deterministic routing gates' },
  { label: 'LLM Providers', value: '5+', helper: 'Provider-aware orchestration' },
]

const featureCards = [
  {
    title: 'Multi-Agent Orchestration',
    description:
      'Coordinate requirement analysis, testcase generation, script creation, execution, and reporting as one governed flow.',
  },
  {
    title: 'Routing Confidence Engine',
    description:
      'Use additive scoring with reason codes, alternates, and clear confidence bands before any execution path is selected.',
  },
  {
    title: 'AI-Driven Generation',
    description:
      'Generate BDD scenarios, structured test cases, Playwright scripts, and test data from prompts, files, or stories.',
  },
  {
    title: 'Enterprise Guardrails',
    description:
      'Enforce framework compatibility, block destructive automation, and prevent cross-agent leakage in every workflow.',
  },
]

const tabMeta: { id: DashboardTab; label: string }[] = [
  { id: 'overview', label: 'Platform Overview' },
  { id: 'routing', label: 'Agent Routing' },
  { id: 'tools', label: 'Supported Tools' },
  { id: 'integrations', label: 'Enterprise Integrations' },
]

const routingRows = [
  {
    signal: 'Explicit agent mention',
    weight: '+0.60',
    example: '"Use WEB agent for Playwright script generation"',
  },
  {
    signal: 'Framework or tool mention',
    weight: '+0.35',
    example: '"playwright", "locust", "figma"',
  },
  {
    signal: 'Strong keyword match',
    weight: '+0.20',
    example: '"api", "security", "performance"',
  },
  {
    signal: 'Task alignment pattern',
    weight: '+0.15',
    example: 'Generate + domain + expected output',
  },
]

const toolItems = [
  'web_agent: Playwright and TRIFECTA web automation',
  'api_agent: OpenAPI and Postman import to API suites',
  'mobile_agent: Appium and Detox test generation',
  'peak_agent: Locust performance scripting',
  'security_agent: OWASP-focused security flows',
  'reporting_agent: Executive-ready test summaries',
]

const integrationItems = [
  'JIRA and Confluence synchronization',
  'X-Ray test management publishing',
  'Atlassian MCP and FIGMA MCP interoperability',
  'CLI, HTTP API, and MCP JSON-RPC access paths',
  'OpenAI Custom GPT and plugin-compatible endpoints',
]

function App() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview')

  return (
    <div className="saint-shell">
      <div className="bg-shape shape-top" aria-hidden="true" />
      <div className="bg-shape shape-bottom" aria-hidden="true" />

      <header className="header">
        <div className="brand">
          <span className="logo-mark" aria-hidden="true" />
          <div>
            <p className="brand-title">SAINT Control Center</p>
            <p className="brand-subtitle">Smart AI Tool for Next Gen Testing</p>
          </div>
        </div>
        <nav className="header-nav" aria-label="Top navigation">
          <button className="btn btn-secondary" type="button">
            Product
          </button>
          <button className="btn btn-secondary" type="button">
            Documentation
          </button>
          <button className="btn btn-primary" type="button">
            Launch SAINT Chat
          </button>
        </nav>
      </header>

      <main className="layout">
        <section className="hero card">
          <div>
            <p className="eyebrow">Enterprise AI Testing Platform</p>
            <h1>Precision automation for modern quality engineering teams.</h1>
            <p className="hero-copy">
              SAINT orchestrates multi-agent workflows across planning, generation,
              execution, and reporting with deterministic routing confidence and enterprise
              guardrails.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" type="button">
                Start End-to-End Workflow
              </button>
              <button className="btn btn-secondary" type="button">
                View Architecture
              </button>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Routing summary">
            <p className="panel-label">Live Routing Envelope</p>
            <p className="panel-main">Primary Agent: WEB</p>
            <p className="panel-sub">Confidence 0.85 - High</p>
            <ul>
              <li>Alternates: API (0.35), WORKFLOW (0.33)</li>
              <li>Fallback: Retry once, degrade to Workflow, clarify inputs</li>
              <li>Guardrails: Framework lock, no destructive execution</li>
            </ul>
          </aside>
        </section>

        <section className="stats-grid" aria-label="Platform metrics">
          {statCards.map((stat) => (
            <article className="stat card" key={stat.label}>
              <p>{stat.label}</p>
              <h2>{stat.value}</h2>
              <span>{stat.helper}</span>
            </article>
          ))}
        </section>

        <section className="features card" aria-label="Core capabilities">
          <div className="section-head">
            <p className="eyebrow">Core Capabilities</p>
            <h2>Built for routing precision, scale, and governed automation</h2>
          </div>
          <div className="feature-grid">
            {featureCards.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tabs card" aria-label="Platform details">
          <div className="tab-list" role="tablist" aria-label="SAINT sections">
            {tabMeta.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-panel" role="tabpanel">
            {activeTab === 'overview' && (
              <div className="content-grid">
                <article>
                  <h3>Workflow Automation</h3>
                  <p>
                    Move from natural language or artifacts to scenarios, test data,
                    executable scripts, and reports without breaking governance boundaries.
                  </p>
                </article>
                <article>
                  <h3>Execution and Reporting</h3>
                  <p>
                    Run tests with configurable browsers, retries, and reporters, then
                    synthesize outcomes into executive-ready reporting outputs.
                  </p>
                </article>
              </div>
            )}

            {activeTab === 'routing' && (
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Signal</th>
                      <th>Weight</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routingRows.map((row) => (
                      <tr key={row.signal}>
                        <td>{row.signal}</td>
                        <td>{row.weight}</td>
                        <td>{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="table-note">
                  Confidence bands: High (0.85-1.00), Medium (0.70-0.84), Low
                  (0.55-0.69), Very Low (&lt; 0.55).
                </p>
              </div>
            )}

            {activeTab === 'tools' && (
              <ul className="bullet-grid" aria-label="Supported SAINT tools">
                {toolItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {activeTab === 'integrations' && (
              <ul className="bullet-grid" aria-label="Enterprise integrations">
                {integrationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
