import { Route, Routes } from "react-router-dom";
import { Layout, Loader } from "./components";
import { AboutUs, Home, NotFound, OurProduct } from "./pages";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/aboutus"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/ourproduct"
            element={
              <Layout>
                <OurProduct />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
