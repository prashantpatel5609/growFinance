import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMoneyBillWave, FaBriefcase, FaCheckCircle } from 'react-icons/fa';

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 min-h-screen flex items-center justify-center">
      {submitted ? (
        <div className="flex flex-col items-center justify-center">
          <FaCheckCircle className="text-green-600 text-6xl mb-4" />
          <span className="text-green-700 font-bold text-2xl mb-4">Submitted Successfully</span>
          <button onClick={handleReset} className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition font-semibold">
            Submit Another Application
          </button>
        </div>
      ) : (
        <section className="max-w-2xl w-full mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Apply for a Loan</h2>
          <form className="bg-white p-8 rounded-lg shadow space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="flex items-center border border-gray-300 rounded p-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaUser className="text-gray-400 mr-3" />
              <input type="text" placeholder="Full Name" className="w-full outline-none" />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded p-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input type="email" placeholder="Email" className="w-full outline-none" />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-gray-300 rounded p-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaPhone className="text-gray-400 mr-3" />
              <input type="tel" placeholder="Phone Number" className="w-full outline-none" />
            </div>

            {/* Loan Type */}
            <div className="flex items-center border border-gray-300 rounded p-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaBriefcase className="text-gray-400 mr-3" />
              <select className="w-full outline-none">
                <option>Select Loan Type</option>
                <option>Personal Loan</option>
                <option>Business Loan</option>
                <option>Education Loan</option>
                <option>Vehicle Loan</option>
              </select>
            </div>

            {/* Loan Amount */}
            <div className="flex items-center border border-gray-300 rounded p-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaMoneyBillWave className="text-gray-400 mr-3" />
              <input type="number" placeholder="Loan Amount" className="w-full outline-none" />
            </div>

            <button type="submit" className="w-full bg-blue-700 text-white px-4 py-3 rounded hover:bg-blue-800 transition">
              Submit Application
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Apply;
