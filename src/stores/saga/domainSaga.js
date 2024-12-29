import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_TO_CART, FETCH_DOMAINS } from "../constants/domainConstant";
import { setDomains } from "../actions/domaintAction";

function fetchDomainsApi() {
  // Giả lập fetch API
  return Promise.resolve([
    {
      name: "hosttest.work",
      prices: [
        {
          id: 1,
          currency_code: "USD",
          billing_cycle: 1,
          registration_price: 4.25,
        },
      ],
    },
    {
      name: "host.com",
      prices: [
        {
          id: 2,
          currency_code: "YEN",
          billing_cycle: 1,
          registration_price: 4.25,
        },
      ],
    },
    {
      name: "domain.work",
      prices: [
        {
          id: 3,
          currency_code: "VND",
          billing_cycle: 1,
          registration_price: 4.25,
        },
      ],
    },
  ]);
}

function* fetchDomains() {
  try {
    const domains = yield call(fetchDomainsApi);
    yield put(setDomains(domains));
  } catch (error) {
    console.error("Error fetching domains:", error);
  }
}

function* handleAddToCart(action) {
  try {
    const result = yield call(addToCartApi, action.payload);
    console.log("Added to cart:", result);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}

export default function* domainSaga() {
  yield takeEvery(FETCH_DOMAINS, fetchDomains);
  yield takeEvery(ADD_TO_CART, handleAddToCart);
}
