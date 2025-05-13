// style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}

import HomeBlog from "../Blog/HomeBlog";
import AboveFooter from "../Footer/AboveFooter";
import Footer from "../Footer/Footer";
import  Home_Section01_ImgCarousel  from "./Home_Section01_ImgCarousel";
import { Home_Section02_ServiceCarousel } from "./Home_Section02_ServiceCarousel";
import { Home_Section04_ExpertCarousel } from "./Home_Section04_ExpertCarousel";
import { Link } from "react-router-dom";
import FAQSection from "./FaqSection";
import "../../App.css";

function Home() {

  const text = "Donate";

  return (
    <div>
      <Home_Section01_ImgCarousel />

      <div className="bg-gray-200 mx-auto pt-8">
        <h2 className="text-3xl text-gray-700 font-bold text-center ">
         Our Services
        </h2>
        <p className="text-xl text-gray-700 m-auto w-[80vw] text-center py-5 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <Home_Section02_ServiceCarousel />
      <Home_Section04_ExpertCarousel />
      <HomeBlog />
      <FAQSection/>
      <AboveFooter />
      <Footer />
      <Link
      to="/ngo/donate"
      className="fixed top-3/5 right-0 z-50 transform -translate-y-1/2 bg-pink-600 text-white font-bold py-2 px-4 rounded-l-lg shadow-lg transition-all duration-300 hover:bg-pink-700 hover:shadow-[0_0_20px_#ec4899]"
    >
      <span className="wave-container text-lg">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="wave-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </span>
    </Link>



    </div>
  );
}

export default Home;
