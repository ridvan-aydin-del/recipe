"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const CategoryPage = () => {
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const [choosefood, setChooseFood] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorySlug}`
    )
      .then((response) => response.json())
      .then((data) => setChooseFood(data.meals))
      .catch((error) => console.error("Error fetching tarifler:", error));
  }, [categorySlug]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center capitalize">
        {categorySlug} Recipes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {choosefood?.map((choosed) => (
          <div
            key={choosed.idMeal}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
          >
            <div className="relative h-64">
              <img
                className="w-full h-full object-cover"
                src={choosed.strMealThumb}
                alt={choosed.strMeal}
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                {choosed.strMeal}
              </h3>
              <Link
                href={`/meal/${choosed.idMeal.toString()}`}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
              >
                See Racipes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
