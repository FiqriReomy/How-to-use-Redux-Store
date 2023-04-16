import thunk from "redux-thunk";
import { cartReducer } from "./reducer/cartReducer";
import { counterReducer } from "./reducer/counterReducer";
import { productReducer } from "./reducer/productReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  products: productReducer,
  counter: counterReducer,
});

export const store = configureStore({ reducer, middleware: [thunk] });
