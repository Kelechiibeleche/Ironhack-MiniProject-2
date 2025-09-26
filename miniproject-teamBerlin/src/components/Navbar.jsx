import teamlogo from "../assets/teamlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <img src={teamlogo}></img>
      </Link>
      <button>About us </button>
      <Link to={"/createcard"}>
        <button>Create task</button>
      </Link>
    </div>
  );
};

export default Navbar;
