import { ExternalLink, Github } from 'lucide-react';
import projects from '../data/project_data.ts';
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#161b22]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl text-slate-900 dark:text-white font-semibold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-[#0d1117] rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 space-y-2">
                      <div className="flex gap-3">
                        <a href={project.liveUrl} className="text-white hover:text-blue-400 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                        <a href={project.githubUrl} className="text-white hover:text-blue-400 transition-colors">
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;