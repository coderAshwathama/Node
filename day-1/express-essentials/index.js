import express from "express";
import data from "./data/mock.json" with { type: "json" };
const app = express();

const PORT = 3001;

// using the public folder at the root of the project

app.use(express.static("public"));

// using hte images in the route/images

app.use("/images", express.static("images"));

app.get("/", (request, response) => {
  response.json(data);
});

// GET with routing parameters

app.get("/class/:id", (request, response) => {
  console.log(request.params);
});

app.post("/create", (request, response) => {
  response.send("This is a Post request at /create");
});
app.put("/edit", (request, response) => {
  response.send("This is a Put request at /edit");
});

app.delete("/delete", (request, response) => {
  response.send("This is a DELETE request at /delete");
});

app.listen(PORT, () => {
  console.log("The server is running on port  ", PORT);
});
