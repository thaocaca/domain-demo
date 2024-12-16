import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// Reducers
import { authReducer } from './reducers/authReducers';
import { domainReducer } from './reducers/domainReducers';

// Sagas
import { watchAuthSaga } from './saga/authSaga';
import { watchAuthSaga } from './saga/domainSaga';
// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  domain: domainReducer
  // Các reducer khác
});

// Root Saga
function* rootSaga() {
  yield all([
    watchAuthSaga()
    // Các saga khác
  ]);
}

// Tạo store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Chạy root saga
sagaMiddleware.run(rootSaga);

export default store;