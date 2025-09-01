import React from 'react'
import { FaHome, FaCar, FaUser, FaBriefcase, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      name: 'Home Loan',
      icon: <FaHome className="text-green-600 w-16 h-16 mb-2" />,

      desc: 'Digital process, low paperwork, and best rates from top banks.'
    },
    {
      name: 'Vehicle Loan',
      icon: <FaCar className="text-green-600 w-16 h-16 mb-2" />,

      desc: 'Fast approval, digital process, and low interest rates.'
    },
    {
      name: 'Personal Loan',
      icon: <FaUser className="text-green-600 w-16 h-16 mb-2" />,
    
      desc: 'Paperless, quick, and flexible loans for your needs.'
    },
    {
      name: 'Business Loan',
      icon: <FaBriefcase className="text-green-600 w-16 h-16 mb-2" />,
    
      desc: 'Low interest rates, suitable banks, and digital approval.'
    },
    {
      name: 'Credit Card',
      icon: <FaCreditCard className="text-green-600 w-16 h-16 mb-2" />,
    
      desc: 'Best credit card options from leading banks.'
    },
    {
      name: 'Secure & Digital',
      icon: <FaShieldAlt className="text-green-600 w-16 h-16 mb-2" />,
     
      desc: 'Paperless, secure, and fast digital finance solutions.'
    },
  ];

  return (
  <div className="py-10 px-2 sm:px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-700">Our Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <div
            key={service.name}
            className={
              `flex flex-col items-center rounded-xl shadow-lg p-4 sm:p-3 md:p-2 hover:scale-105 transition-transform ` +
              [
                'bg-gradient-to-br from-green-100 to-blue-100',
                'bg-gradient-to-br from-blue-100 to-purple-100',
                'bg-gradient-to-br from-purple-100 to-pink-100',
                'bg-gradient-to-br from-pink-100 to-yellow-100',
                'bg-gradient-to-br from-yellow-100 to-green-100',
                'bg-gradient-to-br from-gray-100 to-blue-100',
              ][idx % 6]
            }
            style={{ minHeight: '220px', maxWidth: '320px', width: '100%' }}
          >
            {React.cloneElement(service.icon, { className: 'w-12 h-12 mb-2 ' + [
              'text-green-600',
              'text-blue-600',
              'text-purple-600',
              'text-pink-600',
              'text-yellow-600',
              'text-gray-600',
            ][idx % 6] })}
            <span className="text-xs text-gray-500 mb-2">{service.iconName}</span>
            <h3 className={
              'text-lg font-semibold mb-2 text-center ' + [
                'text-green-700',
                'text-blue-700',
                'text-purple-700',
                'text-pink-700',
                'text-yellow-700',
                'text-gray-700',
              ][idx % 6]
            }>{service.name}</h3>
            <p className="text-gray-700 text-center font-medium text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
