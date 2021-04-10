const express = require('express');
const routes = express.Router();

routes.get('/',(Request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})




module.exports = routes;