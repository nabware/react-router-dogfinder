import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RoutesList from './RoutesList';

const API_URL = "http://localhost:5001";

function DogFinder() {
  const [dogs, setDogs] = useState(() => {
    fetch(`${ API_URL }/dogs`)
      .then(r => r.json())
      .then(d => setDogs(d));

    return [];
  });

  function getDog(name) {
    return dogs.filter(d => d.name === name)[0];
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs.map(d => d.name)} />
        <RoutesList dogs={dogs} getDog={getDog} />
      </BrowserRouter>
    </div>
  );
}

export default DogFinder;
