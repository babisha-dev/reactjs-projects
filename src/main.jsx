import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import AppS from './Tutorials/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppS />
  </StrictMode>,
  
)
