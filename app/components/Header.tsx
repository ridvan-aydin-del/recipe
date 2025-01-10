import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-600">
            Lezzetli Tarifler
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/tarifler"
              className="text-gray-800 font-medium hover:text-orange-600 transition-colors"
            >
              Tüm Tarifler
            </Link>
            <Link
              href="/kategoriler"
              className="text-gray-800 font-medium hover:text-orange-600 transition-colors"
            >
              Kategoriler
            </Link>
            <Link
              href="/populer"
              className="text-gray-800 font-medium hover:text-orange-600 transition-colors"
            >
              Popüler Tarifler
            </Link>
            <Link
              href="/hakkimizda"
              className="text-gray-800 font-medium hover:text-orange-600 transition-colors"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
