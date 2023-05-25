import React, { memo, useState, useRef } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  function handleIndexClick() {
    console.log('click')
    setIndex(1)
    indexRef.current = 2
  }
  console.log('update')

  return (
    <div>
      <h2>{index}</h2>
      <button onClick={() => handleIndexClick()}>222</button>
    </div>
  )
}

export default memo(Ranking)
