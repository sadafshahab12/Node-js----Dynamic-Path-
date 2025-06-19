exports.wishlistController = (req, res, next) => {
  res.render("store/wishlist", {
    title: "Wishlist",
    currentPage: "Wishlist",
  });
};
