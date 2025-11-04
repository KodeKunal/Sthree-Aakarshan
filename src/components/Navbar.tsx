import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-brand' : 'text-gray-700 hover:text-brand'}`

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-40">
      <nav className="container-wide flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/SA.jpg"
            alt="Sthree aakarshan logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-brand ring-offset-2 ring-offset-white shadow-sm"
          />
          <span className="text-xl font-semibold">Sthree Aakarshan</span>
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
