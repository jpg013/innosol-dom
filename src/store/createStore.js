import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { makeRootReducer } from './reducers/index';
import initialState from './initialState';
import authSaga from '../sagas/authSaga';
import institutionsSaga from '../sagas/institutionsSaga';
import auth from './middleware/auth';

const createStore = () => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, auth];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== 'production') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  // ======================================================
  // Store Instantiation
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );


  // ======================================================
  // Run Sagas
  // ======================================================
  sagaMiddleware.run(authSaga);
  sagaMiddleware.run(institutionsSaga);
  return store;
};

export default createStore;
