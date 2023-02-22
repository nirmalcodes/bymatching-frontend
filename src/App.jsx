import { Route, Routes } from "react-router-dom";
import { Navbar, Footer1 } from "./components";

import {
  Home1,
  Products1,
  MakeItEasy,
  MakeItEasy1,
  MakeItEasy2,
  AboutUs1,
  Blog1,
  ContactUs1,
} from "./container";

const footerLinks = [
  {
    heading: "ByMatching",
    links: [
      {
        title: "About us",
        linkUrl: "#",
      },
      {
        title: "The team",
        linkUrl: "#",
      },
      {
        title: "FAQ",
        linkUrl: "#",
      },
      {
        title: "Blog",
        linkUrl: "#",
      },
    ],
  },
  {
    heading: "Our product",
    links: [
      {
        title: "For students",
        linkUrl: "#",
      },
      {
        title: "For companies",
        linkUrl: "#",
      },
      {
        title: "For course managers",
        linkUrl: "#",
      },
    ],
  },
  {
    heading: "Important",
    links: [
      {
        title: "Privacy policy",
        linkUrl: "#",
      },
      {
        title: "Terms and Conditions",
        linkUrl: "#",
      },
    ],
  },
];

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Home1 />
        <Products1 />

        {/* point */}
        <MakeItEasy2 />

        <AboutUs1 />
        <ContactUs1 />
        <Footer1 linksData={footerLinks} />
      </div>
    </>
  );
}

export default App;
