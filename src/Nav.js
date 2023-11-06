import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <div>{dogs.map(d => <Link to={`dogs/${ d }`}>{d}</Link>)}</div>
  );
}

export default Nav;