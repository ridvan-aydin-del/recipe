import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center h-16">
          <div className="flex-grow text-center">
            <Link href="/" className="text-orange-500 text-xl font-bold">
              Delicious Recipes
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
