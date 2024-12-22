import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json'; // Importing mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Getting the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe from the mock data based on the ID
    const recipeFound = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(recipeFound);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <img className="w-full h-64 object-cover rounded-lg mb-4" src={recipe.image} alt={recipe.title} />
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-5 mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-4">Cooking Instructions</h2>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700 mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
