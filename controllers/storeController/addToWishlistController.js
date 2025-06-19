exports.addToWishlistController = (req, res, next) => {
  console.log("coming to add to wishlist ", req.body);
  res.redirect("/wishlist");
};
