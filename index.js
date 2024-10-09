console.log("Hello");

import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors"; // Import the cors module
import Product from "./models/product.model.js";
import { router as productRoute } from "./routes/product.route.js";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import rateLimit from "express-rate-limit";

dotenv.config(); // Load environment variables from .env file
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet()); //secure your Express apps by setting various HTTP headers.
app.use(cors()); // enables ables Cross-Origin Resource Sharing (CORS) with various options.
app.use(mongoSanitize()); // Prevents MongoDB Operator Injection.
app.use(xss()); // Prevents cross-site scripting (XSS) attacks.
app.use(hpp()); // Prevents HTTP Parameter Pollution attacks.

// routes
app.use("/api/products", productRoute);

const port = 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"],
      // Add other directives as needed
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World from the Node API 🚀!");
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database !");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })

  .catch(() => {
    console.log("Error connecting to the database");
  });
