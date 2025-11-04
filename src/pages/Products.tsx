// import ProductGrid from '../components/ProductGrid'

export default function Products() {
  return (
    <>
      <section className="container-wide py-12">
        <h1 className="text-3xl font-semibold">Our Collections</h1>
        <p className="mt-2 text-gray-700">
          Explore categories like Ethnic, Casual, and Accessories. Visit us in-store for full availability, sizes, and personalized styling.
        </p>
      </section>

      {/* Modicare Shop Section */}
      <section className="container-wide py-6">
        <div className="card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Shop Modicare Products Online</h2>
          <p className="mt-2 text-gray-700">
            You can purchase Modicare products directly through our shop link below. Use the button to open the shop in a new tab.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://shop.modicare.com/88147901/617837"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-primary"
            >
              Open Modicare Shop
            </a>
          </div>
        </div>
      </section>
      
    </>
  )
}
