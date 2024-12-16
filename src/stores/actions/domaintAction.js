import {
  SEARCH_DOMAINS_REQUEST,
  SEARCH_DOMAINS_SUCCESS,
  SEARCH_DOMAINS_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants/productType";

export const searchDomainsRequest = (query) => ({
  type: SEARCH_DOMAINS_REQUEST,
  payload: query,
});

export const searchDomainsSuccess = (products) => ({
  type: SEARCH_DOMAINS_SUCCESS,
  payload: products,
});

export const searchDoaminsFailure = (error) => ({
  type: SEARCH_DOMAINS_FAILURE,
  payload: error,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
