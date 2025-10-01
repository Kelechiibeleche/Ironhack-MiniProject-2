import teamlogo from "../assets/teamlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to={"/aboutus"}>
        <button className="about-us-btn">About us </button>
      </Link>
      <Link to="/">
        <img src={teamlogo}></img>
      </Link>
      <Link to={"/createcard"}>
        <button class="create-task-btn">+ CREATE TASK</button>
      </Link>
    </div>
  );
};

export default Navbar;
