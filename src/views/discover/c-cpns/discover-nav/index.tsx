import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { DiscoverNavWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const DiscoverNav: FC<IProps> = () => {
  return (
    <DiscoverNavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div key={item.link} className="item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </DiscoverNavWrapper>
  )
}

export default memo(DiscoverNav)
