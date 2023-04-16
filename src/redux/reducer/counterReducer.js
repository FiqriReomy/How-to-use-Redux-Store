import { INCREMENT, DECREMENT, RESET, INCREMENT_BY_AMOUNT, HANDLE_ACTIVE, HANDLE_OPEN_CART, HANDLE_OPEN_MENU } from "../constant/counterType";

const initialState = {
  count: 0,
  cart: [],
  openMenu: false,
  openCart: false,
  isActive: false,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case HANDLE_ACTIVE:
      return {
        ...state,
        isActive: action.payload,
      };
    case HANDLE_OPEN_CART:
      return {
        ...state,
        openCart: action.payload,
      };
    case HANDLE_OPEN_MENU:
      return {
        ...state,
        openMenu: action.payload,
      };

    default:
      return state;
  }
};
