/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState, lazy } from "react";
import ReactGA from "react-ga4";
import ReactRouter from "react-router";
import Reviews from "./slider/Reviews";
import ReviewCard from "./slider/ReviewCard";
import Page1 from "../src/components/Component/Page1";
import Contact from "../src/components/Contact/Contact";

import MainNavigation from "./Navigation/MainNavigation";
import { getData } from "./data/productList";
import { AuthProvider } from "./components/context/AuthProvider";
import { getCookie } from "./components/CookieConsent/functions";
import "./App.css";
import PortfolioArea from "./pages/Portfolio/PortfolioArea";
import Footer from "./components/Footer";

export const ProductsContext = React.createContext<any[]>([]);

const Navbar = lazy(() => import(/* webpackChunkName: "Navbar"  */ "./components/Navbar"));

import { useScrollSense } from "./components/hooks/senseHook/useScrollSense";
import { CookiesTagConsent, ProductsFromSessionStorage } from "./data/constants";
const Loading = () => <div>LOADING</div>;
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const [letsCartHandler, CartHandler] = useState(0);
  const [ssProducts, setSSproducts] = useState<any>();

  useScrollSense(() => {
    ReactGA.event(`User scrolled to bottom on [${window.location.pathname}]`);
  });

  const getCookieConsent = () => {
    if (getCookie(CookiesTagConsent) === "userAccepted") return false;
    else return true;
  };

  useEffect(() => {
    if (ssProducts == null) {
      getData().then((finalData) => {
        sessionStorage.setItem(ProductsFromSessionStorage, JSON.stringify(finalData));
      });
    }
  }, [ssProducts]);

  return (
    <div className="App">
      {/* {getCookieConsent() && <CookieConsent />} */}
      <header className="App-header">
        <ProductsContext.Provider productsData={ssProducts}>
          <React.Suspense fallback={Loading()}>
            <BrowserRouter basename="/">
              <AuthProvider>
                <Navbar />

                <Routes>
                  <Route path={`${process.env.PUBLIC_URL}/`} element={<Homepage />} />
                  <Route path={`/proiect/:projectName`} element={<Homepage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/pachete" element={<Page1 />} />
                </Routes>
                <Footer />
              </AuthProvider>
            </BrowserRouter>
          </React.Suspense>
        </ProductsContext.Provider>
      </header>
    </div>
  );
}

export default App;
