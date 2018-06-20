import { userConstants } from '../constants/user';

const initialState = {
    loading: false,
    items: [],
    error: [],
    saving: false,
}

export function users(state = initialState, action) {
    switch (action.type) {
        case userConstants.GET_USERS_REQUEST:
            return{
                loading: true
            }
        case userConstants.GET_USERS_SUCCESS:
            return{
                items: action.users
            }
        case userConstants.GET_USERS_FAILURE:
            return{
                error: action.error
            }
        case userConstants.SAVE_USER_REQUEST:
            return{
                saving: true,
                user: action.user
            }
        case userConstants.SAVE_USER_SUCCESS:
            return{
               items: {...state.items, ...action.user}
            }
        case userConstants.SAVE_USER_FAILURE:
            return{
                items: state.items,
                error: action.error
            }
    
        default:
            return state;
    }
}