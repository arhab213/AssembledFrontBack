import jwt from "jsonwebtoken";
import userModel from "../users.js";
export const checkUser = async (req, res, next) => {
  let { headers } = req;
  let { token } = headers;
  const clearToken = jwt.verify(token, "usertoken");
  const { _id: id } = clearToken;
  console.log(clearToken);
  const findUser = await userModel.findOne({ _id: id });
  headers.id = id;
  if (!findUser) {
    return res
      .status(404)
      .json("you need to have an account to do this operation");
  }
  return next();
};
