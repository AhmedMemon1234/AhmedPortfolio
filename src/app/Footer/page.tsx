"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r border-t-2 from-blue-800 to-black text-white py-16 px-8 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Footer Header with Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Stay Connected
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Follow me on my social profiles or contact me directly. Let's create something amazing together!
          </p>
        </motion.div>

        {/* Footer Links and Social Icons */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center space-x-8 text-2xl">
              <motion.a
                href="https://www.linkedin.com/in/ahmed-memon-5550642b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/AhmedMemon1234/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="mailto:ahmedmemon3344@gmail.com"
                className="text-red-400 hover:text-white"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>

          {/* Footer Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-300">Feel free to reach out for any collaborations or inquiries. I'm open to new opportunities.</p>
            <a
              href="mailto:ahmedmemon3344@example.com"
              className="mt-4 inline-block px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send an Email
            </a>
          </div>
        </motion.div>

        {/* Footer Copyright */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-sm text-gray-400">
            © 2024 Ahmed Memon. All rights reserved. | Crafted with 💻 & ❤️
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative Waves or Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </footer>
  );
};

export default Footer;
