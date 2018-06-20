import { all, fork} from 'redux-saga/effects';
import {watchGetUsers, watchSaveUser} from './user.saga';


export default function* rootSaga() {
    yield all([
        fork(watchGetUsers),
        fork(watchSaveUser)
    ]);
}