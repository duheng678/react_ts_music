import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import request from '@/service'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from './store/recommend'
import TopSlide from './c-cpns/top-slide'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <div>
      <TopSlide></TopSlide>
    </div>
  )
}

export default memo(Recommend)
