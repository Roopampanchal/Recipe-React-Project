import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ item }) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.mainCategory}</p>
          <Link to={`/recipe/${item.id}`} className="btn btn-primary">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
