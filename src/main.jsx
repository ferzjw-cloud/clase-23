import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/Home'
import { test } from './components/test'

import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Home />
  </StrictMode>,
)

