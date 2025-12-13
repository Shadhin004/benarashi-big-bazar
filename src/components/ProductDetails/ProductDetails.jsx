import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../mockData";
import { FaStar } from "react-icons/fa6";

const ProductDetails = ({ handleOrderPopup }) => {
    const { id } = useParams();
    const product = getProductById(id);

    if (!product) {
        return <div className="text-center py-20 text-2xl font-bold">Product not found</div>;
    }

    return (
        <div className="pt-14 pb-12 bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-[600px]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Image Section */}
                    <div className="flex justify-center items-center">
                        <div className="relative overflow-hidden rounded-md group">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="max-w-[400px] w-full h-[500px] object-cover rounded-md shadow-md mx-auto transform group-hover:scale-105 duration-300"
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col justify-center gap-6">
                        <h1 className="text-4xl font-bold font-serif">{product.title}</h1>

                        <div className="flex items-center gap-2 text-yellow-500 text-xl">
                            <FaStar />
                            <span>{product.rating || 4.5}</span>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 text-lg tracking-wide leading-7">
                            {product.description || "No description available for this product."}
                        </p>

                        {product.color && (
                            <p className="text-gray-600 dark:text-gray-300 font-semibold">
                                Color: <span className="text-primary">{product.color}</span>
                            </p>
                        )}

                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            Tk {product.price || "Price on Request"}
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={handleOrderPopup}
                                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full font-semibold"
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
