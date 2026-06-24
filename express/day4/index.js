import express from "express";
import session from "express-session";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
