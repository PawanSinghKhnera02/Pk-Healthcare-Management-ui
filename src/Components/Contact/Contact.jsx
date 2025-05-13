import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-40 md:h-56 bg-gradient-to-r from-white-500 to-gray-400">
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-2xl md:text-4xl text-gray-800 font-bold">Contact Us</h1>
          </div>
        </div>

        {/* Contact Information & Form */}
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Box */}
          <div className="bg-gradient-to-r from-blue-100 to-red-100 p-6 md:p-12 shadow-2xl rounded-lg border-l-8 border-blue-600 hover:shadow-3xl transition-shadow duration-300">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-blue-700">Get in Touch</h2>
            <p className="mb-4 md:mb-6 text-gray-700 font-medium md:font-bold text-lg md:text-xl">
              For any inquiries, feel free to reach out to us.
            </p>
            <p className="text-base md:text-lg text-gray-800">
              <strong>Address:</strong> 16th Milestone, Chakrata Rd, Dehradun, Uttarakhand 248008
            </p>
            <p className="text-base md:text-lg text-gray-800">
              <strong>Phone:</strong> 1800 889 7351
            </p>
            <p className="text-base md:text-lg text-gray-800">
              <strong>Email:</strong> info.pkhealthcare@centre.ac.in
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=16th+Milestone,+Chakrata+Rd,+Dehradun,+Uttarakhand+248008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:text-blue-800 mt-4 inline-block text-base md:text-lg"
            >
              📍 Get Directions
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-r from-red-100 to-blue-100 p-6 md:p-8 shadow-lg rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded h-32"
              ></textarea>
              <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?..." 
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;



