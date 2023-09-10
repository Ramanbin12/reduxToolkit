import React,{useEffect} from 'react'
import { useAppDispatch,useAppSelector } from '../hooks'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const dispatch=useAppDispatch()
  const user=useAppSelector(state=>state.user)
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <div>
      <h2>List of title</h2>
      {user.loading && <div>Loading...</div> }
      { !user.loading && user.error? <div>Error:{user.error}</div>:null }
      {!user.loading && user.users.length? (
        <ul>
          
          {user.users.slice(0,5).map((u:Record<string,string>)=>(
           <li key={u.id}>{u.title}</li> 
          ))}
        </ul>
      ):null}
    </div>
  )
}

export default UserView

