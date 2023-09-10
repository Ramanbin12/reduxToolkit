import React from 'react'
import { useAppSelector,useAppDispatch} from '../../../hooks'
import { ordered,restocked } from './cakeSlice'

const CakeView = () => {
   const numofcakes= useAppSelector((state)=>state.cake.numOfCakes)
   const dispatch=useAppDispatch()
  return (
    <div>
      <h2>Number of cakes- {numofcakes}</h2>
      <button onClick={()=>dispatch(ordered())}>orders of cakes</button>
      <button onClick={()=>dispatch(restocked(10))}>Restock cakes</button>
    </div>
  )
}

export default CakeView
