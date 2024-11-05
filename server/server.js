import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept json data in the req.body (middleware)

app.use("/api/products", productRoutes); //  using routes to call APIs

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
}); //  calling database connection fn
