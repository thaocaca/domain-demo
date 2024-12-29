import { call, put, takeEvery } from "redux-saga/effects";
import { PAYPAL_PAYMENT_INITIATE, PAYPAL_PAYMENT_SUCCESS, PAYPAL_PAYMENT_FAILURE } from "../constants/paymentConstant";

// API tạo order PayPal
const createPaypalOrder = async (cartItems) => {
  const response = await fetch("/api/paypal/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cartItems),
  });
  if (!response.ok) throw new Error("Failed to create PayPal order");
  return response.json();
};

// Saga xử lý thanh toán PayPal
function* handlePaypalPayment(action) {
  try {
    const order = yield call(createPaypalOrder, action.payload);
    yield put({ PAYPAL_PAYMENT_SUCCESS, payload: order });
  } catch (error) {
    yield put({ PAYPAL_PAYMENT_FAILURE, payload: error.message });
  }
}

export function* watchPaymentSaga() {
  yield takeEvery(PAYPAL_PAYMENT_INITIATE, handlePaypalPayment);
}