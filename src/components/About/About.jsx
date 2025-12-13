import React from "react";
import Banner from "../../assets/website/footer-pattern.jpg"; // Reusing the pattern or any other suitable image

const About = () => {
    return (
        <div className="pt-24 pb-12 bg-white dark:bg-gray-900 dark:text-white min-h-screen">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-12 max-w-[600px] mx-auto">
                    <p className="text-sm text-primary mb-2">Since 1990</p>
                    <h1 className="text-4xl font-bold mb-4">About Benarashi Big Bazar</h1>
                    <p className="text-gray-500 text-lg">
                        Preserving the golden heritage of Bengali handloom sarees.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div data-aos="fade-right">
                        {/* Using a placeholder or reusing an existing asset that looks good */}
                        <div className="h-[400px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
                            <img
                                src={Banner}
                                alt="Benarashi Heritage"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <h2 className="text-white text-3xl font-bold font-serif">Our Heritage</h2>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div data-aos="fade-left" className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-primary">Our Story</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Benarashi Big Bazar started its journey in the heart of Mirpur Benarashi Palli with a simple vision: to bring the finest handwoven sarees to every Bengali woman. For over three decades, we have been more than just a shop; we have been custodians of a tradition passed down through generations of weavers.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-primary">Our Mission</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We aim to keep the art of Benarashi, Jamdani, and Katan alive by supporting local weavers and providing our customers with authentic, high-quality products at fair prices. We believe every saree tells a story, and we want to help you tell yours.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-primary">Why Choose Us?</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Authentic Handloom Products</li>
                                <li>Direct from Mirpur Benarashi Palli</li>
                                <li>Uncompromising Quality Assurance</li>
                                <li>Legacy of Trust since 1990</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
