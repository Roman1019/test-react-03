import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "balance",
  initialState: {
    value: 123,
    a: 5,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export default slice.reducer;

export const { deposit, withdraw } = slice.actions;

// export const deposit = createAction("balance/deposit");

// export const withdraw = createAction("balance/withdraw");

// const initialState = {
//   value: 0,
// };

// export default function balanceSliceReducer(state = initialState, action) {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//     case "balance/withdraw":
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };
//     default:
//       return state;
//   }
// }
