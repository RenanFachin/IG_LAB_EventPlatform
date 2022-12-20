import { Event } from "./pages/Event";

// Conexão com API
import { ApolloProvider } from '@apollo/client' // Context Provider
import { client } from './lib/apollo'
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}