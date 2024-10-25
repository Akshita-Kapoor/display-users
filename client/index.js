import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
})

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);