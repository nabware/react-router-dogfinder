import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RoutesList({ dogs, getDog }) {

  return (
    <Routes>
      <Route element={<DogList dogs={dogs} />} path="/dogs" />
      <Route element={<DogDetails dogs={dogs} getDog={getDog} />} path="/dogs/:name" />
      <Route element={<Navigate to='/dogs'></Navigate>} path="*" />
    </Routes>
  );
}

export default RoutesList;