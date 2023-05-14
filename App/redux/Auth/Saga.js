import {call, put, takeLatest} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED} from '../Auth/Constants';
import {login} from '../../services/Auth/api';
import {loginError, loginSuccess} from './Actions';

/**
 * @author Usman Bashir
 * @function loginAction
 * @description Call ap api in using redux in async way by the action provided using Redux-Saga Middleware
 * @param {*} action
 */
function* loginAction(action) {
  try {
    const token = yield call(login, action.payload);
    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginError(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginAction);
}
