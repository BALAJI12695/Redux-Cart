import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
  searchTerm: null,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      item.amount++;
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      item.amount--;
    },
    removeItems: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item.name !== payload.name
      );
    },
    updateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
      // Check if searchTerm is not a string, set it to an empty string
      state.searchTerm = typeof state.searchTerm === 'string' ? state.searchTerm : '';
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const {
  increaseAmount,
  decreaseAmount,
  removeItems,
  updateTotal,
  setSearchTerm,
} = basketSlice.actions;

export default basketSlice.reducer;
