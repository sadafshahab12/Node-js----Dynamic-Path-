const express = require("express");
const {
  getAddBook,
  postAddBook,
} = require("../controllers/adminController/addBookController");

const {
  adminBookListController,
} = require("../controllers/adminController/adminBookListController");
// ----------------------------------------------------------
const addBookRoute = express.Router();
const bookListRouter = express.Router();

addBookRoute.get("/add-book", getAddBook);
addBookRoute.post("/add-book", postAddBook);
// ----------------------------------------------------------
bookListRouter.get("/book-list", adminBookListController);
// ----------------------------------------------------------

module.exports = { addBookRoute, bookListRouter };
