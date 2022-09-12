const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.post('/ongs/get-ong', OngController.getOng);
routes.post('/ongs/edit-ong', OngController.editOng);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.post('/incidents/edit', IncidentController.edit);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
