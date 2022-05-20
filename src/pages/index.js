import { useEffect, useContext } from 'react'
import { PublicLayout } from '@layout/'
import { TitleBar, ProductList, CategoryList } from '@components'
import StoreContext from '@context/Store/StoreContext'

export default function Home() {
  const { getAllProductsStore } = useContext(StoreContext)

  useEffect(() => {
    getAllProductsStore()
  }, [])

  return (
    <PublicLayout>
      <TitleBar items={["Home", "Hot Deal", "Nike Airmax"]} />
      <main className="py-10">
        <div className="grid grid-cols-[0.3fr,1fr] container gap-5">
          <div>
            <CategoryList />
          </div>
          <div>
            <ProductList />
          </div>
        </div>
      </main>
    </PublicLayout>
  )
}
