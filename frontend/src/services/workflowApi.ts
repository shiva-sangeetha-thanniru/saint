export type WorkflowPreview = {
  title: string
  summary: string
  steps: string[]
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.trim()

const fallbackSteps = [
  'Collect business intent and constraints',
  'Draft the workflow sequence and decision points',
  'Prepare implementation tasks for backend and frontend teams',
]

const titleFromPrompt = (prompt: string) => {
  const normalized = prompt.trim().replace(/\s+/g, ' ')
  if (!normalized) {
    return 'Untitled workflow'
  }

  return normalized.length > 64 ? `${normalized.slice(0, 61)}...` : normalized
}

const createFallbackPreview = (prompt: string): WorkflowPreview => ({
  title: titleFromPrompt(prompt),
  summary:
    'Local preview mode is active. Configure VITE_API_BASE_URL to connect this interface to your backend service.',
  steps: fallbackSteps,
})

export const generateWorkflowPreview = async (
  prompt: string,
): Promise<WorkflowPreview> => {
  if (!API_BASE_URL) {
    return createFallbackPreview(prompt)
  }

  const response = await fetch(`${API_BASE_URL}/api/v1/workflows/preview`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  })

  if (!response.ok) {
    throw new Error('Unable to generate workflow preview. Please try again.')
  }

  return (await response.json()) as WorkflowPreview
}
