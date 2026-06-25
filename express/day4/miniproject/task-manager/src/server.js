import express from "express";
import session from "express-session";

import authRoute from "./routes/auth.routes.js";

const app = express();
const PORT = 8080;
// Global MiddleWare
app.use(express.json());
application.use(
  session({
    secret: "HelloWorld",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Task Manager API ");
});

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
