let videos = [
  {
    title: "Video #1",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 333,
    id: 1,
  },
  {
    title: "Video #2",
    rating: 3.5,
    comments: 222,
    createdAt: "62 minutes ago",
    views: 2222,
    id: 2,
  },
  {
    title: "Video #3",
    rating: 1,
    comments: 1,
    createdAt: "84 minutes ago",
    views: 1,
    id: 3,
  },
];

export const handleHome = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching "${video.title}"`, video });
};
export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing "${video.title}"`, video });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload videos" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "Just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
