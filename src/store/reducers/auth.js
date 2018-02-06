import { buildUserModel } from '../../factories/userFactory';
import initialState from '../initialState';
import {
  AUTH_SIGN_IN_REQUEST,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  AUTH_TOKEN_HYDRATE,
  AUTH_USER
} from '../actions/auth';
import { API_ERROR } from '../actions/api';

const defaultState = Object.assign({}, initialState.auth);

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case AUTH_TOKEN_HYDRATE:
    case AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.token,
        status: action.token ? 'authenticated' : defaultState.status
      };
    case AUTH_SIGN_IN_ERROR:
      return {
        ...state,
        status: 'error',
        msg: action.message
      };
    case AUTH_SIGN_IN_REQUEST:
      return {
        ...state,
        status: 'authenticating',
        msg: ''
      };
    case AUTH_SIGN_OUT:
      return {
        ...defaultState
      };
    case AUTH_USER:
      return {
        ...state,
        user: buildUserModel(action.user),
      }
    case API_ERROR:
      return action.error.statusCode === 401 ?
        {
          ...defaultState
        } : state;
    default:
      return state;
  }
}
