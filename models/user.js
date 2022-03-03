'use strict';
const {
  Model
} = require('sequelize');
const { hashingPassword } = require('../helpers/encrypPass');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Product, {foreignKey: 'ProductId'})
    }
  }
  User.init({
    name:{
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Nama harus diisi tidak boleh dikosongkan!'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Nomor Telepon harus diisi!'
        }
      }
    },
    address:{
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Alamat harus diisi!'
        }
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'User Name harus diisi!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Email harus diisi!'
        },
        isEmail: {
          args: true,
          msg: 'Format Email Tidak Valid!'
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Password harus diisi!'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull :false,
      validate : {
        notEmpty: {
          args: true,
          msg: 'Role harus disi sesuai identitas!'
        }
      }
    },
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    hooks:{
      beforeCreate(user){
        user.password = hashingPassword(user.password)
      }
    },
    modelName: 'User',
  });
  return User;
};