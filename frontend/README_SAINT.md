# SAINT: Smart AI tool for Next Gen Testing

## 1. What is SAINT

**SAINT** (Smart AI-driven Tool for Next Gen Testing) is a multi-agent test automation framework that leverages AI to automate the entire software testing lifecycle. Built on Python and LangChain, SAINT handles everything from requirement analysis and test case generation to script creation, execution, and reporting.

Unlike traditional testing tools that focus on isolated tasks, SAINT orchestrates the entire process, from analyzing requirements and generating test cases to creating scripts, executing them, and compiling detailed reports. Its multi-agent architecture allows different AI components to collaborate intelligently, ensuring accuracy, efficiency, and adaptability across diverse testing scenarios.
By automating repetitive and complex tasks, SAINT not only accelerates delivery timelines but also enhances test coverage and reliability. This makes it particularly valuable for organizations aiming to adopt agile and DevOps practices, where speed and quality must go hand in hand.
### Key Features

- 🤖 **AI-Powered**: Uses LLMs to understand requirements, generate test cases, and create production-ready test scripts
- 🎯 **Multi-Agent Architecture**: 14 specialised agents work independently or collaborate in integrated workflows
- 🧠 **Enterprise Routing Engine**: Deterministic additive-weight confidence scoring with 6 signal types and 4 confidence bands
- 📦 **Mandatory Routing Envelopes**: Every request emits structured JSON with confidence, alternates, reason_codes, and fallback plans
- 🛡 **Enterprise Guardrails**: Framework substitution prevention, cross-agent leakage blocking, destructive automation protection
- 🔄 **Agent Correction Protocol**: Structured mismatch detection with user confirmation before agent switching
- 🔁 **MCP Runtime Fallback**: Retry-once for transient errors, degrade to Workflow, clarify for missing inputs
- 🔄 **End-to-End Automation**: From design files to JIRA issues to executable test scripts
- 🌐 **Multi-LLM Support**: OpenAI, Anthropic (Claude), Google (Gemini), Groq, Amazon Bedrock
- 🤖 **AI Engineer Mode**: Single-command SDET flow—describe a flow in plain English, get tests, and optionally run and gate (Bug0-style)
- 💬 **SAINT Chat**: Conversational natural-language interface via MCP for on-demand test generation
- 📊 **Enterprise Integration**: JIRA, X-Ray, Atlassian MCP, and Figma MCP
- 🚀 **Production-Ready**: Generates maintainable, scalable Playwright TypeScript scripts following industry best practices
- 📁 **Structured Test Suites**: Organised output with Pages/, actions/, and Specs/ directories
- ▶️ **Test Execution**: Execute tests with pattern matching, browser selection, and flexible configuration
- 📋 **Multi-Format Support**: Read test cases from JSON, CSV, Excel, PDF, Word, and text files
- ✅ **Script Validation**: Automatic validation with scoring (0-100) and issue detection
- ▶️ **Auto-Execution**: Optional auto-execution of generated scripts to validate they work correctly
- 🔧 **Self-Healing**: Automatically fixes common issues like missing imports and screenshot hooks
- 📱 **Mobile Testing**: iOS and Android test generation with Appium and Detox
- 🔒 **Security Testing**: OWASP Top 10 scenarios with Playwright, Postman, or RestAssured
- ⚡ **Performance Testing**: Locust load-test scripts with multiple profiles

---

## 2. Architecture

### Project Structure

```
saint-python/
cle├── agents/                     # AI agents (one per domain, alphabetical)
│   ├── api_import_agent.py     # OpenAPI / Postman import → API test suites
│   ├── core_agent.py           # Rules engine & coverage analysis
│   ├── data_agent.py           # Synthetic test data generation
│   ├── design_agent.py         # FIGMA MCP / design analysis
│   ├── designer_agent.py       # Gherkin / BDD test case generation
│   ├── healing_agent.py        # Self-healing test scripts
│   ├── jira_agent.py           # JIRA / Confluence / Compass integration
│   ├── mobile_agent.py         # iOS / Android test scripts
│   ├── performance_agent.py    # Locust performance scripts (PEAK)
│   ├── reporting_agent.py      # Test reporting & executive summaries
│   ├── script_gen_agent.py     # Playwright script generation (WEB)
│   ├── security_agent.py       # OWASP Top 10 security tests
│   ├── workflow_agent.py       # Multi-agent orchestration
│   ├── xray_agent.py           # X-Ray test management
│   ├── prompts/                # LLM prompt templates & orchestrator prompt
│   ├── script_generation/      # Script processing pipeline
│   └── utils/                  # Validators, cleaners, fixers, readers
├── core/                       # Shared infrastructure
│   ├── base_agent.py           # Abstract base class (SOLID)
│   ├── routing.py              # Enterprise routing engine (confidence scoring, envelopes, fallback)
│   ├── intent_classifier.py    # Three-tier intent classification (routing + keywords + LLM)
│   ├── auto_provider.py        # Intelligent LLM provider selection with routing envelopes
│   ├── guardrails.py           # Enterprise guardrails (framework, cross-agent, destructive)
│   ├── config.py               # Environment & LLM configuration
│   ├── constants.py            # Centralised constants
│   ├── exceptions.py           # Exception hierarchy
│   ├── logger.py               # Structured JSON logging
│   ├── error_handler.py        # Global exception → Problem Details (RFC 7807)
│   ├── error_sanitizer.py      # Strips secrets from error messages
│   ├── retry.py                # Exponential backoff decorators
│   ├── secrets.py              # Pydantic SecretStr management
│   ├── validators.py           # Path & URL validation
│   ├── metrics.py              # LLM call & token tracking
│   ├── interfaces.py           # Protocol interfaces (DIP)
│   ├── factories/
│   │   └── agent_factory.py    # Lazy agent registry (Factory pattern)
│   ├── test_user_api.py        # Test user data generation
│   ├── utils/                  # Helpers, validators
│   └── ...                     # JIRA, X-Ray, vision clients
├── api/                        # HTTP API (OpenAI plugin / GPT Actions)
│   └── main.py                 # FastAPI app, OpenAPI, /.well-known/ai-plugin.json
├── cli/                        # CLI & MCP server
│   ├── main.py                 # Click CLI entry point
│   ├── mcp_server.py           # JSON-RPC 2.0 MCP server (stdio)
│   ├── commands/               # CLI subcommands
│   └── handlers/               # Error & prompt handlers
├── mcp.json                    # MCP server configuration
├── requirements.txt            # Python dependencies
└── package.json                # Node.js dependencies (Playwright)
```

