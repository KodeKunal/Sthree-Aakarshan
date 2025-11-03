import ProductGrid from '../components/ProductGrid'

export default function Products() {
  return (
    <>
      <section className="container-wide py-12">
        <h1 className="text-3xl font-semibold">Our Collections</h1>
        <p className="mt-2 text-gray-700">
          Explore categories like Ethnic, Casual, and Accessories. Visit us in-store for full availability, sizes, and personalized styling.
        </p>
      </section>
      <ProductGrid />
    </>
  )
}
