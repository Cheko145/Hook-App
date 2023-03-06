import { useState } from "react"
import { UserContext } from "./UserContext"
// const user={
// id:123,
// name:'Juan Pacheco',
// email:'jl.quinonez20@info.uas.edu.mx'


// }
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();




  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}


