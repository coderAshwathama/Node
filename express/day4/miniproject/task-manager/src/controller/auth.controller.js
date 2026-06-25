export const login = (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }
  res.session.user = { username };
  res.cookie("username", username, { httpOnly: true, maxAge: 1000 * 60 * 30 });
  res.json({ message: "Login Successful", username });
};

export const logout = (req, res) => {
  res.clearCookie("username");
  res.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Error Logging out" });
    }
    res.json({ message: "Logout Successfully" });
  });
};
