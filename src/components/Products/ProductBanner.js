import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useProducts } from '@hooks/useProducts'
import { Loader } from '@components'
import NotFound from '@assets/images/not-found.jpg'

export const ProductBanner = () => {
  const [product, setProduct] = useState(null)
  const { getProduct } = useProducts()
  

  const getRandomNumber = useMemo(() => Math.floor(Math.random() * 200), [])




  useEffect(() => {
    (async () => {
      const response = await getProduct(getRandomNumber)
      await setProduct(response)
    })()
  }, [])

  return (
    <>
      {!product ? (<Loader width="w-full" height="h-44" />) : (
      <section className="shadow bg-primary text-white rounded p-10 grid md:grid-cols-[1fr,0.5fr] gap-5 items-center">
        <main>
          <h2 className="text-3xl font-semibold mb-3">{product?.title}</h2>
          <p className="mb-5 text-sm">{product?.description}</p>
          <Link href="/">
            <a className="border-b-2 border-white">Shop now</a>
          </Link>
        </main>
        <div className="relative w-full min-h-full h-40 rounded overflow-hidden">
          <Image
            src={product?.images[0] || NotFound}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
      )}
    </>
  )
}
