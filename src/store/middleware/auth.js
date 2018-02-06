import {
  AUTH_TOKEN_HYDRATE,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT
} from '../actions/auth';


import {
  getAuthTokenFromStorage,
  persistAuthTokenToStorage,
  removeAuthTokenFromStorage
} from '../../services/storageService';

function authTokenMiddleware(state) {
  return dispatch => next => action => {
    if (action.type === AUTH_TOKEN_HYDRATE) {
      // Attempt to get existing token from storage
      const token = getAuthTokenFromStorage();

      if (token) {
        action.token = token;
      } else {
        removeAuthTokenFromStorage();
      }
    } else if (action.type === AUTH_SIGN_IN_SUCCESS) {
      persistAuthTokenToStorage(action.token);
    } else if (action.type === AUTH_SIGN_OUT) {
      removeAuthTokenFromStorage();
    }
    return next(action);
  };
}

export default authTokenMiddleware();
