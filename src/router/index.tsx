import React from 'react'
import { RouteObject } from 'react-router-dom'

import Discover from '@/views/discover'
import Download from '@/views/download'
import Mine from '@/views/mine'
import Focus from '@/views/focus'

const routes: RouteObject[] = [
  { path: '/', element: <Discover /> },
  { path: '/discover', element: <Discover /> },
  { path: '/focus', element: <Focus /> },
  { path: '/mine', element: <Mine /> },
  { path: '/download', element: <Download /> }
]

export default routes
