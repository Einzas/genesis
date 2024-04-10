import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 md:px-8 lg:px-12 w-full">
      <form className="w-full md:w-[40%] lg:w-[30%] order-1 md:order-none">
        <div className="relative">
          <i className="bx bx-search absolute left-2 top-3 "></i>
          <input
            type="text"
            className="bg-gray-200 pl-8 pr-4 py-2 outline-none w-full rounded-md"
            placeholder="Buscar"
          />
        </div>
      </form>
      <nav className="md:w-[60%]  lg:w-[70%] flex w-full justify-center md:justify-end">
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/notification" className="relative">
              <i className="bx bx-bell text-2xl"></i>
              <i className="bx bxs-circle absolute -right-0 -top-3 text-xs text-red-400"></i>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" to="/profile">
              <span>Jorge Falcones</span>
              <i className="bx bx-chevron-down"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
