import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand/10 to-white">
      <div className="container-wide py-10 sm:py-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Discover your style at
            <span className="block text-brand">Sthree Aakarshan</span>
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            A boutique celebrating style, craftsmanship, and comfort. Explore curated collections designed to make every day special.
          </p>
          <div className="mt-5 flex gap-3">
            <Link to="/products" className="btn-primary">Explore Collection</Link>
            <Link to="/about" className="link px-3 py-3">Our Story →</Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-brand/20 blur-2xl" />
    </section>
  )
}
