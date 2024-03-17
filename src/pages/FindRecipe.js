import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function FindRecipe() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=761d00e0ac104946a5bac2bc25bf9066&number=50`
      );
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">
            Enter ingredients that you have in your fridge (comma-separated):
          </label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            value={ingredients}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <hr />
      <h2>Recipes</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-lg-4 mb-4" key={recipe.id}>
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
                <div className="card-text">
                  <p>Missing Ingredients:</p>
                  <ul>
                    {recipe.missedIngredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.name}</li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindRecipe;
