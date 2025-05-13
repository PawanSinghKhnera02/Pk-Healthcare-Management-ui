import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(
      "Logging in with ID:",
      id,
      "Password:",
      password,
      "Role:",
      role
    );

    if (role === "doctor") {
      navigate("/doctor-dashboard");
    } else {
      navigate("/patient-dashboard");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100 px-4 relative">
        
        <form
          className="w-[400px] md:w-[500px] lg:w-[600px] p-10 bg-white shadow-xl rounded-lg"
          onSubmit={handleLogin}
        >
          <div className="relative">
            <button
              className="absolute -top-14 -right-13 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => navigate(-1)}
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Login
            </h2>
          </div>
          <div className="mb-4 relative">
            <button
              type="button"
              className="w-full px-4 py-2 bg-gray-200 rounded-lg flex justify-between items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)} Login{" "}
              <ChevronDown size={20} />
            </button>
            {dropdownOpen && (
              <div className="absolute w-full bg-white shadow-lg mt-2 rounded-lg">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setRole("patient");
                    setDropdownOpen(false);
                  }}
                >
                  Patient Login
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setRole("doctor");
                    setDropdownOpen(false);
                  }}
                >
                  Doctor Login
                </button>
      
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">User ID</label>
            <input
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type="text"
              placeholder={`Enter your ${
                role === "doctor" ? "Doctor ID" : "Patient ID"
              }`}
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>

          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link to="/Register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
