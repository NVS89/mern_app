import axios from 'axios';
export const userService = {
    getUsers,
    saveUser
}

function getUsers() {
    axios.get( '/users')
        .then(function(response) {
            return responce.data;
        })
        .catch(function(error) {
            return error;
        })
}

function saveUser(user) {
    axios.post('/user',{
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        gender: user.gender,
        age: user.age
    }).then(function(responce) {
        return responce.data;
    }).catch(function(error) {
        return error;
    });
}