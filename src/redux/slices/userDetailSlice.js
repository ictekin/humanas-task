import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  result: null,
  error: null,
  loading: false,
};

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

export const getUserDetail = createAsyncThunk(
  "getUserDetail",
  async ({ url, data }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "POST",
        url: url,
        headers: config.headers,
        data: data,
      });

      return response?.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const getUserDetailSlice = createSlice({
  name: "getUserDetail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserDetail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.result = action.payload;
      })
      .addCase(getUserDetail.rejected, (state, action) => {
        state.error = action.payload?.errors;
      });
  },
});

export default getUserDetailSlice.reducer;
