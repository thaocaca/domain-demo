import { PAYPAL_PAYMENT_FAILURE, PAYPAL_PAYMENT_INITIATE, PAYPAL_PAYMENT_SUCCESS } from "../constants/paymentConstant";

export const initiatePayment = (cartItems) => ({
    type: PAYPAL_PAYMENT_INITIATE,
    payload: cartItems,
  });
  
  export const paymentSuccess = (details) => ({
    type: PAYPAL_PAYMENT_SUCCESS,
    payload: details,
  });
  
  export const paymentFailure = (error) => ({
    type: PAYPAL_PAYMENT_FAILURE,
    payload: error,
  });