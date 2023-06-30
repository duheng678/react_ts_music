import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import request from '@/service'
import { useAppDispatch } from '@/store'
import {
  fetchBannerDataAction,
  fetchHotRecommend,
  fetchNewAlbum
} from './store/recommend'
import TopSlide from './c-cpns/top-slide/top-slide-self'
import {
  RecommendLeft,
  RecommendRight,
  RecommendSection,
  RecommendWrapper
} from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommend())
    dispatch(fetchNewAlbum())
  }, [])

  return (
    <RecommendWrapper>
      <TopSlide></TopSlide>

      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
