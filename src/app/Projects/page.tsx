"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Restaurent Web",
    category: "Restaurent",
    description: "A Restaurent website built with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/desktop.png",
    link: "https://restaurent-web-u2bu.vercel.app/",
  },
  {
    id: 2,
    title: "Ecommerce Figma Store",
    category: "Ecommerce",
    description: "An ecommerce store of figma desgin built with Nextjs, CSS, Tailwind CSS.",
    image: "/3-devices-black (1).png",
    link: "https://final-hackathon-stbq.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Store",
    category: "Ecommerce",
    description: "An personal ecommerce site built with Nextjs, Tailwind CSS, CSS, Framer-Motion.",
    image: "/3-devices-black.png",
    link: "https://ahmedecomshop.netlify.app/",
  },
  {
    id: 4,
    title: "Resume Builder",
    category: "Resume & Portfolio",
    description: "A resume builder help users to make their CV built with Typescript,Html,Css.",
    image: "/desktop (2).png",
    link: "https://milestone5-wheat.vercel.app/",
  },
  {
    id: 5,
    title: "Restaurent LandingPage",
    category: "Restaurent",
    description: "A Restaurent landing page built with Next.js, Tailwind CSS.",
    image: "/3-devices-black (3).png",
    link: "https://assignment4-5-by-ahmed-owbr.vercel.app/",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    category: "Resume & Portfolio",
    description: "A personal portfolio built with Nextjs, Tailwind CSS, CSS.",
    image: "/3-devices-black (4).png",
    link: "https://portfolio-ahmed-vskh.vercel.app/",
  },
];

const categories = ["All", "Ecommerce", "Restaurent", "Resume & Portfolio"];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-blue-800 to-black border-t-2 py-24 px-8 text-white relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Section Title */}
        <div className="text-center">
          <motion.h2
            className="text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Projects
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Discover my work and the technologies I’ve mastered.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-lg text-lg font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-blue-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group rounded-lg overflow-hidden bg-gradient-to-br from-blue-800 to-black p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 transition-all"></div>

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              />

              {/* Project Details */}
              <div className="p-4 space-y-2">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
