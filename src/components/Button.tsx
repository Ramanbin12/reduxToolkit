import React from 'react'
import {useAppSelector,useAppDispatch} from '../hooks'
import {increment,decrement} from "../redux/slices/counter"
const Button = () => {
  const count=useAppSelector((state)=>state.counter);
  const dispatch=useAppDispatch()
  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>increment</button>

    </div>
  )
}

export default Button
