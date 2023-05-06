import React from 'react'
import PropTypes from 'prop-types'

import { useRoutes } from 'react-router-dom'
import routes from '@/router'

import Download from '@/views/download'

const obj = { name: 'moon' }
function App() {
  return (
    <div className="App">
      <Download>sdf</Download>
      {useRoutes(routes)}
    </div>
  )
}

App.propTypes = {}

export default App
