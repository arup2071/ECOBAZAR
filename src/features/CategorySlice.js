import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    setProductCategory: (state, action)=>{
        state = action.payload;
        return state

    }
  },
});

export const { setProductCategory } = categorySlice.actions;

export default categorySlice.reducer;
;