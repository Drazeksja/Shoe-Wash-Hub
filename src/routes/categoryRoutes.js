import express from "express";
import {
  getAllCategories,
  createCategory
} from "../controllers/categoryController.js";

const router = express.Router();

// GET semua kategori
router.get("/", getAllCategories);

// POST tambah kategori baru
router.post("/", createCategory);

export default router;
