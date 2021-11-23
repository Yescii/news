// import { MongoClient } from "mongodb";

// const MONGODB_URI = process.env.MONGODB_URI;
// const MONGODB_DB = process.env.DB_NAME;

// // check the MongoDB URI
// if (!MONGODB_URI) {
//   throw new Error("Define the MONGODB_URI environmental variable");
// }

// // check the MongoDB DB
// if (!MONGODB_DB) {
//   throw new Error("Define the MONGODB_DB environmental variable");
// }

// let cached = global.mongo;
// if (!cached) cached = global.mongo = {};

// export async function connectToDatabase() {
//   if (cached.conn) return cached.conn;
//   if (!cached.promise) {
//     const conn = {};
//     const opts = {
//       userNewUrlParser: true,
//       useUnifiedTopology: true,
//     };

//     cached.promise = MongoClient.connect(MONGODB_URI, opts)
//       .then((client) => {
//         conn.client = client;
//         return client.db(MONGODB_DB);
//       })
//       .then((db) => {
//         conn.db = db;
//         cached.conn = conn;
//       });
//   }
//   await cached.promise;
//   return cached.conn;
// }

// set the connection options
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   // Connect to cluster
//   let client = new MongoClient(MONGODB_URI, opts);
//   await client.connect();
//   let db = client.db(MONGODB_DB);

//   // set cache
//   cachedClient = client;
//   cachedDb = db;
//   clientPromise = client.connect();
//   // return {
//   //   client: cachedClient,
//   //   db: cachedDb,
//   // };
// }
// export default clientPromise;

//========================================================
// import { MongoClient } from "mongodb";

// const MONGODB_URI = process.env.MONGODB_URI;
// const MONGODB_DB = process.env.DB_NAME;

// // check the MongoDB URI
// if (!MONGODB_URI) {
//   throw new Error("Define the MONGODB_URI environmental variable");
// }

// // check the MongoDB DB
// if (!MONGODB_DB) {
//   throw new Error("Define the MONGODB_DB environmental variable");
// }

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//   // check the cached.
//   if (cachedClient && cachedDb) {
//     // load from cache
//     return {
//       client: cachedClient,
//       db: cachedDb,
//     };
//   }

//   // set the connection options
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   // Connect to cluster
//   let client = new MongoClient(MONGODB_URI, opts);
//   await client.connect();
//   let db = client.db(MONGODB_DB);

//   // set cache
//   cachedClient = client;
//   cachedDb = db;
//   clientPromise = client.connect();
//   // return {
//   //   client: cachedClient,
//   //   db: cachedDb,
//   // };
// }
// export default clientPromise;
// const MONGODB_DB = process.env.DB_NAME;
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;

// const options = {
//   useUnifiedTopolgy: true,
//   useNewUrlParser: true,
// };
// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }
// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
// client = new MongoClient(uri, options);
// clientPromise = client.connect();
// // }
// export default clientPromise;

//=========================================
// // check the MongoDB URI
// if (!MONGODB_URI) {
//   throw new Error("Define the MONGODB_URI environmental variable");
// }

// // check the MongoDB DB
// if (!MONGODB_DB) {
//   throw new Error("Define the MONGODB_DB environmental variable");
// }

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//   // check the cached.
//   if (cachedClient && cachedDb) {
//     // load from cache
//     return {
//       client: cachedClient,
//       db: cachedDb,
//     };
//   }

//   // set the connection options
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   // Connect to cluster
//   let client = new MongoClient(MONGODB_URI, opts);
//   await client.connect();
//   let db = client.db(MONGODB_DB);

//   // set cache
//   cachedClient = client;
//   cachedDb = db;

//   return {
//     client: cachedClient,
//     db: cachedDb,
//   };
// }

// import {Mongo}
