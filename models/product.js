'use strict';
const {
  Model, QueryTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static dealTransaction({id, stock}) {
      return sequelize.query(`UPDATE "Products" SET stock = stock - ${stock} WHERE id = ${id}`, {
        type: QueryTypes.UPDATE,
      });
    }

    get dateProduct(){
      return new Date(this.createdAt).toISOString().split('T')[0]
    }

    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {foreignKey: 'CategoryId'}),
      Product.hasMany(models.User, {foreignKey: 'ProductId'})
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Nama Product harus disi!'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Description harus disi!'
        }
      }
    },
    img: {
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Link IMG tidak boleh kosong!'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Stock harus disi!'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Price harus di isi!'
        }
      }
    },
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};