import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();

app.use(express.json()); // allows us to accept json data in the req.body (middleware)

app.use("/api/products", productRoutes);        //  using routes to call APIs

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});     //  calling database connection fn
