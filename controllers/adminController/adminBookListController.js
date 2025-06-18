const AddNewBook = require("../../model/addNewBook");

exports.adminBookListController = (req, res, next) => {
  AddNewBook.fetchAllDataFromFile((addNewBook) => {
    res.render("admin/bookList", {
      addNewBook,
      title: "Books",
      currentPage: "Book List",
    });
  });
};
