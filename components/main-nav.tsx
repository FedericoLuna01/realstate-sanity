import Link from "next/link"
import { Button } from "./ui/button"

const NAV_ITEMS = [
  {
    id: 1,
    label: 'Sobre nosotros',
    href: '#'
  },
  {
    id: 1,
    label: 'Listings',
    href: '/casas'
  },
  {
    id: 2,
    label: 'Testimoniales',
    href: '/#testimoniales'
  }
]

const MainNav = () => {
  return (
    <header
      className='fixed w-full justify-between items-center flex h-28 px-80 py-5 z-50'
    >
      <Link href='/' className="text-3xl">RS</Link>
      <nav
        className="space-x-10"
      >
        {
          NAV_ITEMS.map(({ id, label, href }) => (
            <Link
              key={id}
              className="text-xl hover:underline"
              href={href}
            >
              {label}
            </Link>
          ))
        }
        <Button
          variant='rounded'
        >
          Contacto
        </Button>
      </nav>
    </header>
  )
}

export default MainNav