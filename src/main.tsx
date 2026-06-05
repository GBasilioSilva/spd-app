import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ResponsiveAppBar.tsx'
import ResponsiveAppBar from './ResponsiveAppBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResponsiveAppBar />
  </StrictMode>,
)
