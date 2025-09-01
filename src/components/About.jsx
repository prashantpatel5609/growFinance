import React from 'react'

const About = () => {
  return (
    <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-100 min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-blue-700">About Us</h2>
      <p className="text-lg sm:text-xl text-center text-gray-700 mb-6 max-w-2xl">
        GrowFinance is dedicated to empowering your financial journey. We believe in making finance simple, accessible, and secure for everyone. Our mission is to provide fast, paperless, and digital solutions for all your loan and credit needs, partnering with top banks to offer the best rates and service.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
        {/* ...existing cards... */}
        {/* 8+ Years Experience - Vibrant */}
        <div className="flex flex-col items-center bg-gradient-to-tr from-yellow-300 via-pink-200 to-purple-200 rounded-2xl shadow-2xl p-8 max-w-xs border-4 border-yellow-400">
          <div className="bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 rounded-full p-3 mb-2 shadow-lg">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Experience" className="w-16 h-16" />
          </div>
          <h3 className="text-2xl font-extrabold text-pink-700 mb-2 tracking-wide drop-shadow">8+ Years of Excellence</h3>
          <p className="text-purple-700 text-center text-base font-semibold">Delivering trusted financial solutions and customer satisfaction for over 8 years.</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 max-w-xs">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Empower" className="w-16 h-16 mb-2" />
          <h3 className="text-xl font-semibold text-green-700 mb-2">Empowering You</h3>
          <p className="text-gray-600 text-center text-sm">We help you achieve your dreams with easy access to loans and credit.</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 max-w-xs">
          <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Secure" className="w-16 h-16 mb-2" />
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Secure & Trusted</h3>
          <p className="text-gray-600 text-center text-sm">Your data and transactions are protected with industry-leading security.</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 max-w-xs">
          <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Fast" className="w-16 h-16 mb-2" />
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Fast & Digital</h3>
          <p className="text-gray-600 text-center text-sm">Experience instant approvals and a seamless digital process.</p>
        </div>
        {/* Customer Delivery */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 max-w-xs">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="Customer Delivery" className="w-16 h-16 mb-2" />
          <h3 className="text-xl font-semibold text-pink-700 mb-2">Customer Delivery</h3>
          <p className="text-gray-600 text-center text-sm">Thousands of happy customers served with excellence and care.</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <span className="inline-block bg-blue-100 text-blue-700 font-bold px-6 py-2 rounded-full shadow">Your Growth, Our Commitment</span>
      </div>
    </div>
    )

}
export default About
