import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    aadhaar: "",
    gender: "",
    dob: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Simple Validation
    for (let key in formData) {
      if (!formData[key].trim()) {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required!`;
      }
    }

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = "Invalid Phone Number!";
    if (formData.aadhaar && !/^[0-9]{12}$/.test(formData.aadhaar)) newErrors.aadhaar = "Aadhaar must be 12 digits!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Registration Successful!");
  };

  return (
    <div className="min-h-screen pt-5 flex items-center justify-center bg-gray-100 relative">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
        {/* Cross Button to Go Back */}
        <button onClick={() => navigate(-1)} className="absolute top-3 right-3 text-gray-600 text-2xl">&times;</button>
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Now</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: "fullName", title: "Full Name", placeholder: "Enter your full name" },
            { name: "phone", title: "Phone Number", placeholder: "Enter your phone number" },
            { name: "aadhaar", title: "Aadhaar Number", placeholder: "Enter your Aadhaar number" },
            { name: "email", title: "Email", placeholder: "Enter your email" },
          ].map(({ name, title, placeholder }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{title}</label>
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                className="w-full p-3 border rounded-md"
                value={formData[name]}
                onChange={handleChange}
              />
              {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
            </div>
          ))}

          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
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

          <div>
            <label className="block text-gray-700 font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full p-3 border rounded-md"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;


