
import { FaAssistiveListeningSystems, FaChild, FaDeaf, FaHeartbeat } from "react-icons/fa";
import Img01 from "../../assets/Service02.jpg"

const ServiceSection02 = () => {
  return (
    <section >
        
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center text-amber-50 px-4 opacity-55"
        style={{ backgroundImage: `url(${Img01})` }}>

        {/* Overlay */}
        <div className="absolute inset-0 "></div>
        {/* Content */}
        <div className="relative z-10 w-screen opacity-90 p-4 bg-gradient-to-r from-blue-200 via-green-100 to-white">
          <h2 className="text-3xl md:text-5xl font-bold  text-green-600">Pk Healthcare Centre Specialist</h2>
          <p className="mt-4 text-lg md:text-xl  text-green-600">Hearing services are provided</p>
        </div>
      </div>
      
      <div className="bg-gray-200">
      {/* Services Description Section */}
      <div className="max-w-4xl mx-auto text-center py-12 px-4 ">
        <p className="text-lg md:text-xl font-semibold">Specialist hearing services are provided through our partners Audiomax.</p>
      </div>
      
      {/* Services List */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-12">
        <ServiceCard icon={FaAssistiveListeningSystems} title="Hearing Tests & Aids" description="Unlike traditio method you can see in real time what is or is not working for your business online." />
        <ServiceCard icon={FaChild} title="Paediatric & Adult Audiology" description="Unlike traditio method you can see in real time what is or is not working for your business online." />
        <ServiceCard icon={FaDeaf} title="Provision & Servicing of Hearing Instruments" description="Unlike traditio method you can see in real time what is or is not working for your business online." />
        <ServiceCard icon={FaHeartbeat} title="Good Health Habits Can Help Stop Germs" description="Unlike traditio method you can see in real time what is or is not working for your business online." />
      </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-6 border rounded-lg shadow-md bg-white  hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
      <Icon className="text-3xl text-blue-500" />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceSection02;
