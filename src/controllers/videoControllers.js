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
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  console.log(description);
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload videos",
      errorMessage: error._message,
    });
  }
};
