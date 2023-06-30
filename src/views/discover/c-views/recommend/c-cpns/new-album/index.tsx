import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'
interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const slideRef = useRef<ElementRef<typeof Carousel>>()
  const { newAlbum } = useAppSelector((state) => ({
    newAlbum: state.recommend.newAlbum
  }))
  function handlePrevClick() {
    slideRef.current?.prev()
  }
  function handleNextClick() {
    slideRef.current?.next()
  }
  function handleSlideChange() {
    console.log('h')
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel
            ref={slideRef}
            dots={false}
            afterChange={handleSlideChange}
            speed={1000}
            autoplay
          >
            {[0, 1].map((item, index) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbum.slice(item * 5, item * 5 + 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
