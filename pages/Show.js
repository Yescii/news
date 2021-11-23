import React from "react";
import Link from "next/link";

const Show = (props) => {
  const addArticle = async () => {
    console.log(props.article);
    const article = props.article;
    const response = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({ article }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();
    // console.log(data);
  };

  const printArticle = async () => {
    // const article = props.article;
    const response = await fetch("/api/news");
    const data = await response.json();
    console.log(response.data);
  };

  return (
    <div className="show">
      <img className="s-img" src={props.urlToImage} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.url}>{props.url}</a>
      {/* <h1>{props.description}</h1> */}
      <button onClick={addArticle}>ADD</button>
    </div>
  );
};

export default Show;
