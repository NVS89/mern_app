import {transport} from '../helpers/axios';
export const userService = {
    getUsers,
    saveUser
}

function getUsers() {
    transport.get( '/users')
        .then(function(response) {
            return responce.data;
        })
        .catch(function(error) {
            return error;
        })
}

function saveUser(user) {
    transport.post('/user',{
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        age: user.age
    }).then(function(responce) {
        return responce.data;
    }).catch(function(error) {
        return error;
    });
}