import React from 'react'

const HeroSec = () => {
  return (
    <>
		<header className="bg-linear-65 from-black to-blue-500 ">
		  <div className="bg-gray-300 w-full h-full" style={{
        backgroundImage: "url('/img/andrew-kliatskyi-9l_R8EBQ7-c-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
		    <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
		      <h1 className="mb-6 max-w-3xl text-4xl text-white font-bold md:mb-10 md:text-6xl lg:mb-12 md:leading-tight">
              Cybersentinels: AI-Powered Cybersecurity Protection
		      </h1>
		      <div className="flex items-stretch">
		        <a href="#" className="mr-6 rounded-md bg-blue-500 px-8 py-4 text-center font-semibold text-white md:mr-8">
		          Create Case
		        </a>
		        <a href="#" className="flex items-center justify-center rounded-md border border-solid border-black bg-white px-6 py-3 font-bold">
		          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d411e6cf99_Vector%20(6).svg" alt="" className="mr-2 max-h-4 w-5" />
		          <p>Download App</p>
		        </a>
		      </div>
		    </div>
		  </div>
		  <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
		    <div className="relative flex max-w-7xl flex-col gap-4 md:flex-row lg:justify-end">
		      <div className="max-w-xl md:mr-[520px] c-mr-520px md:max-w-xs lg:mr-auto">
		        <h3 className="text-2xl font-bold md:text-3xl text-white">Introduction</h3>
		        <div className="my-6 w-16 border-t border-black"></div>
		        <p className="text-sm text-gray-500 text-white">
                Protect yourself from fraud, deepfake threats, and privacy breaches.
          Our AI-driven platform ensures security with fraud detection, hidden
          camera alerts, unauthorized screenshot prevention, and social media
          content removal.
		        </p>
		      </div>
		      <img src="/img/back.jpg" alt="" className="relative -bottom-6 -right-6 mt-20 w-[480px] object-cover md:absolute md:mt-0 md:h-[480px] c-h-480px" />
		    </div>
		  </div>
		</header>
    </>
  )
}

export default HeroSec;
