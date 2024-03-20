import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', url: '/' },
    { name: 'Pages', url: '/' },
    { name: 'Movies', url: '/' },
    { name: 'TV Shows', url: '/' },
    { name: 'Celebs', url: '/' },
    { name: 'Blog', url: '/' },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-20 w-full flex justify-between items-center pb-12 pt-12 sticky bg-rgba-black-85"
    >
      <h1 className="text-3xl font-bold text-white">Movies</h1>
      <div className="relative z-50">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-white z-60"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-start mt-20 z-40"
            onClick={closeMenu}
          >
            <ul className="bg-rgba-black-85 py-4 px-4 rounded-md">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                  className="flex justify-center align-center py-2 w-screen"
                >
                  <a href={item.url} className="text-white">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
