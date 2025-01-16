import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb,SiJavascript ,SiCplusplus , SiTailwindcss, SiExpress, SiPostgresql,SiHtml5 ,SiCss3  ,SiBootstrap  } from 'react-icons/si';

const skills = [
  { name: 'C++', icon: <SiCplusplus  className="w-8 h-8 text-blue-700" /> },
  { name: 'HTML', icon: <SiHtml5  className="w-8 h-8 text-red-500" /> },
  { name: 'CSS', icon: <SiCss3  className="w-8 h-8 text-blue-600" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-8 h-8 text-teal-400" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="w-8 h-8 text-purple-800" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-yellow-500" /> },
  { name: 'TypeScript', icon: <SiNextdotjs className="w-8 h-8 text-blue-500" /> },
  { name: 'React JS', icon: <FaReact className="w-8 h-8 text-blue-600" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 text-green-600" /> },
  { name: 'Express', icon: <SiExpress className="w-8 h-8  text-gray-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-green-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8 text-blue-500" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <section className="py-20">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-12"
          >
            The skills, tools and technologies I am really good at:
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-6 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-6 rounded-xl bg-base-200 hover:bg-base-300 transition-colors"
              >
                <div className="text-primary">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
