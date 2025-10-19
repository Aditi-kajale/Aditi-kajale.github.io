import React from "react";
import { skillsSection } from "../../portfolio";

function SkillsSection() {
  if (!skillsSection.display) return null;

  return (
    <section id="skills" className="flex flex-col items-center py-10">
      {/* Section Header */}
      <h1 className="text-3xl font-bold mb-3">{skillsSection.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{skillsSection.subTitle}</p>

      {/* Skill Descriptions */}
      <ul className="max-w-3xl mb-8 list-disc list-inside text-center text-gray-700">
        {skillsSection.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* Skill Icons */}
      <div className="skills-icons flex flex-wrap justify-center gap-8">
        {skillsSection.softwareSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-20 transition-transform hover:scale-110 hover:drop-shadow-md"
          >
            {skill.icon}
            <p className="text-sm mt-2 text-gray-700">{skill.skillName}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
