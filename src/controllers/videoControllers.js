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
    views: 2,
    id: 3,
  },
];

export const handleHome = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const see = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watch ${video.title}`,  });
};
export const search = (req, res) => res.send("Search!");
export const upload = (req, res) => res.send("Upload!");
export const edit = (req, res) => res.send("Edit!");
export const deleteVideo = (req, res) => res.send("Delete!");
