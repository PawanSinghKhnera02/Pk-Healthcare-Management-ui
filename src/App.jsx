
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog"

import Login from "./Components/Login/Login";

import BookAppointment from "./Components/Appointment/Appoinment";

import Register from "./Components/Login/Register";
import BlogDetail from "./Components/Blog/BlogDetails";
import DoctorDetail from "./Components/Home/DoctorDetail";
import ServiceDetail from "./Components/Home/ServiceDetail";



import OurMission from "./Components/NGO/OurMission";
import VolunteerWithUs from "./Components/NGO/VolunteerWithUs";
import Donate from "./Components/NGO/Donate";
import UpcomingCamps from "./Components/Camp/UpcomingCamps";
import PastCamps from "./Components/Camp/PastCamp";
import CampGalleryPage from "./Components/Camp/CampGallaryPage";

import ScrollToTop from "./Components/ScrollToTop";





function App() {
  return (

    <>
      <ScrollToTop />
      
      <Navbar />
      <div className="pt-16">
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/appointment" element={<BookAppointment />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/ngo/ourmission" element={<OurMission/>}/>
        <Route path="/ngo/volunteer" element={<VolunteerWithUs/>}/>
        <Route path="/ngo/donate" element={<Donate/>}/>
        <Route path="/camp/upcoming_camps" element={<UpcomingCamps/>}/>

        <Route path="/camp/past_camps" element={<PastCamps />} />
        <Route path="/camp/:id" element={<CampGalleryPage />} />

        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/doctors/:id" element={<DoctorDetail />} />
        <Route path="/services/:id" element={<ServiceDetail />} />

      </Routes>
      </div>
      
    </>


  );
}

export default App;
