import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import cardiacImg from "../../assets/cardiaSurgery.jpg";
import neuroImg from "../../assets/cancerScreening.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    image: cardiacImg,
    name: "Cardiology",
    description: "Expert heart care services to keep your heart healthy.",
  },
  {
    id: 2,
    image: neuroImg,
    name: "Neurology",
    description: "Advanced treatment for brain and nervous system disorders.",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/4506075/pexels-photo-4506075.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Orthopedics",
    description: "Comprehensive care for bone and joint health.",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/4005611/pexels-photo-4005611.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Pediatrics",
    description: "Specialized healthcare for children and infants.",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Dermatology",
    description: "Effective skin care treatments and solutions.",
  },
];

export function Home_Section02_ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 4 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= services.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-200">
      <div className="relative w-[96%] mx-auto py-10 overflow-hidden bg-gray-200">
        <div
          className="flex-col flex md:flex-row transition-transform duration-500 gap-5"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="min-w-[24%] flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
              <p className="text-gray-600 text-center mt-2">
                {service.description}
              </p>
              <Link
                to={`/services/${service.id}`}
                className="mt-4 text-blue-500 hover:text-blue-800 font-semibold"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - hidden on mobile */}
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
