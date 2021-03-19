const Client = require('../models').Client;

const getClients = async (from, limit, filters, attributes) => {
    const data = await Client.findAndCountAll({
      limit,
      offset: from,
      where: filters,
      attributes,
    });
    return data;
  };
  
  const getClientById = async (id) => {
    return await Client.findOne({ where: { id } });
  };

const addClient = async ({name, nit, state}) =>{    
    const client = await Client.create({name, nit, state});
    return client;
}

const updateClient = async ({
    clientId,
    name,
    age,
    nationality,
    state,    
  }) => {
    const client = await Client.update(
      { name, age, nationality, state },
      { where: { id: clientId } }
    );
    return client;
  };

  const deleteClient = async (id) => {
    const deleteState = {
      state: false,
    };
    const client = await Client.update(deleteState, { where: { id } });
    return client;
  };

module.exports = {
    getClients,
    getClientById,
    addClient,
    updateClient,
    deleteClient
};