import React from 'react';

const KeyFeatures = () => {
  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/img/bg.jpg')" }}
    >
      <div className="inset-0 bg-black bg-opacity-50"></div>
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 text-white">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-20">
          <div className="h-full w-full">
            <img 
              src="https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Security Features" 
              className="mx-auto inline-block h-full w-full max-w-2xl object-cover rounded-lg shadow-lg" 
            />
          </div>
          <ul className="grid max-w-2xl grid-cols-2 sm:gap-5 md:max-w-none">
            {[
              { title: "Fraud Detection", desc: "AI-powered fraud detection to keep you safe.", icon: "🔍" },
              { title: "deepfake detection", desc: "Detects deepfakes instantly with fast processing.", icon: "📷" },
              { title: "Screenshot Prevention", desc: "Block unauthorized screenshots and screen recording.", icon: "🚫" },
              { title: "Social Media Cleanup", desc: "Easily remove harmful online content.", icon: "🛡️" },
              { title: "Data Encryption", desc: "End-to-end encryption for your privacy.", icon: "🔒" },
              { title: "24/7 Monitoring", desc: "Stay protected with real-time AI monitoring.", icon: "⏳" }
            ].map((feature, index) => (
              <li key={index} className=" text-black flex flex-col p-5 bg-white bg-opacity-10 rounded-lg backdrop-blur-md">
                <span className="text-3xl mb-4">{feature.icon}</span>
                <p className="mb-4 font-semibold text-lg">{feature.title}</p>
                <p className="text-sm text-black">{feature.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;