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
            <li>
              <span className="font-medium">Facebook:</span>{' '}
              <a
                href="#" // TODO: replace with your Facebook page URL
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Facebook link
              </a>
            </li>
            <li>
              <span className="font-medium">Instagram:</span>{' '}
              <a
                href="#" // TODO: replace with your Instagram page URL
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Instagram link
              </a>
            </li>
          </ul>
        </div>
        {/* Google Map Embed */}
        <div className="card p-6">
          <h2 className="font-medium">Find Us on Google Maps</h2>
          <div className="mt-4 relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              title="Sthree Aakarshan location on Google Maps"
              src="https://www.google.com/maps?q=Sthree%20Aakarshan%2C%20Shanubog%20Street%2C%20Tippu%20Nagar%2C%20Arsikere%2C%20Karnataka%20573103&output=embed"
              className="absolute inset-0 h-full w-full rounded-md border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
