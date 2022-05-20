import { createContext, useContext, useEffect, useState } from 'react'

export const Store = createContext()

export const useStoreContext = () => useContext(Store)

const StoreProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleIsLoading = () => {
    setIsLoading(!isLoading)
  }
  useEffect(() => {
    setIsLoading(false)
    console.log('My Context is work');
  }, [])
  return (
    <Store.Provider
      value={{
        isLoading,
        handleIsLoading
      }}
    >
      {children}
    </Store.Provider>
  )
}

export default StoreProvider