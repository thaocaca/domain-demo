import { PAYPAL_PAYMENT_FAILURE, PAYPAL_PAYMENT_INITIATE, PAYPAL_PAYMENT_SUCCESS } from "../constants/paymentConstant";

const initialState = {
    loading: false,
    success: false,
    error: null,
  };
  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case PAYPAL_PAYMENT_INITIATE:
        return { ...state, loading: true, error: null };
      case PAYPAL_PAYMENT_SUCCESS:
        return { ...state, loading: false, success: true };
      case PAYPAL_PAYMENT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default paymentReducer;