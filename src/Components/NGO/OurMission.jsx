import {
  FaHospitalSymbol,
  FaHandsHelping,
  FaHeartbeat,
  FaLeaf,
  FaUsers,
  FaStethoscope,
} from "react-icons/fa";

import img from "../../assets/ngo_01.AVIF";
import Footer from "../Footer/Footer";

const missions = [
  {
    title: "Free Medical Camps",
    description: "Providing essential healthcare services in rural and underserved areas.",
    icon: <FaHospitalSymbol />,
  },
  {
    title: "Community Engagement",
    description: "Connecting with communities to educate, empower, and uplift local populations.",
    icon: <FaUsers />,
  },
  {
    title: "Sustainable Healthcare",
    description: "Promoting long-term health solutions through awareness and access.",
    icon: <FaLeaf />,
  },
  {
    title: "Preventive Care Awareness",
    description: "Spreading knowledge about hygiene, nutrition, and regular health checkups.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Inclusive Volunteering",
    description: "Creating opportunities for everyone to contribute to the cause.",
    icon: <FaHandsHelping />,
  },
  {
    title: "Mobile Health Units",
    description: "Delivering on-the-go medical services to people in remote locations.",
    icon: <FaStethoscope />,
  },
];

const OurMission = () => {
  return (
    <>
      <section className="py-16 px-4 sm:px-10 bg-gray-200" id="our-mission">
        {/* Heading with background image */}
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-xl py-20 mb-16 transition-all duration-500 ease-in-out transform hover:translate-y-3"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="relative z-10 text-center px-4 sm:px-10">
            <h2 className="text-5xl font-bold text-white drop-shadow-lg">
              Our Mission
            </h2>
            <p className="text-white max-w-3xl mx-auto mt-4 text-lg drop-shadow-md">
              At PK Healthcare Centre, our mission is to bridge the healthcare gap for underserved communities. Through our NGO initiatives, we deliver impactful services aimed at prevention, education, and treatment.
            </p>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-500 ease-in-out text-center"
            >
              <div className="text-green-600 text-4xl mb-4 flex justify-center">
                {mission.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OurMission;
