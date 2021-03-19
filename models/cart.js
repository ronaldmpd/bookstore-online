'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Client, {
        as: 'client', 
        foreignKey: 'clientId'
      } );

      this.belongsTo(models.Book, {
        as: 'book', 
        foreignKey: 'bookId'
      } );

    }
  };
  Cart.init({
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};