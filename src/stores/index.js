import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

// Reducers
import authReducer from "./reducers/authReducers";

// Sagas
import { watchAuthSaga } from "./saga/authSaga";
import profileReducer from "./reducers/profileReducers";
import profileSaga from "./saga/profileSaga";
// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  // domain: domainReducer
  // Các reducer khác
});

// Root Saga
function* rootSaga() {
  yield all([
    watchAuthSaga(),
    profileSaga(),
    // Các saga khác
  ]);
}

// Tạo store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Chạy root saga
sagaMiddleware.run(rootSaga);

export default store;
