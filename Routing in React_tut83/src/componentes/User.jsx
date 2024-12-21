import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    let params = useParams()
  return (
    <div>
      Hello i am {params.id}
    </div>
  )
}

export default User
