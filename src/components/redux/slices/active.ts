import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IActive {
  value: number;
}

const initialState: IActive = {
  value: 1,
};

const Active = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeActive: (state, action: PayloadAction<number>) => {
      state.value =  action.payload;
    },
  },
});

export const { changeActive } = Active.actions;
export default Active.reducer;
