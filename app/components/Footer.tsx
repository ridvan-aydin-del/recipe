export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Lezzetli Tarifler</h3>
            <p className="text-gray-300">
              En lezzetli yemek tarifleri ve püf noktaları ile mutfağınıza
              lezzet katın.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a href="/tarifler" className="text-gray-300 hover:text-white">
                  Tüm Tarifler
                </a>
              </li>
              <li>
                <a
                  href="/kategoriler"
                  className="text-gray-300 hover:text-white"
                >
                  Kategoriler
                </a>
              </li>
              <li>
                <a href="/populer" className="text-gray-300 hover:text-white">
                  Popüler Tarifler
                </a>
              </li>
              <li>
                <a href="/iletisim" className="text-gray-300 hover:text-white">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@lezzetlitarifler.com</li>
              <li>Tel: +90 (555) 123 45 67</li>
              <li>Adres: İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Lezzetli Tarifler. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
