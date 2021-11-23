import { useState } from "react";
import Show from "./Show";
import Saved from "./Saved";

export default function Index({ news }) {
  // console.log(isConnected);
  // const [article, setArticle] = useState();

  // const addNews = async () => {
  //   const response = await fetch("/api/news", {
  //     method: "POST",
  //     body: JSON.stringify({ news }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   // console.log("Articles---------------------------090390940940049");
  //   // console.log("Articles------java", "\n", news);
  //   const data = await response.json();
  //   // console.log(data);
  // };

  const articles = news.map((article, idx) => {
    // articles.comments = ["hello", "Comment 2"];
    return (
      <Show
        key={idx}
        title={article.title}
        content={article.content}
        article={article}
        url={article.url}
        urlToImage={article.urlToImage}
        description={article.description}
      />
    );
  });

  return (
    <div className="index">
      <h1>All News</h1>
      {articles}
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const { client } = await connectToDatabase();

//   const isConnected = await client.isConnected();

//   return {
//     props: { isConnected },
//   };
// };

// export const getServerSideProps =
// Index.getInitialProps = async () => {
//   const response = await fetch("https://localhost:3000/api/test");
//   const { data } = await res.json();
//   console.log("opopopopommm###################zzzzxxx");
//   console.log(data);
//   return {
//     props: { news: data },
//   };
// };

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=Everything&from=2021-11-18&sortBy=popularity&apiKey=940f8d35a95140bcb61874c0005fd78e"
  );

  const data = await res.json();

  const articles = data.articles;
  console.log(articles);
  console.log(
    "------------------------------=========================----000000"
  );
  return {
    props: { news: articles },
  };
};

// export const getServerSideProps = async (context) => {
//   // const res = await fetch(
//   //   "https://newsapi.org/v2/everything?q=Apple&from=2021-11-18&sortBy=popularity&apiKey=940f8d35a95140bcb61874c0005fd78e"
//   // );

//   const client = await clientPromise;
//   const db = client.db("news");

//   const news = await db.collection("news").find({}).toArray();

//   // const isConnected = await client.isConnected();
//   return {
//     props: { news },
//   };

// const data = await res.json();

// const articles = data.articles;
// console.log(articles);
// console.log(
//   "------------------------------=========================----000000"
// );
// return {
//   props: { news: articles },
// };
// };
