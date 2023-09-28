import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
 products: [],
 isLoading: false,
 error: [],
};

const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
 return fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((response) => response)
  .catch();
});

export const counterSlice = createSlice({
 name: "products",
 initialState,
 extraReducers: (builder) => {
  builder.addCase(fetchProducts.pending, (state) => {
   state.error = "";
   state.products = [];
   state.isLoading = true;
  });
  builder.addCase(fetchProducts.rejected, (state, action) => {
   state.error = action.error.message;
   state.products = [];
   state.isLoading = false;
  });
  builder.addCase(fetchProducts.fulfilled, (state, action) => {
   state.error = "";
   state.products = action.payload;
   state.isLoading = false;
  });
 },
});

export { fetchProducts };

export default counterSlice.reducer;
