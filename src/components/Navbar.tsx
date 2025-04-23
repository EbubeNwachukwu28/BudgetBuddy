import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/budgets", label: "Budgets" },
  { to: "/accounts", label: "Accounts" },
  { to: "/reports", label: "Reports" },
];

const Navbar: React.FC = () => (
  <nav className="bg-white shadow">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">Finance App</h1>
      <div className="flex space-x-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-800"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
