import userModel from "./users.js";

export const getAll = async (req, res) => {
  const findAll = await userModel.find();
  if (!findAll || findAll.length === 0) {
    return res.json("the data base is empty");
  }
  return res.json(findAll);
};
export const add = async (req, res) => {
  let { body } = req;
  try {
    const addelem = await userModel.create(body);
    if (!addelem) {
      return res.json("the elemnt didn't been added ");
    }
    return res.json({ message: "user added", user: addelem });
  } catch (error) {
    console.log(error.message);
  }
};
export const Edit = async (req, res) => {
  let { params, body } = req;
  let { id } = params;
  let filter = { _id: id };
  try {
    const editelem = await userModel.findOneAndUpdate(filter, body);
    if (!editelem) {
      return res.json("the element wasn't edited");
    }
    return res.json("element editted");
  } catch (error) {
    console.log(error.message);
  }
};
export const Delete = async (req, res) => {
  let { params } = req;
  let { id } = params;
  let filter = { _id: id };
  try {
    const deletelem = await userModel.findOneAndDelete(filter);
    if (!deletelem) {
      return res.json("the element didn't been deleted");
    }
    return res.json("element was deleted");
  } catch (error) {
    console.log(error.message);
  }
};
