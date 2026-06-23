import express from "express";
import { generateToken } from "../utils/token-utils.js";
const router = express.Router();

// Generate-token

router.get("/generate-token", (req, res) => {
  const token = generateToken();

  res.status(200).send({
    message: "Token Generated Please save it for Future use",
    token: token,
  });
});
// Home Route

router.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to home page",
  });
});

export default router;
