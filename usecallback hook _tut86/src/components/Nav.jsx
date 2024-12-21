import React from 'react'
import { memo } from 'react';

const Nav = ({name,getname}) => {
    console.log("nav rerendered");
    
  return (
    <div>
      I am {name}
      <button onClick={() => {
        getname()
      }
      }> { getname()}</button>
    </div>
  )
}

export default memo(Nav)
