import {call, put, takeLatest} from 'redux-saga/effects';
import {getPost} from '../../services/Post/api';
import {postError, postSuccess} from './Actions';
import {POST_REQUEST} from './Constants';

/**
 * @author Usman Bashir
 * @function postAction
 * @description Call ap api in using redux in async way by the action provided using Redux-Saga Middleware
 * @param {*} action
 */
function* postAction(action) {
  try {
    const posts = yield call(getPost, action.payload);
    yield put(postSuccess(posts));
  } catch (error) {
    yield put(postError(error.message));
  }
}

export default function* postSaga() {
  yield takeLatest(POST_REQUEST, postAction);
}
