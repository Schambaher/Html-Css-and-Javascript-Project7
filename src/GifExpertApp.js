import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  //const handleAdd = () => {
  //setCategories(["Naruto", ...categories]);
  //setCategories((categories) => ["Naruto", ...categories]);
  //};

  return (
    <div className="container">
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
