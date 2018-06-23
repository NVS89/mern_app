import { takeLatest, put, call } from 'redux-saga/effects';
import { userConstants } from '../constants/user';
import { userActions } from '../actions';
import { userService } from '../services';

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
        const user = yield call(userService.saveUser, action.user);
        yield put(userActions.saveUserSucces(user));
    } catch (error) {
        yield put(userActions.saveUserFailure(error));
    }
}

function* deleteUser(action) {
    try {
        const user = yield call(userService.deleteUser, action.userId);
        yield put(userActions.deleteUserSucces(user));
    } catch (error) {
        yield put(userActions.deleteUserFailure(error));
    }
}

function* watchGetUsers() {
    yield takeLatest([userConstants.GET_USERS_REQUEST, userConstants.DELETE_USER_SUCCESS], getUsers);
}

function* watchSaveUser() {
    yield takeLatest(userConstants.SAVE_USER_REQUEST, saveUser);
}

function* watchDeleteUser() {
    yield takeLatest(userConstants.DELETE_USER_REQUEST, deleteUser);
}

export {
    watchGetUsers,
    watchSaveUser,
    watchDeleteUser,
};
