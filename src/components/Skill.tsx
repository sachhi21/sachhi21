import React from "react";

const Skill = ({ iconClass, title }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <i className={iconClass}></i>
      <p>{title}</p>
    </div>
  );
};

export default Skill;
