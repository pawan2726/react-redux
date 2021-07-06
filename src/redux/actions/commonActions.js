import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setProviders = (providers) => {
    return {
      type: ActionTypes.SET_PROVIDERS,
      payload: providers,
    };
  };
  
export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
