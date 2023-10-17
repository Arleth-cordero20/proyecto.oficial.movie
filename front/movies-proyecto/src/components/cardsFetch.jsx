import { useState, useEffect } from 'react';

export function cardsFetch (){
    const [peliculas, setPeliculas] = useState(null);

    useEffect(() => {
        fetch('url') 
          .then((response) => response.json())
          .then((data) => setPeliculas(data))
          .catch((error) => console.error('Error:', error));
      }, []);
    return (peliculas)
}

export default Cardsf;