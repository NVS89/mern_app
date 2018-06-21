import {takeLatest, put, call} from 'redux-saga/effects';
import {userConstants} from '../constants/user';
import {userActions} from '../actions';
import {userService} from "../services";

function* getUsers() {
    try {
        const users = yield call(userService.getUsers);
        yield put(userActions.getUsersSucces(users));
    } catch (error) {
        yield put(userActions.getUsersFailure(error));
    }
}

function* saveUser(action) {
    try {
        const users = yield call(userService.saveUser(action.user));
        yield put(userActions.saveUserSucces(users));
    } catch (error) {
        yield put(userActions.saveUserFailure(error));
    }
}

function* watchGetUsers() {
    yield takeLatest(userConstants.GET_USERS_REQUEST, getUsers);
}
function* watchSaveUser() {
    yield takeLatest(userConstants.SAVE_USER_REQUEST, saveUser);
}

export {
    watchGetUsers,
    watchSaveUser
}

