import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchCreateOrder = createAsyncThunk(
  "orders/fetchCreateOrder",
  async ({ body, token }) => {
    const response = await fetch(`${BASE_URI}/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { order: data };
  }
);

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (token) => {
    const response = await fetch(`${BASE_URI}/orders`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { orders: data };
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    error: null,
    list_status: "idle",
    create_status: "idle",
  },
  reducers: {
    resetCreateStatus: (state, action) => {
      state.create_status = "idle";
    },
  },
  extraReducers: {
    [fetchOrders.fulfilled]: (state, action) => {
      state.list_status = "succeeded";
      state.items = action.payload.orders;
    },
    [fetchOrders.rejected]: (state, action) => {
      state.list_status = "failed";
      state.error = action.error.message;
    },
    [fetchCreateOrder.fulfilled]: (state, action) => {
      state.create_status = "succeeded";
      state.items.push(action.payload.order);
    },
    [fetchCreateOrder.rejected]: (state, action) => {
      state.create_status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { resetCreateStatus } = ordersSlice.actions;
export default ordersSlice.reducer;
