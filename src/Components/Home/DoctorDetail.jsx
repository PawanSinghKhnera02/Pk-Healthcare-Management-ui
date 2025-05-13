
import { useParams, Link } from "react-router-dom";
import {doctorProfiles} from "../../data/CampMedia";
import Footer from "../Footer/Footer";

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctorProfiles.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <div className="text-center text-red-600 text-xl mt-10">Doctor not found!</div>;
  }

  return (
    <>
    <section className="min-h-screen px-4 py-16 bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-blue-200"
          />
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-extrabold text-blue-700">{doctor.name}</h1>
              <p className="text-lg font-medium text-gray-600 mt-1">{doctor.specialty}</p>
            </div>

            <p className="text-md text-gray-800 leading-relaxed">{doctor.about}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Experience</h3>
                <p>{doctor.experience}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Education</h3>
                <p>{doctor.education}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Services Offered</h3>
              <ul className="list-disc list-inside space-y-1">
                {doctor.services?.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Achievements</h3>
              <ul className="list-decimal list-inside text-gray-800 space-y-1">
                {doctor.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-4 mt-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Contact Information</h3>
              <p><strong>Email:</strong> {doctor.contact?.email}</p>
              <p><strong>Phone:</strong> {doctor.contact?.phone}</p>
              <p><strong>Location:</strong> {doctor.contact?.location}</p>
            </div>

            <Link to="/" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow">
              ← Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  <Footer/>
    </>
  );
};

export default DoctorDetail;
