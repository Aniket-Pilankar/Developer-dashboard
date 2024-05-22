import { IData } from "../../types";
import { store } from "../store";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type ActivityData = IData | undefined;

export interface InitialState {
  data: ActivityData;
}
