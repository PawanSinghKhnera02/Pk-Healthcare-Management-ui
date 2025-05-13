import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { campData } from "../../data/CampMedia"; // Import camp data
import Footer from "../Footer/Footer";

const CampGalleryPage = () => {
  const { id } = useParams();
  const camp = campData.find((camp) => camp.id === id); // Find the specific camp based on the ID

  // For image navigation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!camp) {
    return <div className="text-center py-20 text-red-500">Camp not found</div>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === camp.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? camp.images.length - 1 : prevIndex - 1
    );
  };

  return (

    <>
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-100 to-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">{camp.title}</h2>
        <p className="mb-8 text-center text-gray-600">{camp.description}</p>

        {/* Image Gallery */}
        <div className="relative mb-10 bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={camp.images[currentImageIndex]}
            alt={`camp-img-${currentImageIndex}`}
            className="w-full h-auto max-h-96 object-contain mb-4"
          />
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition"
          >
            &#10094;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition"
          >
            &#10095;
          </button>
        </div>

        {/* Videos */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center text-green-700">Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {camp.videos.map((video, index) => (
              <iframe
                key={index}
                src={video}
                title={`video-${index}`}
                className="w-full h-64 rounded-lg shadow-lg"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
};

export default CampGalleryPage;
