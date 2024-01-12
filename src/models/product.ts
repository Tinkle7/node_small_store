import fs from "fs/promises";
import path from "path";
import { mainModuleDirname } from "../utils";

const p = path.join(mainModuleDirname, "../", "temp", "products.json");

const getProductsFromFile = async () => {
  try {
    const data = await fs.readFile(p);
    const dataString = data.toString();
    return JSON.parse(dataString);
  } catch (err) {
    return [];
  }
};

const saveProduct = async (product) => {
  try {
    const products = await getProductsFromFile();
    products.push({ title: product });
    await fs.writeFile(p, JSON.stringify(products));
  } catch (err) {
    console.log(err);
  }
};

const fetchAllProducts = async () => {
  try {
    return await getProductsFromFile();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default { saveProduct, fetchAllProducts };
