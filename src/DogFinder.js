import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RoutesList from './RoutesList';

const API_URL = "http://localhost:5001";

function DogFinder() {
  const [dogs, setDogs] = useState(null);

  async function getDogs() {
    const response = await fetch(`${API_URL}/dogs`);
    const data = await response.json();
    setDogs(data);
  }

  if (!dogs) {
    getDogs();
    return (< h1 > Catching Dogs...</h1>);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs.map(d => d.name)} />
        <RoutesList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default DogFinder;
