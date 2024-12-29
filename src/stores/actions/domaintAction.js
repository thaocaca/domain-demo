import {
  FETCH_DOMAINS,
  SET_DOMAINS,
  FILTER_DOMAINS,
  SET_SEARCH_TERM,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants/domainConstant";

export const fetchDomains = () => ({
  type: FETCH_DOMAINS,
});

export const setDomains = (domains) => ({
  type: SET_DOMAINS,
  payload: domains,
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const filterDomains = () => ({
  type: FILTER_DOMAINS,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
