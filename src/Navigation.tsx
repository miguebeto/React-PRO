import React from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo192 from "./logo192.png";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo192} alt="img no found" />
          <ul>
            <li>
              <NavLink to="/home" className={({isActive})=> isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li> 
              <NavLink to="/about" className={({isActive})=> isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive})=> isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<h1>About pages</h1>} />
          <Route path="/users" element={<h1>User pages</h1>} />
          <Route path="/home" element={<h1>Home pages</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

