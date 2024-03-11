import { useState, useEffect } from "react";
import {
  FaAddressBook,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formMounted, setFormMounted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any form validation here
    // Assuming validation passed, set the success message and open the modal
    setSuccessMessage("Form submitted successfully!");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  useEffect(() => {
    // gumagana lang ang effect ito kapag na mamamount siya
    setFormMounted(true);
  }, []);

  return (
    <div className="container mx-auto py-8 border-t border-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="rounded-lg bg-blue-400 p-6">
            <p className="text-lg mb-4 text-white">
              <strong>
                Feel free to reach out to me via email or through the contact
                form. form in the right side:
              </strong>
            </p>
            <p className="text-lg mb-4 text-white ">
              <FaEnvelope className="inline-block mr-2" />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:rogelioesguerra04jr@gmail.com"
                className="text-white hover:underline"
              >
                rogelioesguerra04jr@gmail.com
              </a>
            </p>
            <p className="text-lg mb-4 text-white ">
              <FaPhone className="inline-block mr-2" />
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+639627534508"
                className="text-white hover:underline"
              >
                09627534508
              </a>
            </p>
            <p className="text-lg mb-4 text-white ">
              <FaLocationArrow className="inline-block mr-2" />
              <strong>Address:</strong>{" "}
              <a
                href="https://www.google.com/maps?q=32.5, 123.5"
                className="text-white hover:underline"
              >
                Address: 390 Washington St. Palmera Hills 1 Brgy. San Isdro
                Taytay Rizal
              </a>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`rounded-lg bg-blue-400 shadow-md p-8 text-white ${
            formMounted ? "fade-in active" : "fade-in"
          }`}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">
              <FaUser className="inline-block mr-2" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              <FaEnvelope className="inline-block mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-70"></div>
          <div className="bg-white rounded-lg p-8 max-w-md text-black">
            <button
              className="absolute top-4 right-4 text-lg"
              onClick={closeModal}
            >
              ×
            </button>
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Message:</strong> {formData.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
