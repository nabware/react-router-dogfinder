function DogList({ dogs }) {



  return (

    <div>
      <h1>Doglist</h1>
      {dogs.map(d => (
        <div key={d}>
          <h2>{d.name}</h2>
          <age>{d.age}</age>
          <img src={`/${ d.src }.jpg`} width="200px" />
        </div >))}
    </div>
  );
}

export default DogList;