import {put, takeEvery, call} from 'redux-saga/effects';

import {getUserDetails} from '../../../../services/apis/users';
import actiontypes from '../../../actions/actionTypes';
import {
  fetchUserDetailsFailure,
  fetchUserDetailsSuccess,
} from '../../../actions/entities/users/userDetails';

//workerSaga
function* fetchUserDetails({type, payload}) {
  try {
    // console.log(payload.id);
    const id = payload.id;
    const details = yield call(getUserDetails, id);
    // console.log('details got = ', details);
    yield put(fetchUserDetailsSuccess(details));
  } catch (err) {
    yield put(fetchUserDetailsFailure(err));
  }
}

//watcherSaga
function* watchFetchUserDetails() {
  yield takeEvery(actiontypes.FETCH_USER_DETAILS, fetchUserDetails);
}

export default watchFetchUserDetails;
