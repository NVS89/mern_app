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
            return {
                ...state,
                loading: true
            }
        case userConstants.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.users
            }
        case userConstants.GET_USERS_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case userConstants.SAVE_USER_REQUEST:
            return {
                ...state,
                saving: true,
                user: action.user
            }
        case userConstants.SAVE_USER_SUCCESS:
            return {
                ...state,
                saving: false,
                items: [...state.items, ...action.user]
            }
        case userConstants.SAVE_USER_FAILURE:
            return {
                ...state,
                saving: false,
                items: state.items,
                error: action.error
            }
    
        default:
            return state;
    }
}