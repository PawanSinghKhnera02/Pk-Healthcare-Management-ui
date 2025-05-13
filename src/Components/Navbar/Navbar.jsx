import { useState } from "react";
import { NavLink } from "react-router-dom";
import TopBanner from "../Banner/Banner";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active

  const activeLink = "text-green-400 font-bold border-b-2 border-green-400";
  const normalLink = "hover:text-gray-300";

  // Function to toggle the dropdown
  const toggleDropdown = (section) => {
    setActiveDropdown(prev => (prev === section ? null : section)); // Toggle the dropdown visibility
  };

  // Close the dropdown when an option is selected
  const handleOptionSelect = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <TopBanner />
      <nav className="bg-gray-600 p-4 shadow-md fixed top-8 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl text-white font-bold cursor-pointer">PK Healthcare Centre</h1>

          {/* Mobile Menu Button */}
          <button className="xl:hidden text-white text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex space-x-10 text-white">
            <li><NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? activeLink : normalLink}>About Us</NavLink></li>

            {/* NGO Dropdown */}
            <li className="relative">
              <button
                className="hover:text-gray-300"
                onClick={() => toggleDropdown("ngo")}
              >
                NGO ▾
              </button>
              {activeDropdown === "ngo" && (
                <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 w-48 bg-white text-black p-2 space-y-2 shadow-lg">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                  <ul>
                    <li>
                      <NavLink to="/ngo/ourmission" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionSelect}>
                        Our Mission
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/ngo/volunteer" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionSelect}>
                        Volunteer with Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/ngo/donate" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionSelect}>
                        Donate
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Camps Dropdown */}
            <li className="relative">
              <button
                className="hover:text-gray-300"
                onClick={() => toggleDropdown("camp")}
              >
                Camps ▾
              </button>
              {activeDropdown === "camp" && (
                <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 w-48 bg-white text-black p-2 space-y-2 shadow-lg">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                  <ul>
                    <li>
                      <NavLink to="/camp/upcoming_camps" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionSelect}>
                        Upcoming Camps
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/register" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionSelect}>
                        Register for a Camp
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/camp/past_camps" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionSelect}>
                        Past Camps
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li><NavLink to="/services" className={({ isActive }) => isActive ? activeLink : normalLink}>Services</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : normalLink}>Contact</NavLink></li>
          </ul>

          {/* Right Side Buttons */}
          <div className="hidden xl:flex space-x-4">
            <NavLink to="/appointment" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Book an Appointment</NavLink>
            <NavLink to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</NavLink>
            <NavLink to="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register</NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-gray-700 p-4 text-center">
            <ul className="space-y-4 text-white">
              <li><NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</NavLink></li>
              <li><NavLink to="/services" onClick={() => setMobileMenuOpen(false)}>Services</NavLink></li>

              {/* NGO Dropdown */}
              <li className="relative">
                <button
                  className="hover:text-gray-300"
                  onClick={() => toggleDropdown("ngo")}
                >
                  NGO ▾
                </button>
                {activeDropdown === "ngo" && (
                  <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 w-48 bg-white text-black p-2 space-y-2 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                    <ul>
                      <li>
                        <NavLink to="/ngo/ourmission" className="block px-4 py-2 hover:bg-gray-200" onClick={() => { handleOptionSelect(); setMobileMenuOpen(false); }}>
                          Our Mission
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/ngo/volunteer" className="block px-4 py-2 hover:bg-gray-200" onClick={() => { handleOptionSelect(); setMobileMenuOpen(false); }}>
                          Volunteer with Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/ngo/donate" className="block px-4 py-2 hover:bg-gray-200" onClick={() => { handleOptionSelect(); setMobileMenuOpen(false); }}>
                          Donate
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Camps Dropdown */}
              <li className="relative">
                <button
                  className="hover:text-gray-300"
                  onClick={() => toggleDropdown("camp")}
                >
                  Camps ▾
                </button>
                {activeDropdown === "camp" && (
                  <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 w-48 bg-white text-black p-2 space-y-2 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                    <ul>
                      <li>
                        <NavLink to="/camp/upcoming_camps" className="block px-4 py-2 hover:bg-gray-200" onClick={() => { handleOptionSelect(); setMobileMenuOpen(false); }}>
                          Upcoming Camps
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/register" className="block px-4 py-2 hover:bg-gray-200" onClick={() => { handleOptionSelect(); setMobileMenuOpen(false); }}>
                          Register for a Camp
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/camp/past_camps" className="block px-4 py-2 hover:bg-gray-200" onClick={() => { handleOptionSelect(); setMobileMenuOpen(false); }}>
                          Past Camps
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li><NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
              <li><NavLink to="/appointment" className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => setMobileMenuOpen(false)}>Book an Appointment</NavLink></li>
              <li><NavLink to="/login" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setMobileMenuOpen(false)}>Login</NavLink></li>
              <li><NavLink to="/register" className="block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={() => setMobileMenuOpen(false)}>Register</NavLink></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;




