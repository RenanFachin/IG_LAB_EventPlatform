import React from 'react'
import ReactDOM from 'react-dom/client'

// Páginas
import { App } from './App'

// Estilos globais (tailwindcss)
import './styles/global.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

      <App />

  </React.StrictMode>,
)
