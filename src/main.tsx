import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ReactQueryDevtools/>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
