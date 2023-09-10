import React,{useState} from 'react'
import { useAppSelector,useAppDispatch } from '../../../hooks'
import { ordered,restocked } from './icecreamSlice'
const IcecreamView = () => {
    const numofic=useAppSelector((state)=>state.icecream.numOfIcecreams)
    const dispatch=useAppDispatch()
    const [Value,setValue]=useState(1)
  return (
    <div>
    <h2>Number of ice creams- {numofic}</h2>
    <button onClick={()=>dispatch(ordered())}>orders of ice creams</button>
    <input type="number" value={Value} onChange={(e)=>setValue(parseInt(e.target.value))} />
    <button onClick={()=>dispatch(restocked(Value))}>Restock ice cream</button>
  </div>
     
  )
}

export default IcecreamView
