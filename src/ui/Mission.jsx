import React from 'react';

const Mission = () => {
  return (
    <>
      <section className='bg-linear-65 from-black to-blue-500 '> 
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <h2 className="mb-8 text-3xl font-bold md:text-5xl text-white lg:mb-14">
            Meet AI-Powered Protection
          </h2>
          <p className="mb-8 max-w-lg text-sm text-white sm:text-base lg:mb-24">
            Our AI-Powered Protection platform is transforming the way individuals and businesses safeguard their digital lives.  
            With real-time threat detection and proactive privacy measures, we empower users to navigate the digital landscape  
            with confidence and security.
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI-driven security"
              className="inline-block h-full w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-5 rounded-2xl border border-solid border-white p-10 sm:p-20">
              <h2 className="text-3xl font-bold md:text-5xl text-white">Our Mission</h2>
              <p className="text-sm text-white sm:text-base">
                Our mission is to harness the power of AI to provide cutting-edge security solutions that protect users from  
                digital threats, including fraud, privacy breaches, and unauthorized surveillance. Whether you're an individual  
                seeking personal safety or a business aiming to secure sensitive data, our technology adapts to your needs,  
                offering real-time alerts, performance analysis, and tailored security measures to ensure peace of mind.
                <br />
                <br />
                We believe in creating a safer digital environment by leveraging AI for proactive, efficient, and insightful  
                protection. Your security is our priority, and your next step towards a safer online experience starts here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;