import React, { useState } from "react";
import { images } from "../../constants";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Navbar1 = (props) => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <>
      <header className=" flex items-center justify-between">
        <div>
          <img
            src={images.brandLogo}
            alt="ByMatching"
            width={"180px"}
            className="logo m-8"
          />
        </div>

        <button
          className="mobile-navigation-toggler"
          aria-controls="navigation-menu"
          aria-expanded={navToggle ? "true" : "false"}
          onClick={() => setNavToggle(!navToggle)}
        >
          <span className="sr-only">menu</span>
          {navToggle ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>

        <nav className="w-full lg:mx-auto">
          <ul
            id="navigation-menu"
            data-visible={navToggle ? "true" : "false"}
            className={`fixed inset-y-0 right-0 left-1/3  z-[1000] flex flex-col justify-center gap-8 bg-[#E2E8F0] py-10 px-8 drop-shadow-md lg:relative lg:inset-0 lg:translate-x-0 lg:flex-row lg:gap-12 lg:bg-transparent lg:py-8 lg:px-12 lg:drop-shadow-none xl:gap-20
            ${navToggle ? "translate-x-0" : "translate-x-full"}`}
          >
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Our Product
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            <li className="lg:fixed lg:right-12">
              <a
                href="#"
                className="rounded-full border border-[#3341a9] py-3 px-12 text-[#3341a9]"
              >
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar1;
