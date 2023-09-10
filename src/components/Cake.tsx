import {store} from "../redux/store"
// import {ordered,restocked} from "../redux/slices/cake/cakeSlice"
// import { ordered,restocked } from "../redux/slices/icecream/icecreamSlice"
console.log('initial state',store.getState())
const unsubscribe=store.subscribe(()=>{
    console.log('updated store',store.getState())
})
// store.dispatch(ordered())
// store.dispatch(ordered())
// store.dispatch(ordered())
// store.dispatch(restocked(3))

// store.dispatch(ordered());
// store.dispatch(ordered())
// store.dispatch(restocked(10))
unsubscribe()
const Cake=()=>{
    return (
        <div></div>
    )
}
export default Cake
