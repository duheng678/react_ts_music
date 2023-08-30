import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchData',
  (ary, { dispatch }) => {
    // 轮播图数据
    getBanners().then((res) => {
      if (res.code === 200) dispatch(changeBannerData(res.banners))
    })
    // 热门推荐
    getHotRecommend(8).then((res) => {
      if (res.code === 200) dispatch(changeHotRecommendData(res.result))
    })
    // 新碟上架
    getNewAlbum(10).then((res) => {
      if (res.code == 200) dispatch(changeNewAlbumData(res.albums.slice(0, 10)))
    })
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
