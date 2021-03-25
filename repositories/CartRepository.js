const Cart = require('../models').Cart;

const getCarts = async (from, limit, filters, attributes) => {
    const data = await Cart.findAndCountAll({
      limit,
      offset: from,
      where: filters,
      attributes,
    });
    return data;
  };
  
  const getCartById = async (id) => {
    return await Cart.findOne({ where: { id } });
  };

  const getCartByClientId = async (clientId) => {
    return await Cart.findOne({ where: { clientId } });
  };

const addCart = async ({amount, bookId, clientId }) =>{    
    const cart = await Cart.create({amount, bookId, clientId });
    return cart;
}

const updateCart = async ({
    cartId,
    amount,
    bookId,
    clientId,    
  }) => {
    const cart = await Cart.update(
      { amount, bookId, clientId },
      { where: { id: cartId } }
    );
    return cart;
  };

  const deleteCart = async (id) => {    
    const cart = await Cart.destroy({ where: { id } });
    return cart;
  };

module.exports = {
    getCarts,
    getCartById,
    getCartByClientId,
    addCart,
    updateCart,
    deleteCart
};