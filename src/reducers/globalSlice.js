import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menuName: '',
  phone: '...',
  visit: 0
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeMenu: (state, action) => {
      state.menuName = action.payload
    },
    changePhone: (state, action) => {
      state.phone = action.payload
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.visit += 1
    },
    incrementByAmount: (state, action) => {
      state.visit += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeMenu, changePhone, increment, incrementByAmount } = globalSlice.actions

export default globalSlice.reducer