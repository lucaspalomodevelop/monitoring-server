// import logo from "./logo.svg";
import "./App.css";
import Shell from "../shell/Shell";
import Dashbaord from "../dashboard/Dashboard";
import Device from "../device/Device";
import React from "react";
import {
  BrowserRouter,
  BrowserRouter as ReactBrowserRouter,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Shell>
        <ReactBrowserRouter>
          <Routes>
            <Route path="/" component={Dashbaord} />
            <Route path="/device" component={Device} />
          </Routes>
        </ReactBrowserRouter>
      </Shell> */}
      <BrowserRouter>
        <Shell>
          <Routes>
            <Route path="/" element={<Dashbaord />} />
            <Route path="/device" element={<Device />} />
          </Routes>
        </Shell>
      </BrowserRouter>
    </>
  );
}

export default App;
