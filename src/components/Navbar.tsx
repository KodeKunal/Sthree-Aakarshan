import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-brand' : 'text-gray-700 hover:text-brand'}`

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-40">
      <nav className="container-wide flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-brand/10 ring-1 ring-brand" />
          <span className="text-lg font-semibold">Sthree Aakarshan</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
