import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
  dark: boolean;
}

const initialState: ITheme = {
  dark: false,
};

const Theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { changeTheme } = Theme.actions;
export default Theme.reducer;
