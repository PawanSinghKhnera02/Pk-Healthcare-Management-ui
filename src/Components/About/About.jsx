import Footer from "../Footer/Footer";
import AboutSection01 from "./AboutSection01";
import AboutSection02 from "./AboutSection02";
import AboutSection03 from "./AboutSection03";
import AboutSection04 from "./AboutSection04";

function About() {
  return (
    <>
    <h1 className="bg-gradient-to-r from-green-100 to-gray-100 text-4xl py-12 px-15 mt-6 text-center font-bold text-gray-800">About Us</h1>
      <AboutSection01 />
      <AboutSection02/>
      <AboutSection03/>
      <AboutSection04/>
      <Footer/>
    </>
  );
}

export default About;
