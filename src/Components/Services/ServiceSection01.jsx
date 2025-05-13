
const ServiceSection01 = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-2">
            We provide top-notch healthcare services to our patients.
          </p>
  
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-10 px-6">
            {/* Service 1 */}
            <div className="bg-gray-300 shadow-lg p-6 rounded-lg hover:bg-gray-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-blue-500 text-4xl mb-4">🩺</div>
              <h3 className="text-xl font-semibold text-gray-800">General Checkup</h3>
              <p className="text-gray-600 mt-2">
                Regular health checkups to keep you fit and healthy.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="bg-gray-300 shadow-lg p-6 rounded-lg  hover:bg-gray-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-blue-500 text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-gray-800">Pharmacy Support</h3>
              <p className="text-gray-600 mt-2">
                Get your prescribed medicines easily and quickly.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-gray-300 shadow-lg p-6 rounded-lg  hover:bg-gray-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-blue-500 text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-800">Emergency Care</h3>
              <p className="text-gray-600 mt-2">
                24/7 emergency services for critical patients.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceSection01;
  