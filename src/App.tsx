import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'
import { useAppSelector, useAppDispatch, appShallowEqual } from '@/store'
import { changeCount } from '@/store/modules/counter'
import Download from '@/views/download'

function App() {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    appShallowEqual
  )
  const dispatch = useAppDispatch()

  function handleClick() {
    dispatch(changeCount(1))
  }
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={handleClick}> +1</button>
      <Download>sdf</Download>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

App.propTypes = {}

export default App
