import {
  FaRegHandshake,
  FaUsers,
  FaHeart,
  FaClipboardList,
} from "react-icons/fa";
import Footer from "../Footer/Footer";
import img01 from "../../assets/volunteers.png";

const volunteerOpportunities = [
  {
    title: "Medical Assistance",
    description: "Help us with basic medical care in clinics and mobile units.",
    icon: <FaHeart />,
  },
  {
    title: "Community Outreach",
    description:
      "Engage with local communities through educational programs and events.",
    icon: <FaUsers />,
  },
  {
    title: "Fundraising & Awareness",
    description:
      "Assist in fundraising events and spreading awareness of our mission.",
    icon: <FaClipboardList />,
  },
  {
    title: "Administrative Support",
    description: "Help with office work, data entry, and logistical support.",
    icon: <FaRegHandshake />,
  },
];

const VolunteerWithUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-repeat py-24 px-4 sm:px-10"
        style={{ backgroundImage: `url(${img01})` }}
      >
        <div className="bg-gradient-to-br from-green-600 via-teal-500 to-emerald-400 text-center text-white py-20 px-4 sm:px-10 rounded-xl shadow-lg">
          <h2 className="text-5xl font-bold drop-shadow-lg">
            Volunteer with Us
          </h2>
          <p className="text-xl mt-4 max-w-3xl mx-auto drop-shadow-md">
            Join us in making a difference! Whether you’re passionate about
            healthcare, education, or community outreach, we welcome your help.
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 px-4 sm:px-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Why Volunteer?
        </h3>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-lg text-gray-700">
              Volunteering with PK Healthcare Centre gives you the opportunity
              to make a direct impact on the lives of those in need. You’ll gain
              valuable experience, meet like-minded individuals, and have the
              satisfaction of knowing you’re contributing to meaningful causes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-lg text-gray-700">
              Our volunteers become part of a vibrant community, committed to
              improving the healthcare of underserved areas. Together, we help
              bridge gaps in healthcare, provide education, and empower those in
              need.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-16 px-4 sm:px-10 bg-gradient-to-br from-white via-green-50 to-emerald-100">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Volunteer Opportunities
        </h3>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {volunteerOpportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-green-600 text-4xl mb-4 flex justify-center">
                {opportunity.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">
                {opportunity.title}
              </h4>
              <p className="text-gray-600">{opportunity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16 px-4 sm:px-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Apply to Volunteer
        </h3>
        <form className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-4 mt-2 bg-gray-200 rounded-xl"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-4 mt-2 bg-gray-200 rounded-xl"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Why do you want to volunteer with us?
            </label>
            <textarea
              className="w-full p-4 mt-2 bg-gray-200 rounded-xl"
              rows="4"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default VolunteerWithUs;
