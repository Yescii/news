import dbConnect from "../../utils/dbConnect";

import NewsDB from "../../models/NewsDB";

import { MongoClient } from "mongodb";

// dbConnect();

async function userHandler(req, res) {
  const { method } = req;

  client = await MongoClient.connect(
    "mongodb+srv://admin:admin123@cluster0.hrt4w.mongodb.net/news?retryWrites=true&w=majority"
  );
  switch (method) {
    case "GET":
      //   try {
      //     client = await MongoClient.connect(
      //       "mongodb+srv://admin:admin123@cluster0.hrt4w.mongodb.net/news?retryWrites=true&w=majority"
      //     );
      //     const news = NewsDB.find({});

      //     console.log(news);
      //   } catch {
      //     res.status(500).json({ message: "Could not create" });
      //   }

      const db = client.db();
      const news = await db.collection("news").find({}).toArray();

      //   const news = await db.collection("news").find({}).toArray();
      res.status(500).json({ data: news });

      //   res.status(400).json({success:false});
      break;
      // case "POST":
      //   NewsDB.create(req.body.article, (error, createdArticle) => {
      //     res.send(createdArticle);
      //   });

      //   //   res.status(500).json({ message: "Could create" });

      //   break;
      client.close();
  }
}
