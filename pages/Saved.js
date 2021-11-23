import React from "react";
import { useState } from "react";

const Saved = () => {
  const [articles, setArticles] = useState();

  const fetchArticles = async () => {
    const response = await fetch("/api/news");
    const data = await response.json();
    // console.log(data);
  };

  return (
    <div>
      <button onClick={fetchArticles}>GET MONGOdb</button>
    </div>
  );
};

export default Saved;
