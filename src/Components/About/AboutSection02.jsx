
import AboutImage02 from "../../assets/About02.jpg";


const AboutSection02 = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-blue-100 to-red-100 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-6">
            We provide high-quality medical services with expert doctors and advanced technology.
            Your health and safety are our top priorities.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <p className="text-gray-700">Personalized Treatment Plans</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <p className="text-gray-700">State-of-the-Art Infrastructure</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <p className="text-gray-700">Patient-Centered Approach</p>
            </li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center h-[30vh]">
          <img
            src={AboutImage02} 
            alt="Why Choose Us"
            className="rounded-lg shadow-lg   hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </section>

    </>
  );
};

export default AboutSection02;
