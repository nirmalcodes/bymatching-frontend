import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./container/AboutUs/AboutUs";
import Blog from "./container/Blog/Blog";
import ContactUs from "./container/ContactUs/ContactUs";
import Home from "./container/Home/Home";
import MakeItEasy from "./container/MakeItEasy/MakeItEasy";
import Products from "./container/Products/Products";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Home/>
        <Products/>
        <MakeItEasy/>
        <AboutUs/>
        <Blog/>
        <ContactUs/>
      </div>
    </>
  );
}

export default App;
