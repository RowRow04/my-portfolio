import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        <nav className="flex space-x-4 md:mb-0">
          <Link to="/" className="text-xl font-bold">
            Home
          </Link>
          <button
            onClick={handleDropdownToggle}
            className="text-xl focus:outline-none md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showDropdown ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </nav>
        <nav
          className={`flex space-x-4 md:flex md:space-x-4 ${
            showDropdown ? "block" : "hidden"
          }`}
        >
          <Link to="/about" className="text-lg hover:text-blue-500">
            About
          </Link>
          <Link to="/portfolio" className="text-lg hover:text-blue-500">
            Portfolio
          </Link>
          <Link to="/contact" className="text-lg hover:text-blue-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
