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

const { homeController } = require("../controllers/homeController");

const homeRouter = express.Router();

homeRouter.get("/", homeController);

const bookListRouter = express.Router();
bookListRouter.get("/book-list", bookListController);

const myFavouriteRouter = express.Router();
myFavouriteRouter.get("/my-favourite", myFavouriteController);

const myOrderRouter = express.Router();
myOrderRouter.get("/my-orders", myOrderController);

module.exports = {
  homeRouter,
  bookListRouter,
  myFavouriteRouter,
  myOrderRouter,
};
