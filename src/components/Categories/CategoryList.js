import { useEffect, useState, useContext } from 'react'
import { useCategory } from '@hooks/useCategory'
import { Loader, CategoryItem } from '@components'
import StoreContext from '@context/Store/StoreContext'

export const CategoryList = () => {
  const { getCategories, categories, loading } = useCategory()
  const { currentCategory, handleCurrentCategory } = useContext(StoreContext)

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <section className="bg-gray-100 p-5 rounded sticky top-5">
      <h2 className="text-lg font-medium mb-5">Categories</h2>
      {loading ? (
        <LoadingCategory />
      ) : (
        categories.map((category) => (
          <CategoryItem
            category={category}
            key={category.id}
            currentCategory={currentCategory}
            setCurrentCategory={handleCurrentCategory}
          />
        ))
      )}
    </section>
  )
}

function LoadingCategory() {
  return (
    <div className="flex flex-col gap-2">
      <Loader width="w-full" height="h-5" />
      <Loader width="w-11/12" height="h-5" />
      <Loader width="w-10/12" height="h-5" />
    </div>
  )
}
