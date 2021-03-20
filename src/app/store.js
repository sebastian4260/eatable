import { configureStore } from "@reduxjs/toolkit";
//import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/orders/ordersSlice";
import productsReducer from "../features/products/productsSlice";
import sessionReducer from "../features/session/sessionSlice";
import usersReducer from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    //cart: cartReducer,
    orders: orderReducer,
    products: productsReducer,
    session: sessionReducer,
    users: usersReducer,
  },
});


