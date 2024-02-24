import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>My Sidebar</h1>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/device">Device</Link>
        </li>
      </ul>
    </div>
  );
}
