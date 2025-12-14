import React from "react";
import { ProductsData } from "../../mockData";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Top Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            A customer will be interested in buying the product only when the image is depicted accurately.
            It is advisable to follow the style guide for sarees and upload the exact relevant image that matches
            with your product title.Titles should be short, concise and descriptive.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <Link to={`/product/${data.id}`} className="block">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <Link to="/search" className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
