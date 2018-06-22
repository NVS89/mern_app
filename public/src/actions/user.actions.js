import { userConstants } from "../constants/user";

export const userActions = {
    getUsersRequest,
    getUsersSucces,
    getUsersFailure,
    saveUserRequest,
    saveUserSucces,
    saveUserFailure
}

function getUsersRequest() {  
    return{
        type: userConstants.GET_USERS_REQUEST
    }
}

function getUsersSucces(users) {
    return {
        type: userConstants.GET_USERS_SUCCESS,
        users: users
    }
}

function getUsersFailure(error) {
    return {
        type: userConstants.SAVE_USER_FAILURE,
        error: error
    }
}

function saveUserRequest(user) {
    return {
        type: userConstants.SAVE_USER_REQUEST,
        user
    }
}

function saveUserSucces(user) {
    return {
        type: userConstants.SAVE_USER_SUCCESS,
        user
    }
}

function saveUserFailure() {
    return {
        type: userConstants.SAVE_USER_FAILURE
    }
}