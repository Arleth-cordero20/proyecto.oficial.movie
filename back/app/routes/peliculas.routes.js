module.exports = app => {
    const peliculas = require("../controllers/peliculas.controller.js");
  
    let router = require("express").Router();
    app.use('/API/PelisApi', router);
    // Create a new Clien
  };