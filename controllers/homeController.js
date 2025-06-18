exports.homeController = (req, res, next) => {
  res.render("index", { title: "Home", currentPage: "Home" });
};
