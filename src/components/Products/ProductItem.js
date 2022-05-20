import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { pricePeru } from '@utils/formatPrice'
import NotFound from '@assets/images/not-found.jpg'
import {
  EyeIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline"

export const ProductItem = ({product}) => {
  const [currentImage, setCurrentImage] = useState(NotFound)

  useEffect(() => {
    setCurrentImage(product?.images[0] || NotFound)
  }, [product])

  return (
    <section className="rounded overflow-hidden shadow text-center relative group">
      {product?.price < 500 && (
        <small className="absolute h-5 w-12 top-0 left-0 bg-secondary text-white z-10">
          HOT
        </small>
      )}
      <div className="w-full relative h-40">
        <div className="absolute w-[90%] m-auto h-[90%] inset-0 bg-white bg-opacity-70 rounded z-10 items-center justify-center gap-1 hidden group-hover:flex">
          <Link href="/">
            <a  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow">
              <EyeIcon className="w-5 text-primary" />
            </a>
          </Link>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow">
            <ShoppingCartIcon className="w-5 text-primary" />
          </div>
        </div>
        <Image
          src={currentImage}
          blurDataURL={NotFound}
          layout="fill"
          objectFit="cover"
          onError={() => setCurrentImage(NotFound)}
        />
      </div>
      <div className="p-3 flex flex-col justify-between h-28">
        <div>
          <h3 className="font-semibold">{product?.title}</h3>
          <small className="opacity-50 text-xs font-light">
            -{product?.category?.name}-
          </small>
        </div>
        <span className="text-primary">{pricePeru.format(product?.price)}</span>
      </div>
    </section>
  )
}
