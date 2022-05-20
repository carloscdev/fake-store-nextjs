import { useState } from 'react'
import Link from 'next/link'
import {
  UserIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline"

export const Header = () => {
  const [language, setLanguage] = useState('en')
  return (
    <header className="border-b border-gray-100 text-xs font-light">
      <section className="flex items-center py-3 justify-between container">
        <select className="bg-transparent opacity-70">
          <option value="en">EN-USD</option>
          <option value="es">ES-PEN</option>
        </select>
        <ul className="flex gap-3">
          <li>
            <Link href="/">
              <a className="flex items-center gap-1 hover:text-primary">
                <UserIcon className="w-5" />
                My profile
              </a>
            </Link>
          </li>
          <li>
            <ShoppingCartIcon className="w-5 hover:text-primary" />
          </li>
          <li>Items</li>
          <li>
            <SearchIcon className="w-5 hover:text-primary" />
          </li>
        </ul>
      </section>
    </header>
  )
}
