
import { Link } from 'react-router-dom';
import blogImage1 from "../../assets/BlogImage1.Jpg";
import blogImage2 from "../../assets/BlogImage2.Jpg";
import blogImage3 from "../../assets/BlogImage3.Jpg";

// Simple Blog Posts
const blogPosts = [
  {
    id: 1,
    title: 'Understanding the Basics of Medical Appointments',
    excerpt: 'Learn the essentials of booking and managing medical appointments effectively.',
    author: 'Dr. Aisha Khan',
    date: 'March 15, 2025',
    image: blogImage1,
  },
  {
    id: 2,
    title: 'The Importance of Regular Health Check-ups',
    excerpt: 'Regular health check-ups can help detect potential health issues early.',
    author: 'Dr. Rajesh Sharma',
    date: 'March 10, 2025',
    image: blogImage2,
  },
  {
    id: 3,
    title: 'How to Prepare for a Telemedicine Consultation',
    excerpt: 'Tips and guidelines to make the most out of your virtual doctor visits.',
    author: 'Dr. Priya Verma',
    date: 'March 5, 2025',
    image: blogImage3,
  },
];

export default function HomeBlog() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Latest Blog Posts</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Stay updated with the latest healthcare tips, medical advice, and patient education blogs curated by our experts.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-1">
                  By {post.author} | {post.date}
                </p>
                <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block text-blue-600 font-medium hover:text-blue-800 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


