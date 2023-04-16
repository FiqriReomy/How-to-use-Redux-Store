import { GET_PRODUCT_FAIL, GET_PRODUCT_PROCESS, GET_PRODUCT_SUCCESS } from "../constant/productType";
import axios from "axios";

export const getAllProducts = (limit) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_PROCESS });

    // set the time out to 2000 so we can see clearly animation of skeleton when the fetching data is on process
    setTimeout(async () => {
      const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    }, 2000);
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: "No Product Found" });
  }
};
