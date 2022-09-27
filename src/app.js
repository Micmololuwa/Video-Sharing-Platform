import React, { useState } from "react";
import NavBar from "./components/Navigations";
import HomePage from "./components/Homepage";
import SideBar from "./components/Sidebar";
import "./components/css/style.css";

export default function App() {
  return (
    <div className="container">
      {/* <NavBar /> */}
      <SideBar />
      <HomePage />
    </div>
  );
}
