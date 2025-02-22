import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="block bg-linear-65 from-black to-blue-500 ">
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="sm:flex-row flex justify-between flex-col">
            <img src='/logo/logo.png' alt='Logo' className="w-20 h-20"/>
          <div className="mt-8 md:mt-0">
            <div className="mb-4 flex max-w-72 items-start justify-start">
    
              <p className="text-white text-sm sm:text-base">
                 SHARAH FAISAL Rd. KARACHI, PK
              </p>
            </div>
            <div className="mb-4 flex max-w-72 items-start justify-start">
              
              <p className="text-white text-sm sm:text-base">
                support@Cybersentinels.co
              </p>
            </div>
          </div>
        </div>
        <div className="mb-14 w-full border-b border-black mt-16"></div>
        <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
          <div className="font-semibold mb-4 sm:mb-0 py-1 text-center sm:text-center">
            <a
              href="#"
              className="inline-block font-normal text-white transition hover:text-[#6366f1] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              About
            </a>
            <a
              href="#"
              className="inline-block font-normal text-white transition hover:text-[#6366f1] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              Features
            </a>
            <a
              href="#"
              className="inline-block font-normal text-white transition hover:text-[#6366f1] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              Works
            </a>
            <a
              href="#"
              className="inline-block font-normal text-white transition hover:text-[#6366f1] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              Support
            </a>
            <a
              href="#"
              className="inline-block font-normal text-white transition hover:text-[#6366f1] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              Help
            </a>
          </div>
          <p className="text-white text-sm sm:text-base">
            © Copyright 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer