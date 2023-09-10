export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch

export type userStateType={
    loading: boolean
    users:Record<string,string>
    error:string;
    
}
export type userActionType={
    payload:Record<string,string>
}
export type initialStateType={
    numOfCakes:number
}

export type initialIcStateType={
    numOfIcecreams:number
}

export type userType={
    id:number,
    title:string
}
export type initialUserType={
    loading:boolean,
    users:userType[]
    error:string
}