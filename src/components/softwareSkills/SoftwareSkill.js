import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

import { softwareSkills } from "../../portfolio"; // adjust path as needed

function SkillsSection() {
  return (
    <div className="skills-icons flex flex-wrap justify-center gap-6">
      {softwareSkills.map((skill) => {
        const IconComponent =
          FaIcons[skill.icon] || SiIcons[skill.icon] || FaIcons["FaCode"];
        return (
          <div key={skill.skillName} className="flex flex-col items-center">
            <IconComponent size={40} color={skill.color} />
            <p className="text-sm mt-2">{skill.skillName}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsSection;
