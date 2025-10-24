import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/", getAllItems);       // GET /api/items
router.get("/:id", getItemById);    // GET /api/items/:id
router.post("/", createItem);       // POST /api/items
router.put("/:id", updateItem);     // PUT /api/items/:id
router.delete("/:id", deleteItem);  // DELETE /api/items/:id

export default router;
