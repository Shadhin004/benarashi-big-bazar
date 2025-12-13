import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ScrollToTop from "./components/ScrollToTop"; // Implementing a scroll to top utility
import Search from "./components/Search/Search";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
          <Route path="/product/:id" element={<ProductDetails handleOrderPopup={handleOrderPopup} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </BrowserRouter>
    </div>
  );
};

export default App;

