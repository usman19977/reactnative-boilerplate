import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import AuthReducer from './Auth/Reducer';
import PostReducer from './Post/Reducer';

import rootSaga from './rootSaga';
import authSaga from './Auth/Saga';
import postSaga from './Post/Saga';

const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(authSaga);
sagaMiddleware.run(postSaga);
