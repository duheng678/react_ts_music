import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    try {
      const res = await getBanners()
      console.log(res)

      dispatch(changeBannerData(res.banners))
    } catch (error) {
      console.log(error)
    }
  }
)
// 热门推荐
export const fetchHotRecommend = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    try {
      const res = await getHotRecommend(8)
      console.log(res)

      if (res.code == 200) dispatch(changeHotRecommendData(res.result))
    } catch (error) {
      console.log(error)
    }
  }
)
// 新碟上架
export const fetchNewAlbum = createAsyncThunk(
  'newAlbum',
  async (arg, { dispatch }) => {
    try {
      const res = await getNewAlbum(10)
      console.log(res)

      if (res.code == 200) dispatch(changeNewAlbumData(res.albums.slice(0, 10)))
    } catch (error) {
      console.log(error)
    }
  }
)

interface IRecommendState {
  banners: any
  hotRecommend: any
  newAlbum: any
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerData(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendData(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbumData(state, { payload }) {
      state.newAlbum = payload
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
export const { changeBannerData, changeHotRecommendData, changeNewAlbumData } =
  recommendSlice.actions
export default recommendSlice.reducer
