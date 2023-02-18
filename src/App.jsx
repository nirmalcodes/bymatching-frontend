import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./container/AboutUs/AboutUs";
import Blog from "./container/Blog/Blog";
import ContactUs from "./container/ContactUs/ContactUs";
import Home from "./container/Home/Home";
import MakeItEasy from "./container/MakeItEasy/MakeItEasy";
import Products from "./container/Products/Products";

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
        <Home />
        <Products/>
        <MakeItEasy />
        <AboutUs/>
        <Blog/>
        <ContactUs />
        <Footer linksData={footerLinks}/>
      </div>
    </>
  );
}

export default App;
