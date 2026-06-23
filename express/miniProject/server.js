import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import publicRoutes from "./routes/public.routes.js";

import privateRoutes from "./routes/private.routes.js";
import logMiddleware from "./middleware/log.middleware.js";
const app = express();
const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, "logs"))) {
  fs.mkdirSync(path.join(__dirname, "logs"));
}
// *Inbuilt Middleware
app.use(express.json());

// !Global custom Middleware
// *middleware to ROute
app.use(logMiddleware);

app.use("/public", publicRoutes);
app.use("/private", privateRoutes);

app.listen(PORT, () => [
  console.log(`Server is running on http://localhost:${PORT}`),
]);
