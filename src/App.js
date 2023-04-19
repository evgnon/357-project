import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./Page/Account";
import Login from "./Page/Login";
import Explore from "./Page/Explore";
import Register from "./Page/Register";
import Disclaimer from "./Page/Disclaimer";
import Notification from "./Page/Notification";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register/>} />
          <Route
            path="/account"
            element={
              <>
                <Navbar>
                <Account />
                </Navbar>
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <Navbar>
                <Explore />
                </Navbar>
              </>
            }
          />
          <Route
            path="/disclaimer"
            element={
              <>
             
                <Disclaimer />
                
              </>
            }
          />
          <Route
            path="/notification"
            element={
              <>
                <Navbar>
                <Notification/>
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
