import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  providers: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SET_PROVIDERS:
      return { ...state, providers: payload };
    default:
      return state;
  }
};
