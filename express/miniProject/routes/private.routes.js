import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
const router = express.Router();

// dashboard {accesstoken}
router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).send({
    message: "Welcome to dashboard",
  });
});

export default router;
