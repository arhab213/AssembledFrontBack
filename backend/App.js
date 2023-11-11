import express from "express";
import http from "http";
import bodyParser from "body-parser";
import UserRoute from "./UsersRouters/userRoutes.js";
import booksRoute from "./BooksRouters/BookRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import books from "./books.js";
import productsRoute from "./productsRoutes/productsRoute.js";

const PORT = 3110;
const app = express();
http.createServer(app);
app.use(bodyParser.json());
app.use(cors({ origine: "*" }));
mongoose.connect("mongodb://127.0.0.1:27017/booksStore").then(() => {
  console.log("data base connected");
});
app.use("/users/", UserRoute);
app.use("/books/", booksRoute);
app.use("/products/", productsRoute);
app.listen(PORT, () => {
  console.log(`you are in the port number ${PORT}`);
});
