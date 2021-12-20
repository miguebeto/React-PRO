import React from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo192 from "../logo.svg";

import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo192} alt="img no found" />
          <ul>
            {routes.map(({ to, name }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ to, path, Component }) => (
            <Route key={to} path={path} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
