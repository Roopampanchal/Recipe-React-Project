import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onSearch, onReset, onCategorySelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm("");
    onReset();
  };

  const handleCategoryChange = (event) => {
    onCategorySelect(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Recipe Finder
      </Link>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="form-control"
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        
        Search
      </button>
      <button className="btn btn-secondary" onClick={handleReset}>
        Reset
      </button>
      <div className="form-check">
        <input
          type="radio"
          name="category"
          value="Italian"
          onChange={handleCategoryChange}
          id="italian"
        />
        <label htmlFor="italian">Italian</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="category"
          value="American"
          onChange={handleCategoryChange}
          id="american"
        />
        <label htmlFor="american">American</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="category"
          value="Thai"
          onChange={handleCategoryChange}
          id="thai"
        />
        <label htmlFor="thai">Thai</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="category"
          value="Japanese"
          onChange={handleCategoryChange}
          id="japanese"
        />
        <label htmlFor="japanese">Japanese</label>
      </div>
    </nav>
  );
}

export default Header;
