import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/domaintAction';
import * as productApi from '../../services/productApi';
import { 
  searchProductsSuccess, 
  searchProductsFailure 
} from '../actions/domaintAction';

function* searchDomainSaga(action) {
  try {
    const products = yield call(productApi.searchProducts, action.payload);
    yield put(searchDomainsSuccess(products));
  } catch (error) {
    yield put(searchDomainsFailure(error.message));
  }
}

export function* watchSearchProducts() {
  yield takeLatest(types.SEARCH_PRODUCTS_REQUEST, searchDomainSaga);
}