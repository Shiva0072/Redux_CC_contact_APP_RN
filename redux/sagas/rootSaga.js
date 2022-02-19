import {all} from 'redux-saga/effects';

//sagas
import users from './entities/users/users';
import userDetails from './entities/users/userDetails';

//export the root saga
function* rootSaga() {
  yield all([users(), userDetails()]);
}

export default rootSaga;
