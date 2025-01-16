import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of CSE",
    institution: "Bangladesh University of Business and Technology",
    year: "2023-Present",
    description: "Specialized in Competitive Programming"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Tamirul Millat Kamil Madrasah, Tongi",
    year: "2020-2022",
    description: "Science Group"
  },
  {
    degree: "Secondary School Education",
    institution: "Tamirul Millat Kamil Madrasah, Tongi",
    year: "2018-2020",
    description: "Science Group"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-12 flex items-center gap-2"
          >
            <GraduationCap className="text-primary" />
            Education Journey
          </motion.h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  
                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <motion.div 
                      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="card-body">
                        <h3 className="card-title text-xl">{item.degree}</h3>
                        <p className="text-primary">{item.institution}</p>
                        <p className="text-sm opacity-70">{item.year}</p>
                        <p className="mt-2">{item.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;