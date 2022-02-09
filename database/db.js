/**importamos librerias a usar */
const { Sequelize } = require('sequelize');
const { config } = require('../config');
const Product = require('../models/product.model');
const Categoryt = require('../models/category.model');


/**como la DB esta en MySql, usao el orm Sequelize para conectarnos */
const DBconection = new Sequelize(
  config.database,
  config.usuario,
  config.password, {
  host: config.host,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
  }
);

const productModel = Product(DBconection, Sequelize);
const categorytModel = Categoryt(DBconection, Sequelize);

/**las relaciones entre las tablas productos y categorias */
productModel.hasOne(categorytModel, {foreignKey: 'id',sourceKey: 'category'});
categorytModel.belongsTo(productModel, {foreignKey: 'id'});

module.exports = {
  DBconection,
  productModel,
  categorytModel
};