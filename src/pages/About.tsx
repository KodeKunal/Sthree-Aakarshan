export default function About() {
  return (
    <section className="container-wide py-12">
      <h1 className="text-3xl font-semibold">Our Story</h1>
      <p className="mt-4 text-gray-700">
        Sthree Aakarshan began with a simple idea: fashion should feel as good as it looks. We partner with artisans and trusted brands to bring you pieces that are stylish, versatile, and crafted with care.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="card p-6">
          <h3 className="font-medium">Modicare</h3>
          <p className="mt-2 text-gray-600">
            Alongside our boutique collection, we also offer a curated range of Modicare wellness and personal care products.
            Browse and purchase them online using our shop link below.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-medium">Oriflame</h3>
          <p className="mt-2 text-gray-600">
            We also offer a selection of Oriflame beauty and wellness products—skincare, makeup, and personal care.
            Visit our store for recommendations and availability, or contact us for orders and details.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-medium">Tupperware</h3>
          <p className="mt-2 text-gray-600">
            Explore durable, BPA-free Tupperware storage and kitchen solutions for home and on-the-go. Ask us in-store for
            recommendations and availability.
          </p>
        </div>
      </div>
    </section>
  )
}
