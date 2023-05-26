import { configureStore } from '@reduxjs/toolkit'
import SendPostReducer from '../slices/CreatePostSlice'

export const store = configureStore({
  reducer: {
    SendPost: SendPostReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch