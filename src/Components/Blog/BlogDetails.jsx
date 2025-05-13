
import { useParams } from "react-router-dom";
import blogImage1 from "../../assets/BlogImage1.Jpg";
import blogImage2 from "../../assets/BlogImage2.Jpg";
import blogImage3 from "../../assets/BlogImage3.Jpg";
import Footer from "../Footer/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Basics of Medical Appointments",
    content: [
      "Booking a medical appointment may seem simple, but doing it right can improve your healthcare experience drastically.",
      "✅ First, identify the right specialist based on your symptoms. Then, check their availability using hospital apps or websites.",
      "🕐 It's important to reach a bit early to avoid delays. Always carry your previous prescriptions and test reports.",
      "📌 Tip: Maintain a digital record of all your prescriptions for quick reference.",
      "🧾 During the appointment, take notes if needed. Ask questions and don’t hesitate to clarify doubts about medications.",
      "🎯 Regular follow-ups are crucial. Mark the next appointment in your calendar or set a reminder.",
    ],
    author: "Dr. Aisha Khan",
    date: "March 15, 2025",
    image: blogImage1,
    tips: ["Carry ID & previous records", "Reach early", "Follow up regularly"],
  },
  {
    id: 2,
    title: "The Importance of Regular Health Check-ups",
    content: [
      "🩺 Health check-ups aren’t just for when you're sick. They’re preventive measures that help catch diseases early.",
      "📊 Blood pressure, sugar levels, thyroid, cholesterol—these should be tracked every 6-12 months based on age & risk factors.",
      "👨‍⚕️ Always consult a doctor before taking any test. They will guide which ones are relevant for your age and medical history.",
      "💡 Many hospitals now offer bundled check-up packages that are affordable and time-saving.",
      "🏃‍♀️ Bonus: Early detection saves money and pain in the long run. Make it a yearly habit!",
    ],
    author: "Dr. Rajesh Sharma",
    date: "March 10, 2025",
    image: blogImage2,
    tips: ["Full body check yearly", "Consult doctor about test", "Don’t skip appointments"],
  },
  {
    id: 3,
    title: "How to Prepare for a Telemedicine Consultation",
    content: [
      "💻 Virtual consultations are now part of modern healthcare. But they require some prep to make the most of it.",
      "🌐 Ensure you have a strong internet connection and a working mic/camera setup before your call.",
      "📁 Keep all recent reports, prescriptions, and a list of current medications nearby.",
      "📝 Sit in a quiet, well-lit space where you can speak freely and hear the doctor clearly.",
      "🎤 Use headphones to avoid background noise and ensure better audio clarity.",
      "📋 After the consult, summarize the instructions and next steps on paper or in a health tracking app.",
    ],
    author: "Dr. Priya Verma",
    date: "March 5, 2025",
    image: blogImage3,
    tips: ["Good lighting", "Use headphones", "Be on time"],
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center text-red-600 text-2xl mt-10">Blog not found!</div>;
  }

  return (
    <>
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-xl w-full h-80 object-cover shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-blue-700 mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          By {blog.author} | {blog.date}
        </p>

        {/* Main Content Paragraphs */}
        <div className="space-y-4 text-lg leading-relaxed mb-6">
          {blog.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-blue-200 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Quick Tips:</h3>
          <ul className="list-disc list-inside text-blue-800 space-y-2">
            {blog.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Footer Message */}
        <div className="border-t pt-6 text-sm text-gray-600">
          <p>Thanks for reading! Stay healthy, informed, and don't forget to share this blog with your friends and family.</p>
        </div>
      </div>
    </section>
<Footer/>
    </>
  );
};

export default BlogDetail;
