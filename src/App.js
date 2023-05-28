import logo from "./logo.svg";
import "./App.css";
import Contact from "./Component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState([]);

  


  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Contact"
            element={
              <Contact
                setContact={setContact}
                contact={contact}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                setContact={setContact}
                contact={contact}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
