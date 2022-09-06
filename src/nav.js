import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const navList = [
  { name: "Toyota", link: "/toyota" },
  { name: "Honda", link: "/honda" },
  { name: "Kia", link: "/kia" },
  { name: "Benz", link: "/benz" },
  { name: "Nord", link: "/nord" },
];
console.log(navList[0].link);

const navListItems = navList.map((item, index) => {
  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? { color: "orange" } : { color: "white" }
      }
      key={index}
      to={item.link}
    >
      <li>{item.name}</li>
    </NavLink>
  );
});

function Nav() {
  return (
    <section>
      <header className="header">
        <NavLink to="/" className="logo">
          <h1>Eric</h1>
        </NavLink>
        <ul className="navbar">{navListItems}</ul>
      </header>
    </section>
  );
}
export default Nav;
