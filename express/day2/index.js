import express from "express";
const app = express();

// app.use(sayHiMiddleware);
app.get("/", sayHiMiddleware, (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("The server is listening on port ", 30001);
});
