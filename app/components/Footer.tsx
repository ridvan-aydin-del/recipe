import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Delicious Recipes</h3>
            <p className="text-gray-400">
              Add flavor to your kitchen with the most delicious recipes and
              cooking tips.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/all-recipes"
                  className="text-gray-400 hover:text-white"
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-400 hover:text-white"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/popular-recipes"
                  className="text-gray-400 hover:text-white"
                >
                  Popular Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@deliciousrecipes.com</li>
              <li>Tel: +90 (555) 123 45 67</li>
              <li>Address: Istanbul, Turkey</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center text-gray-400">
          <p>© 2025 Delicious Recipes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
