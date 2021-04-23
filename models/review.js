'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Item, {
        foreignKey: 'item_id',
        onDelete: 'cascade',
      });
      Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
      });
    }
  }
  Review.init(
    {
      user_id: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Review',
    },
  );
  return Review;
};
