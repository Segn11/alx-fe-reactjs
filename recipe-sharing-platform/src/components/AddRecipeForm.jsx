import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation checks
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Preparation steps are required';

    setErrors(newErrors);

    // If no errors, handle the form submission (send data to HomePage)
    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        id: Date.now(), // Using current timestamp as a unique id
        title,
        ingredients: ingredients.split('\n'),
        steps: steps.split('\n'),
        image: 'https://via.placeholder.com/150', // Placeholder image
      };

      addRecipe(newRecipe); // Pass new recipe to HomePage

      // Clear form after submission
      setTitle('');
      setIngredients('');
      setSteps('');

      // Redirect back to HomePage
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold">Recipe Title</label>
          <input
            id="title"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-semibold">Ingredients</label>
          <textarea
            id="ingredients"
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-semibold">Preparation Steps</label>
          <textarea
            id="steps"
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
