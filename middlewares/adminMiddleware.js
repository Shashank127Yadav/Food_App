const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    // Ensure user ID is available in the request
    if (!req.body.id) {
      return res.status(400).send({
        success: false,
        message: "User ID is missing. Please log in again.",
      });
    }

    // Fetch user from the database
    const user = await userModel.findById(req.body.id);

    // Check if user exists
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found. Please log in again.",
      });
    }

    // Verify user is an admin
    if (user.usertype !== "admin") {
      return res.status(403).send({
        success: false,
        message: "Access denied: Admins only",
      });
    }

    // Proceed to the next middleware if user is admin
    next();
  } catch (error) {
    console.error("Error in adminMiddleware:", error);
    res.status(500).send({
      success: false,
      message: "Server error in authorization",
      error: error.message,
    });
  }
};
