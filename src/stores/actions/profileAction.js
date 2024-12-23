import { UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../constants/profileConstant";

export const updateProfileRequest = (profileData) => ({
    type: UPDATE_PROFILE_REQUEST,
    payload: profileData,
});

export const updateProfileSuccess = (profileData) => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload: profileData,
});

export const updateProfileFailure = (error) => ({
    type: UPDATE_PROFILE_FAILURE,
    payload: error,
});