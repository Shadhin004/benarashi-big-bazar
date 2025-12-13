import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend or email service
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="pt-14 pb-12 bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen">
            <div className="container">
                <h1 className="text-3xl font-bold mb-10 text-center">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-6 text-primary">Get in Touch</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1 font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-primary"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-primary"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-primary"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-primary"
                                    placeholder="Your Message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 rounded-md font-bold"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map Location */}
                    <div className="h-[400px] md:h-auto bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.598346097561!2d90.36881737604618!3d23.802187986778103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%20Banarashi%20Palli!5e0!3m2!1sen!2sbd!4v1702498263595!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Benarashi Palli Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
