import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RoutesList from './RoutesList';
import './App.css';

const API_URL = "http://localhost:5001";

function App() {
  // const [dogs, setDogs] = useState(getDogs());

  // async function getDogs() {
  //   const response = await fetch(`${ API_URL }/dogs`);
  //   const data = await response.json;
  //   return data;
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

export default App;
