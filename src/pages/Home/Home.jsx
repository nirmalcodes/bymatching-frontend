import React from "react";
import { Layout } from "../../components";
import { Header, Products, AboutUs, ContactUs } from "../../container";

const Home = () => {
  return (
    <>
      <Header />
      <Products />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default Home;
