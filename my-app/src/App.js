// import React { useState } "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import data from "./utils/data";
import HomePage from "./components/Home";
// import Recipe from "./components/RecipeCard";


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("");

  const handleSearch = (searchTerm) => {
    const filteredRecipes = data.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredRecipes);
  };

  const handleReset = () => {
    setSearchResults([]);
    setCategory("");
  };

  const handleCategorySelect = (category) => {
    setCategory(category);
    const filteredByCategory = data.filter(recipe =>
      recipe.category === category
    );
    setSearchResults(filteredByCategory);
  };

  return (
    <Router>
      <HomePage/>
      <Routes>
        <Route path="/" element={<Home searchResults={searchResults} />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
