import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500">PK Healthcare Centre</h2>
            <p className="mt-3 text-gray-400">
              Providing top-notch healthcare services with experienced medical professionals.
            </p>
            <p className="mt-3 text-gray-400">
            Delivering compassionate care with cutting-edge medical expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-300">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-300">Contact</Link></li>
              <li><Link to="/ngo/ourmission" className="text-gray-400 hover:text-blue-300">NGO</Link></li>
              <li><Link to="/camp/past_camps" className="text-gray-400 hover:text-blue-300">Camps</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/1" className="text-gray-400 hover:text-blue-300">Cardiology</Link></li>
              <li><Link to="/services/2" className="text-gray-400 hover:text-blue-300">Neurology</Link></li>
              <li><Link to="/services/3" className="text-gray-400 hover:text-blue-300">Orthopedics</Link></li>
              <li><Link to="/services/4" className="text-gray-400 hover:text-blue-300">Pediatrics</Link></li>
              <li><Link to="/services/5" className="text-gray-400 hover:text-blue-300">Dermatology</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Subscribe to Newsletter</h3>
            <p className="text-gray-400 mb-3">Stay updated with our latest news & offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 flex-1 rounded-l-md text-gray-800 hover: bg-gray-200"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
            <h3 className="text-lg font-semibold mt-3 text-blue-400">Dr. Pawan Singh Khnera</h3>
            <p className="text-gray-400 mt-2">Chief Medical Officer| +91 9675946936</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>© 2025 Pk Healthcare Centre. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-blue-400 text-2xl"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 text-2xl"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-400 text-2xl"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