### Design Principles

The codebase follows **Clean Code** and **SOLID** principles:

| Principle | Implementation |
|---|---|
| **Single Responsibility** | Each agent handles one domain; pure helper functions extracted to module level |
| **Open/Closed** | New agents added via `agent_factory.py` registry without modifying existing code |
| **Dependency Inversion** | `Protocol` interfaces in `core/interfaces.py`; agents depend on abstractions |
| **DRY** | Shared `invoke_llm` helper in `BaseAgent`; consolidated evidence methods in `JiraAgent` |
| **Type Safety** | Type hints everywhere with `Literal` types, type aliases, and `Optional` |
| **Error Handling** | Structured exceptions → RFC 7807 Problem Details; no bare `except` blocks |
| **Logging** | JSON-capable structured logging with contextual request IDs; no secrets in logs |
| **Security** | `ErrorSanitizer` strips API keys/tokens; `SecretStr` for sensitive config |

### Agent Orchestration

SAINT uses an enterprise-grade **Multi-Agent Orchestrator** with deterministic routing, confidence scoring, and mandatory routing envelopes. Every request produces a structured routing decision before execution.

```
User Prompt
    │
    ▼
┌──────────────────────┐
│  RoutingEngine        │ ◄── Deterministic additive-weight scoring
│  (core/routing.py)    │ ◄── 6 signal types → confidence 0.00–1.00
│                       │ ◄── Confidence bands: High/Medium/Low/Very Low
└──────────┬───────────┘
           │ RoutingEnvelope (mandatory JSON)
           ▼
┌──────────────────────┐
│  IntentClassifier     │ ◄── Tier 1: Routing Engine (enterprise scoring)
│  (core/intent_        │ ◄── Tier 2: Keyword/regex heuristics (fallback)
│   classifier.py)      │ ◄── Tier 3: LLM fallback (orchestrator prompt)
└──────────┬───────────┘
           │ intent + confidence + reason_codes
           ▼
┌──────────────────────┐
│  ClarificationPolicy │ ◄── Exactly 1 question per ambiguity type
│  (core/routing.py)    │     (UI/API, Web/Mobile, Jira action, payload,
│                       │      multi-agent, framework conflict)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐     ┌──────────────────────┐
│  AutoProvider         │────▶│  Provider Selection   │
│  (core/auto_          │     │  (score matrix:       │
│   provider.py)        │     │   quality × speed ×   │
└──────────┬───────────┘     │   cost × reasoning)   │
           │                  └──────────────────────┘
           ▼
┌──────────────────────┐
│  Agent Correction     │ ◄── Validates selected vs detected agent
│  Protocol             │     Structured JSON output with confirmation
│  (core/routing.py)    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Enterprise           │ ◄── No framework substitution
│  Guardrails           │ ◄── No cross-agent leakage
│  (core/guardrails.py) │ ◄── No destructive automation
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  AgentFactory         │ ◄── Lazy-loads agent class by intent key
│  (factories/          │     Resolves legacy aliases
│   agent_factory.py)   │
└──────────┬───────────┘
           │
           ▼
    Agent Execution
    (with FallbackManager: retry-once → degrade → clarify)
```

#### Confidence Scoring Model

Every request is scored using deterministic additive weights:

| Signal | Weight | Example |
|--------|--------|---------|
| Explicit agent mention | +0.60 | "Use API agent to..." |
| Framework/tool mention | +0.35 | "playwright", "locust", "figma" |
| Strong keyword match | +0.20 | "api", "performance", "security" |
| Task-type alignment | +0.15 | "generate...api...test" pattern |
| Attachment-type match | +0.20 | ".yaml", ".apk", ".feature" |
| Multi-domain signals | +0.35 | Routes to Workflow agent |

To exceed 0.85 confidence, at least 2 independent strong signals are required.

#### Confidence Bands

| Band | Range | Behaviour |
|------|-------|-----------|
| **High** | 0.85–1.00 | Execute immediately |
| **Medium** | 0.70–0.84 | Execute (confirm only if user chose different agent) |
| **Low** | 0.55–0.69 | Ask 1 clarifying question or route to Workflow |
| **Very Low** | < 0.55 | Ask 1 clarifying question (mandatory) |

#### Routing Envelope (Mandatory Output)

Every request emits this JSON before execution:

