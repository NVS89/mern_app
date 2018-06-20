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

function getUsersSucces() {
    return {
        type: userConstants.GET_USERS_SUCCESS
    }
}

function getUsersFailure() {
    return {
        type: userConstants.SAVE_USER_FAILURE
    }
}

function saveUserRequest(user) {
    return {
        type: userConstants.SAVE_USER_REQUEST,
        user
    }
}

function saveUserSucces() {
    return {
        type: userConstants.SAVE_USER_SUCCESS
    }
}

function saveUserFailure() {
    return {
        type: userConstants.SAVE_USER_FAILURE
    }
}