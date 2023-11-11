import userModel from "../users.js";
import JWT from "jsonwebtoken";
export const getAll = async (req, res) => {
  const file = await userModel.find();
  if (!file || file.length == 0) {
    return res.json("the user data-base is empty");
  }
  return res.json(file);
};
export const add = async (req, res) => {
  let { body } = req;
  try {
    const adduser = await userModel.create(body);
    if (!adduser) {
      return res.status(404).json("user not created");
    }
    return res.json({ message: "user added", user: adduser });
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
export const Login = async (req, res) => {
  let { body } = req;
  let { name, password } = body;
  const checkuser = await userModel.findOne({ name });
  if (!checkuser) {
    return res.json({ message: "you don't have a account,please creat one" });
  }
  if (checkuser.password != password) {
    return res.json({ message: " password incorect " });
  }
  const { _id: id } = checkuser;
  const token = JWT.sign({ _id: id }, "usertoken");
  return res.json({ message: "user connected", token: token });
};
export const Edit = async (req, res) => {
  let { body, params } = req;
  let { id } = params;
  const filter = { _id: id };
  const editUserdeb = await userModel.findOneAndUpdate(filter, body);
  if (!editUserdeb) {
    return res.json("error when editting");
  }
  return res.json("element editted");
};
export const Delete = async (req, res) => {
  let { params } = req;
  let { id } = params;
  const filter = { _id: id };
  const editUserdeb = await userModel.findOneAndDelete(filter);
  if (!editUserdeb) {
    return res.json("error when editting");
  }
  return res.json("element deletted");
};
