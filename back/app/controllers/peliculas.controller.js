const Peliculas = require("../models/peliculas.model.js");
//const path = require('path');
// Create and Save a new Client
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
}
console.log(Peliculas);
  /* Create a Client
  const peliculas = new Peliculas({
    idpeliculas: req.body.idpeliculas,
    titulos: req.body.titulos,
    imgURL: req.body.imgURL || false,
    trailerUrl: req.body.trailerUrl || false,
    anio: req.body.anio,
    genero: req.body.genero,
    director: req.body.director,
    description: req.body.description,

  });

  // Save Client in the database
  Peliculas.create(peliculas, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Peliculas."
      });
    else res.send(data);
  });


// Retrieve all Client from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Peliculas.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.render('pages/index', {
      peliculas: data
    });
  });
};



exports.setPeliculas = (req, res) => {
  res.sendFile(path.resolve('public/form.html'));
};*/