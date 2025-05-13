import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

import dr1 from "../../assets/Doctor/dr1.jpg";
import dr2 from "../../assets/Doctor/dr2.jpg";
import dr3 from "../../assets/Doctor/dr3.jpg";
import dr4 from "../../assets/Doctor/dr4.jpg";
import dr5 from "../../assets/Doctor/dr5.jpg";

const experts = [
  {
    id: 1,
    image: dr1,
    name: "Dr. A. Sharma (Cardiologist)",
    description: "Expert heart care services to keep your heart healthy.",
  },
  {
    id: 2,
    image: dr2,
    name: "Dr. N. Verma (Neurologist)",
    description: "Advanced treatment for brain and nervous system disorders.",
  },
  {
    id: 3,
    image: dr3,
    name: "Dr. Angela Yu (Orthopedist )",
    description: "Comprehensive care for bone and joint health.",
  },
  {
    id: 4,
    image: dr4,
    name: "Dr. Anjali Gupta (Pediatrician )",
    description: "Specialized healthcare for children and infants.",
  },
  {
    id: 5,
    image: dr5,
    name: "Dr. Rohit Bansal (Dermatologist )",
    description: "Effective skin care treatments and solutions.",
  },
];

export function Home_Section04_ExpertCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experts.length - 4 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= experts.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-200 via-gray-600 to-gray-300">
      <div className="relative w-[96%] mx-auto py-10 overflow-hidden">
        <h2 className="text-3xl text-white font-bold text-center">
          Our Medical Experts
        </h2>
        <p className="text-xl text-white m-auto w-[80vw] text-center py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra.
        </p>

        <div
          className="flex-col flex md:flex-row transition-transform duration-500 gap-5"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="min-w-[24%] flex flex-col items-center p-6 bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-75 object-contain rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{expert.name}</h3>
              <p className="text-gray-600 text-center mt-2">
                {expert.description}
              </p>
              <Link
                to={`/doctors/${expert.id}`}
                className="mt-4 text-blue-500 hover:text-blue-800 font-semibold"
              >
                See More →
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Hidden on Mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}



