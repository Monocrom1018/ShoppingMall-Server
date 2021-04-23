'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecentView extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RecentView.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
      });
      RecentView.belongsTo(models.Item, {
        foreignKey: 'item_id',
        onDelete: 'cascade',
      });
    }
  }
  RecentView.init(
    {
      user_id: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'RecentView',
      timestamps: false,
    },
  );
  return RecentView;
};
