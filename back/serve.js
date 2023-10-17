const express = require('express')
const app = express()
const cors = require("cors");

const port = 3000



let corsOptions = {
    origin: "http://localhost:8081"
};
  
 
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Peliculas = require('./app/models/peliculas.model'); 
const pelis = require('./API/PelisApi.json')

pelis.forEach(element => {
    const pelis = new Peliculas({
        idpeliculas: element.idpeliculas,
        titulos: element.titulos,
        imgUrl: element.imgUrl,
        trailerUrl: element.trailerUrl,
        anio: element.anio,
        genero: element.genero,
        director: element.director, 
        description: element.description, 
       
    });

});


app.get('/API/PelisApi', (req, res) => {
    res.json(pelis);
  } )
  
app.get('/API/PelisApi/date', (req, res) => {
    res.json({ message: "Datos de anime guardados con éxito" });
  });
 

  
require("./app/routes/peliculas.routes.js")(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})