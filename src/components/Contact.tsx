import { Mail, Phone, MapPin,  } from 'lucide-react';
import {FaFacebook,FaLinkedin,FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
      </div>

      {/* Flexbox Layout for Inner Containers */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Information and Social Links */}
        <div className="card bg-base-100 shadow-xl flex-1">
          <div className="card-body p-6">
            <h3 className="card-title text-2xl mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:anasibnebelal400@gmail.com"
                    className="text-primary hover:underline"
                  >
                    anasibnebelal400@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +8801987183320
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-base-content/80">Mirpur-2, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Visual Separation */}
            <div className="divider my-8"></div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-bold text-center mb-6">Follow Me</h4>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/anas20023" className="btn btn-circle">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/anasibelal004" className="btn btn-circle">
                  <FaLinkedin className="w-5 h-5 text-blue-600" />
                </a>
                <a href="https://twitter.com" className="btn btn-circle">
                  <FaFacebook  className="w-5 h-5 text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-xl flex-1">
          <div className="card-body p-6">
            <h3 className="card-title text-2xl mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
