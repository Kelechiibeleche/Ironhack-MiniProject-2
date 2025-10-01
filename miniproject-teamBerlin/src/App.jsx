import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Notfound from "./pages/Notfound";
import AboutPage from "./pages/AboutPage";
import CreateCard from "./pages/CreateCard";
import taskData from "./components/tasks.json";
import { useState } from "react";
import EditCardPage from "./pages/EditCardPage";

function App() {
  console.log("hello the website is working");
  const [task, setTask] = useState(taskData);
  return (
    <>
      <div className="homepage">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Dashboard task={task} setTask={setTask} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/createcard"
            element={<CreateCard task={task} setTask={setTask} />}
          />
          <Route
            path="/editcard/:detailscardId"
            element={<EditCardPage task={task} setTask={setTask} />}
          />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/notfound" element={<Notfound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;

// FUNCTIONALITY  TO-DO'S:

//  1) make task cards editable
//  2) add card function: currently on separate "create" page – would be cool to integrate on dashboard page if possible
