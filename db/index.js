const conn = require('./conn');
const { Sequelize } = conn;
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');
const LineItem = require('./LineItem');

User.hasMany(Order);
Order.hasMany(LineItem);
Product.hasMany(LineItem);

module.exports = {
  conn,
  User,
  Product,
  LineItem,
  Order
};
