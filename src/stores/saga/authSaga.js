import { call, put, takeLatest } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "../actions/authActions";
import { authService } from "../../services/authServices";
import { LOGIN_REQUEST } from "../constants/authConstant";

function* loginSaga(action) {
  try {
    // Gọi API login
    const user = yield call(
      authService.login,
      action.payload.email,
      action.payload.password
    );

    // Dispatch action success
    yield put(loginSuccess(user));

    // Chuyển hướng sau khi login thành công (nếu cần)
    // Sử dụng history từ react-router-dom
    // history.push('/dashboard');
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

// Worker Saga cho logout
// function* logoutSaga() {
//   try {
//     // Gọi service logout
//     yield call(authService.logout);

//     // Dispatch action logout success
//     yield put(logoutSuccess());

//     // Chuyển hướng về trang login
//     // history.push('/login');
//   } catch (error) {
//     console.error('Logout failed', error);
//   }
// }

// Watcher Saga
export function* watchAuthSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  //yield takeLatest(LOGOUT_REQUEST, logoutSaga);
}
