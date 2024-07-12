// import json-server
const jsonServer = require('json-server')

// create server for media player
const recipeServer = jsonServer.create()

// create middleware used by JSON server
const middleware = jsonServer.defaults()

// set up route fro json file in server
const route = jsonServer.router('db.json')

// set up pot for running server app
const PORT = 3000 || process.env.PORT


recipeServer.use(middleware)
recipeServer.use(route)
recipeServer.listen(PORT,()=>
{
    console.log(`Recipe Server  Server Started at Port ${PORT} and waiting for client Request`);
})