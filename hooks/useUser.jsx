import { createContext, useEffect, useState } from "react";
import { account } from "@/lib/appWrite";
import { ID } from "react-native-appwrite";


export const useContext = createContext()


export function userProvider({ children }) {
   
    async function login(email, password) {
         const [user, setUser] = useState(null)
         const [authChecked, setAuthchecked] = useState(false)

        try {
            await account.createEmailPasswordSession(email, password)
            const response = account.get()
            setUser(response)
            
        } catch (error) {
            throw Error(error.message)
        }

    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
            
        } catch (error) {
            throw Error(error.message)
            
        }
    }

    async function logout(email, password) {
        account.deleteSession("current")
        setUser(null)
    }

    async function getIntialUserValue(email, password) {
         try {
           const res = await account.get()
           setUser(res)
         } catch (error) {
           setUser(null)
         } finally {
           setAuthChecked(true)
         }
    } 

    useEffect(
      getIntialUserValue(),


      []
    )

    return (
    <UserContext.Provider value={{ 
      user, login, logout, register, authChecked
    }}>
      {children}
    </UserContext.Provider>
  );
}


    


}