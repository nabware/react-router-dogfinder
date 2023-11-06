import { useParams } from "react-router-dom";

function DogDetails({ getDog }) {
  const { name } = useParams();
  const dog = getDog(name);

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