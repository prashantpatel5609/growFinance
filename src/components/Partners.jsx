import React from 'react'

const Partners = () => {
  const partnerLogos = [
    {
      name: "Tata Capital",
      img: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/tata-aig-logo.png",
    },
    {
      name: "ICICI Bank",
      img: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/icici-bank-app-icon.png",
    },
    {
      name: "HDFC Bank",
      img: "https://w7.pngwing.com/pngs/347/43/png-transparent-hdfc-bank-logo-indian-bank-thumbnail.png",
    },
    {
      name: "PNB",
      img: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/pnb-app-icon.png",
    },
    {
      name: "Aditya Birla",
      img: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/aditya-birla-capital-app-icon.png",
    },
    {
      name: "Axis Bank",
      img: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/axis-bank-logo-icon.png",
    },
    {
      name: "SBI",
      img: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/sbi-logo-icon.png",
    },
    {
      name: "Bajaj Finserv",
      img: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/bajaj-finance-logo-icon.png",
    },
    {
      name: "Kotak Mahindra",
      img: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/kotak-mahindra-bank-logo.png",
    },
    {
      name: "Bank of Baroda",
      img: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/bob-logo-icon.png",
    },
  ];

  return (
      <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-green-700">Our Partners</h2>
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-items-center">
            {partnerLogos.map((partner) => (
              partner.img ? (
                <div key={partner.name} className="flex flex-col items-center">
                  <img
                    src={partner.img}
                    alt={partner.name + ' logo'}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain mb-2 drop-shadow-lg bg-white rounded-lg p-2 border border-gray-200"
                    loading="lazy"
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">{partner.name}</span>
                </div>
              ) : (
                <div key={partner.name} className="flex flex-col items-center justify-center">
                  <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-green-700 font-[Poppins,Arial,sans-serif]">{partner.name}</span>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
  );
}

export default Partners
