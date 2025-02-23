import React from 'react'

const ContactUs = () => {
  return (
    <>
		<section className='bg-linear-65 from-black to-blue-500 '>
		  <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
		    <h2 className="text-3xl font-bold md:text-5xl text-white">Contact Sales</h2>
		    <p className="mx-auto mb-8 mt-4 max-w-lg text-white md:mb-12 lg:mb-16">
            Cybersentinels: AI-Powered Cybersecurity Protection
		    </p>
		    <form name="wf-form-name" method="get" className="mx-auto mb-4 text-left sm:px-4 md:px-20">
		      <div className="mb-4 grid w-full grid-cols-2 gap-6">
		        <div>
		          <label htmlFor="name-2" className="mb-1 font-medium text-white">
		            First Name
		          </label>
		          <input type="text" className=" block h-9 w-full text-white rounded-md border border-solid border-white px-3 py-6 text-sm text-black" placeholder="" required="" />
		        </div>
		        <div>
		          <label htmlFor="name-3" className="mb-1 font-medium text-white">
		            Last Name
		          </label>
		          <input type="text" className=" block h-9 w-full text-white rounded-md border border-solid border-white px-3 py-6 text-sm text-black" placeholder="" required="" />
		        </div>
		      </div>
		      <div className="mb-4">
		        <label htmlFor="field" className="mb-1 font-medium text-white">
		          Company Website
		        </label>
		        <input type="text" className="mb-4 block h-9 w-full text-white rounded-md border border-solid border-white px-3 py-6 text-sm text-black" />
		      </div>
		      <div className="mb-4">
		        <label htmlFor="field" className="mb-1 font-medium text-white">
		          Email
		        </label>
		        <input type="text" className="mb-4 block h-9 w-full text-white rounded-md border border-solid border-white px-3 py-6 text-sm text-black" />
		      </div>
		      <div className="mb-5 md:mb-6 lg:mb-8">
		        <label htmlFor="field" className="mb-1 font-medium text-white">
		          Message
		        </label>
		        <textarea placeholder="" maxLength="5000" name="field" className="mb-2.5  text-white block h-auto min-h-44 w-full rounded-md border border-solid border-white px-3 py-2 text-sm text-black"></textarea>
		      </div>
		      <label className="flex items-center cursor-pointer mb-1 justify-center pb-4 md:pl-5">
		        <div className="relative w-12 h-7 transition duration-200 ease-linear rounded-full bg-gray-100">
		          <span className="absolute left-1 top-1 transition duration-200 ease-in-out transform bg-white rounded-full w-5 h-5" />
		        </div>
		        <input type="checkbox" className="hidden" />
		        <span className="ml-4 inline-block text-white cursor-pointer text-sm max-w-48 md:max-w-full" htmlFor="checkbox-2">
		          By selecting this, you agree to the{" "}
		          <a href="#"> Privacy Policy</a> and <a href="#">Cookie Policy</a>
		        </span>
		      </label>
		
		      <input type="submit" value="Join Cybersentinels" className="inline-block w-full rounded-md cursor-pointer bg-blue-500 px-6 py-3 text-center font-semibold text-white" />
		    </form>
		  </div>
		</section>
    </>
  )
}

export default ContactUs