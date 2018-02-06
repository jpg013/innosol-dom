import 'whatwg-fetch';
import { getAuthTokenFromStorage } from '../services/storageService';
import { buildUri } from './buildUri';
import { buildConfig } from './buildConfig';
import { makeApiError } from './makeApiError';

const baseHeaders = {
  'Content-Type': 'application/json'
}

export default function(endpoint, method='get', opts={}) {
  const headers = Object.assign({}, baseHeaders, opts.headers || {})
  const token = getAuthTokenFromStorage();

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  const uri = buildUri(endpoint, method, opts);
  const config = Object.assign({}, buildConfig(method, opts), { headers, method });

  return fetch(uri, config)
    .then(function(resp) {
      if (resp.ok) {
        return resp.json().then(json => {
          if (resp.status === 200 || resp.status === 304) {
            return json
          }
          throw makeApiError(resp.status, resp.statusText, json ? json.msg : '')
        });
      }
      throw makeApiError(resp.status, resp.statusText);
    });
};
