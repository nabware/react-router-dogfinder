import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.filter(d => d.name === name)[0];

  return (
    <div>
      {dog
        ? <div>
          <div>{dog.name}</div>
          <div>{dog.age}</div>
        </div>
        : <div>Dog not found</div>
      }
    </div>
  );
}

export default DogDetails;