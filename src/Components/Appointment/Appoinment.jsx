
import dr1 from "../../assets/Doctor/dr1.jpg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function BookAppointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    aadhaar: "",
    gender: "",
    reason: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Remove error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validation Checks
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required!";
    if (!formData.aadhaar.trim()) newErrors.aadhaar = "Aadhaar Number is required!";
    else if (!/^\d{12}$/.test(formData.aadhaar)) newErrors.aadhaar = "Aadhaar must be 12 digits!";
    if (!formData.gender) newErrors.gender = "Please select a gender!";
    if (!formData.reason) newErrors.reason = "Please select a reason for booking!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form Submitted Successfully! 🚀");
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center pt-8">
      <div className="h-full p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-200 relative">
        
        {/* Cross Button (Top-Right Corner) */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 right-2 text-gray-600 bg-gray-200 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center text-xl"
        >
          ✖
        </button>

        {/* Left Side - Doctor Image */}
        <div className="flex flex-col items-center border p-6 rounded-xl shadow-md bg-white">
          <img src={dr1} alt="Doctor" className="w-full h-80 object-contain rounded-lg mb-4" />
        </div>

        {/* Right Side - Appointment Form */}
        <div className="border p-6 rounded-xl shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-5 text-center">Book an Appointment</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="aadhaar"
                placeholder="Aadhaar Number"
                className="w-full p-3 border rounded-md"
                value={formData.aadhaar}
                onChange={handleChange}
              />
              {errors.aadhaar && <p className="text-red-500 text-sm">{errors.aadhaar}</p>}
            </div>

            <div className="mb-3">
              <select
                name="gender"
                className="w-full p-3 border rounded-md"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>

            <div className="mb-4">
              <select
                name="reason"
                className="w-full p-3 border rounded-md"
                value={formData.reason}
                onChange={handleChange}
              >
                <option value="">Reason for Booking</option>
                <option>General Checkup</option>
                <option>Consultation</option>
                <option>Emergency</option>
                <option>Follow-up</option>
              </select>
              {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
            </div>

            <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}







