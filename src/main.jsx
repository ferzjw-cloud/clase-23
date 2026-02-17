import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Home } from './components/Home'
import { Test } from './components/test'
import { Effects } from './components/effects'


import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <Effects />
  </StrictMode>,
)

