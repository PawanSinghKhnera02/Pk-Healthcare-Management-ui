import React, { useState } from "react";
import {faqData} from "../../data/CampMedia"

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleFaqs, setVisibleFaqs] = useState(10); // Show 10 FAQs initially

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const showMoreFaqs = () => {
    setVisibleFaqs(faqData.length); // Show all FAQs
  };

  return (
    <section className="w-screen mx-auto px-6 py-16 bg-gray-100 shadow-lg">
      <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.slice(0, visibleFaqs).map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div
              onClick={() => toggleAnswer(index)}
              className="text-xl font-semibold text-gray-800 cursor-pointer flex justify-between items-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="mt-2 text-gray-700 text-lg">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleFaqs < faqData.length && (
        <div className="text-center mt-6">
          <button
            onClick={showMoreFaqs}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQSection;

