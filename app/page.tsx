"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [tarifler, setTarifler] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setTarifler(data.categories))
      .catch((error) => console.error("Error fetching tarifler:", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tarifler.map((category) => (
            <div
              key={category.idCategory}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
            >
              <div className="relative h-64">
                <img
                  className="w-full h-full object-cover"
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                  {category.strCategory}
                </h3>
                <Link
                  href={`/category/${category.strCategory}`}
                  className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                >
                  See Category
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
