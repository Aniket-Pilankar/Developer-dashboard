import { RootState } from "./types";

export const selectActivity = (state: RootState) =>
  state.developerActivity.data;
