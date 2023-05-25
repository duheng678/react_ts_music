import React, { memo, useRef, useState, useEffect } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'

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
  const imgRef = useRef<HTMLImageElement>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dotIndex, setDotIndex] = useState(0)
  const [bgImage, setBgImage] = useState<string>()

  const indexRef = useRef(currentIndex)
  const timerRef = useRef<ReturnType<typeof setInterval>>()
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )

  useEffect(() => {
    if (!banners.length) return
    setBgImage(banners[currentIndex].imageUrl + '?imageView&blur=40x20')
  }, [banners])

  function handleChangeClick(flag, type) {
    const time = type === 'timer' ? 500 : 0

    let newIndex = flag ? currentIndex + 1 : currentIndex - 1
    if (newIndex > banners.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = banners.length - 1
    imgRef.current.style.opacity = '0.2'
    imgRef.current.style.transition = 'opacity 1s ease 0s'
    setDotIndex(-1)

    setTimeout(() => {
      setCurrentIndex(newIndex)
      indexRef.current = newIndex
      imgRef.current.style.transition = 'none 0s ease 0s'
      imgRef.current.style.opacity = '1'
      setBgImage(banners[indexRef.current].imageUrl + '?imageView&blur=40x20')
      setDotIndex(indexRef.current)
    }, time)
  }

  // function handleAfterChange() {
  //   setBgImage(banners[indexRef.current].imageUrl + '?imageView&blur=40x20')
  //   setDotIndex(currentIndex)
  // }

  let imageUrl = ''
  if (banners.length) {
    imageUrl = banners[currentIndex].imageUrl
  }
  if (timerRef.current) clearInterval(timerRef.current)
  timerRef.current = setInterval(() => {
    handleChangeClick(true, 'timer')
  }, 3000)

  return (
    <TopSlideWrapper
      style={{ background: `url('${bgImage}')   center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <TopSlideLeftWrapper>
          <div className="banner-list">
            <div className="banner-item">
              <img className="image" src={imageUrl} ref={imgRef} />
            </div>
          </div>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === dotIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </TopSlideLeftWrapper>
        <TopSlideRightWrapper></TopSlideRightWrapper>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => handleChangeClick(false, 'click')}
          ></button>
          <button
            className="btn right"
            onClick={() => handleChangeClick(true, 'click')}
          ></button>
        </BannerControl>
      </div>
    </TopSlideWrapper>
  )
}

export default memo(TopSlide)
