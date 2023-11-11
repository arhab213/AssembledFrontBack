import { writeFile, readFile } from "fs/promises";
import booksModel from "../books.js";
import userModel from "../users.js";
export const getAllBooks = async (req, res) => {
  const file = await readFile("Books.json");
  const File = JSON.parse(file);
  const result = File.filter((e) => {
    return delete e.genre, delete e.description, delete e.release;
  });
  return res.json(result);
};

export const getDet = async (req, res) => {
  let { params } = req;
  let { id } = params;
  const file = await readFile("Books.json");
  const File = JSON.parse(file);
  const elem = File.find((e) => {
    return e.id == id;
  });
  if (elem) {
    let { name, author } = elem;
    return res.json(`the bookd itituled ${name} wrote by author ${author}`);
  } else {
    return res.json("Error the book didn't exist in data base");
  }
};
export const getDetAll = async (req, res) => {
  let { params, body } = req;
  let { id } = params;
  // const file = await booksModel.create(body);
  // const File = J;
  const i = File.findIndex((e) => {
    return e.id == id;
  });
  return res.json(File[i]);
};
export const AddElem = async (req, res) => {
  let { body, headers } = req;
  let { id } = headers;
  const filter = { _id: id };
  try {
    const findUse = await userModel.findOne(filter);
    if (!findUse) {
      return res.json("you need to have acount to continue ");
    }
  } catch (error) {
    return res.json(error.message);
  }

  try {
    const addBook = await booksModel.create({ ...body, owner: id });
    if (!addBook) {
      return res.status(404).json("Book not created");
    }
    return res.json({ message: "Book added", Book: addBook });
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

export const Edit = async (req, res) => {
  let { body, headers, params } = req;
  let { Id } = params;
  let { id } = headers;
  const filtera = { _id: id };
  const filterb = { _id: Id };
  try {
    const findUse = await userModel.findOne(filtera);
    if (!findUse) {
      return res.json("you need to have acount to continue ");
    }
  } catch (error) {
    return res.json(error.message);
  }
  const book = await booksModel.findOne(filterb);

  if (book.owner != filtera._id) {
    return res.json("this not your book you can't update it ");
  }
  const booked = await booksModel.findOneAndUpdate(filterb, body);
  if (!booked) {
    return res.json("element didn't eddited");
  }

  return res.json("an element was editted");
};
export const Delete = async (req, res) => {
  let { params } = req;
  let { id } = params;
  let filter = { _id: id };
  const file = await booksModel.findOneAndDelete(filter);
  return res.json("an element was deleted");
};
