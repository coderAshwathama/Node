import { validateToken } from "../utils/token-utils.js";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token && validateToken(token)) {
    req.user = { name: "Rijan", id: 1 };
    next();
  }
};

export default authMiddleware;
