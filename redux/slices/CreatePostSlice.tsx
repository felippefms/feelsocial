import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  content: '',
  likes: '',
  comments: '',
}

export const SendPostSlice = createSlice({
    name: 'SendPost',
    initialState,
    reducers:{
        SendPost: (state, action) => {
            state.id = action.payload.id
            state.content = action.payload.content
            state.likes = action.payload.likes
            state.comments = action.payload.comments
        }
    }
})

export const { SendPost } = SendPostSlice.actions

export default SendPostSlice.reducer