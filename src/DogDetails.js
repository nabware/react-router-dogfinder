import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.filter(d => d.name === name)[0];

  return (
    <div>
      {dog
        ? <div>
          <h1>{dog.name}</h1>
          <div>Age: {dog.age}</div>
          <img src={`/${ dog.src }.jpg`} width="200px" />
          {dog.facts.map((f, i) => <div key={i}>{f}</div>)}
        </div>
        : <div>Dog not found</div>
      }
    </div>
  );
}

export default DogDetails;