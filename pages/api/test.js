import dbConnect from "../../utils/dbConnect";

import NewsDB from "../../models/NewsDB";

import { MongoClient } from "mongodb";

dbConnect();

export default function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      //   const news = NewsDB.find();
      //   console.log("Hello");
      //   console.log(news);
      res.status(200).json({ success: true, data: news });
      //   res.status(400).json({success:false});
      break;
    case "POST":
      NewsDB.create(req.body.article, (error, createdArticle) => {
        res.send(createdArticle);
      });

      //   res.status(500).json({ message: "Could create" });

      break;
    case "Delete":
      NewsDB.create(req.body.article, (error, createdArticle) => {
        res.send(createdArticle);
      });

      //   res.status(500).json({ message: "Could create" });

      break;
  }
}

// Index
// app.get('/books', (req, res) => {
// 	Book.find({}, (error, allBooks) => {
// 		res.render('index.ejs', {
// 			books: allBooks,
// 		});
// 	});
// });
