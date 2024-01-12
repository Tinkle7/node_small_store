import express from "express";

import { ProductController } from "../controllers/product";

const router = express.Router();

router.get("/add-product", ProductController.handleGetAddProduct);

router.post("/add-product", ProductController.handlePostAddProduct);

export default { router };
