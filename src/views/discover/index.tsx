import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

import DiscoverNav from './c-cpns/discover-nav'

function Discover() {
  return (
    <div>
      <DiscoverNav />
      <Suspense fallback="">
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

Discover.propTypes = {}

export default Discover
