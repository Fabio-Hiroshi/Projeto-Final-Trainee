const express = require('express');

/**
 * Métodos HTPP:
 * Get: busca uma informação no backend
 * Post: cria uma informação no backend
 * PUT: Altera uma informação no backend
 * Delete: Deletar uma informção no backend
 */
/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros enviados na rota após "?"(Filtros, paginação)
 * Route: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilzado para criar ou alterar recursos
 */

/**
 * SQL: MySQL,SQLite,PostgreSQL,Oracle,Microsoft SQL Server
 * No SQL: Mongo DB, CouchDB, etc
 * 
 */
/**
 * Driver: SELECT * FROM users
 * Query builder: table('users').select('*').where()
 */
const routes = require('./routes');
const app = express();
app.use(express.json());

app.listen(3333);