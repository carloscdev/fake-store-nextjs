
import Image from 'next/image'

export const CategoryItem = ({category, setCurrentCategory, currentCategory}) => {

  const handleChangeCategory = (value) => {
    setCurrentCategory(value)
  }

  return (
    <label
      htmlFor={category.id}
      className="mb-3 last:mb-0 font-light cursor-pointer hover:text-primary flex items-center justify-between"
    >
      <div className="flex items-center gap-3 cursor-pointer">
        <Image
          src={category.image}
          alt={category.name}
          width={20}
          height={20}
          className="w-5 h-5 rounded-full"
        />
        <span
          className={(category.id === currentCategory ? 'text-primary' : 'text-gray-500')}
        >{category.name}</span>
      </div>
      <input
        type="radio"
        id={category.id}
        name={category.id}
        value={category.id}
        checked={category.id === currentCategory}
        onChange={() => handleChangeCategory(category.id)}
        className="opacity-50"
      />
    </label>
  )
}
