import { combineReducers } from "redux";
import { addListing, removeListing } from "./actions";
import initialState from "../redux/state";

const user = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const listings = (state = initialState.listings, action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.payload];
    case "REMOVE_LISTING":
      return state.filter((listing, index) => index !== action.value);
    default:
      return state;
  }
};

export default combineReducers({ user, listings });
