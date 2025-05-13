
import img1 from "../../assets/campImg1.jpg"; 
import img2 from "../../assets/campImg2.jpg"; 
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const UpcomingCamps = () => {
  
  const camps = [
    {
      title: "Health Camp in Nainital",
      date: "June 15, 2025",
      location: "Nainital, Uttarakhand",
      description: "Join us for a free health checkup camp offering medical consultations, free medicines, and health awareness sessions.",
      registerLink: "/register",
      image: img1
    },
    {
      title: "Medical Outreach in Dehradun",
      date: "July 10, 2025",
      location: "Dehradun, Uttarakhand",
      description: "A free health camp focused on providing medical services to underserved communities in Dehradun.",
      registerLink: "/register",
      image: img2
    }
  ];

  return (
    <>
    <section className="py-20 px-6 bg-gradient-to-r from-blue-200 via-green-100 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-8">Upcoming Health Camps</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {camps.map((camp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl transition-transform hover:scale-105"
            >
              {/* Image Section */}
              <img
                src={camp.image}
                alt={camp.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{camp.title}</h3>
              <p className="text-gray-600 mb-4">
                <strong>Date:</strong> {camp.date}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Location:</strong> {camp.location}
              </p>
              <p className="text-gray-700 mb-6">{camp.description}</p>
             <Link
              to="/register"
                className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition"
              >
                  Register Now
            </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
<Footer/>
    </>
  );
};

export default UpcomingCamps;
