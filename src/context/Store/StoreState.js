import { useState, useReducer, useEffect } from 'react'
import StoreReducer from './StoreReducer'
import StoreContext from './StoreContext'
import { useRouter } from 'next/router'
import { useProducts } from '@hooks/useProducts'
// import { getProductsApi } from "@requests/products"
import { GET_ALL_PRODUCTS, GET_FORMAT_PRODUCTS } from '@utils/constans'

const StoreState = ({children}) => {
  const { pathname } = useRouter()
  const { getProducts, loading, error, getProductsByCategory } = useProducts()
  const [showItems, setShowItems] = useState(15)
  const [sortBy, setSortBy] = useState('')
  const [currentCategory, setCurrentCategory] = useState('all')
  const [loadData, setLoadData] = useState(false)
  const initialState = {
    productsInitial: [],
    products: []
  }

  const [state, dispatch] = useReducer(StoreReducer, initialState)

  const getAllProductsStore = async () => {
    setLoadData(false)
    let productList = []
    if (currentCategory == 'all') {
      productList =  await getProducts({ offset: 0, limit: showItems })
    } else {
      productList = await getProductsByCategory(currentCategory, { offset: 0, limit: showItems })
    }
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: productList
    })
    setLoadData(true)
  }


  const handleShowItems = async (number) => {
    setShowItems(number)
  }

  useEffect(() => {
    if (loadData) getAllProductsStore()
  }, [showItems, currentCategory])

  const handleSortBy = (type) => {
    setSortBy(type)
  }

  const sortByType = () => {
    const tempProducts = [...state.productsInitial]
    let payload = []
    if (sortBy === "name") {
      payload = [...tempProducts.sort((a, b) => a.title.localeCompare(b.title))]
    } else if (sortBy === "price") {
      payload = [...tempProducts.sort((a, b) => a.price - b.price)]
    } else {
      payload = [...state.productsInitial]
    }
    dispatch({
      type: GET_FORMAT_PRODUCTS,
      payload,
    })
  }

  const handleCurrentCategory = (value) => {
    setCurrentCategory(value)
  }

  useEffect(() => {
    if (loadData) sortByType()
  }, [sortBy, state.productsInitial])


  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
  }, [pathname]);

  return (
    <StoreContext.Provider
      value={{
        products: state.products,
        getAllProductsStore,
        handleShowItems,
        showItems,
        handleSortBy,
        sortBy,
        handleCurrentCategory,
        currentCategory,
        loading,
        error
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreState