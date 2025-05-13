
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {serviceDetails} from "../../data/CampMedia"
import Footer from "../Footer/Footer";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails.find((s) => s.id === parseInt(id));

  if (!service) {
    return <div className="text-center text-red-600 text-xl mt-10">Service not found!</div>;
  }

  return (
    <>
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-6 py-12">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src={service.image} alt={service.name} className="w-full md:w-1/2 rounded-lg shadow-md" />
          <div>
            <h1 className="text-4xl font-bold text-blue-800">{service.name}</h1>
            <p className="mt-3 text-gray-600 text-lg">{service.shortDesc}</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">About This Service</h2>
          <p className="text-gray-700 text-md">{service.longDesc}</p>
        </div>

        {/* Treatments */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Treatments & Procedures</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {service.treatments.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((item, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-blue-700">{item.q}</h4>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold mb-2">Want to book an appointment?</h3>
          <Link
                to="/appointment"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all"
                >
                    Click here
           </Link>
        </div>
      </div>
    </section>
    <Footer/>

    </>
  );
};

export default ServiceDetail;
