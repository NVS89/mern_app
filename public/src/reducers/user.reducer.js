import { userConstants } from '../constants/user';

const initialState = {
    loading: false,
    items: [],
    error: [],
    saving: false,
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case userConstants.GET_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case userConstants.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.users,
            };
        case userConstants.DELETE_USER_FAILURE:
        case userConstants.GET_USERS_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case userConstants.SAVE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                user: action.user,
            };
        case userConstants.SAVE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, ...action.user],
            };
        case userConstants.SAVE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                items: state.items,
                userId: action.userId,
            };
        case userConstants.DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                items: state.items,
            };

        default:
            return state;
    }
}
