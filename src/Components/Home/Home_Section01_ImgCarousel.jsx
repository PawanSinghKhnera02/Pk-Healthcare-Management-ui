import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home_Section01_ImgCarousel() {
  // Image Slider Data
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg",
      title: "PK Hospital",
      description:
        "Providing world-class healthcare services with excellence and care.",
      content: "Join us in providing quality health services.",
    },
    {
      image:
        "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
      title: "PK NGO",
      description:
        "Dedicated to serving the underprivileged and making a difference.",
      content: "Help us make a real impact in the community.",
      buttonText: "Please Donate",
      buttonLink: "/ngo/donate",
    },
    {
      image:
        "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
      title: "PK Camp",
      description: "Join our community outreach camp today!",
      content: "Get involved in helping others and making a change.",
      buttonText: "Join the Camp",
      buttonLink: "/register",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full">
      {/* Image Slider Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Smooth transition
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-none w-full relative h-[80vh]">
              {/* Image Container */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-110"
              />
              {/* Text Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 opacity-0 transition-opacity duration-1000 ease-in-out hover:opacity-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker overlay for text visibility
                }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-center text-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mt-3 max-w-[600px] text-center text-shadow-md">
                  {slide.description}
                </p>
                <div className="mt-4 text-center">
                  <p className="text-xl">{slide.content}</p>
                </div>
                {/* Button for Camp or NGO */}
                {slide.buttonText && (
                  <Link
                    to={slide.buttonLink}
                      className="mt-6 px-6 py-2 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-500 transition duration-300 transform hover:scale-105"
                  >
                    {slide.buttonText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-5 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md opacity-60 hover:opacity-80 hover:scale-110 transition-transform duration-300"
          onClick={prevSlide}
        >
          <FaChevronLeft size={30} />
        </button>
        <button
          className="absolute top-1/2 right-5 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md opacity-60 hover:opacity-80 hover:scale-110 transition-transform duration-300"
          onClick={nextSlide}
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}




