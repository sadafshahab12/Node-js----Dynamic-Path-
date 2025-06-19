const AddNewBook = require("../../model/addNewBook");
const Wishlist = require("../../model/wishlist");

exports.wishlistController = (req, res, next) => {
  Wishlist.getWishlists((wishlist) => {
    AddNewBook.fetchAllDataFromFile((bookList) => {
      const wishlistBooks = bookList.filter((book) =>
        wishlist.includes(book.id)
      );
      res.render("store/wishlist", {
        wishlistBooks : wishlistBooks,
        title: "Wishlist",
        currentPage: "Wishlist",
        currentPage: "Wishlist",
      });
    });
  });
};
