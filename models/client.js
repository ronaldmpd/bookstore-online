'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Cart, {
        as: 'carts',
        foreignKey: 'clientId'
      })
    }
  };
  Client.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nit: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};