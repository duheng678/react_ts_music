import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'

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

  const [current, setCurrent] = useState(0)

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
  function handleAfterChange(from: number, to: number) {
    console.log(to)
    setCurrent(to)
  }
  /** 获取背景图片 */
  let bgImageUrl
  if (current >= 0 && banners.length > 0) {
    console.log('nn')

    bgImageUrl = banners[current].imageUrl + '?imageView&blur=40x20'
  }

  return (
    <TopSlideWrapper
      style={{ background: `url('${bgImageUrl}')   center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <TopSlideLeftWrapper>
          <Carousel
            autoplay
            dots={false}
            autoplaySpeed={4000}
            ref={slideRef}
            effect="fade"
            beforeChange={handleAfterChange}
          >
            {banners.map((item: any) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.title} />{' '}
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === current
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
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
