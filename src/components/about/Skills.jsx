import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p80", skillPercent: "80", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p75", skillPercent: "75", skillName: "PHP" },
  { skillClass: "p50", skillPercent: "50", skillName: "JQUERY" },
  { skillClass: "p45", skillPercent: "45", skillName: "NEXT" },
  { skillClass: "p75", skillPercent: "75", skillName: "REACT" },
  { skillClass: "p90", skillPercent: "80", skillName: "LARAVEL" },
  { skillClass: "p80", skillPercent: "80", skillName: "MYSQL" },
  { skillClass: "p40", skillPercent: "40", skillName: "DOCKER" },
  { skillClass: "p60", skillPercent: "60", skillName: "C#.Net" },
  { skillClass: "p60", skillPercent: "60", skillName: "MS SQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