```json
{
  "routing": {
    "primary_agent": "WEB",
    "confidence": 0.85,
    "alternates": [
      {"agent": "API", "confidence": 0.35}
    ],
    "needs_clarification": false,
    "clarifying_question": null,
    "reason_codes": ["signal:framework_playwright", "signal:keyword_e2e"]
  },
  "execution": {
    "mode": "mcp",
    "selected_agent": "WEB",
    "requires_user_confirmation": false
  },
  "fallback_plan": [
    {
      "if": "execution_error || tool_unavailable",
      "then": ["retry_once", "degrade_to:Workflow_if_needed", "ask_for_missing_inputs"]
    }
  ]
}
```

#### Agent Correction Protocol

When a mismatch is detected between the selected agent and the recommended agent:

```json
{
  "agent_validation": "mismatch",
  "selected_agent": "DATA",
  "recommended_agent": "WEB",
  "reason": "Prompt strongly matches WEB (90%)",
  "requires_confirmation": true
}
```

Execution is blocked until user confirmation is received.

#### MCP Runtime Fallback Rules

1. **Retry once** for transient errors (timeout, 502, 503, 504, rate limit)
2. **Degrade** to same-domain alternate path or Workflow if tool unavailable
3. **Clarify** if inputs are insufficient (ask one question)
4. **Never** auto-switch agents without confirmation

#### Enterprise Guardrails (Always Enforced)

- Do not fabricate Jira IDs or external data
- Do not invent framework capabilities
- Do not mix WEB and API unless Workflow agent
- Do not generate destructive automation (rm -rf, DROP TABLE, etc.)
- No cross-agent responsibility leakage
- No silent agent switching
- No framework substitution (TRIFECTA requires Playwright, not Cypress/Selenium)

Key files:

| File | Purpose |
|------|---------|
| `core/routing.py` | Enterprise routing engine: ConfidenceScorer, RoutingEnvelope, ClarificationPolicy, FallbackManager, AgentCorrection |
| `agents/prompts/orchestrator_prompt.py` | Centralised agent scope definitions, classifier prompt, correction template, response structure |
| `core/intent_classifier.py` | Three-tier intent classification (routing engine + keywords + LLM), agent correction, multi-intent detection |
| `core/auto_provider.py` | Intelligent LLM provider selection with routing envelope integration |
| `core/guardrails.py` | Enterprise guardrails: framework compatibility, cross-agent leakage prevention, destructive automation blocking |
| `core/factories/agent_factory.py` | Factory pattern for lazy agent instantiation with alias resolution |

---

## 3. Installation Guide

### Prerequisites

- **Python**: 3.11 or higher
- **Node.js**: v18 or higher (for Playwright)
- **Git**: For cloning the repository

### Step-by-Step Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url> saint-python
   cd saint-python
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Install SAINT CLI command:**
   ```bash
   pip install -e .
   ```
   This installs the `saint` command globally. You can now use `saint` from anywhere.

5. **Install Node.js dependencies (for Playwright):**
   ```bash
   npm install
   npx playwright install --with-deps
   ```

6. **Configure environment variables:**
   Create a `.env` file in the project root with your API keys and configuration:
   ```bash
   # LLM Provider Configuration
   LLM_PROVIDER=openai
   LLM_MODEL=gpt-4o-mini
   OPENAI_API_KEY=your_key_here
   
   # JIRA Configuration
   JIRA_URL=https://your-jira-instance.atlassian.net
   JIRA_USER=your_email@example.com
   JIRA_TOKEN=your_api_token
   
   # Application URLs
   BASE_URL=https://your-app-url.com
   API_BASE_URL=https://api.your-app-url.com
   ```

### LLM Provider Setup

SAINT supports multiple LLM providers. Configure your preferred provider in the `.env` file:

#### OpenAI
```bash
LLM_PROVIDER=openai
LLM_MODEL=gpt-4o-mini
OPENAI_API_KEY=your_key_here
```

#### Anthropic (Claude)
```bash
LLM_PROVIDER=anthropic
LLM_MODEL=claude-3-5-sonnet-latest
ANTHROPIC_API_KEY=your_key_here
```

#### Google (Gemini)
```bash
LLM_PROVIDER=google
LLM_MODEL=gemini-1.5-flash
GOOGLE_API_KEY=your_key_here
```

#### Groq
```bash
LLM_PROVIDER=groq
LLM_MODEL=llama-3.1-70b-versatile
GROQ_API_KEY=your_key_here
```

#### Amazon Bedrock
```bash
LLM_PROVIDER=bedrock
LLM_MODEL=anthropic.claude-3-5-sonnet-20241022-v2:0
AWS_ACCESS_KEY_ID=your_key_here
AWS_SECRET_ACCESS_KEY=your_secret_here
AWS_REGION=us-east-1
```

### CLI Provider Override

Override the default provider per command by placing `--provider` before the subcommand:

```bash
saint --provider openai generate-script --web login.feature
saint --provider openai generate-test-scenarios --project-key PROJ-1
saint --provider groq generate --project PROJ
```

Supported providers: `openai`, `anthropic`, `google`, `groq`, `bedrock`.

### SSL and Proxy Configuration

For corporate or restricted networks:

- `SSL_VERIFY=false` disables SSL verification for LLM/API calls (use only in trusted environments).
- `VERIFY_SSL=false` can be used for internal registration API calls in `TestUserApiClient`.
- Standard proxy variables are supported when needed: `HTTP_PROXY`, `HTTPS_PROXY`, `NO_PROXY`.

