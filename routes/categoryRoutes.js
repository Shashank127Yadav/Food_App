const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCatController,
  getAllController,
  updateCatController,
  deleteCatController,
} = require("../controllers/categoryController");

const router = express.Router();

// routes
// CREATE CATEGORY || POST
router.post("/create", authMiddleware, createCatController);

// GET ALL CAT || GET
router.get("/getAll", getAllController);

// UPDATE CAT || PUT
router.put("/update/:id", authMiddleware, updateCatController);

// DELETE CAT || DELETE
router.delete("/delete/:id", authMiddleware, deleteCatController);

module.exports = router;
