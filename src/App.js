import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // dark mode enable or disable
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = (cls) => {
    // setMode(mode === 'dark' ? 'light' : 'dark');
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2F4F4F";

      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="Text" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/" element={ */}
        {/* <TextForm showAlert={showAlert} heading="Enter Text" mode={mode}/> */}
        {/* } */}
        {/* /> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}

        <TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;
