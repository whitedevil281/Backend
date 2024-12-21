import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setnum] = useState(0)

  return (
    <>
      <h1>The count is {num}</h1>
      <button onClick={() => {
        setnum(num+1)
      }
      }>Update</button>
    </>
  )
}

export default App
