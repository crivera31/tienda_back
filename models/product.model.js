module.exports = (sequelize, DataTypes) => {
  /**mapeo con la tabla producto en la DB */
  return sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      unique : true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    url_image: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT
    },
    discount: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    tableName: 'product'
  });
}