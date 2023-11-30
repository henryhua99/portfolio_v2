import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Henry", hasColor: "" },
  { meta: "last name", metaInfo: "Hua", hasColor: "" },
  { meta: "Age", metaInfo: "24 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Buddhists", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  // { meta: "Address", metaInfo: "Tunis", hasColor: "" },
  { meta: "phone", metaInfo: "+959262696263", hasColor: "" },
  { meta: "Email", metaInfo: "henryhua1999@mail.com", hasColor: "" },
  // { meta: "Skype", metaInfo: " steve.milner", hasColor: "" },
  { meta: "langages", metaInfo: "Shan, Chinese,Burma, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
