type Product = {
  id: number
  name: string
  price?: string
  category: string
}

const sample: Product[] = [
  { id: 1, name: 'Handcrafted Saree', price: '₹2,499', category: 'Ethnic' },
  { id: 2, name: 'Comfort Knit Top', price: '₹899', category: 'Casual' },
  { id: 3, name: 'Elegant Kurti', price: '₹1,499', category: 'Ethnic' },
  { id: 4, name: 'Classic Denim', price: '₹1,199', category: 'Casual' },
  { id: 5, name: 'Festive Dupatta', price: '₹799', category: 'Accessories' },
  { id: 6, name: 'Chic Tote Bag', price: '₹1,299', category: 'Accessories' },
]

export default function ProductGrid() {
  return (
    <section className="container-wide py-12">
      <h2 className="text-2xl font-semibold">Featured Products</h2>
      <p className="mt-1 text-gray-600">A glimpse of what you’ll find in-store.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sample.map((p) => (
          <article key={p.id} className="card p-4">
            <div className="h-40 w-full rounded-md bg-gradient-to-br from-gray-100 to-gray-200" />
            <h3 className="mt-4 font-medium">{p.name}</h3>
            <p className="text-sm text-gray-600">{p.category}</p>
            {p.price && <p className="mt-1 font-semibold">{p.price}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
