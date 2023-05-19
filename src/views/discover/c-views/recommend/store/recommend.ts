import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getBanners } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    try {
      const res = await getBanners()
      dispatch(changeBannerData(res.banners))
    } catch (error) {
      console.log(error)
    }
  }
)

interface IRecommendState {
  banners: any
}
const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerData(state, { payload }) {
      state.banners = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     // .addCase(fetchBannerDataAction.pending, (state, { payload }) => {})
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  // }
})
export const { changeBannerData } = recommendSlice.actions
export default recommendSlice.reducer
