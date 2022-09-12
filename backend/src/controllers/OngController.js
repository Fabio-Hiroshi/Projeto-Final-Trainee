const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
  },

  async getOng(request, response) {
    const { id } = request.body;

    const ongResponse = await connection('ongs').select('*').from('ongs').where({id: id});

    return response.json(ongResponse);
  },

  async editOng(request, response) {
    const { id, name, email, whatsapp, city, uf } = request.body;
    const updateResponse = await connection('ongs').where('id', id).update({
      name: name, 
      email: email, 
      whatsapp: whatsapp,
      city: city,
      uf: uf
    });
    
    return response.json({ updateResponse });
  },
};