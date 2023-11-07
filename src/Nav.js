import { Link, NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <div>{dogs.map(d =>
      <NavLink
        key={d}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        to={`/dogs/${d}`}>
        {d}
      </NavLink>)}
    </div>
  );
}

export default Nav;