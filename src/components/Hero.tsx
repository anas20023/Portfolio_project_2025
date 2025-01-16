import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Code2 } from 'lucide-react';
import {SiCodeforces } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <div className="space-y-2">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-medium text-primary"
              >
                Competitive Programmer || Web Developer
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold"
              >
                Hi, I'm Anas Ibn Belal 👋
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base-content/80 text-lg leading-relaxed max-w-2xl"
            >
              As a web Developer with four years of experience, I specialize in creating 
              visually appealing and user-friendly websites. My expertise includes responsive 
              design, UI/UX principles, and collaborating with clients to bring their visions to life.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2 text-base-content/70">
                <MapPin size={18} className="text-primary" />
                <span>Available for remote work</span>
              </div>
              <div className="flex items-center gap-2 text-base-content/70">
                <Code2 size={18} className="text-primary" />
                <span>2 years of experience</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="btn btn-primary"
              >
                Contact Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="btn btn-outline"
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-6"
            >
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="https://github.com/anas20023" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-circle btn-neutral"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="mailto:anasibnebelal400@gmail.com" 
                className="btn btn-circle btn-neutral"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="https://codeforces.com/profile/ALPHA_004" 
                className="btn btn-circle btn-neutral"
              >
                <SiCodeforces size={20}/>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:w-1/3"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30"></div>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/458750258_3441373576155203_6023659288497880561_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9FtLAgUOeqEQ7kNvgGkWohI&_nc_zt=23&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AgQVYtWP8-PlMaIWLidcK00&oh=00_AYAtnb9BJKEOX6ooVHnyn2tp8ogHoIop9sYEMHGcZatYBw&oe=678B2FA6"
                  alt="Anas Ibn Belal"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;