import { GET_PRODUCT_FAIL, GET_PRODUCT_PROCESS, GET_PRODUCT_SUCCESS } from "../constant/productType";

const initialState = {
  products: [],
  total: "",
  loading: false,
  success: false,
  error: null,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_PROCESS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      const newProducts = action.payload.products;
      const total = action.payload.total;

      return {
        loading: false,
        total: total,
        products: newProducts,
      };
    case GET_PRODUCT_FAIL:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
