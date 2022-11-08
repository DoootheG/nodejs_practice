import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const id = req.params.id;

  return res.render("watch", { pageTitle: "watch" });
};
export const getEdit = (req, res) => {
  const id = req.params.id;

  return res.render("edit", { pageTitle: "edit" });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const { title } = req.body;

  return res.redirect(`/videos/`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload videos" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
