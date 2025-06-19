const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_utils");
const { v4: uuid4 } = require("uuid");

const wishlistDataPath = path.join(rootDir, "bookdata", "wishlistData.json");
module.exports = class Wishlist {
  static AddToWishlist(bookId, callback) {
    //callback for this function work successfully or book add to wishlist successfully
    Wishlist.getWishlists((wishlist) => {
      if (wishlist.includes(bookId)) {
        callback("Book is already added to wishlist.");
      } else {
        wishlist.push(bookId);
        fs.writeFile(wishlistDataPath, JSON.stringify(wishlist), callback);
      }
    });
  }
  static getWishlists(callback) {
    fs.readFile(wishlistDataPath, (error, data) => {
      if (!error) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
};
