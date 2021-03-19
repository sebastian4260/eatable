import { configureStore } from '@reduxjs/toolkit';
import orderReducer from "../features/orders/ordersSlice";
import sessionReducer from "../features/session/sessionSlice";
import usersReducer from "../features/users/usersSlice";


export default configureStore({
  reducer: {
    orders: orderReducer,
    session: sessionReducer,
    users: usersReducer,
  },
});


