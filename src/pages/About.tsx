export default function About() {
  return (
    <section className="container-wide py-12">
      <h1 className="text-3xl font-semibold">Our Story</h1>
      <p className="mt-4 text-gray-700">
        Sthree Aakarshan began with a simple idea: fashion should feel as good as it looks. We partner with artisans and trusted brands to bring you pieces that are stylish, versatile, and crafted with care.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="card p-6">
          <h3 className="font-medium">Craftsmanship</h3>
          <p className="mt-2 text-gray-600">We curate pieces with attention to detail and quality fabrics.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-medium">Comfort</h3>
          <p className="mt-2 text-gray-600">Designed to move with you—from weekday errands to weekend events.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-medium">Community</h3>
          <p className="mt-2 text-gray-600">A friendly boutique experience with genuine styling support.</p>
        </div>
      </div>
    </section>
  )
}
