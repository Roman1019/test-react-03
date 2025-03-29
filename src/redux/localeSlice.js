import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default slice.reducer;

export const { changeLang } = slice.actions;
// export const changeLang = createAction("locale/changeLang");

// const initialState = {
//   lang: "uk",
// };

// export default function localeSliceReducer(state = initialState, action) {
//   switch (action.payload) {
//     case "locale/changeLang":
//       return {
//         ...state,
//         lang: action.payload,
//       };

//     default:
//       return state;
//   }
// }
