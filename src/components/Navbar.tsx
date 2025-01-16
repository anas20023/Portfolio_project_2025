import ThemeToggle from './ThemeToggle';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-base-100/80 backdrop-blur-sm border-b border-base-200">
      <div className="w-full max-w-6xl mx-auto">
        <div className="navbar min-h-[4rem]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <Menu size={20} />
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100 rounded-box w-52 gap-2">
                <li><a href="#about" className="py-2">About</a></li>
                <li><a href="#work" className="py-2">Work</a></li>
                <li><a href="#education" className="py-2">Education</a></li>
                <li><a href="#certifications" className="py-2">Certifications</a></li>
                <li><a href="#testimonials" className="py-2">Testimonials</a></li>
                <li><a href="#contact" className="py-2">Contact</a></li>
              </ul>
            </div>
            <a href="#" className="text-xl font-bold btn btn-link no-underline hover:no-underline">
              ANAS
            </a>
          </div>
          
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="#education" className="hover:text-primary transition-colors">Education</a></li>
              <li><a href="#certifications" className="hover:text-primary transition-colors">Certifications</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="navbar-end gap-2">
            <ThemeToggle />
            <a href="#" className="btn btn-primary">Download CV</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;