import { ADD_TO_CART } from "../constant/cartType";

export const addCart = (cartItem) => ({
  type: ADD_TO_CART,
  payload: cartItem,
});
