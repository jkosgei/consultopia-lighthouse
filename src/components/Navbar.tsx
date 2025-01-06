import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Financial Consulting</div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#services" className="block hover:text-secondary transition-colors">Services</a>
            <a href="#contact" className="block hover:text-secondary transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;