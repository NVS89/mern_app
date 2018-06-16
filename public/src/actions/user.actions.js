import { userConstants } from "../constants/user";

export const userActions = {
    getUsers,
    saveUser
}

function getUsers() {  
    return dispatch =>{
        dispatch(request());
        userService.getUsers()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );

    }
        function request() { return { type: userConstants.GET_USERS_REQUEST} }
        function success(users) { return { type: userConstants.GET_USERS_SUCCESS, users} }
        function failure(error) { return { type: userConstants.GET_USERS_FAILURE, error} }
}

function saveUser(user) {
    return dispatch => {
        dispatch(request(user));
        userService.saveUser(user)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );

    }
    function request(user) { return { type: userConstants.SAVE_USER_REQUEST, user }}
    function success(user) { return { type: userConstants.SAVE_USER_SUCCESS, user }}
    function failure(error) { return { type: userConstants.SAVE_USER_FAILURE, error }}
}