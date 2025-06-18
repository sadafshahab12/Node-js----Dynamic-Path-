const express = require("express");
const {
  bookListController,
} = require("../controllers/storeController/bookListController");
const {
  myOrderController,
} = require("../controllers/storeController/myOrderController");
const {
  myFavouriteController,
} = require("../controllers/storeController/myFavouriteController");
const {
  bookDetailsController,
} = require("../controllers/storeController/bookDetailsController");

const { homeController } = require("../controllers/homeController");

const homeRouter = express.Router();

homeRouter.get("/", homeController);

const bookListRouter = express.Router();
bookListRouter.get("/book-list", bookListController);
const getBookDetailsRouter = express.Router();
getBookDetailsRouter.get("/book-list/:bookId", bookDetailsController);

const myFavouriteRouter = express.Router();
myFavouriteRouter.get("/my-favourite", myFavouriteController);

const myOrderRouter = express.Router();
myOrderRouter.get("/my-orders", myOrderController);

module.exports = {
  homeRouter,
  bookListRouter,
  myFavouriteRouter,
  myOrderRouter,
  getBookDetailsRouter,
};
