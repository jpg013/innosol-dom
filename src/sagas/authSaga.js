import { select, take, put, call, fork, cancel, cancelled, all } from 'redux-saga/effects'
import {
  AUTH_SIGN_IN_REQUEST,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_TOKEN_HYDRATE,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  signInError,
  signInSuccess,
  signOut,
  authUser
} from '../store/actions/auth';
import { apiError } from '../store/actions/api';
import { authenticateUser, getAuthenticatedUser } from '../services/authService';

function *signInUser(username, password) {
  try {
    const results = yield call(authenticateUser, username, password);
    debugger;
    if (!results.success || !results.token) {
      yield put(signInError(results.msg));
    } else {
      yield put(signInSuccess(results.token));
    }
  } catch(error) {
    debugger;
    yield put(signInError(error))
  } finally {
    if (yield cancelled()) {
      yield put(signOut())
    }
  }
}

function *authFlow() {
  while (true) {
    const { username, password } = yield take(AUTH_SIGN_IN_REQUEST);
    const signInTask = yield fork(signInUser, username, password);
    const abortAction = yield take([AUTH_SIGN_OUT, AUTH_SIGN_IN_ERROR]);
    if (abortAction.type === AUTH_SIGN_OUT) {
      yield cancel(signInTask);
    }
  }
}

function *fetchUser() {
  while(true) {
    yield take([AUTH_TOKEN_HYDRATE, AUTH_SIGN_IN_SUCCESS]);
    const state = yield select();

    if (state.auth.token) {
      const {user, error} = yield call(getAuthenticatedUser);
      if (error) {
        yield put(apiError(error));
      } else if (user) {
        yield put(authUser(user));
      }
    }
  }
}

function *authSaga() {
  yield all([authFlow(), fetchUser()])
}

export default authSaga;
