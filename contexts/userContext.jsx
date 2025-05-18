import { createContext, useEffect, useState } from 'react'
import { ID } from 'react-native-appwrite'
import { account } from '../lib/appWrite'

// ✅ Create context
export const UseContext = createContext()

// ✅ Accept children prop
export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  // ✅ Login function
  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const response = await account.get()
      setUser(response)
    } catch (error) {
      throw Error(error.message)
    }
  }

  // ✅ Logout function
  async function logout() {
    await account.deleteSession('current')
    setUser(null)
  }

  // ✅ Register function
  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password)
      await login(email, password)
    } catch (error) {
      throw Error(error.message)
    }
  }

  // ✅ Check if a user is already logged in
  async function getInitialUserValue() {
    try {
      const res = await account.get()
      setUser(res)
    } catch (error) {
      setUser(null)
    } finally {
      setAuthChecked(true)
    }
  }

  useEffect(() => {
    getInitialUserValue()
  }, [])

  // ✅ Return context provider inside the component function
  return (
    <UseContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        authChecked,
      }}
    >
      {children}
    </UseContext.Provider>
  )
}
