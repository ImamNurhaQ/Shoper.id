'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {foreignKey: 'CategoryId'});
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Nama Category tidak boleh kosong!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};