import {all} from 'redux-saga/effects';
import {watchGetUsers} from './user.saga';

export default function* rootSaga() {
    yield all[
        watchGetUsers()
    ];
}