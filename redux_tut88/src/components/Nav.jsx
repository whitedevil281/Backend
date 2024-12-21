import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, increasebynum ,reset} from '../features/counter/counterslice'

const Nav = () => {
    const count = useSelector((state) => state.count.value)
    const dispatch = useDispatch()

    function handleIn() {
        dispatch(increase())
    }
    function handleInByNum() {
        dispatch(increasebynum(10))
    }
    function handlereset() {
        dispatch(reset())
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => {
              handleIn()
            }
            }>Click this button to increase by 1</button>
            <button onClick={() => {
              handleInByNum()
            }
            }>Click this button to increase by 10</button>
            <button onClick={() => {
              handlereset()
            }
            }>Reset</button>
        </div>
    )
}

export default Nav
