import { Route, Routes } from "react-router-dom";
import { Layout, Loader, PageScrollToTop } from "./components";
import { AboutUs, Home, NotFound, OurProduct } from "./pages";

function App() {
  return (
    <>
      <PageScrollToTop />
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
          path="/ourproduct"
          element={
            <Layout>
              <OurProduct />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
