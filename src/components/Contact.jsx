import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact Info</h2>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Branch Address" className="w-8 h-8" />
            <span className="font-semibold text-gray-700">Branch Address:</span>
          </div>
          <p className="text-gray-600">MP Nagar, Bhopal (Beside SBI Bank)</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail" className="w-8 h-8" />
            <span className="font-semibold text-gray-700">Gmail:</span>
          </div>
          <p className="text-gray-600">growfinance@gmail.com</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Mobile" className="w-8 h-8" />
            <span className="font-semibold text-gray-700">Mobile:</span>
          </div>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-8 h-8" />
            <span className="font-semibold text-gray-700">WhatsApp:</span>
          </div>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Working Hours" className="w-8 h-8" />
            <span className="font-semibold text-gray-700">Working Hours:</span>
          </div>
          <p className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
        </div>
        {/* Map Section */}
        <div className="mt-8 h-64 w-full rounded overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps?q=MP+Nagar+Bhopal&output=embed"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Branch Location"
          ></iframe>
        </div>
  {/* Removed previous Career, Help, About blocks as requested */}
        {/* Professional Quick Links & Company Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* About Us Block */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
            <h3 className="font-bold text-blue-700 mb-3">About Us</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Founder Desk</li>
              <li>Vision & Mission</li>
              <li>Board of Directors</li>
              <li>Core Management Team</li>
            </ul>
          </div>
          {/* Products Block */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
            <h3 className="font-bold text-blue-700 mb-3">Products</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Commercial Vehicle Loan</li>
              <li>Car Loan</li>
              <li>Personal Loan</li>
              <li>Secured Business Loan</li>
            </ul>
            
          </div>
          {/* Quick Links Block */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
            <h3 className="font-bold text-blue-700 mb-3">Quick Links</h3>
            <ul className="text-gray-700 space-y-1">
              <li>CSR</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Branch locator</li>
            </ul>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-10 text-center text-xs text-gray-500">
          © Copyright 2024 GROW IN FINANCE LIMITED bhopal. All Rights Reserved; CIN: U65921MP1995PTC0 <br />Made By : Prashant Patel
        </div>
      </div>
    </section>
  );
};

export default Contact;
