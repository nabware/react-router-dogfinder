import {useState} from "react";
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RoutesList from './RoutesList';
import './App.css';

const API_URL = "http://localhost:5001";

function App() {
  const [dogs, setDogs] = useState(() => {
    fetch(`${API_URL}/dogs`)
    .then(r => r.json())
    .then(d => d);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs.map(d => d.name)} />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
