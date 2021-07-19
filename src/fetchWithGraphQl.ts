import fetch from 'isomorphic-unfetch';
import { store, graphQlHost } from './config';
import GraphQlQuery from './types/GraphQlQuery';

function fetchWithGraphQl(query: GraphQlQuery, token: string | null = null): Promise<any> {
  const authHeaders = token ? {
    Authorization: `Bearer ${token}`,
  } : {};
  return fetch(graphQlHost, {
    method: 'POST',
    headers: {
      ...authHeaders,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Store: store ? store : 'default',
    },
    body: JSON.stringify(query),
  }).then((res) => res.json());
}

export default fetchWithGraphQl;
