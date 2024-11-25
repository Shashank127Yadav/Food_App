const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodController,
  getSingleFoodController,
  getFoodByRestaurantController,
  updateFoodController,
  deletefoodController,
  placeOrderController,
  orderStatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

// routes
// CREATE FOOD || POST
router.post("/create", authMiddleware, createFoodController);

// GET ALL FOOD || GET
router.get("/getAll", getAllFoodController);

// GET SINGLE FOOD || GET
router.get("/get/:id", getSingleFoodController);

// GET FOOD BY RESTAURANT || GET
router.get("/getByRestaurant/:id", getFoodByRestaurantController);

// UPDATE FOOD
router.put("/update/:id", authMiddleware, updateFoodController);

// DELETE FOOD
router.delete("/delete/:id", authMiddleware, deletefoodController);

// PLACE ORDER
router.post("/placeOrder", authMiddleware, placeOrderController);

// ORDER STATUS CHANGE
router.post(
  "/orderStatus/:id",
  adminMiddleware,
  authMiddleware,
  orderStatusController
);

module.exports = router;
