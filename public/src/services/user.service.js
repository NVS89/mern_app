import { transport } from '../helpers/axios';

export const userService = {
    getUsers,
    saveUser,
    deleteUser,
};

function getUsers() {
    return transport.get('/users')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}

function saveUser(user) {
    return transport.post('/user', {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        age: user.age,
    }).then((response) => {
        if (response.status === 200) {
            return response.data.user;
        }
        return null;
    }).catch((error) => {
        return error;
    });
}

function deleteUser(userId) {
    return transport.delete(`/user/${userId}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data.user;
            }
            return null;
        })
        .catch((error) => {
            return error;
        });
}
