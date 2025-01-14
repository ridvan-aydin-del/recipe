import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2  gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Delicious Recipes</h3>
            <p className="text-gray-400">
              Add flavor to your kitchen with the most delicious recipes and
              cooking tips.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@deliciousrecipes.com</li>
              <li>Tel: +90 (555) 123 45 67</li>
              <li>Address: Istanbul, Turkey</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-center text-gray-400">
          <p>© 2025 Delicious Recipes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
