const express = require('express');
const app = express();
const { getCarts, getCartById, getCartByClientId, addCart, updateCart, deleteCart } = require('../services/CartService');

app.get("/carts", async (req, res) => {
    try {
      let from = req.query.from || 0;
      from = Number(from);
      let limit = req.query.limit || 5;
      limit = Number(limit);
      const attributes = ['id', 'amount', 'bookId', 'clientId'];
      return res.json(await getCarts(from, limit, null, attributes));
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }    
  });


// GET (obtener un cart por su id)
app.get("/carts/:cartId", async (req, res) => {
    try {
      const cartId = req.params.cartId;
      const cart = await getCartById(cartId);
      return res.json(cart);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: e.message });
    }
  });

  //Get Cart by ClientId
  app.get("/carts/client/:clientId", async (req, res) => {
    try {
      const clientId = req.params.clientId;
      const cart = await getCartByClientId(clientId);
      return res.json(cart);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: e.message });
    }
  });

//POST
app.post('/carts', async (req, res) => {
    console.log(req.body);
    try{
        const body = req.body;
        const cart = await addCart(body);
        return res.json(cart);
    }catch(e){
        console.log(e);
        res.status(400).json({
            message: e.message
        });
    }    
})

// PUT // UPDATE (actualizar un cart)
app.put("/carts/:cartId", async (req, res) => {
  console.log(req.body);
    try {
      const cartId = req.params.cartId;
      let body = req.body;
      const cart = await updateCart({ cartId: cartId, ...body });
      return res.json(cart);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  });


// DELETE (eliminar un cart)
app.delete("/carts/:cartId", async (req, res) => {
  try {
    let cartId = req.params.cartId;
    const cartDeleted = await deleteCart(cartId);
    return res.json({
      cart: cartDeleted
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
});

module.exports = app;