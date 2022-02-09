module.exports = (sequelize, DataTypes) => {
  /**mapeo con la tabla categoria en la DB */
  return sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      unique : true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    tableName: 'category',
  });
}