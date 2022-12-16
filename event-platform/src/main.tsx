import React from 'react'
import ReactDOM from 'react-dom/client'

// Páginas
import { App } from './App'

// Estilos globais (tailwindcss)
import './styles/global.css'

// Conexão com API
import { ApolloProvider } from '@apollo/client' // Context Provider
import { client } from './lib/apollo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
