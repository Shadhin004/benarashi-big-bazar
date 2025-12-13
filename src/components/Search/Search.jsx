import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getAllProducts, parsePrice } from "../../mockData";
import { FaStar } from "react-icons/fa6";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Filters
    const [category, setCategory] = useState("All");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortBy, setSortBy] = useState("recommended");

    useEffect(() => {
        const all = getAllProducts();
        setProducts(all);
    }, []);

    useEffect(() => {
        let temp = [...products];

        // 1. Text Search
        if (query) {
            const lowerQuery = query.toLowerCase();
            temp = temp.filter(
                (p) =>
                    p.title.toLowerCase().includes(lowerQuery) ||
                    p.description.toLowerCase().includes(lowerQuery) ||
                    p.category.toLowerCase().includes(lowerQuery)
            );
        }

        // 2. Category Filter
        if (category !== "All") {
            temp = temp.filter((p) => p.category === category);
        }

        // 3. Price Filter
        if (minPrice) {
            temp = temp.filter((p) => parsePrice(p.price) >= parseInt(minPrice, 10));
        }
        if (maxPrice) {
            temp = temp.filter((p) => parsePrice(p.price) <= parseInt(maxPrice, 10));
        }

        // 4. Sorting
        if (sortBy === "price_asc") {
            temp.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        } else if (sortBy === "price_desc") {
            temp.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        }

        setFilteredProducts(temp);
    }, [query, products, category, minPrice, maxPrice, sortBy]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Navbar handles the URL update, but we can also have a localized search if needed.
        // limiting complexity, relying on URL param mainly.
    };

    return (
        <div className="pt-24 pb-12 dark:bg-gray-900 dark:text-white min-h-screen">
            <div className="container">
                <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">
                    Search Results {query && `for "${query}"`}
                </h1>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="w-full md:w-1/4 space-y-6">
                        <div className="border p-4 rounded-md dark:border-gray-700">
                            <h3 className="font-bold mb-3 text-xl">Filters</h3>

                            {/* Category */}
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                                >
                                    <option value="All">All Categories</option>
                                    <option value="Saree">Saree</option>
                                    <option value="Cosmetics">Cosmetics</option>
                                </select>
                            </div>

                            {/* Price Range */}
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold">Price Range (Tk)</label>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                        className="w-1/2 p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        className="w-1/2 p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                                    />
                                </div>
                            </div>

                            {/* Sort */}
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                                >
                                    <option value="recommended">Recommended</option>
                                    <option value="price_asc">Price: Low to High</option>
                                    <option value="price_desc">Price: High to Low</option>
                                </select>
                            </div>

                            <button
                                onClick={() => {
                                    setCategory("All");
                                    setMinPrice("");
                                    setMaxPrice("");
                                    setSortBy("recommended");
                                }}
                                className="w-full py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="w-full md:w-3/4">
                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-md">
                                <p className="text-xl text-gray-500">No products found matching your criteria.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((data) => (
                                    <div
                                        key={data.id}
                                        className="rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-xl duration-300 p-4 group"
                                    >
                                        <Link to={`/product/${data.id}`} className="block">
                                            <div className="h-[200px] overflow-hidden rounded-md mb-4">
                                                <img
                                                    src={data.img}
                                                    alt={data.title}
                                                    className="h-full w-full object-cover group-hover:scale-105 duration-300"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">{data.title}</h3>
                                                <div className="flex justify-between items-center mb-2">
                                                    <p className="text-sm text-gray-500 capitalize">{data.category}</p>
                                                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                                        <FaStar />
                                                        <span>{data.rating}</span>
                                                    </div>
                                                </div>
                                                <p className="font-bold text-lg">Tk {data.price}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
