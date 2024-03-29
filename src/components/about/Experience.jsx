import React from "react";

const experienceContent = [
  {
    year: "2023 - Present",
    position: "Full Stack Web Developer",
    compnayName: "DevHost",
    details: ` `,
  },
  {
    year: "2021 Dec - 2022 July",
    position: "Full Stack Web Developer",
    compnayName: "Freelance",
    details: ` `,
  },
  {
    year: "2019 Dec - 2021 Nov",
    position: "Full Stack Web Developer",
    compnayName: "Aethereal-systems",
    details: ``,
  },
  {
    year: "2018 Nov - 2019 Nov",
    position: "Junior Web Developer",
    compnayName: "Trifinity software & Education",
    details: ``,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