### Verify Installation

```bash
saint --help
```

You should see the SAINT CLI help menu with all available commands.

---

## 4. MCP Tools Reference

SAINT exposes **18 tools** via the Model Context Protocol (MCP) JSON-RPC server. These tools are available in any MCP-compatible IDE (Cursor, VS Code + Copilot, etc.).

### Agent Tools (alphabetical)

| # | Tool | Agent | Scope | Required Params |
|---|------|-------|-------|-----------------|
| 1 | `api_agent` | API | API automation & OpenAPI/Postman import | `file` |
| 2 | `core_agent` | Core | Test planning, coverage, risk assessment | `requirements` |
| 3 | `data_agent` | DATA | Structured test data generation | `schema` |
| 4 | `design_agent` | Design | FIGMA MCP analysis, user journeys | `design_input` |
| 5 | `healing_agent` | Healing | Self-healing test failure analysis | `error_log`, `script_content` |
| 6 | `jira_agent` | JIRA | JIRA / Confluence / Compass integration | `story` |
| 7 | `mobile_agent` | Mobile | iOS / Android test scripts (Appium / Detox) | `gherkin` |
| 8 | `peak_agent` | PEAK | Performance tests (Locust) | `spec` |
| 9 | `reporting_agent` | Reporting | Executive summaries & test reports | `test_results` |
| 10 | `security_agent` | Security | OWASP Top 10 security tests | `spec` |
| 11 | `testcase_agent` | Test Cases | Gherkin scenarios & BDD test cases | `analysis` |
| 12 | `web_agent` | WEB | Playwright TypeScript scripts (TRIFECTA) | `gherkin` or `test_cases_file` |
| 13 | `workflow_agent` | Workflow | Multi-agent orchestration | `prompt` |
| 14 | `xray_agent` | X-Ray | X-Ray test management push | `test_cases` |

### Utility Tools

| # | Tool | Description | Required Params |
|---|------|-------------|-----------------|
| 15 | `generate_script_enhanced` | Enhanced script generation with structured output | `test_cases_file` |
| 16 | `execute_tests_enhanced` | Execute Playwright tests with metrics | `pattern` |
| 17 | `preview_test_data` | Preview generated test data files | *(none)* |
| 18 | `saint_chat` | Conversational interface (auto-routes to the right agent) | `prompt` |

All agent tools accept an optional `provider` parameter (`auto`, `openai`, `anthropic`, `google`, `groq`, `bedrock`) to override the default LLM.

### MCP Configuration

The `mcp.json` file at the project root configures three MCP servers:

```json
{
  "mcpServers": {
    "saint-framework": { "command": "python", "args": ["cli/mcp_server.py"] },
    "mobile-mcp": { "command": "npx", "args": ["-y", "@mobilenext/mobile-mcp@latest"] },
    "figma": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-figma@latest"] }
  }
}
```

See [IDE_INTEGRATION.md](docs/IDE_INTEGRATION.md) for setup instructions for Cursor, VS Code, and other editors.

> **Note:** Prefer absolute paths in MCP config (`command`/`args`) and ensure `PYTHONPATH` points to project root for reliable startup.

### SAINT Chat 

SAINT Chat is the conversational interface (MCP tool `saint_chat`, IDE panels, or HTTP `/chat` / WebSocket `/ws/chat`). It uses the **WorkflowAgent** to turn natural language into full test artifacts: scenarios, Gherkin, test data, and Playwright scripts. When `output_dir` is not provided, all artifacts are written to a single default directory: **`saint-output`** (under the API project root or current working directory for CLI/MCP), so you always know where to find results.

**When to use Chat vs CLI**

| Use SAINT Chat when … | Use CLI / individual tools when … |
|-----------------------|------------------------------------|
| You want one prompt → full workflow (scenarios + Gherkin + script + data) | You need a single step (e.g. only JIRA analysis, or only script from a file) |
| You’re exploring or prototyping in the IDE | You’re scripting or running in CI |
| You prefer natural language and quick actions | You need precise flags (`--structured`, `--execute`, `--push-xray`) |

**How to get the best results**

1. **Be specific**  
   Include the flow, URL, and key data.  
   Good: *“Go to https://example.com/login, enter username and password, click Login, then verify the dashboard shows Welcome.”*  
   Vague: *“Test login.”*

2. **Set Base URL and framework**  
   In the IDE chat panel or API payload, set `base_url` and `base_framework` (trifecta, trifecta-cucumber-bdd, playwright) so generated scripts match your stack.

3. **Use quick actions**  
   In the chat welcome screen, use the suggested prompts (e.g. “Generate login test scenarios”, “Generate test data for User(name, email)”) as starting points.

4. **Attach files when needed**  
   Attach feature files, test-case PDFs/Excel, or OpenAPI specs so the workflow can use them (e.g. script from test cases).

5. **Run and iterate**  
   After generation, run `npx playwright test test_script.spec.ts` (or your pattern). Refine the prompt or re-attach files and ask again if you need different coverage.

**Backend:** Chat is implemented by the `saint_chat` MCP tool and HTTP endpoints (`/chat`, `/chat/stream`, `/ws/chat`). When `agent` is `"auto"` or omitted, the **Enterprise Routing Engine** auto-detects the best agent using deterministic confidence scoring with reason_codes. Every response includes a mandatory `routing_envelope` with confidence, alternates, and fallback plan. When a specific agent is selected, the **Agent Correction Protocol** validates the selection and outputs structured JSON requiring confirmation before switching.

