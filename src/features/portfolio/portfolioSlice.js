import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinsSaved: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCoin: (state, action) => {
      const newCoin = action.payload;
      const existCoin = state.coinsSaved.find((item) => item.id === newCoin.id);
      if (existCoin) {
        existCoin.qtt += newCoin.qtt;
        existCoin.purchasePrise += newCoin.purchasePrise;
      } else {
        state.coinsSaved.push({
          id: newCoin.id,
          symbol: newCoin.symbol,
          image: newCoin.image,
          qtt: newCoin.qtt,
          purchasePrise: newCoin.purchasePrise,
        });
      }
    },
    removeCoin:(state, action)=>{
      state.coinsSaved.filter(item => item.id !== action.payload)
    }
  },
});

export const { addCoin, removeCoin } = portfolioSlice.actions;
export default portfolioSlice.reducer;
