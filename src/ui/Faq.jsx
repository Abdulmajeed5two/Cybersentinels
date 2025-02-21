import React, { useState } from 'react';

const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      title: "What is AI-powered protection?",
      content:
        "AI-powered protection refers to the use of artificial intelligence technologies to safeguard individuals and organizations from digital threats such as fraud, privacy breaches, and deepfake attacks. Our solutions provide real-time monitoring and alerts to keep you safe.",
    },
    {
      title: "How does your fraud detection work?",
      content:
        "Our fraud detection system uses advanced algorithms to analyze patterns and behaviors in real time. It instantly identifies and prevents scams, ensuring that you are alerted to potential threats before they can affect you.",
    },
    {
      title: "What are hidden camera alerts?",
      content:
        "Hidden camera alerts notify you if a hidden camera is detected in your vicinity. This feature helps protect your privacy by ensuring you are aware of any unauthorized surveillance.",
    },
    {
      title: "How does unauthorized screenshot prevention work?",
      content:
        "Our unauthorized screenshot prevention feature blocks unwanted screenshots and screen recordings, protecting sensitive information from being captured without your consent.",
    },
    {
      title: "Can I remove harmful content from social media?",
      content:
        "Yes, our platform allows you to remove harmful content that invades your privacy on social media. This feature helps you maintain control over your online presence and protect your personal information.",
    },
    {
      title: "How does your service ensure data privacy?",
      content:
        "We prioritize a privacy-first approach, utilizing secure encryption methods to protect your data. Our systems are designed to ensure that your information remains confidential and is not shared without your consent.",
    },
    {
      title: "What kind of support do you offer?",
      content:
        "We provide 24/7 monitoring and instant alerts to keep you informed of any potential threats. Our support team is also available to assist you with any questions or concerns you may have.",
    },
    {
      title: "What are the pricing plans available?",
      content:
        "We offer flexible pricing plans tailored for both individuals and businesses. You can choose a plan that best fits your needs and budget, ensuring you receive the protection you require.",
    },
  ];

  return (
    <>
      <section className='bg-linear-65 from-black to-purple-500 '>
        <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="flex flex-col items-start lg:flex-row lg:space-x-20">
            <div className="lg:flex-[1_1_500px] w-full flex-none">
              <div className="max-w-3xl mb-8 md:mb-12 lg:mb-16">
                <h2 className="font-bold text-3xl md:text-5xl text-white">AI-Powered Security FAQs</h2>
                <div className="mt-4 max-w-lg">
                  <p className="text-white text-sm sm:text-base">
                    Our AI-powered security solutions are designed to protect you from digital threats. Here are some frequently asked questions about our services.
                  </p>
                </div>
              </div>
              <div className="mb-6 h-full w-full overflow-auto bg-[#f0f2ff] p-8 rounded-md">
                <div className="flex flex-row gap-4">
                  <img
                    src="/logo/logo.png"
                    alt="Placeholder"
                    className="inline-block h-12 w-12 object-cover rounded-full"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h5 className="text-xl font-bold">Still have questions?</h5>
                    <div className="max-w-sm">
                      <p className="text-gray-500 text-sm sm:text-base">
                        Can’t find the answer you’re looking for? Please chat with our support team for more help.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-6 mt-8 h-[0.5px] w-full bg-[#f0f2ff]"></div>
                <a
                  href="#"
                  className="inline-block items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="lg:flex-[1_1_500px] w-full flex-none">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-6 w-full overflow-hidden bg-[#f0f2ff] p-8 rounded-md"
                >
                  <div
                    className="flex cursor-pointer items-start justify-between"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="text-xl font-bold">{faq.title}</p>
                    <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                      <div
                        className={`absolute h-5 w-0.5 bg-black transition-transform duration-300 ${openFAQ === index ? "rotate-90" : ""}`}
                      ></div>

                      <div className="h-0.5 w-5 bg-black"></div>
                    </div>
                  </div>
                  {openFAQ === index && (
                    <div className="w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl">
                      <p className="text-sm sm:text-base">{faq.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;