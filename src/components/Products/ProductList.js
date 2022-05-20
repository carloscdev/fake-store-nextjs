import { useContext } from 'react'
import StoreContext from '@context/Store/StoreContext'
import { Loader, ProductItem, ProductBanner, ProductFilter } from "@components"

export const ProductList = () => {
  const { products, loading } = useContext(StoreContext)



  return (
    <section className="grid gap-5">
      <ProductBanner />
      <ProductFilter />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,_1fr))] gap-5">
        {loading ? (
          <>
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
          </>
        ) : (
          products?.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))
        )}
      </div>
    </section>
  )
}

function LoadingProduct() {
  return (
    <section className="rounded overflow-hidden shadow text-center relative">
      <Loader width="w-full" rounded="rounded-0" height="h-40" />
      <div className="p-3 flex flex-col justify-between h-28">
        <Loader width="w-11/12 mx-auto" height="h-5" />
        <Loader width="w-8/12 mx-auto" height="h-5" />
      </div>
    </section>
  )
}