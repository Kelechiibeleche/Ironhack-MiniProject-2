import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskCard from "./components/taskCard";

function App() {
  console.log("hello the website is working");
  return (
    <>
      <div className="homepage">
        <Navbar />
        <Sidebar />
        <TaskCard />
        <Footer />
      </div>
    </>
  );
}

export default App;
