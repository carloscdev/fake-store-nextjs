import Logo from '@assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MENU_LIST } from '@utils/constans'

export const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="py-5">
      <section className="flex items-center justify-between container">
        <Link href="/">
          <a>
            <Image
              src={Logo}
              alt="Logo E-commerce"
              height={44}
              width={134}
            />
          </a>
        </Link>
        <ul className="flex items-center gap-10">
          {MENU_LIST.map((item, index) => (
            <li
              key={index}
              className={
                "hover:text-primary font-medium " +
                (router.pathname == item.path && "text-primary")
              }
            >
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}
