import makeActionCreator from './makeActionCreator';

export const AUTH_SIGN_OUT        = 'AUTH_SIGN_OUT';
export const AUTH_TOKEN_HYDRATE   = 'AUTH_TOKEN_HYDRATE';
export const AUTH_SIGN_IN_REQUEST = 'AUTH_SIGN_IN_REQUEST';
export const AUTH_SIGN_IN_SUCCESS = 'AUTH_SIGN_IN_SUCCESS';
export const AUTH_SIGN_IN_ERROR   = 'AUTH_SIGN_IN_ERROR';
export const AUTH_USER            = 'AUTH_USER';

export const hydrateAuthToken     = makeActionCreator(AUTH_TOKEN_HYDRATE);
export const signOut              = makeActionCreator(AUTH_SIGN_OUT);
export const signInRequest        = makeActionCreator(AUTH_SIGN_IN_REQUEST, 'username', 'password');
export const signInSuccess        = makeActionCreator(AUTH_SIGN_IN_SUCCESS, 'token');
export const signInError          = makeActionCreator(AUTH_SIGN_IN_ERROR, 'message');
export const authUser             = makeActionCreator(AUTH_USER, 'user');
