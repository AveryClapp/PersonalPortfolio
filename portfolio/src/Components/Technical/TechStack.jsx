import React from "react";
import { FaPython, FaJs, FaHtml5, FaRust } from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const TechStackItem = ({ icon: Icon, name, level }) => (
  <div className="flex items-center text-green-300 font-mono mb-1">
    <Icon className="text-green-500 mr-2 flex-shrink-0" size={16} />
    <span className="w-28 mr-2 truncate">{name}</span>
    <span className="flex-shrink-0">{level}</span>
  </div>
);

const CommandOutput = ({ children }) => (
  <div className="bg-black border border-green-500 rounded-lg p-4 mt-2">
    {children}
  </div>
);

const TechStack = () => {
  const techStack = [
    { name: "Python", icon: FaPython, level: "Advanced" },
    { name: "JavaScript", icon: FaJs, level: "Advanced" },
    { name: "HTML", icon: FaHtml5, level: "Advanced" },
    { name: "C++", icon: SiCplusplus, level: "Intermediate" },
    { name: "TypeScript", icon: SiTypescript, level: "Intermediate" },
    { name: "TailwindCSS", icon: SiTailwindcss, level: "Intermediate" },
    { name: "Rust", icon: FaRust, level: "Beginner" },
    { name: "SQL", icon: SiMysql, level: "Beginner" },
  ];

  return (
    <div className="font-mono text-green-300">
      <CommandOutput>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          {techStack.map((tech, index) => (
            <TechStackItem key={index} {...tech} />
          ))}
        </div>
      </CommandOutput>
      <div className="text-green-500 my-4">$ techstack --summary</div>
      <CommandOutput>
        <p>
          Full-Stack developer with passion and interest with FinTech. Capable
          of solving complex problems with a variety of languages and
          frameworks.
        </p>
      </CommandOutput>
    </div>
  );
};

export default TechStack;
