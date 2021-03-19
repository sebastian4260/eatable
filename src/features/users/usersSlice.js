import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchSignup = createAsyncThunk(
  "session/fetchSignup",
  async (formData) => {
    const response = await fetch(`${BASE_URI}/profile`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }
    return { user: data };
  }
);

export const fetchProfile = createAsyncThunk(
  "session/fetchProfile",
  async (token) => {
    const response = await fetch(`${BASE_URI}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errors.message);
    }
    return { user: data };
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    profile: {},
    status: "idle",
    errors: {},
  },
  extraReducers: {
    [fetchProfile.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.profile = action.payload.user;
    },
    [fetchProfile.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = { user: action.error.message };
    },
    [fetchSignup.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSignup.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.profile = action.payload.user;
    },
    [fetchSignup.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = JSON.parse(action.error.message);
    },
  },
});

export default usersSlice.reducer;
