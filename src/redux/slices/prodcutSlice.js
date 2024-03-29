import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "allProducts/fetchProducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
    localStorage.setItem("products", JSON.stringify(result.data.products));
    return result.data.products;
  },
);

const productSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: [],
    productContainer: [],
    loading: false,
    error: "",
    productsPerPage: 10,
    currentPage: 1,
  },
  reducers: {
    productSearch: (state, action) => {
      state.products = state.productContainer.filter((item) =>
        item.title.toLowerCase().includes(action.payload),
      );
    },
    onNavigateNext: (state) => {
      ++state.currentPage;
    },
    onNavigatePrev: (state) => {
      --state.currentPage;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.productContainer = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error =
        "API fetching failed.. Error message: " + action.error.message;
    });
  },
});

export const { productSearch, onNavigateNext, onNavigatePrev } =
  productSlice.actions;
export default productSlice.reducer;