### Multi-Agent Orchestrator

SAINT uses an enterprise-grade orchestrator (`core/routing.py` + `agents/prompts/orchestrator_prompt.py`) that enforces:

1. **Safety** -- enterprise guardrails prevent destructive automation, framework substitution, and cross-agent leakage.
2. **Deterministic routing** -- additive-weight confidence scoring with 6 signal types and 4 confidence bands (High/Medium/Low/Very Low).
3. **Agent boundary enforcement** -- each agent operates strictly within its defined scope; no silent agent switching.
4. **Non-hallucination** -- no fabricated Jira IDs, no invented framework capabilities.
5. **Structured outputs** -- mandatory routing envelope JSON before every execution, with reason_codes and fallback plans.
6. **Agent correction protocol** -- if the wrong agent is selected and recommended agent has >= 0.85 confidence, structured correction JSON is emitted; execution blocked until confirmation.
7. **Clarification policy** -- exactly one deterministic question per ambiguity type (UI/API, Web/Mobile, Jira action, missing payload, multi-agent, framework conflict).
8. **MCP runtime fallback** -- retry-once for transient errors, degrade to Workflow if tool unavailable, ask for missing inputs.

### Backend agent routing (alphabetical)

| Tool | Intent Key | Agent Class | Scope |
|------|-----------|-------------|-------|
| `api_agent` | `api` | ApiImportAgent | API automation, OpenAPI/Postman import |
| `core_agent` | `core` | CoreAgent | Test planning, coverage, risk |
| `data_agent` | `data` | DataAgent | Structured test data generation |
| `design_agent` | `design` | DesignAgent | FIGMA MCP analysis, user journeys |
| `healing_agent` | `healing` | HealingAgent | Self-healing test failures |
| `jira_agent` | `jira` | JiraAgent | JIRA / Confluence / Compass |
| `mobile_agent` | `mobile` | MobileAgent | iOS / Android mobile automation |
| `peak_agent` | `peak` | PerformanceAgent | Performance testing (Locust / PEAK) |
| `reporting_agent` | `reporting` | ReportingAgent | Executive summaries, test reports |
| `security_agent` | `security` | SecurityAgent | OWASP Top 10 security tests |
| `testcase_agent` | `testcase` | DesignerAgent | Gherkin / BDD test cases |
| `web_agent` | `web` | ScriptGenAgent | Web automation (Playwright / TRIFECTA) |
| `workflow_agent` | `workflow` | WorkflowAgent | Multi-agent orchestration |
| `xray_agent` | `xray` | XRayAgent | X-Ray test management |
| `generate_script_enhanced` | -- | CLI `generate-script` | Enhanced script generation |
| `execute_tests_enhanced` | -- | CLI `execute` | Test execution with metrics |
| `saint_chat` | *(auto)* | WorkflowAgent / auto-routed | Conversational interface |

Legacy aliases are resolved automatically: `chat`→`workflow`, `script`→`web`, `performance`→`peak`, `api_import`→`api`, `designer`→`testcase`.

See [docs/AGENT_USAGE_MAP.md](docs/AGENT_USAGE_MAP.md) for full task-to-agent mapping and CLI usage.

---

## 5. CLI Commands Reference

### Primary Commands (Recommended)

These are the primary end-to-end commands and default MCP integrations:

```bash
# 1) Design analysis (Figma MCP first, then LLM fallback)
saint analyse --reference design.png --format both

# 2) JIRA enrichment for missing fields (Atlassian MCP first)
saint generate --project PROJ

# 3) Test scenarios + test data + optional X-Ray push
saint generate-test-scenarios --project-key PROJ-1 --format both --tabular-format excel --push-xray

# 4) Playwright TypeScript script generation (TRIFECTA-first flow)
saint generate-script --web login.feature --structured --data-driven --accessibility --screenshots
```

Expected behavior by command:
- `analyse`: Extracts findings as Features, EPICs, and Stories; exports to `Features.pdf` / `Features.docx` by default.
- `generate`: Reads project stories, fills missing fields (for example acceptance criteria), and supports approval + push to JIRA.
- `generate-test-scenarios`: Produces Gherkin scenarios, tabular test cases/data, and can push mapped tests to X-Ray.
- `generate-script`: Generates POM-oriented Playwright TypeScript with data-driven hooks, accessibility assertions, and screenshot-on-failure support, using TRIFECTA-first generation paths.

### NLP And Command Aliases

SAINT now supports natural-language command invocation and common command aliases:

- NLP prompt aliases: `saint --prompt "..."` and `saint --nlp "..."`
- Free-text fallback: if the first token is not a known command, SAINT treats it as a natural-language prompt.
- Legacy/alias normalization:
  - `-analyse`, `-analyze`, `analyze` -> `analyse`
  - `-generate` -> `generate`
  - `generate-test-scenraios`, `-generate-test-scenraios` -> `generate-test-scenarios`
  - `generate-scripts`, `-generate-scripts` -> `generate-script`

### Commands Overview

