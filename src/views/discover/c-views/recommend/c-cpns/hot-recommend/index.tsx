import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { appShallowEqual, useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend
    }),
    appShallowEqual
  )

  return (
    <HotWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommend.map((item) => {
          return <SongMenuItem itemData={item} key={item.id}></SongMenuItem>
        })}
      </div>
    </HotWrapper>
  )
}

export default memo(HotRecommend)
