import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const hanldeCross = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`bg-black text-white`}>
        <nav className="flex px-4 border-b md:shadow-lg items-center relative">
          <div className="text-lg font-bold md:py-0 py-4">Logo</div>
          <ul
            className={`text-white md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 ${
              open ? "bg-black" : "hidden"
            }`}
          >
            <li>
              <a
                href="#"
                className="flex md:inline-flex p-4 items-center hover:bg-gray-50 hover:text-black"
              >
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex md:inline-flex p-4 items-center hover:bg-gray-50 hover:text-black"
              >
                <span>Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex md:inline-flex p-4 items-center hover:bg-gray-50 hover:text-black"
              >
                <span>About us</span>
              </a>
            </li>
          </ul>
          <div
            className="ml-auto md:hidden text-gray-500 cursor-pointer"
            onClick={hanldeCross}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 fill-current text-white ${open ? "" : "hidden"}`}
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
            <svg
              className={`w-5 h-5 fill-current ${open ? "hidden" : ""}`}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5" y="10" width="40" height="5" rx="2.5" fill="white" />
              <rect
                x="5"
                y="22.5"
                width="40"
                height="5"
                rx="2.5"
                fill="white"
              />
              <rect x="5" y="35" width="40" height="5" rx="2.5" fill="white" />
            </svg>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
