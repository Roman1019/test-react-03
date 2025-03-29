import { configureStore } from "@reduxjs/toolkit";
import balanceSliceReducer from "./balanceSlice.js";
import localeSliceReducer from "./localeSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// const initialState = {
//   balance: {
//     value: 0,
//   },
//   locale: {
//     lang: "uk",
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   console.log(action);

//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value + action.payload,
//         },
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value - action.payload,
//         },
//       };

//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           lang: action.payload,
//         },
//       };
//   }

//   return state;
// };

const balancePersistConfig = {
  key: "user_balance",
  storage,
  whitelist: ["value"],
};

const persistedBalanceReducer = persistReducer(
  balancePersistConfig,
  balanceSliceReducer
);
export const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
    locale: localeSliceReducer,
  },
});

export const persistor = persistStore(store);

// const deposit = (value) => {
//   type: "balance/deposit",
//   payload: value,
// };
