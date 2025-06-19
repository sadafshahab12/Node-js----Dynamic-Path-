const express = require("express");
const { homeController } = require("../controllers/homeController");
const {
  wishlistController,
} = require("../controllers/storeController/wishlistController");
const {
  bookListController,
} = require("../controllers/storeController/bookListController");
const {
  myOrderController,
} = require("../controllers/storeController/myOrderController");
const {
  bookDetailsController,
} = require("../controllers/storeController/bookDetailsController");
const {
  addToWishlistController,
} = require("../controllers/storeController/addToWishlistController");

const homeRouter = express.Router();

homeRouter.get("/", homeController);

const bookListRouter = express.Router();
bookListRouter.get("/book-list", bookListController);

const getBookDetailsRouter = express.Router();
getBookDetailsRouter.get("/book-list/:bookId", bookDetailsController);

const wishlistRouter = express.Router();
wishlistRouter.get("/wishlist", wishlistController);

wishlistRouter.post("/wishlist", addToWishlistController);

const myOrderRouter = express.Router();
myOrderRouter.get("/my-orders", myOrderController);

module.exports = {
  homeRouter,
  bookListRouter,
  wishlistRouter,
  myOrderRouter,
  getBookDetailsRouter,
};
