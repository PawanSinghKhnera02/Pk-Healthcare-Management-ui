import React from "react";
import { useNavigate } from "react-router-dom";
import { campData } from "../../data/CampMedia"; // Import camp data
import Footer from "../Footer/Footer";

const PastCamps = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-100 to-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-600 mb-12 text-center">Past Camps</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {campData.map((camp) => (
            <div
              key={camp.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={camp.images[0]} // Show first image of each camp
                alt={camp.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center">{camp.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{camp.description}</p>
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => navigate(`/camp/${camp.id}`)} // Navigate to camp details page
                >
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
};

export default PastCamps;
