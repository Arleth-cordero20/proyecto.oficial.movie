import { useState, useEffect } from 'react';
function Cards() {
    const [peliculas, setPeliculas] = useState(null);
    useEffect(() => {
        fetch('/API/PelisApi') 
          .then((response) => response.json())
          .then((data) => setPeliculas(data))
          .catch((error) => console.error('Error:', error));
      }, []);
    return (
        <div className="card-group">
            {peliculas?.map((pelis) => (    
                <div className="card" key={pelis.id}>
                    <img  src={pelis.imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{pelis.titulos}</h5>
                    <p className="card-text">Descripcion: {pelis.description}</p>
                    <p className="card-text"><small className="text-muted">Director: {pelis.director}</small></p>
                    </div>
                </div> 
            ))}
      </div>
      
    )
}
export default Cards;