const CartRepository = require('../repositories/CartRepository');

const getCarts = async (from, limit, filters, attributes) => {
  let defaultFilters = {
    //state: true,
  };
    if (!filters) {
      filters = defaultFilters;
    } else {
      filters = { ...defaultFilters, ...filters };
    }
    const data = await CartRepository.getCarts(from, limit, filters, attributes);
    return data;
  };
  
  const getCartById = async (id) => {
    return await CartRepository.getCartById(id);
  };

  const getCartByClientId = async (clientId) => {
    return await CartRepository.getCartByClientId(clientId);
  };

const addCart = async (cart) => {
    return await CartRepository.addCart(cart);
};

const updateCart = async ({
    cartId,
    amount,
    bookId,
    clientId,    
  }) => {
    const cart = await CartRepository.updateCart({
      cartId,
      amount,
      bookId,
      clientId,      
    });
    return cart;
  };

  const deleteCart = async (id) => {
    const cart = await CartRepository.deleteCart(id);
    return cart;
  };

module.exports = {
    getCarts,
    getCartById,
    getCartByClientId,
    addCart,
    updateCart,
    deleteCart,
};
