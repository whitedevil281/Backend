import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputval, setinputval] = useState("Enter here")
  let tbn = useRef()
  return (
    <><div className="flex">
        <button ref={tbn} className="btn" onMouseOver={()=>{
            tbn.current.style.backgroundColor = "green"
        }} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input type="text" value={inputval} onChange={(e) => {
          setinputval (e.target.value)
        }
        } />
    </div>

    </>
  )
}

export default App
