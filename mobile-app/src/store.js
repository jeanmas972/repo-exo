import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import thunk from 'redux-thunk';

import reducers from './reducers';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3333/graphql',
});

export const client = new ApolloClient({
    networkInterface,
});


/*
export const client = new ApolloClient({
  link: new HttpLink({  uri: 'http://localhost:3333/graphql' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

*/

// const client = createHttpLink({ uri: '/graphql' });

const middlewares = [client.middleware(), thunk];

export const store = createStore(
  reducers(client),
  undefined,
   composeWithDevTools(applyMiddleware(...middlewares)),
)