import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Handles Es module import.meta.url and __dirname in Node.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware to log the request details

const logMiddleware = (req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
  const logFile = path.join(__dirname, "../logs/request.log");

  fs.appendFile(logFile, log, (err) => {
    if (err) console.error(`Failed to log request`, err);
  });
  next();
};

export default logMiddleware;
