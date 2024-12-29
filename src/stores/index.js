import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

// Reducers
import authReducer from "./reducers/authReducers";

// Sagas
import { watchAuthSaga } from "./saga/authSaga";
import profileReducer from "./reducers/profileReducers";
import domainSaga from "./saga/domainSaga";
import domainReducer from "./reducers/domainReducers";
// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
 domains: domainReducer
  // domain: domainReducer
  // Các reducer khác
});

// Root Saga
function* rootSaga() {
  yield all([
    watchAuthSaga(),
    domainSaga(),
    // Các saga khác
  ]);
}

// Tạo store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Chạy root saga
sagaMiddleware.run(rootSaga);

export default store;
