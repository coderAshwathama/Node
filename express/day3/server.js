import express from "express";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 8080;

app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("name", "express", {
    maxAge: 1000 * 60,
  });
  res.send("Hello World");
});

app.get("/product", (req, res) => {
  console.log("cookies", req.cookies);

  if (req.cookies.name && req.cookies.name === "express") {
    return res.status(200).send({
      id: 1,
      name: "Item-01",
      price: " $100",
    });
  } else {
    return res.status(403).send({ message: "You are  not authorized" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
