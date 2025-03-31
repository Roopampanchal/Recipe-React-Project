import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RecipeCard from "./RecipeCard";
// import { data } from "../utils/data";
import { Link } from "react-router-dom";
import {Container, Row, Col, Form } from 'react-bootstrap';
import data from "../utils/data";

function HomePage(){
  const [searchTerm,setSearchTerm] = useState("")

  const handleSearch = (ev)=>{
    console.log(ev.target.value)
  }

<Container>
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
      <button className="btn btn-primary" >
        
        Search
      </button>
      <button className="btn btn-secondary">
        Reset
      </button>
      <div className="form-check">
        <input
          type="radio"
          name="category"
          value="Italian"
          // onChange={handleCategoryChange}
          id="italian"
        />
        <label htmlFor="italian">Italian</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="category"
          value="American"
          // onChange={handleCategoryChange}
          id="american"
        />
        <label htmlFor="american">American</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="category"
          value="Thai"
          // onChange={handleCategoryChange}
          id="thai"
        />
        <label htmlFor="thai">Thai</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="category"
          value="Japanese"
          // onChange={handleCategoryChange}
          id="japanese"
        />
        <label htmlFor="japanese">Japanese</label>
      </div>
    </nav>
</Container>

}

export default HomePage;