| Agent | Command | Purpose | Input | Output |
|---|---|---|---|---|
| **AI Engineer** | `saint engineer "<flow>"` | Plain English → generate + optional execute/gate (release gating) | Natural language | Scenarios, Gherkin, script, data, optional run + AI failure report |
| **Workflow** | `saint --prompt <description>` | Conversational test generation with browser automation | Natural language | Scenarios, Gherkin, scripts, test data, screenshots |
| **Designer** | `saint analyse --reference <file>` | Analyse design files → Features, EPICs, Stories | Image / PDF / Figma | JSON findings |
| **JIRA** | `saint generate --project <PROJ>` | Generate missing JIRA fields | Project key | Enhanced JIRA issues |
| **Designer + Data** | `saint generate-test-scenarios --project-key <PROJ-1>` | Generate test scenarios, cases, and data | Story key | Gherkin, tabular, JSON data |
| **Script Gen** | `saint generate-script --web <feature> [--base-framework trifecta\|trifecta-cucumber-bdd\|playwright]` | Generate web test scripts from Gherkin in chosen base framework | Feature file | Playwright TypeScript |
| **Script Gen** | `saint generate-script --test-cases <file>` | Generate web test scripts from test cases | JSON/CSV/Excel/PDF/Word/text | Playwright TypeScript |
| **Script Gen** | `saint generate-script --test-cases <file> --execute` | Generate and auto-execute scripts for validation | Test cases file | Playwright TypeScript + execution results |
| **Script Gen** | `saint generate-script --web <file> --structured` | Generate structured test suite | Feature file | Pages/, actions/, Specs/ |
| **API Import** | `saint generate-script --api <spec>` | Generate API test scripts | OpenAPI / Postman | TypeScript API tests |
| **Mobile** | `saint generate-script --mobile <feature>` | Generate mobile test scripts | Feature file | Appium / Detox scripts |
| **Performance** | `saint generate-script --perf <url-or-spec>` | Generate performance test scripts | URL or API spec | Locust scripts |
| **Security** | `saint generate-script --security <spec>` | Generate security test scripts | API spec or URL | OWASP scripts |
| **X-Ray** | `saint generate-test-scenarios --project-key <PROJ-1> --push-xray` | Push test cases to X-Ray | Story key | X-Ray sync |
| **Execute** | `saint execute <pattern>` | Execute Playwright tests | Glob pattern | Results and reports |

---

## 6. Commands with Example Usage

### AI Engineer Mode – Plain English to Tests (Bug0-Style)

Use SAINT as your **AI QA Engineer**: describe a flow in plain English and get generated artifacts; optionally run tests and fail the build for CI (release gating). See [docs/AI_ENGINEER_VISION.md](docs/AI_ENGINEER_VISION.md) for the full vision and roadmap.

```bash
# Generate only: scenarios, Gherkin, script, test data
saint engineer "User logs in, goes to dashboard, and opens settings"

# Generate and run tests to verify they work
saint engineer "User logs in and updates profile" --execute

# CI release gate: exit with 1 if tests fail
saint engineer "Critical login and checkout flow" --execute --gate --headless

# With options
saint engineer --prompt "Login and logout flow" --base-url https://app.example.com --output-dir ./my-tests --execute
```

Options: `--execute` (run generated tests), `--gate` (exit 1 on failure for CI), `--headless`, `--output-dir`, `--base-url`, `--base-framework` (trifecta | trifecta-cucumber-bdd | playwright), `--analyze-failures` (AI failure report on failure).

### Workflow Agent – Conversational Test Generation

```bash
# Simple navigation and interaction
saint --prompt "Navigate to www.company.in and click on free creditscore button"

# Complex workflow with authentication
saint --prompt "Go to https://example.com/login, enter username 'testuser' and password 'testpass', click login button, verify dashboard loads"

# With custom output directory
saint --prompt "Navigate to checkout page and verify cart items" --output-dir ./checkout-tests

# With base URL override
saint --prompt "Go to login page, enter username and password, click submit" --base-url https://example.com
```

**Generated Artifacts:**
- `test_scenarios.md` – Comprehensive test scenarios (positive, negative, boundary, edge)
- `test_scenarios.feature` – Gherkin feature file
- `test-data/` – Individual test data JSON files per test case (generated *before* scripts)
- `test_script.spec.ts` – Playwright TypeScript script referencing test data
- `screenshots/` – Screenshots captured during browser automation
- `actions.json` – Extracted actions
- `workflow_summary.md` – Workflow summary

> **Note:** Test data is now generated *before* test scripts. The workflow uses `TestUserApiClient` to create realistic user data files (per test case), and the script generator references these files for data-driven testing.

### Designer Agent – Design Analysis

```bash
saint analyse --reference design.png
saint analyse --reference design.png --context "Login page redesign" --output analysis.json --format json
saint analyse --reference designs/testCases.pdf --output analysis.json
```

### JIRA Agent – JIRA Enhancement

```bash
saint generate --project PROJ
saint generate --project PROJ --issue-key PROJ-1 --push
saint generate --project PROJ --auto-approve --push
```

### Test Case Generation

```bash
saint generate-test-scenarios --project-key PROJ-1
saint generate-test-scenarios --project-key PROJ-1 --format both --tabular-format excel
saint generate-test-scenarios --project-key PROJ-1 --push-xray --auto-approve
saint generate-test-scenarios --project-key PROJ-1 --format gherkin --output login.feature
```

### Script Generation – Web

