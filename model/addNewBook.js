const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_utils");
const { v4: uuid4 } = require("uuid");

const bookDataPath = path.join(rootDir, "bookdata", "bookData.json");
module.exports = class AddNewBook {
  constructor(bookName, bookAuthor, bookImage, bookPrice) {
    this.id = uuid4();
    this.name = bookName;
    this.author = bookAuthor;
    this.image = bookImage;
    this.price = bookPrice;
  }
  saveBookInFile() {
    AddNewBook.fetchAllDataFromFile((addNewBook) => {
      addNewBook.push(this);
      fs.writeFile(bookDataPath, JSON.stringify(addNewBook), (error) => {
        console.log(`File Writing Error: ${error}`);
      });
    });
  }
  static fetchAllDataFromFile(callback) {
    // extract all data from file
    fs.readFile(bookDataPath, (error, data) => {
      if (!error) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }

  static findByID(bookId, callback) {
    this.fetchAllDataFromFile((books) => {
      const bookFound = books.find((book) => book.id === bookId);
      callback(bookFound);
    });
  }
};
