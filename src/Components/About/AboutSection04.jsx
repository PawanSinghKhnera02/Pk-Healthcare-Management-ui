import React, { useState } from "react";
import Img1  from "../../assets/Comment01.jpg"
import Img2  from "../../assets/Comment02.jpg"
import Img3  from "../../assets/Comment03.jpg"

const testimonials = [
  {
    quote: "The doctors and staff were very professional and helpful. I received excellent care and would highly recommend this hospital.",
    name: "Pawan Khnera",
    image: Img1,
  },
  {
    quote: "Amazing experience! The hospital's facilities are top-notch, and the doctors truly care about their patients.",
    name: "Kabbu Bhakuni",
    image: Img2,
  },
  {
    quote: "I had a great treatment experience here. The staff was incredibly supportive and friendly.",
    name: "Sam Samuel",
    image: Img3,
  }
];

const AboutSection04 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-200 py-16 px-4 md:px-16 text-center">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Patients Say</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 relative  hover:bg-gray-100 transition-all duration-200 transform hover:scale-104">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full mx-auto mb-4" />
          <p className="text-gray-600 italic">“{testimonials[currentIndex].quote}”</p>
          <h4 className="text-lg font-semibold text-gray-800 mt-4">- {testimonials[currentIndex].name}</h4>
          <div className="flex justify-between mt-4">
            <button onClick={prevTestimonial} className="text-gray-600 hover:text-gray-900">◀</button>
            <button onClick={nextTestimonial} className="text-gray-600 hover:text-gray-900">▶</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection04;