import teamlogo from "../assets/teamlogo.png";

const Navbar = () => {
  return (
    <div id="navbar">
      <img src={teamlogo}></img>
      <h1>Kanban Board</h1>
    </div>
  );
};

export default Navbar;
