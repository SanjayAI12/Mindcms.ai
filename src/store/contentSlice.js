import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const generateContent = createAsyncThunk(
  'content/generate',
  async ({ topic, category }) => {
    const res = await axios.post('http://localhost:5000/api/content/generate', { topic, category });
    return res.data;
  }
);

const contentSlice = createSlice({
  name: 'content',
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateContent.pending, (state) => { state.loading = true; })
      .addCase(generateContent.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(generateContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contentSlice.reducer;