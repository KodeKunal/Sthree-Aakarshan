export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-wide py-8 text-sm text-gray-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Sthree Aakarshan. All rights reserved.
        </p>
        <p>
          <span className="font-medium">Hours:</span> Mon–Sat 10:00–19:00 · Sun 11:00–17:00
        </p>
      </div>
    </footer>
  )
}
