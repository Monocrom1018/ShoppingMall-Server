'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'set null',
      });
      Order.hasMany(models.Lineitem, { foreignKey: 'order_id' });
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      final_price: DataTypes.INTEGER,
      destination: DataTypes.STRING,
      state: DataTypes.STRING,
      method: DataTypes.STRING,
      purchaser: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
      timestamps: true,
    },
  );
  return Order;
};
