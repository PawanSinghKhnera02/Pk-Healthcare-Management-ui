import FooterImg from "../../assets/BlogImage1.jpg";
import { Link } from "react-router-dom";

export default function AboveFooter() {
  return (
    <section
      className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FooterImg})` }}
    >
      <div className="mx-auto px-4 sm:px-6 text-center bg-gray-400 bg-opacity-50 py-6 w-[90%] sm:w-[70%] md:w-[50%] rounded-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Need Emergency Medical Assistance?
        </h2>
        <p className="mb-6 text-sm sm:text-base md:text-lg">
          Our expert team is available 24/7 to provide the best healthcare services.
        </p>
        <Link
          to="/contact"
          className="text-white bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-600 transition whitespace-nowrap inline-block"
        >
          Contact us now
        </Link>
      </div>
    </section>
  );
}
