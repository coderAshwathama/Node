import express from "express";
import session from "express-session";

const app = express();
const PORT = 8080;

app.use(
  session({
    secret: "mysecret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, //1 day
    },
  }),
);

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  res.status(200).send("Hello World");
});

app.get("/login", (req, res) => {
  req.session.user = {
    name: "john",
    email: "john@hello.com",
    age: 30,
  };

  res.send(`${req.session.user.name} is Logged In `);
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Unable to logout");
    }

    res.clearCookie("connect.sid");
    res.send("User Logged Out");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
