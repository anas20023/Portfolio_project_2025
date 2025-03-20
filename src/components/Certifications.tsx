import { useState } from 'react';
import { Award, X } from 'lucide-react';

const certifications = [
  {
    title: "Intra University Programming Contest",
    issuer: "Bangladesh University of Business and Technology",
    date: "Fall 2024",
    credentialId: "Runners-up",
    image: "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAc9nh8pL3iuNX2Ub6AhB6kGXMjOcYgAC4hYAAsz_OFRz4B-QzdVVVzYE"
  },
  {
    title: "Intra University Programming Contest",
    issuer: "Bangladesh University of Business and Technology",
    date: "Spring 2024",
    credentialId: "10th Position",
    image: "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAdBnh8q4AwqxyJKgzYqBle92FRiuEgAC4xYAAsz_OFTeq_YM5pDCxTYE"
  },
  {
    title: "Web Development BootCamp",
    issuer: "Programming Hero",
    date: "Fall 2023",
    credentialId: "4th Position",
    image: "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAdFnh8sJzpLL3UAlxadgyzvAjgNlVAAC5RYAAsz_OFShhRInBYmN9zYE"
  },
  {
    title: "Inter University Collaborative Programming Contest",
    issuer: "University of Asia Pacific",
    date: "Spring 2024",
    credentialId: "15th Position",
    image: "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAdJnh8uH2pg42sogw1FtnJ0F6XBavwAC5hYAAsz_OFSf9TK5TfEG_DYE"
  },
  {
    title: "Intra Intake Programming Contest IIPC BUBT",
    issuer: "Bangladesh University of Business and Technology",
    date: "Spring 2024",
    credentialId: "Participation",
    image: "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAdNnh83tPA9ityoAAbIfp4xc6bu8Ji4AAucWAALM_zhU92zJHWoDzEw2BA"
  },
  {
    title: "Web Developement Bootcamp 2025",
    issuer: "Programming Hero",
    date: "Spring 2025",
    credentialId: "Participation",
    image: "https://postimg.cc/4n8ssDsk"
  }
];

const Certifications = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12 flex items-center gap-2">
            <Award className="text-primary" />
            Professional Certifications
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card cursor-pointer bg-base-100 shadow-xl relative group"
                onClick={() => setHoveredImage(cert.image)}
              >
                <figure>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{cert.title}</h3>
                  <p className="text-primary">{cert.issuer}</p>
                  <div className="flex justify-between items-center mt-4 text-sm opacity-70">
                    <span>{cert.date}</span>
                    <span>{cert.credentialId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {hoveredImage && (
            <div className="fixed inset-0 z-50 bg-black backdrop-blur bg-opacity-50 flex justify-center items-center">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Close Button */}
                <button
                  onClick={() => setHoveredImage(null)}
                  className="absolute top-2 right-2 bg-gray-800  hover:bg-gray-900 rounded-full p-1"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <img
                  src={hoveredImage}
                  alt="Zoomed Certificate"
                  className="h-auto w-auto max-w-full max-h-[90vh] rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
