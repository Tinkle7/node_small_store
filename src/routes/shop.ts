import express from "express";

import { ProductController } from "../controllers/product";

const router = express.Router();

router.get("/", ProductController.handleGetProduct);

export default { router };
