
import AboutImage01 from "../../assets/About01.jpg";

const AboutSection01 = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center h-[35vh]">
          <img
            src={AboutImage01} 
            alt="About PK Healthcare Centre"
            className="rounded-lg shadow-lg  hover:bg-gray-200 transition-all duration-200 transform hover:scale-104"
          />
        </div>
        
        {/* Right Side Content */}
        <div >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About PK Healthcare Centre</h2>
          <p className="text-gray-600 mb-6">
          PK Healthcare Centre is committed to providing high-quality medical care with a patient-centered approach. Our experienced doctors and dedicated staff ensure that every patient receives personalized attention and the best possible treatment.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-blue-500 text-xl mr-2">✔</span>
              <p className="text-gray-700">Experienced & Certified Doctors</p>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 text-xl mr-2">✔</span>
              <p className="text-gray-700">24/7 Emergency Services</p>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 text-xl mr-2">✔</span>
              <p className="text-gray-700">Modern Equipment & Labs</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection01;