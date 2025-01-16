import { Quote } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "CTO at TechCorp",
    content:
      "Anas is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager at InnovateTech",
    content:
      "Working with Anas was a great experience. He brings both technical expertise and creative solutions to every project.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2070",
  },
  {
    name: "Michael Chen",
    role: "Founder at StartupX",
    content:
      "Anas's ability to understand business requirements and translate them into technical solutions is remarkable. A true professional.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2070",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Quote className="text-primary" />
            Client Testimonials
          </h2>

          <div className="relative overflow-hidden">
            {/* Carousel Content */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-6"
                  style={{ width: "100%" }}
                >
                  <div className="card bg-base-100  p-8 rounded-lg">
                    <div className="flex items-center gap-6">
                      <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-base-content/80 italic text-lg">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-focus transition"
              onClick={handlePrev}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-focus transition"
              onClick={handleNext}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-base-300"
                } transition-colors`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
