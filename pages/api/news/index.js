// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { connectToDatabase } = require("../../lib/mongodb");

const mongoose = require("mongoose");

// Database Configuration
const DATABASE_URL =
  "mongodb+srv://sei:<password>@sei-w0kys.azure.mongodb.net/tweeter?retryWrites=true";
const db = mongoose.connection;

// Database Connection
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Connection Error/Success - optional but can be really helpful
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

export default function userHandler(req, res) {
  const {
    query: { id, news },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from news database
      res.status(200).json({ id, news: `Post ${Seeded[id]}` });

      break;
    case "POST":
      // Update or create data in news database
      const news = req.body.news;
      // const x = JSON.parse(news);
      // console.log("xxxxxxxxxxxxxxxxx");
      // console.log(news);
      // console.log("zzzzzzzzzzzzzzzzzzzzzzzzz");
      // Seeded.push(news);
      // console.log(news);
      // res.status(200).json({ id, news: `POST ${Seeded}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "Delete"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
