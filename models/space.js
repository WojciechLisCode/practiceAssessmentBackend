"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      space.belongsTo(models.user);
      space.hasMany(models.story);
      // define association here
    }
  }
  space.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      backgroundColor: { type: DataTypes.STRING, defaultValue: "#ffffff" },
      color: { type: DataTypes.STRING, defaultValue: "#000000" },
    },
    {
      sequelize,
      modelName: "space",
    }
  );
  return space;
};
