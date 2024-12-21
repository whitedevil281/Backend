import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setcount] = useState(0)
  useEffect(() => {
    alert("HELLOO WORLD")
  }, [])
  useEffect(() => {
    alert("HELLOO WORLD")
  }, [count])
  
  return (
    <>
      <h1>hello</h1>
      <button onClick={() => {
        setcount(count+1)
      }
      }>Count is {count}</button>
    </>
  )
}

export default App
