'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Like, { foreignKey: 'item_id' });
      Item.hasMany(models.RecentView, { foreignKey: 'item_id' });
      Item.hasMany(models.Option, { foreignKey: 'item_id' });
      Item.hasMany(models.Review, { foreignKey: 'item_id' });
    }
  }
  Item.init(
    {
      category: DataTypes.STRING,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Item',
      timestamps: false,
    },
  );
  return Item;
};
