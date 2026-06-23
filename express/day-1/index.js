import express from "express";
import userData from "./data/mock.json" with { type: "json" };
const app = express();
app.use(express.json());
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Industry Standard way to start the server
app.get("/api/v1/users/:id", (req, res) => {
  const { id } = req.params;
  const user = userData.find((user) => user.id === Number(id));

  res.status(200).send(user);
  // const { first_name } = req.query;
  // if (first_name) {
  //   const user = userData.filter((data) => first_name === data.first_name);
  //   res.status(200).send(user);
  // }
});

app.post("/api/v1/users", (req, res) => {
  const { first_name, last_name, email, gender } = req.body;
  const newUser = {
    id: userData.length + 1,
    first_name,
    last_name,
    email,
    gender,
  };

  userData.push(newUser);
  res.status(201).send({
    message: "User Created",
    data: newUser,
  });
});

app.put("/api/v1/users/:id", (req, res) => {
  console.log(req.body, req.params);

  const {
    body,
    params: { id },
  } = req;

  const parsedId = parseInt(id);
  const userIndex = userData.findIndex((user) => user.id === parsedId);

  if (userIndex === -1) {
    return res.status(404).send("User Not Found");
  }
  userData[userIndex] = {
    id: parsedId,
    ...body,
  };
  res.status(200).send({ message: "User Updated", data: userData[userIndex] });
});
app.patch("/api/v1/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const parsedId = parseInt(id);
  const userIndex = userData.findIndex((user) => user.id === parsedId);

  if (userIndex === -1) {
    return res.status(404).send("User Not Found");
  }
  userData[userIndex] = {
    ...userData[userIndex],
    ...body,
  };
  res.status(200).send({ message: "User Updated", data: userData[userIndex] });
});

app.delete("/api/v1/users/:id", (req, res) => {
  const { id } = req.params;

  const parsedId = parseInt(id);

  const userIndex = userData.findIndex((user) => user.id === parsedId);

  if (userIndex === -1) {
    return res.status(404).send({ message: "User Not Found" });
  }

  const deletedUser = userData.splice(userIndex, 1);

  res.status(200).send({ message: "User Deleted", data: deletedUser[0] });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
