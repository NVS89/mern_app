import { userConstants } from '../constants/user';

export const userActions = {
    getUsersRequest,
    getUsersSucces,
    getUsersFailure,
    saveUserRequest,
    saveUserSucces,
    saveUserFailure,
    deleteUserRequest,
    deleteUserSucces,
    deleteUserFailure
}

function getUsersRequest() {
    return {
        type: userConstants.GET_USERS_REQUEST,
    };
}

function getUsersSucces(users) {
    return {
        type: userConstants.GET_USERS_SUCCESS,
        users,
    }
}

function getUsersFailure(error) {
    return {
        type: userConstants.SAVE_USER_FAILURE,
        error,
    };
}

function saveUserRequest(user) {
    return {
        type: userConstants.SAVE_USER_REQUEST,
        user,
    };
}

function saveUserSucces(user) {
    return {
        type: userConstants.SAVE_USER_SUCCESS,
        user,
    };
}

function saveUserFailure() {
    return {
        type: userConstants.SAVE_USER_FAILURE,
    };
}

function deleteUserRequest(id) {
    return {
        type: userConstants.DELETE_USER_REQUEST,
        userId: id,
    };
}

function deleteUserSucces() {
    return {
        type: userConstants.DELETE_USER_SUCCESS,
    };
}

function deleteUserFailure() {
    return {
        type: userConstants.DELETE_USER_FAILURE,
    };
}
