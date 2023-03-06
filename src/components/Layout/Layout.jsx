import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LanguageChanger from "../LanguageChanger/LanguageChanger";
import ScrollToTop from "../ScrollToTopButton/ScrollToTopButton";

const navLinksList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our Product",
    path: "/ourproduct",
  },
  {
    name: "About Us",
    path: "/aboutus",
  },

  {
    name: "Contact Us",
    path: "/contactus",
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
