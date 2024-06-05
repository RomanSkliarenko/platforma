import { createContext, ReactNode } from 'react'
import user from '../../user-data/user-data'

export const UserContext = createContext(user)

type UserContextProviderType = {
  children: ReactNode
}
export const UserContextProvider = ({ children }: UserContextProviderType) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
