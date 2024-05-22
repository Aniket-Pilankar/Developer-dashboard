import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IData } from "../../types";
import { fetchDeveloperActivity } from "./thunk";
import { InitialState } from "./types";

const initialState: InitialState = {
  data: undefined,
};

const developerActivitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchDeveloperActivity.fulfilled,
      (state, action: PayloadAction<IData>) => {
        state.data = action.payload;
      }
    );
  },
});

export default developerActivitySlice.reducer;
