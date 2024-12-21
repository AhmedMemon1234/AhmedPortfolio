"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaFigma, FaVideo } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const Skills = () => {
  // Skills data with percentage
  const skillsData = [
    { icon: <FaHtml5 size={50} />, skill: "HTML", progress: 100 },
    { icon: <FaCss3Alt size={50} />, skill: "CSS", progress: 95 },
    { icon: <FaJsSquare size={50} />, skill: "JavaScript", progress: 80 },
    { icon: <FaReact size={50} />, skill: "React", progress: 50 },
    { icon: <SiNextdotjs size={50} />, skill: "Next.js", progress: 90 },
    { icon: <SiTypescript size={50} />, skill: "TypeScript", progress: 90 },
    { icon: <SiTailwindcss size={50} />, skill: "Tailwind CSS", progress: 80 },
    { icon: <FaFigma size={50} />, skill: "Figma", progress: 70 },
    { icon: <FaVideo size={50} />, skill: "Video Editing", progress: 90 },
    { icon: <FaGithub size={50} />, skill: "GitHub", progress: 80 },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-r border-t-2 from-blue-800 to-black" id="skills">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-white text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skillsData.map(({ icon, skill, progress }, index) => (
            <motion.div
              key={index}
              className="skill-item text-center text-white w-1/5 min-w-[120px] flex-shrink-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false }}
            >
              {icon}
              <h3 className="mt-4 text-xl">{skill}</h3>
              <div className="w-full bg-gray-300 rounded-full mt-4 h-2.5">
                {/* Fixed-width container */}
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: "0%" }} // Starts at 0%
                  animate={{ width: "0%" }} // Default state for when out of view
                  whileInView={{ width: `${progress}%` }} // Animate to the progress value when in view
                  transition={{ duration: 2 }}
                  viewport={{ once: false }}
                />
              </div>
              <p className="text-sm mt-2">{progress}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
