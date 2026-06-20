import express from "express";
import userData from "./data/mock.json" with { type: "json" };
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Industry Standard way to start the server
app.get("/api/v1/users", (req, res) => {
  const { first_name } = req.query;
  if (first_name) {
    const user = userData.filter((data) => first_name === data.first_name);
    res.status(200).send(user);
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
