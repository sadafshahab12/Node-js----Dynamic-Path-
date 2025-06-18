const AddNewBook = require("../../model/addNewBook");

exports.bookDetailsController = (req, res, next) => {
  const bookId = req.params.bookId;
  AddNewBook.findByID(bookId, (book) => {
    if (!book) {
      console.log("Home Not Found!");
      res.redirect("/");
    } else {
      res.render("store/bookDetails", {
        book: book,
        title: "Books Details",
        currentPage: "Book Details",
      });
    }
  });
};
