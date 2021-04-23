'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Option.belongsTo(models.Item, {
        foreignKey: 'item_id',
        onDelete: 'cascade',
      });
      Option.hasMany(models.Lineitem, { foreignKey: 'option_id' });
    }
  }
  Option.init(
    {
      item_id: DataTypes.INTEGER,
      grams: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Option',
      timestamps: false,
    },
  );
  return Option;
};
