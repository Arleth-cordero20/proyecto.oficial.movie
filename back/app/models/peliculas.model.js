const sql = require("./db.js");

// constructor
const Peliculas = function(peliculas) {
  this.idpeliculas = peliculas.idpeliculas;
  this.titulos = peliculas.titulos;
  this.imgUrl = peliculas.imgUrl;
  this.trailerUrl = peliculas.trailerUrl;
  this.anio = peliculas.anio;
  this.genero = peliculas.genero;
  this.director = peliculas.director;
  this.description = peliculas.description;
 
};

Peliculas.create = (newPeliculas, result) => {
  sql.query("INSERT INTO peliculas SET ?", newPeliculas, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(err, null);
      return;
    }

    console.log("created peliculas: ", { id: res.insertId, ...newPeliculas });
    result(null, { id: res.insertId, ...newPeliculas });
  });
};





module.exports = Peliculas;