```bash
# From Gherkin (single file)
saint generate-script --web login.feature
saint generate-script --web login.feature --output tests/login.spec.ts

# From Gherkin (structured)
saint generate-script --web login.feature --structured --output ./tests

# From test cases (single file)
saint generate-script --test-cases test-cases.json --output tests/login.spec.ts
saint generate-script --test-cases test-cases.xlsx --validate

# From test cases (structured)
saint generate-script --test-cases test-cases.json --structured --output ./tests

# Auto-execute generated scripts to validate they work
saint generate-script --test-cases test-cases.pdf --output tests/ --execute

# Auto-execute with visible browser (headed mode)
saint generate-script --test-cases test-cases.pdf --output tests/ --execute --headed

# Generate and validate web scripts
saint generate-script --web login.feature --output tests/ --execute

# Generate in a specific base framework (trifecta, trifecta-cucumber-bdd, playwright)
saint generate-script --web login.feature --base-framework trifecta-cucumber-bdd --output tests/
saint generate-script --test-cases cases.json --base-framework playwright --structured
```

**Structured output:**
```
tests/
├── Pages/
│   └── loginPage.ts          # Page Object Model class
├── actions/
│   └── actions.ts            # Reusable action functions
├── Specs/
│   └── login.spec.ts         # Test specifications
└── test-data/                # Test data files (JSON)
    ├── TC-1_data.json
    └── TC-2_data.json
```

**Base frameworks** (output format for generated tests, `--base-framework`):
- `trifecta` – TRIFECTA conventions (POM, axe-core, TRIFECTA helpers). Default.
- `trifecta-cucumber-bdd` – TRIFECTA + Cucumber/BDD (Gherkin step definitions).
- `playwright` – Plain Playwright (no TRIFECTA branding).

**Script Generation Options:**
- `--base-framework` – Base framework: trifecta, trifecta-cucumber-bdd, or playwright (default: trifecta)
- `--execute` – Auto-execute generated scripts to validate they work correctly (default: `False`)
- `--headed` – Use visible browser during exploration and when running `--execute` (default: `False`)
- `--structured` – Generate structured format: Pages/, actions/, Specs/ directories
- `--validate` – Validate generated script for reusability (default: `True`)
- `--interactive` – Interactive mode: prompt for confirmation at key steps
- `--preview-data` – Preview generated test data in output
- `--individual-files` – Generate one spec file per test case (only for `--test-cases`)
- `--pom` – Use Page Object Model scaffolding (default: `True`)
- `--data-driven` – Add data-driven test support (default: `True`)
- `--accessibility` – Add accessibility assertions (default: `True`)
- `--screenshots` – Capture screenshots on failure (default: `True`)

### Script Generation – API, Mobile, Performance, Security

```bash
# API
saint generate-script --api api.json
saint generate-script --api openapi.yaml --output api-tests.spec.ts

# Mobile
saint generate-script --mobile login.feature --platform ios --framework appium
saint generate-script --mobile checkout.feature --platform android --framework detox
saint generate-script --mobile login.feature --app-file ./app.apk --platform android

# Performance
saint generate-script --perf https://example.com
saint generate-script --perf api-spec.json --output locustfile.py

# Security
saint generate-script --security api-spec.json
saint generate-script --security https://example.com --output security-tests.spec.ts
```

### Test Execution

```bash
saint execute "Specs/*.spec.ts"
saint execute "**/*.spec.ts"
saint execute "Specs/login.spec.ts" --headed
saint execute "Specs/*.spec.ts" --browser chromium --reporter html
saint execute "Specs/*.spec.ts" --headed --browser chromium --workers 2 --retries 2
```

**Options:**
- `--headed` / `--headless` – Browser visibility (`saint execute` defaults to headed mode)
- `--browser` – `chromium`, `firefox`, `webkit`, or `all`
- `--workers` – Parallel workers
- `--reporter` – `html`, `json`, `junit`, `list`, `dot`, `line`
- `--retries` – Retry count for failed tests
- `--timeout` – Test timeout in milliseconds

---

## 7. Test User API Integration

For `generate-script --test-cases`, SAINT creates per-test-case JSON data in `test-data/` and registers users through `TestUserApiClient`.

- Registration endpoint used by default:
  `https://corvette-integration-tools.us-west-2.integration.us.companycs.internal./internal/customer/registration`
- Request headers mirror curl flow:
  `Accept: application/json`, `Content-Type: application/json`, `User-Agent: insomnia/2023.5.8`
- If registration succeeds with HTTP 201 but the API returns an empty username, SAINT generates a deterministic fallback username and continues.
- If a generated SSN/DOB pair fails auth, SAINT retries with known valid profile pairs.

---

## 8. Test Cases File Formats

SAINT reads test cases from multiple file formats:

| Format | Extensions | Notes |
|---|---|---|
| JSON | `.json` | Array of objects with `id`, `description`, `steps`, `expected`, `priority` |
| CSV | `.csv` | Comma-separated with header row |
| Excel | `.xlsx`, `.xls` | Auto-detects header row |
| PDF | `.pdf` | Structured test case document |
| Word | `.docx`, `.doc` | Test case descriptions |
| Text | `.txt` | Structured text format |

**Example JSON:**
```json
[
  {
    "id": "TC-1",
    "description": "Verify user can login successfully with valid credentials",
    "steps": ["Navigate to login page", "Enter valid username", "Enter valid password", "Click login button"],
    "expected": "User should be redirected to dashboard",
    "preconditions": "User account exists",
    "priority": "High",
    "test_data": { "username": "testuser", "password": "password123" }
  }
]
```

---

## 9. Complete Workflow Example

