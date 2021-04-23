'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lineitem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lineitem.belongsTo(models.Order, {
        foreignKey: 'order_id',
        onDelete: 'cascade',
      });
      Lineitem.belongsTo(models.Option, {
        foreignKey: 'option_id',
        onDelete: 'cascade',
      });
      Lineitem.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
      });
    }
  }
  Lineitem.init(
    {
      user_id: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      option_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      reviewed: DataTypes.STRING,
      total_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Lineitem',
      timestamps: true,
    },
  );
  return Lineitem;
};
