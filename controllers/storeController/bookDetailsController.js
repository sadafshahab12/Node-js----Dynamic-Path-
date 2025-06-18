const AddNewBook = require("../../model/addNewBook");

exports.bookDetailsController = (req, res, next) => {
  const bookId = req.params.bookId;
  AddNewBook.findByID(bookId, (book) => {
    if (!book) {
      console.log("Home Not Found!");
      res.redirect("/");
    } else {
      console.log(book);
      res.render("store/bookDetails", {
        title: "Books Details",
        currentPage: "Book Details",
      });
    }
  });
};
