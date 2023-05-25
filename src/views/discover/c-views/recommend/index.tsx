import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import request from '@/service'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from './store/recommend'
import TopSlide from './c-cpns/top-slide/top-slide-self'
import {
  RecommendLeft,
  RecommendRight,
  RecommendSection,
  RecommendWrapper
} from './style'
import HotRecommend from './c-cpns/hot-recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopSlide></TopSlide>
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
