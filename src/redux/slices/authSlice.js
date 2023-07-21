import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  result: null,
  error: null,
  loading: false,
};

export const login = createAsyncThunk(
  "login",
  async ({ url, body }, { rejectWithValue }) => {
    try {
      const response = await axios.post(url, body);
      localStorage.setItem("token", response?.data.token);
      window.location.replace("http://localhost:5173/dashboard/main");
      return response?.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.result = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload?.errors;
      });
  },
});

export default loginSlice.reducer;
