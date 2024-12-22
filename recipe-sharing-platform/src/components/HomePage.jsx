import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Mock data or fetch data from your JSON file
    const mockRecipes = [
      {
        id: 1,
        title: "Spaghetti Carbonara",
        summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Chicken Tikka Masala",
        summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.",
        image: "https://via.placeholder.com/150",
      },
    ];
    setRecipes(mockRecipes);
  }, []);

  const addNewRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      <Link to="/add-recipe" className="text-blue-500">Add New Recipe</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="font-semibold mt-2">{recipe.title}</h2>
            <p>{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500">View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
