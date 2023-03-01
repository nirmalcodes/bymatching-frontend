import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LanguageChanger from "../LanguageChanger/LanguageChanger";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const navLinksList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Layout = ({ children }) => {
  return (
    <>
      <Navbar navLinks={navLinksList} />
      <>{children}</>
      <LanguageChanger />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
