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

export const getMetaCvUsers = createAsyncThunk(
  "getMetaCvUsers",
  async ({ skip, limit }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://nervous-sun-hat-cod.cyclic.app/get-meta-users",
        headers: config.headers,
        data: { skip: skip, limit: limit },
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

const metaCvUsersSlice = createSlice({
  name: "getMetaCvUsers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMetaCvUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getMetaCvUsers.fulfilled, (state, action) => {
        if (state.result) {
          state.result = state.result.concat(action.payload.metaCv);
          return;
        }
        state.result = action.payload.metaCv;
      })
      .addCase(getMetaCvUsers.rejected, (state, action) => {
        state.error = action.payload?.errors;
      });
  },
});

export default metaCvUsersSlice.reducer;
