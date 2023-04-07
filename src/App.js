import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
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
