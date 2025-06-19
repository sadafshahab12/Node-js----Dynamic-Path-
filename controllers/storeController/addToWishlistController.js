const Wishlist = require("../../model/wishlist");

exports.addToWishlistController = (req, res, next) => {
  console.log("coming to add to wishlist ", req.body);
  Wishlist.AddToWishlist(req.body.id, (error) => {
    if (error) {
      console.log("Error while adding to wishlis,t", error);
    }
    res.redirect("/wishlist");
  });
};
