import { useState } from "react"
import { getProductsApi, getProductApi, getProductsByCategoryApi } from "@requests/products"

export function useProducts() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getProducts = async ({ offset, limit }) => {
    try {
      setLoading(true)
      const response = await getProductsApi({ offset, limit })
      return response.data
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const getProduct = async(id) => {
    try {
      setLoading(true)
      const response = await getProductApi(id)
      return response.data
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const getProductsByCategory = async(idCategory, { offset, limit }) => {
    try {
      setLoading(true)
      const response = await getProductsByCategoryApi(idCategory, { offset, limit })
      return response
    } catch (error) {
      console.log(error);
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    getProducts,
    getProduct,
    getProductsByCategory
  }
}
