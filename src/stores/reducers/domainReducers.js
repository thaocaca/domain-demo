import * as types from "../actions/domaintAction";

const initialDomainState = {
  domains: [],
  loading: false,
  error: null,
};

export const domainReducer = (state = initialDomainState, action) => {
  switch (action.type) {
    case types.SEARCH_DOMAINS_REQUEST:
      return { ...state, loading: true };
    case types.SEARCH_DOMAINS_SUCCESS:
      return {
        ...state,
        loading: false,
        domains: action.payload,
      };
    case types.SEARCH_DOMAINS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const existingDomain = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingDomain) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case types.REMOVE_FROM_CART:
      return state.filter((domain) => domain.id !== action.payload);
    default:
      return state;
  }
};
