import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, location } = req.body;
  const pageTitle = "Join";
  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This username is already taken.",
    });
  }
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  res.redirect("/login");
};
export const logout = (req, res) => res.send("Log out!");
export const edit = (req, res) => res.send("Edit!");
export const remove = (req, res) => res.send("Remove!");
export const id = (req, res) => res.send("ID!");
export const login = (req, res) => res.send("Log in!");
