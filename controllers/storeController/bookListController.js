const AddNewBook = require("../../model/addNewBook");

exports.bookListController = (req, res, next) => {
  AddNewBook.fetchAllDataFromFile((addNewBook) => {
    res.render("store/bookList", {
      addNewBook,
      title: "Books",
      currentPage: "Book List",
    });
  });
};
