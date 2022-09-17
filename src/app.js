import React, { useState } from "react";
import "./components/css/style.css";
import NavBar from "./components/navbar";
import Main from "./components/Main";
import Testing from "./components/testing";
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <NavBar />

      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/testing" element={<Testing />}></Route>
      </Routes>
    </div>
  );
}
