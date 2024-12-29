import { call, put, takeEvery } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "../actions/authActions";
import { authService } from "../../services/authServices";
import { CHECK_SESSION, LOGIN_REQUEST } from "../constants/authConstant";
import { checkExistSession, createSession } from "../../services/authServices";

function* loginSaga(action) {
  console.log(JSON.stringify(action))
  try {
    const response = yield call(authService.login, action.payload);
    console.log(response);
    // Lưu sessionId vào localStorage và Redux
    const sessionId = response.id;
    localStorage.setItem("sid", sessionId);
    // Lưu thông tin người dùng
    yield put(loginSuccess({ user: response.data.user, sessionId }));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* checkSessionSaga() {
  try {
    let sessionId = localStorage.getItem("sid");
    console.log(sessionId);
    // Nếu sessionId không tồn tại, gọi API để tạo session mới
    if (!sessionId) {
      const response = yield call(createSession);
      console.log(response);
      
      sessionId = response.id;
      localStorage.setItem("sid", sessionId);
    } else {
      try {
        const response = yield call(checkExistSession);
        if (response) {
          sessionId = response.id;
          localStorage.setItem("sid", sessionId);
        }
      } catch (error) {
        console.log(error);
        const response = yield call(createSession);
        sessionId = response.id;
        localStorage.setItem("sid", sessionId);
      }
    }
  } catch (error) {
    console.error("Error checking session:", error);
  }
}

// Watcher Saga
export function* watchAuthSaga() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
  yield takeEvery(CHECK_SESSION, checkSessionSaga);
}