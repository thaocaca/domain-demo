import {
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
} from '../constants/profileConstant';

const initialState = {
    profile: {
        email: '',
        first_name: '',
        last_name: '',
        avatar: '',
        cover_image: '',
        gender: '',
        birthday: '',
        occupation: '',
        country: '',
        state: '',
        timezone: '',
        date_format: '',
        language: '',
    },
    loading: false,
    error: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true, error: null };
        case UPDATE_PROFILE_SUCCESS:
            return { ...state, loading: false, profile: action.payload };
        case UPDATE_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default profileReducer;