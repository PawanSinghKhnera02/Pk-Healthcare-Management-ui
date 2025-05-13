import { useState } from "react";
import Img1 from "../../assets/bgImage3.AVIF";
import Img2 from "../../assets/bgImage2.AVIF";
import Img3 from "../../assets/billImage.jpg";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    doctor: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} with ${formData.doctor} on ${formData.date}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 md:h-[80vh]">
      {/* Image Section (Left) */}
      <div className="w-full md:w-[60%] flex justify-center items-center relative bg-gray-200 h-[55vh] rounded-lg shadow-lg">
        <div className="relative w-[200px] h-[300px] md:w-[300px] md:h-[400px] flex justify-center items-center mt-5">
          <img
            src={Img1}
            alt="Healthcare 1"
            className="absolute top-0 left-0 w-full h-auto object-cover rounded-lg shadow-lg z-10"
          />
          <img
            src={Img2}
            alt="Healthcare 2"
            className="absolute top-[25%] left-[15%] w-full h-auto object-cover rounded-lg shadow-lg z-20"
          />
          <img
            src={Img3}
            alt="Healthcare 3"
            className="absolute top-[50%] left-[30%] w-full h-auto object-cover rounded-lg shadow-lg z-30"
          />
        </div>
      </div>

      {/* Form Section (Right) */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-8 shadow-lg rounded-lg mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Get Appointment Now!</h2>
        <p className="text-gray-600 text-center mt-2 mb-4">
          Get the best medical consultation with our experienced doctors.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a Doctor</option>
            <option value="Dr. Rahul Sharma">Dr. Rahul Sharma</option>
            <option value="Dr. Priya Verma">Dr. Priya Rawat</option>
            <option value="Dr. Anil Kapoor">Dr. Aishwarya Bisht</option>
            <option value="Dr. Neha Gupta">Dr. Renu Gupta</option>
          </select>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}


