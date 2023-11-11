import productsModel from "../products.js";
export const getall = async (req, res) => {
  try {
    const all = await productsModel.find();
    if (!all || all.length === 0) {
      return res.json("there is no products");
    }
    return res.json(all);
  } catch (error) {
    console.log(error.message);
  }
};
export const addProd = async (req, res) => {
  try {
    let { body } = req;
    const addelem = await productsModel.create(body);
    if (!addelem) {
      return res.status(500).json("element haven't been created");
    }
    return res.status(200).json("element added !");
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};
