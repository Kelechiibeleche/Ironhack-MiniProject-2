import teamlogo from "../assets/teamlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <img src={teamlogo}></img>
      </Link>
      <h1>Kanban Board</h1>
    </div>
  );
};

export default Navbar;
