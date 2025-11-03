import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container-wide py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold">Welcome to Sthree Aakarshan</h2>
            <p className="mt-2 text-gray-600">
              We’re a neighborhood boutique focused on thoughtful design, quality fabrics, and comfortable fits. From everyday essentials to festive wear, our collection is curated to celebrate your unique style.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-medium">Visit Us</h3>
            <p className="mt-2 text-gray-600">Sthree Aakarshan, Shanubog Street, Tippu Nagar, Arsikere, Karnataka 573103</p>
            <p className="text-gray-600">Call: +91-7411131849</p>
            <p className="text-gray-600">Mon–Sat 10:00–19:00 · Sun 11:00–17:00</p>
          </div>
        </div>
      </section>
      <ProductGrid />
    </>
  )
}
