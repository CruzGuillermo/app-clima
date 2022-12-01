import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-slate-300 text-black-500 hover:text-gray-700 focus:text-gray-700 shadow-lg rounded-md no-underline drop-shadow-md">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <Link to="/">
          <span class="text-3xl no-underline animate-spin">Weather App</span>
        </Link>
        <SearchBar onSearch={onSearch} />
        <Link to="/about" class="no-underline">
          <span class="text-3xl ">About App</span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
