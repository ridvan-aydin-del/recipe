"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealDetail = () => {
  const params = useParams();
  const [meal, setMeal] = useState<any[]>([]);
  const mealID = params.mealID;
  console.log(mealID);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals))
      .catch((error) => console.error("Error fetching recips:", error));
  }, [mealID]);

  return (
    <div className="container mx-auto px-4 py-8">
      {meal?.map((meals) => (
        <div
          key={meals.idMeal}
          className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-96 w-full object-cover md:w-96"
                src={meals.strMealThumb}
                alt={meals.strMeal}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {meals.strCategory}
              </div>
              <h2 className="block mt-1 text-3xl font-bold text-gray-900">
                {meals.strMeal}
              </h2>
              <p className="mt-4 text-gray-600">{meals.strInstructions}</p>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ingredients:
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                    const ingredient = meals[`strIngredient${i}`];
                    const measure = meals[`strMeasure${i}`];
                    return ingredient ? (
                      <li key={i} className="text-gray-600">
                        • {measure} {ingredient}
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>

              {meals.strYoutube && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Video Recipe:
                  </h3>
                  <a
                    href={meals.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-600"
                  >
                    Watch the YouTube
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealDetail;
