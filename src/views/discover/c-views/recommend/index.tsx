import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import request from '@/service'

interface IProps {
  children?: ReactNode
}
interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string

  exclusive: boolean

  encodeId: string
  scm: string
  bannerBizType: string
}
const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])
  useEffect(() => {
    request.get({ url: '/banner' }).then((res) => {
      console.log(res)
      setBanners(res.banners)
    })
  }, [])

  return (
    <div>
      {banners.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
