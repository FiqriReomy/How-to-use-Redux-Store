import { INCREMENT, DECREMENT, RESET, INCREMENT_BY_AMOUNT, HANDLE_ACTIVE, HANDLE_OPEN_CART, HANDLE_OPEN_MENU } from "../constant/counterType";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

export const incrementByAmount = (amount) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});

export const handleActive = (isActive) => ({
  type: HANDLE_ACTIVE,
  payload: isActive,
});

export const handleOpenCart = (openCart) => ({
  type: HANDLE_OPEN_CART,
  payload: openCart,
});

export const handleOpenMenu = (openMenu) => ({
  type: HANDLE_OPEN_MENU,
  payload: openMenu,
});
