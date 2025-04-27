import React from 'react'
export const UserDataContext = React.createContext()
import { useState } from 'react'


 const UserContext = ({children}) => {
    const [user, setUser] = useState({
        name:"",
        ulbcode:"",
        position:"",
        ulbname:"",
        id:""
    })
  return (
            <div>
           
                <UserDataContext.Provider value={{user, setUser}}>
                    {children}  </UserDataContext.Provider>
            
            </div>
           
   
  )
}
export default UserContext;