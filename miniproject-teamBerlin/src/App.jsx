import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  console.log("hello the website is working");
  return (
    <>
      <div class="homepage">
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default App;
