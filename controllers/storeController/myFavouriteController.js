exports.myFavouriteController = (req, res, next) => {
  res.render("store/favouriteList", {
    title: "My Favourite",
    currentPage: "My Favourite",
  });
};
