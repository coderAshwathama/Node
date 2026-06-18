import express from "express";
import userData from "./data/mock.json" with { type: "json" };
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Industry Standard way to start the server
app.get("/api/v1/users", (req, res) => {
  res.status(200).send(userData);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
