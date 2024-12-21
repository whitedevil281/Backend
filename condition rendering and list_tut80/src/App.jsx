import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [click, setclick] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "hello",
      des:"dello"
    },
    {
      title: "helloo",
      des:"dello"
    },
    {
      title: "hellooo",
      des:"dello"
    },
    {
      title: "helloooo",
      des:"dello"
    },
    {
      title: "hellooooo",
      des:"dello"
    }
  ])
  
  const Todo = ({todo}) => {
    return(<>
    <div>title : {todo.title} </div>
    <div>des : {todo.des} </div>
    </>)
  }
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
        {/* {click?<button>Hello i am button</button>:"not clicked"} */}
        {todos.map(item=> {
          return <Todo key={item.title} todo = {item}/>
        }
        )}
      <div className="card">
        <button onClick={() => {
          setclick(!click)
          setCount(count+1)
        }
        }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
