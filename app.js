const express = require("express");

const { notFoundController } = require("./controllers/notFoundController");
const path = require("path");
const rootDir = require("./utils/path_utils");
const app = express();
const adminRoutes = require("./routes/adminRoutes");
const storeRoutes = require("./routes/storeRoutes");
app.set("view engine", "ejs");
app.set("views", "views");
const PORT = 5000;

app.use((req, res, next) => {
  console.log("get request url", req.url, req.method);
  next();
});
app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded());
app.use(storeRoutes.homeRouter);
app.use(adminRoutes.addBookRoute);
app.use(storeRoutes.bookListRouter);
app.use(storeRoutes.myFavouriteRouter);
app.use(storeRoutes.myOrderRouter);
app.use(storeRoutes.getBookDetailsRouter);

app.use(notFoundController);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
