import { Code, Laptop, Users, Trophy } from 'lucide-react';

const stats = [
  {
    icon: <Code className="w-6 h-6" />,
    value: "2+",
    label: "Years of Experience"
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    value: "20+",
    label: "Projects Completed"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "10+",
    label: "Happy Clients"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    value: "10+",
    label: "Awards"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Passionate about creating impactful web experiences
              </h2>
              <div className="space-y-4">
                <p className="text-base-content/80">
                  As a competitive programmer and web developer, I bring a unique blend of 
                  problem-solving skills and creative design thinking to every project. My 
                  journey in web development has been driven by a passion for creating 
                  intuitive and efficient digital solutions.
                </p>
                <p className="text-base-content/80">
                  I specialize in building responsive websites and web applications that 
                  not only look great but also provide exceptional user experiences. My 
                  approach combines technical expertise with an understanding of user needs 
                  and business objectives.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card bg-base-200 hover:bg-base-300 transition-colors">
                  <div className="card-body items-center text-center p-6">
                    <div className="text-primary mb-2">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <p className="text-base-content/70 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;