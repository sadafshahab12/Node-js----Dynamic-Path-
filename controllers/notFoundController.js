exports.notFoundController = (req, res, next) => {
  res.status(404).render("notFound", { title: "Page Not Found" });
};
