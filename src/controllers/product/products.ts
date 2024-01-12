import ProductModel from "../../models/product";

const handleGetAddProduct = (req, res, next) => {
  res.render("add-product");
};

const handlePostAddProduct = (req, res, next) => {
  const title = req.body.title;
  ProductModel.saveProduct(title);
  res.redirect("/");
};

const handleGetProduct = async (req, res, next) => {
  const allProduct = await ProductModel.fetchAllProducts();
  res.render("shop", {
    prods: allProduct,
    docTitle: "My Shop",
  });
};

export default { handleGetAddProduct, handlePostAddProduct, handleGetProduct };
