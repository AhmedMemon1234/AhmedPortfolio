"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaLanguage, FaToolbox } from 'react-icons/fa';

type TabName = 'Education' | 'Skills' | 'Languages' | 'Tools';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>('Education');

  const tabs: { name: TabName; icon: JSX.Element }[] = [
    { name: 'Education', icon: <FaGraduationCap size={40} /> },
    { name: 'Skills', icon: <FaLaptopCode size={40} /> },
    { name: 'Languages', icon: <FaLanguage size={40} /> },
    { name: 'Tools', icon: <FaToolbox size={40} /> },
  ];

  const content: Record<TabName, JSX.Element> = {
    Education: (
      <div>
        <h3 className="text-3xl font-semibold mb-4">Education</h3>
        <p className="text-lg leading-relaxed">I am studying O Levels in Pakistan Karachi, specializing in software development and web development. My passion for programming started at a young age, and I continue to push the boundaries of what I can learn and create.</p>
        <motion.div
          className="mt-6 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h4 className="font-semibold text-xl">2022-2024: O Levels - Karachi, Pakistan</h4>
            <p className="text-lg">Focused on software and web development. Worked on multiple personal and school projects to enhance my skills.</p>
          </div>
        </motion.div>
      </div>
    ),
    Skills: (
      <div>
        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <p className="text-lg leading-relaxed mb-4">Proficient in Next.js, TypeScript, Tailwind CSS, JavaScript, and building responsive user interfaces. I also have experience with UI/UX design principles and am always keen on improving my skills.</p>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Next.js</span>
            <motion.div
              className="bg-gray-700 rounded-full w-72 h-2"
              initial={{ width: 0 }}
              whileInView={{ width: '90%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            ></motion.div>
          </div>
          <div className="flex justify-between">
            <span>Tailwind CSS</span>
            <motion.div
              className="bg-gray-700 rounded-full w-72 h-2"
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            ></motion.div>
          </div>
          <div className="flex justify-between">
            <span>JavaScript</span>
            <motion.div
              className="bg-gray-700 rounded-full w-72 h-2"
              initial={{ width: 0 }}
              whileInView={{ width: '85%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            ></motion.div>
          </div>
        </div>
      </div>
    ),
    Languages: (
      <div>
        <h3 className="text-3xl font-semibold mb-4">Languages</h3>
        <p className="text-lg leading-relaxed">Fluent in English, Urdu, and proficient in programming languages like JavaScript and Next.js. I enjoy learning new languages, both spoken and coding languages, to expand my versatility as a developer.</p>
      </div>
    ),
    Tools: (
      <div>
        <h3 className="text-3xl font-semibold mb-4">Tools</h3>
        <p className="text-lg leading-relaxed">Experienced with tools like VS Code, Github, Vercel, ChatGPT, and debugging frameworks for efficient development. I also use Figma for UI/UX design and prototyping to bring ideas to life.</p>
      </div>
    ),
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-800 to-black border-t-2 text-white py-32 px-8 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("/man.png")' }}></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl w-full space-y-12 relative z-10">
        
        <div className="text-center">
          <motion.h2
            className="text-5xl sm:text-6xl font-extrabold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}>
            About Me
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden border-4 border-white mb-8">
          <img src="/man.png" alt="Profile" className="object-cover w-full h-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative group text-lg font-medium py-3 px-6 rounded-lg transition-all border-2 border-transparent hover:border-white shadow-md hover:shadow-xl ${
                activeTab === tab.name ? 'bg-white text-black' : 'bg-gray-800 text-gray-300'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                {tab.icon}
                <span>{tab.name}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-12 p-8 bg-gray-900 rounded-xl shadow-lg max-w-4xl w-full">
          {content[activeTab]}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
