import React, { useState } from "react";
import { images } from '../../constants';
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    linkName: "Home",
    linkURL: "home",
  },
  {
    linkName: "Our Product",
    linkURL: "product",
  },
  {
    linkName: "About Us",
    linkURL: "about",
  },
  {
    linkName: "Contact Us",
    linkURL: "contact",
  },
];

const Navbar = (props) => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <>
      <header className="navbar">
        <div>
          <img
            src={images.brandLogo}
            alt="ByMatching"
            className="navbar-brand"
          />
        </div>
        <button
          className="navigation-toggler"
          aria-controls="navigation-menu"
          aria-expanded={navToggle ? "true" : "false"}
          onClick={() => setNavToggle(!navToggle)}
        >
          <span className="sr-only">menu</span>
          {navToggle ? (
            <XMarkIcon className="h-7 w-7 text-[#001193]" strokeWidth={3} />
          ) : (
            <Bars3Icon className="h-7 w-7 text-[#001193]" strokeWidth={3} />
          )}
        </button>
        <nav
          className={`nav ${
            navToggle ? "translate-x-0" : "translate-x-full"
          } xl:translate-x-0`}
          id="navigation-menu"
          data-visible={navToggle ? "true" : "false"}
        >
          <ul className="nav-list">
            {navLinks.map((navLink, index) => (
              <li className="nav-list-item" key={`link-${navLink?.linkURL}`}>
                <a href={`#${navLink?.linkURL}`} className="nav-link">
                  {navLink?.linkName}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="navbar-btn m-4 xl:mx-12 xl:my-0 xl:hidden">
            Log in
          </a>
        </nav>
        <a href="#" className="navbar-btn hidden px-12 xl:inline-block">
          Log in
        </a>
        <div
          className={`backdrop ${
            navToggle ? "-translate-y-0" : "-translate-y-full"
          }`}
          onClick={() => setNavToggle(false)}
        />
      </header>
    </>
  );
};

export default Navbar;
