import { createSlice } from '@reduxjs/toolkit'

export interface WrapperInterface {
  isAuth: boolean
}

const initialState: WrapperInterface = {
  isAuth: false,
}

// It is a Slice Example it should be delete
const wrapperSlice = createSlice({
  name: 'wrapper',
  initialState,
  reducers: {
    userAuth(state) {
      const newState = state
      newState.isAuth = !state.isAuth
    },
  },
})

export const { userAuth } = wrapperSlice.actions

export default wrapperSlice.reducer
