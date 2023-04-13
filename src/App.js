import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Register from "./Page/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register/>} />
          <Route
            path="/home"
            element={
              <>
                <Navbar>
                <Home />
                </Navbar>
              </>
            }
          />


        </Routes>
      </BrowserRouter>
      {/* <h1>Hello world</h1> */}
    </>
  );
}

export default App;
