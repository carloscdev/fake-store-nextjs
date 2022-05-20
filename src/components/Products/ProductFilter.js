import { useContext } from 'react'
import StoreContext from '@context/Store/StoreContext'

export const ProductFilter = () => {
  const { products, showItems, handleShowItems, sortBy, handleSortBy } = useContext(StoreContext)

  return (
    <div className="bg-gray-100 p-3 rounded flex gap-5 items-center font-light text-xs">
      <p>{products?.length} Items</p>
      <label htmlFor="sort">
        <span className="pr-1">Sort By</span>
        <select
          id="sort"
          name="sort"
          className="font-light bg-transparent rounded border border-gray-300"
          value={sortBy}
          onChange={(e) => handleSortBy(e.target.value)}
        >
          <option value="">---</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
      <label htmlFor="items">
        <span className="pr-1">Show</span>
        <select
          id="items"
          name="items"
          onChange={(e) => handleShowItems(e.target.value)}
          value={showItems}
          className="font-light bg-transparent rounded border border-gray-300"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
        </select>
      </label>
    </div>
  )
}
