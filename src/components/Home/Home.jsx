import React from "react";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import TopProducts from "../TopProducts/TopProducts";
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";
import Testimonials from "../Testimonials/Testimonials";
import Cosmetics from "../Cosmetics/Cosmetics";

const Home = ({ handleOrderPopup }) => {
    return (
        <>
            <Hero handleOrderPopup={handleOrderPopup} />
            <Products />
            <TopProducts handleOrderPopup={handleOrderPopup} />
            {/* <Cosmetics /> */}
            <Banner />
            <Subscribe />
            <Products />
            <Testimonials />
        </>
    );
};

export default Home;
