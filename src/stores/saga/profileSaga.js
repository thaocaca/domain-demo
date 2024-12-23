import { call, put, takeLatest } from 'redux-saga/effects';
import {
    updateProfileSuccess,
    updateProfileFailure,
} from '../actions/profileAction';
import { UPDATE_PROFILE_REQUEST } from '../constants/profileConstant';


// API giả lập
const apiUpdateProfile = async (profileData) => {
    // Giả lập gọi API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (profileData.email) {
                resolve(profileData);
            } else {
                reject(new Error('Update failed'));
            }
        }, 1000);
    });
};

// Worker Saga
function* handleUpdateProfile(action) {
    try {
        const updatedProfile = yield call(apiUpdateProfile, action.payload);
        yield put(updateProfileSuccess(updatedProfile));
    } catch (error) {
        yield put(updateProfileFailure(error.message));
    }
}

// Watcher Saga
export default function* profileSaga() {
    yield takeLatest(UPDATE_PROFILE_REQUEST, handleUpdateProfile);
}