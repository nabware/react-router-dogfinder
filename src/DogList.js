import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Doglist</h1>
      {dogs.map((d, i) => (
        <div key={i}>
          <Link to={`/dogs/${d.name}`}><h2>{d.name}</h2></Link>
          <p>Age: {d.age}</p>
          <img src={`/${d.src}.jpg`} width="200px" />
          {d.facts.map((f, i) => <div key={i}>{f}</div>)}
        </div >))}
    </div>
  );
}

export default DogList;