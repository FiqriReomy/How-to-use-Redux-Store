import { ADD_TO_CART } from "../constant/cartType";

const initialState = {
  count: 0,
  cart: [],
  success: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload.data;
      const amount = action.payload.amount;
      const index = state.cart.findIndex((item) => item.data.id === product.id);

      if (index !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[index].amount += amount;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          success: true,
          cart: [...state.cart, { data: product, amount }],
        };
      }
    default:
      return state;
  }
};
