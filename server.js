const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./cofig/db");

// dotenv configuration
dotenv.config();

// db connection
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // log http requests

// route
// URL => http://localhost:8000

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/restaurant", require("./routes/restaurantRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1> Welcome to Food Server APP</h1> ");
});

const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
