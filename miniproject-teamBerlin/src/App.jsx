import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskCard from "./components/TaskCard";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Detailcard from "./pages/Detailcard";
import Notfound from "./pages/Notfound";
import AboutPage from "./pages/AboutPage";

function App() {
  console.log("hello the website is working");
  return (
    <>
      <div className="homepage">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cards/:detailscardId" element={<Detailcard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/notfound" element={<Notfound />} />
        </Routes>
        <Sidebar />

        <Footer />
      </div>
    </>
  );
}

export default App;
