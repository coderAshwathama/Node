import express from "express";
import session from "express-session";

import authRoute from "./routes/auth.routes.js";
const app = express();
const PORT = 8080;
// Global MiddleWare
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Task Manager API ");
});

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
