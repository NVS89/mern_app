import { userConstants } from '../constants/user';

export function users(state={}, action) {
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
                saving: true
            }
        case userConstants.SAVE_USER_SUCCESS:
            return{
               items: {...state.items, ...action.user}
            }
        case userConstants.SAVE_USER_FAILURE:
            return{
                items: state.items,
                deleteError: action.error
            }
    
        default:
            return state;
    }
}