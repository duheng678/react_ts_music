import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'

import {
  TopSlideLeftWrapper,
  TopSlideRightWrapper,
  TopSlideWrapper,
  BannerControl
} from './style'
import { useAppSelector, appShallowEqual } from '@/store'
interface IProps {
  children?: ReactNode
}

const TopSlide: FC<IProps> = () => {
  const slideRef = useRef<ElementRef<typeof Carousel>>(null)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )
  function handlePrevClick() {
    console.log('pre')
    slideRef.current?.prev()
  }
  function handleNextClick() {
    console.log('next')
    slideRef.current?.next()
  }

  return (
    <TopSlideWrapper>
      <div className="banner wrap-v2">
        <TopSlideLeftWrapper>
          <Carousel autoplay autoplaySpeed={1000} ref={slideRef} effect="fade">
            {banners.map((item: any) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.title} />{' '}
                </div>
              )
            })}
          </Carousel>
        </TopSlideLeftWrapper>
        <TopSlideRightWrapper></TopSlideRightWrapper>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </TopSlideWrapper>
  )
}

export default memo(TopSlide)
