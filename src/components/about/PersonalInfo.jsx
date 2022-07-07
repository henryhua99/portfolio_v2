import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Sai Khant" },
  { meta: "last name", metaInfo: "Thura" },
  { meta: "Nickname", metaInfo: " Henry" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Shan" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Sanchaung, Yangon" },
  { meta: "phone", metaInfo: "+959262696263" },
  { meta: "Email", metaInfo: "henryhua1999@gmail.com" },
  { meta: "langages", metaInfo: "Burmese, Shan, Chinese, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
