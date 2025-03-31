import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { data } from "../utils/data";
import data from "../utils/data";

function Recipe() {
  const { id } = useParams();
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const recipe = data.find((item) => item.id === id);

  const handleToggleIngredients = () => setShowIngredients(!showIngredients);
  const handleToggleInstructions = () =>
    setShowInstructions(!showInstructions);

  return (
    <div>
      <h1>Recipe Finder</h1>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <div>
        <button onClick={handleToggleIngredients}>Ingredients</button>
        {showIngredients && (
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button onClick={handleToggleInstructions}>Instructions</button>
        {showInstructions && (
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        )}
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Recipe;
