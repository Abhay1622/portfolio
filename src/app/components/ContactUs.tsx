'use client';

import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS with error handling
  useEffect(() => {
    try {
      emailjs.init({
        publicKey: "AJRZFlWoyDcfNlNNI",
        blockHeadless: true, // Recommended for security
      });
    } catch (initError) {
      console.error("EmailJS initialization error:", initError);
      setError("Failed to initialize email service");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields");
      setLoading(false);
      return;
    }

    try {
      const templateParams = {
        to_email: "sethankit027@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        'service_t3l9xqh',   // Service ID from EmailJS
        'template_tejv1wz',  // Template ID from EmailJS
        templateParams,
        {
          publicKey: "AJRZFlWoyDcfNlNNI",
        }
      );

      console.log("Email send response:", response);

      if (response.status === 200 || response.text === "OK") {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Email sending failed');
      }
    } catch (err) {
      console.error("Detailed email sending error:", err);
      
      // More specific error handling
      if (err instanceof Error) {
        setError(err.message || "Failed to send message. Please try again later.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-teal-300 text-center mb-8">Contact Us</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
          I would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-teal-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-teal-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-teal-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your message"
              rows={6}
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 bg-teal-600 dark:bg-teal-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-teal-700 dark:hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {error && (
            <p className="text-center text-red-500 mt-4 font-semibold">
              {error}
            </p>
          )}

          {submitted && (
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4 font-semibold">
              Thank you for your message! I will respond soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;