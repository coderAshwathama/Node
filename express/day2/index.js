import express from "express";
import userRouter from "./routers/user.routes.js";

const app = express();

// app.use(sayHiMiddleware);

app.use("/api/v1/users", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("The server is listening on port ", 30001);
});
