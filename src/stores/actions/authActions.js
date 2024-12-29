import { CHECK_SESSION, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/authConstant";

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const checkSession = () => ({
  type: CHECK_SESSION,
  payload: null,
});