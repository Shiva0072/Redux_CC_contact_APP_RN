import {call, put, takeEvery} from 'redux-saga/effects';

import {
  fetchUser,
  fetchUserSucess,
  fetchUserFailure,
} from '../../../actions/entities/users/users';
import actiontypes from '../../../actions/actionTypes';
import {getUsers} from '../../../../services/apis/users';

//worker sagas
function* fetchUserSaga({type, payload}) {
  // console.log('action recieved in worker saga : ', action);
  try {
    const users = yield call(getUsers);
    yield put(fetchUserSucess(users));
  } catch (err) {
    yield put(fetchUserFailure(err));
  }
}

//watcherSaga
function* watchfetchUser() {
  yield takeEvery(actiontypes.FETCH_USER, fetchUserSaga);
}

export default watchfetchUser;
