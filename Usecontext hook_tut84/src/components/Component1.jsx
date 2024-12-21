import React, { useContext } from 'react'
import { counter_val } from '../contexts/Context'

const Component1 = () => {
    let value = useContext(counter_val)
  return (
    <div>
      <button onClick={(params) => {
        value.setCount(value.count +1)
      }
      }>The value is :{value.count} </button>
    </div>
  )
}

export default Component1
