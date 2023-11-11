import express from "express";
import { getall, addProd } from "./productControllers.js";
import { checkUser } from "../midleware/middleWar.js";
const productsRoute = express.Router();
productsRoute.get("/", getall);
productsRoute.post("/add", checkUser, addProd);
export default productsRoute;
