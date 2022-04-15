import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="btn btn-outline-primary">
          Inicio
        </NavLink>
        <NavLink to="/blog" className="btn btn-outline-primary">
          blog
        </NavLink>
        <NavLink to="/contacto" className="btn btn-outline-primary">
          contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
