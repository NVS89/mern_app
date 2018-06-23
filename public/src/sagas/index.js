import { all, fork } from 'redux-saga/effects';
import { watchGetUsers, watchSaveUser, watchDeleteUser } from './user.saga';


export default function* rootSaga() {
    yield all([
        fork(watchGetUsers),
        fork(watchSaveUser),
        fork(watchDeleteUser),
    ]);
}
