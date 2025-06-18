const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_utils");

module.exports = class AddNewBook {
  constructor(bookName, bookAuthor, bookImage, bookPrice) {
    this.name = bookName;
    this.author = bookAuthor;
    this.image = bookImage;
    this.price = bookPrice;
  }
  saveBookInFile() {
    AddNewBook.fetchAllDataFromFile((addNewBook) => {
      addNewBook.push(this);
      const bookDataPath = path.join(rootDir, "bookdata", "bookData.json");
      console.log(rootDir)
      fs.writeFile(bookDataPath, JSON.stringify(addNewBook), (error) => {
        console.log(`File Writing Error: ${error}`);
      });
    });
  }
  static fetchAllDataFromFile(callback) {
    // extract all data from file
    const bookDataPath = path.join(rootDir, "bookdata", "bookData.json");
    console.log(bookDataPath);

    fs.readFile(bookDataPath, (error, data) => {
      console.log(`File Read: ${error} ${data}`);
      if (!error) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
};
