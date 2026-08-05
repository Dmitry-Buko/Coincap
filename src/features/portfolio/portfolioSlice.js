import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinsSaved: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCoin: (state, action)=>{
      const newCoin = action.payload
      
    }
  },
});

export default portfolioSlice.reducer