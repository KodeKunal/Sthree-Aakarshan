export default function Contact() {
  return (
    <section className="container-wide py-12">
      <h1 className="text-3xl font-semibold">Contact & Visit</h1>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-medium">Store Details</h2>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li><span className="font-medium">Address:</span> Sthree Aakarshan, Shanubog Street, Tippu Nagar, Arsikere, Karnataka 573103</li>
            <li><span className="font-medium">Phone:</span> +91-7411131849</li>
            <li><span className="font-medium">Email:</span> hskiranask@gmail.com</li>
            <li><span className="font-medium">Hours:</span> Mon–Sat 10:00–19:00 · Sun 11:00–17:00</li>
          </ul>
        </div>
        <form className="card p-6">
          <h2 className="font-medium">Send a Message</h2>
          <p className="mt-1 text-gray-600 text-sm">This is a demo form; replace with your preferred form service.</p>
          <div className="mt-4 grid gap-3">
            <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="Your name" />
            <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="Email" type="email" />
            <textarea className="rounded-md border border-gray-300 px-3 py-2" placeholder="Message" rows={4} />
            <button type="button" className="btn-primary w-fit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}
