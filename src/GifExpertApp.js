import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <div className="container">
      <h2 className="title-principal">GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      {categories.map((category) =>(
        <GifGrid 
          key={category} 
          category={category}
        />
      ))}
    </div>
  );
};

export default GifExpertApp;
