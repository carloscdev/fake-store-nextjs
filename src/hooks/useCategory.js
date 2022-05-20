import { useState } from "react"
import { getCategoriesApi } from "@requests/categories"

export function useCategory() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      setLoading(true)
      const response = await getCategoriesApi()
      await response.data.unshift({
        id: "all",
        name: "All",
        image:
          "https://picsum.photos/seed/picsum/100/100",
      })
      setCategories(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    categories,
    getCategories
  }
}
