import { ADD_TO_CART, FILTER_DOMAINS, REMOVE_FROM_CART, SET_DOMAINS, SET_SEARCH_TERM } from "../constants/domainConstant";

const initialState = {
  domains: [],
  filteredDomains: [],
  searchTerm: "",
};

const domainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOMAINS:
      return {
        ...state,
        domains: action.payload,
        filteredDomains: action.payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case FILTER_DOMAINS:
      return {
        ...state,
        filteredDomains: state.domains.filter((domain) =>
          domain.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.name !== action.payload),
        };  
    default:
      return state;
  }
};

export default domainReducer;