import express from "express";
import { getAll, add, Edit, Delete, Login } from "./userControllers.js";

const UserRoute = express.Router();
UserRoute.get("/", getAll);
UserRoute.post("/add", add);
UserRoute.post("/Login", Login);
UserRoute.post("/edit/:id", Edit);
UserRoute.get("/delet/:id", Delete);
export default UserRoute;
