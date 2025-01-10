import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <Link href="/" className="text-orange-500 text-xl font-bold">
            Delicious Recipes
          </Link>

          <div className="flex gap-6">
            <Link href="/all-recipes" className="hover:text-orange-500">
              All Recipes
            </Link>
            <Link href="/categories" className="hover:text-orange-500">
              Categories
            </Link>
            <Link href="/popular-recipes" className="hover:text-orange-500">
              Popular Recipes
            </Link>
            <Link href="/about" className="hover:text-orange-500">
              About Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
