const AUTH_TOKEN_KEY = 'INNOSOL_DOM_AUTH_TOKEN';

const getAuthTokenFromStorage = () => sessionStorage.getItem(AUTH_TOKEN_KEY);
const persistAuthTokenToStorage = token => sessionStorage.setItem(AUTH_TOKEN_KEY, token);
const removeAuthTokenFromStorage = () => sessionStorage.removeItem(AUTH_TOKEN_KEY);

export {
  getAuthTokenFromStorage,
  persistAuthTokenToStorage,
  removeAuthTokenFromStorage,
};
