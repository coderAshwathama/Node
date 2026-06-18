import express from "express";
import data from "./data/mock.json" with { type: "json" };
const app = express();

const PORT = 3001;

app.get("/", (request, response) => {
  response.send("This is a GET request at /");
});

app.listen(PORT, () => {
  console.log("The server is running on port  ", PORT);
  console.log(data);
});