```bash
# 1. Analyse design and extract stories
saint analyse --reference design.png --output analysis.json --format json

# 2. Generate missing fields for project
saint generate --project PROJ --push

# 3. Generate tests for a story
saint generate-test-scenarios --project-key PROJ-1 --format both --tabular-format excel

# 4. Generate structured test suite from Gherkin
saint generate-script --web login.feature --structured --output ./tests

# 5. Or generate from test cases file
saint generate-script --test-cases test-cases.xlsx --structured --output ./tests

# 6. Generate and auto-execute to validate scripts work
saint generate-script --test-cases test-cases.pdf --output tests/ --execute

# 7. Execute generated tests manually
saint execute "tests/Specs/*.spec.ts" --headed --browser chromium

# 7. Use conversational interface
saint --prompt "Navigate to www.company.in and click on free creditscore button"

# 8. Push tests to X-Ray
saint generate-test-scenarios --project-key PROJ-1 --push-xray --auto-approve
```

---

## 10. HTTP API & OpenAI Plugin

SAINT can run as an **HTTP API** for use as an **OpenAI Custom GPT Action**, a **ChatGPT plugin**, or any REST client.

### Start the API server

```bash
# From project root
uvicorn api.main:app --reload --host 0.0.0.0 --port 8000
```

Or:

```bash
python -m api.main
```

- **Swagger UI:** http://localhost:8000/docs  
- **OpenAPI schema:** http://localhost:8000/openapi.json  
- **Plugin manifest:** http://localhost:8000/.well-known/ai-plugin.json  

### Endpoints (for GPT Actions / plugins)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/chat` | Natural-language SAINT Chat with auto-routing (`prompt`, `agent`, `provider`). Returns `agent`, `agent_display`, `result`, `trace_id`, optional `auto_mode` and `agent_suggestion`. |
| POST | `/chat/stream` | SSE streaming version of `/chat` -- real-time progress events |
| WS | `/ws/chat` | WebSocket streaming for IDE extensions |
| POST | `/jira/analyze` | Analyze a JIRA story (body: `{"story": "PROJ-123"}`) |
| POST | `/testcases/generate` | Generate Gherkin + test cases from analysis (body: `{"analysis": "..."}`) |
| POST | `/script/generate` | Generate test script (body: `gherkin` or `test_cases_file`, `output`, `structured`) |
| POST | `/script/generate/upload` | Generate script from uploaded file (PDF/JSON/CSV/Excel) |
| POST | `/files/parse` | Parse uploaded file and return text content (no generation) |
| POST | `/data/generate` | Generate synthetic test data (body: `schema_description`, `count`, `data_type`, `format`) |
| POST | `/tests/execute` | Run Playwright tests (body: `pattern`, `headed`, `browser`) |
| POST | `/evals/script` | Script quality eval (score 0-100); body: `script` or `path` |
| POST | `/evals/test-cases` | Test-case completeness eval |
| POST | `/script/generate/async` | Start script generation in background; returns `job_id` |
| GET | `/jobs/{job_id}` | Poll async job status and result |

The `/chat` endpoint supports **agent correction**: when an explicit `agent` is provided but the prompt matches a different agent, the response includes an `agent_suggestion` field with the recommended agent and a confirmation message.

**Evals, guardrails, rate limiting:** See [docs/OPENAI_PLUGIN.md](docs/OPENAI_PLUGIN.md) for `SAINT_GUARDRAILS_ENABLED`, `SAINT_JIRA_ALLOWED_PROJECTS`, `SAINT_EXECUTE_ALLOWED_PATTERNS`, `SAINT_RATE_LIMIT_PER_MINUTE`, and `SAINT_EVAL_CACHE_TTL_SECONDS`.

### Use with OpenAI Custom GPT (Actions)

1. Create a Custom GPT and add an **Action**.
2. Set the schema URL to your server’s OpenAPI spec, e.g. `https://your-host:8000/openapi.json` (or use the JSON directly).
3. No auth: leave authentication as “None” for local use; for production, configure API key or OAuth in the GPT.
4. Users can then say e.g. “Analyze JIRA story PROJ-123” or “Generate test script from test cases in designs/testCases.pdf”.

### Use as a general REST API

```bash
# JIRA analysis
curl -X POST http://localhost:8000/jira/analyze -H "Content-Type: application/json" -d '{"story": "PROJ-123"}'

# Generate test data
curl -X POST http://localhost:8000/data/generate -H "Content-Type: application/json" -d '{"schema_description": "User with name, email", "count": 3}'

# Upload test cases file and generate script
curl -X POST http://localhost:8000/script/generate/upload -F "file=@designs/testCases.pdf" -F "structured=true" -F "output=./tests"
```

---

## 11. Additional Documentation

### Troubleshooting Quick Guide

- **No output from CLI command:** run with `PYTHONUNBUFFERED=1` and ensure you are on latest code.
- **Provider/auth failures:** verify API keys in `.env`, or override provider per command: `saint --provider openai ...`.
- **SSL certificate errors:** set `SSL_VERIFY=false` (LLM/client) or `VERIFY_SSL=false` (registration API) in trusted internal environments.
- **Playwright/browser issues:** run `npm install -D @playwright/test && npx playwright install`.
- **`generate-script` output location confusion:** use `--output ./tests`; structured artifacts land in `tests/Pages`, `tests/actions`, `tests/Specs`, and `tests/test-data`.
- **Registration API instability:** SAINT now retries with known valid SSN/DOB profiles and preserves fallback test-data files when partial failures occur.

- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** – Architecture, troubleshooting, and contributing guidelines
- **[IDE_INTEGRATION.md](docs/IDE_INTEGRATION.md)** – IDE integration setup (Cursor, VS Code)
