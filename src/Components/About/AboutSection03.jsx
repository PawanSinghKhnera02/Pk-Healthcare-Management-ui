
import AboutImg03 from "../../assets/About03.jpg";

const AboutSection03 = () => {
  return (

    <section className="bg-gradient-to-r from-red-100 to-blue-100 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center h-[35vh]">
          <img
            src= {AboutImg03}
            alt="More About Us"
            className="rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-200 transform hover:scale-104"
          />
        </div>
        
        {/* Right Side - Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">More About Us</h2>
          <p className="text-gray-600 mb-6">
            We are dedicated to providing world-class medical services with a compassionate approach.
            Our mission is to ensure the best care for our patients.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              ✔ <p className="text-gray-700 ml-2">Highly Qualified Medical Staff</p>
            </li>
            <li className="flex items-center">
              ✔ <p className="text-gray-700 ml-2">Comprehensive Health Services</p>
            </li>
            <li className="flex items-center">
              ✔ <p className="text-gray-700 ml-2">Commitment to Patient Well-being</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection03;
