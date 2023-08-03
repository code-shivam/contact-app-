import logo from "./logo.svg";
import "./App.css";
import Contact from "./Component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Contact"
            element={<Contact setContact={setContact} contact={contact} />}
          />
          <Route
            path="/"
            element={<Home setContact={setContact} contact={contact} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
