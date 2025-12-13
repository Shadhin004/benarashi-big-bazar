import React from "react";
import { TopProductsData } from "../../mockData";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            A customer will be interested in buying the product only when the image is depicted accurately.
            It is advisable to follow the style guide for sarees and upload the exact relevant image that matches
            with your product title. Titles should be short, concise and descriptive.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {TopProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              key={data.id}
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                {/* Order Button - keep behavior or link? user wants dynamic page. */}
                {/* The card itself should probably link to details, but there is an "Order Now" button. */}
                {/* The request says "add a dynamic product page". The "Order Now" currently invokes popup. */}
                {/* Detailed page usually has "Add to Cart" or "Buy". */}
                {/* I'll make the Title or Image clickable to go to details, and keep "Order Now" as is (popup), OR make "Order Now" go to details first? */}
                {/* Usually clicking the product card navigates to details. */}
                {/* I will add a "View Details" or make the image/title a link, and keep "Order Now" as popup for quick buy? */}
                {/* Or maybe replace "Order Now" with "View Details" or just make the whole card clickable? */}
                {/* In TopProducts, the whole card has hover effects. */}
                {/* Let's wrap the image and title in Link, but keep Order Now separate? */}
                {/* For simplicity and standard pattern, I will wrap the Image and Title in a Link. */}

                <Link to={`/product/${data.id}`} className="block mt-2 mb-2">
                  <span className="text-xs font-semibold underline">View Details</span>
                </Link>

                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
