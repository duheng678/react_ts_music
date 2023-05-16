import { createSlice } from '@reduxjs/toolkit'
interface IState {
  count: number
  message: string
}
const initialState: IState = {
  count: 99,
  message: 'hello-git'
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeCount(state, { payload }) {
      state.count = state.count + payload
    }
  }
})
export const { changeCount } = counterSlice.actions
export default counterSlice.reducer
