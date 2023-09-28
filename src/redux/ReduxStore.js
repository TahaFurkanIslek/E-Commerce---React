import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CartReducer from "./reducers/CartReducer"


const reducer = combineReducers({
  cartReducer:CartReducer.reducer
});

const store = configureStore({
  reducer,
});

export { store, reducer };