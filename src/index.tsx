import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return <h1>hi</h1>
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)