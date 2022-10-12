const fakeUser = {
  userName: "dlwkdans",
  loggedIn: true,
};

export const handleHome = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
// export const handleVideo = (req, res) => res.send("Video!");
export const search = (req, res) => res.send("Search!");
export const upload = (req, res) => res.send("Upload!");
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.send("Edit!");
export const deleteVideo = (req, res) => res.send("Delete!");
