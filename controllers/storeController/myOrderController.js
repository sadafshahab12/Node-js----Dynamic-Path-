exports.myOrderController = (req, res, next) => {
  res.render("store/myOrders", { title: "My Orders", currentPage: "My Orders" });
};
