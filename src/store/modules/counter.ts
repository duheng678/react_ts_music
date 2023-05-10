import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 99,
    message: 'hello'
  },
  reducers: {
    changeCount(state, { payload }) {
      state.count = state.count + payload
    }
  }
})
export const { changeCount } = counterSlice.actions
export default counterSlice.reducer
