const express=require('express');

const routes=express.Router();

app.post('/users', (request,response) => {
    
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'semana oministack',
        aluno: 'Lima'
    });
});

module.exports= routes;