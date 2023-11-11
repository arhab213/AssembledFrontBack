import express from "express";
import {
  getDet,
  getDetAll,
  AddElem,
  Edit,
  Delete,
  getAllBooks,
} from "./BookControllers.js";

const booksRoute = express.Router();
booksRoute.get("/getAll", getAllBooks);
booksRoute.get("/details/:id", getDet);
booksRoute.get("/detailsAll/:id", getDetAll);
booksRoute.post("/add", AddElem);
booksRoute.post("/edit/:Id", Edit);
booksRoute.get("/delet/:id", Delete);
export default booksRoute;
