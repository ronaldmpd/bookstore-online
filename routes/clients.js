const express = require('express');
const app = express();
const { getClients, getClientById, addClient, updateClient, deleteClient } = require('../services/ClientService');

app.get("/clients", async (req, res) => {
    try {
      let from = req.query.from || 0;
      from = Number(from);
      let limit = req.query.limit || 5;
      limit = Number(limit);
      const attributes = ['id', 'name', 'nit'];
      return res.json(await getClients(from, limit, null, attributes));
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }    
  });


// GET (obtener un client por su id)
app.get("/clients/:clientId", async (req, res) => {
    try {
      const clientId = req.params.clientId;
      const client = await getClientById(clientId);
      return res.json(client);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: e.message });
    }
  });

//POST
app.post('/clients', async (req, res) => {
    console.log(req.body);
    try{
        const body = req.body;
        const client = await addClient(body);
        return res.json(client);
    }catch(e){
        console.log(e);
        res.status(400).json({
            message: e.message
        });
    }    
})

// PUT // UPDATE (actualizar un client)
app.put("/clients/:clientId", async (req, res) => {
  console.log(req.body);
    try {
      const clientId = req.params.clientId;
      let body = req.body;
      const client = await updateClient({ clientId: clientId, ...body });
      return res.json(client);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  });


// DELETE (eliminar un client)
app.delete("/clients/:clientId", async (req, res) => {
  try {
    let clientId = req.params.clientId;
    const clientDeleted = await deleteClient(clientId);
    return res.json({
      client: clientDeleted
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
});

module.exports = app;